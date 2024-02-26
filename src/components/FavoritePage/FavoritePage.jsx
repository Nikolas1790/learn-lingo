import FilterMenu from "components/FilterMenu/FilterMenu";
import { FavoritePageContainer, WraperBox } from "./FavoritePage.style";
import TeacherCard from "components/TeacherCard/TeacherCard";
import { auth } from '../../firebase';
import { useCallback, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import BtnLoadMore from "components/BtnLoadMore/BtnLoadMore";
import EmptyFavoritesList from "components/EmptyFavoritesList/EmptyFavoritesList";
import { NotFound } from "components/TechersPage/TeachersPage.styled";
import { isEqual } from "lodash";

export default function FavoritePage() {
  const [favoriteTeachers, setFavoriteTeachers] = useState([]);
  const [visibleTeachers, setVisibleTeachers] = useState(4);
  const [allFavorits, setallFavorits] = useState([]);
  const [resultsFound, setResultsFound] = useState(true);

  const fetchData = useCallback(() => {
    try {
      const user = auth.currentUser;
      if (user) {
        const userId = user.uid;
        const storedFavorites = JSON.parse(localStorage.getItem(`favorites-${userId}`)) || [];
        setallFavorits(storedFavorites);
        setFavoriteTeachers(storedFavorites.slice(0, visibleTeachers));
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, [visibleTeachers]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchData();
      }
    });
  
    return () => unsubscribe(); 
  }, [visibleTeachers, fetchData]);

  const handleLoadMore = () => {
    const userId = auth.currentUser?.uid;
    const storedFavorites = JSON.parse(localStorage.getItem(`favorites-${userId}`)) || [];
    const newVisibleTeachers = storedFavorites.slice(
      visibleTeachers,
      visibleTeachers + 4
    );
    setFavoriteTeachers((prevTeachers) => [...prevTeachers, ...newVisibleTeachers]);
    setVisibleTeachers((prevVisibleTeachers) => prevVisibleTeachers + 4);
  };
  const handleFavorite = (e) => {
    fetchData();
  };
  
  const resetTeachers = () => {    
    fetchData();
    setResultsFound(true);
  };
  
  const handlerSetTeachers = (e) => {
    const isTeacherInList = allFavorits.filter(favoriteTeacher => (
      e.some(selectedTeacher => isEqual(selectedTeacher, favoriteTeacher))
    ));

    if (!isEqual(favoriteTeachers, isTeacherInList)) {
      setFavoriteTeachers(isTeacherInList);
    }
  };

    return (   
      <WraperBox>
        <FavoritePageContainer>
            <FilterMenu setTeachers={handlerSetTeachers} onResultsFoundChange={(e) => setResultsFound(e)} onReset={resetTeachers} />
            {!resultsFound && <NotFound>This is all we managed to find</NotFound>}

            { !favoriteTeachers.length && resultsFound &&  <EmptyFavoritesList /> }

            <ul>
              {favoriteTeachers.map((teacher, index) => {
                    return <TeacherCard key={index} teacher={teacher} handleFavorite={handleFavorite} sourceComponent="FavoritePage" />;
              })}
            </ul>

            {favoriteTeachers.length < visibleTeachers  || allFavorits.length === visibleTeachers ? null : (
              resultsFound ?  <BtnLoadMore  handleLoadMore={handleLoadMore} /> : null
            )}
        </FavoritePageContainer> 
      </WraperBox>      
    );
}
  











// import FilterMenu from "components/FilterMenu/FilterMenu";
// import { FavoritePageContainer, WraperBox } from "./FavoritePage.style";
// import TeacherCard from "components/TeacherCard/TeacherCard";
// import { auth } from '../../firebase';
// import { useEffect, useState } from "react";
// import { onAuthStateChanged } from "firebase/auth";
// import BtnLoadMore from "components/BtnLoadMore/BtnLoadMore";
// import EmptyFavoritesList from "components/EmptyFavoritesList/EmptyFavoritesList";
// import { NotFound } from "components/TechersPage/TeachersPage.styled";
// import { isEqual } from "lodash";

// export default function FavoritePage() {
//   const [favoriteTeachers, setFavoriteTeachers] = useState([]);
//   const [visibleTeachers, setVisibleTeachers] = useState(4);
//   const [allFavorits, setallFavorits] = useState([]);
//   const [resultsFound, setResultsFound] = useState(true);

//   const fetchData = async () => {
//     try {
//       const user = auth.currentUser;
//       if (user) {
//         const userId = user.uid;
//         const storedFavorites = JSON.parse(localStorage.getItem(`favorites-${userId}`)) || [];
//         setAllFavorits(storedFavorites);
//         setFavoriteTeachers(storedFavorites.slice(0, visibleTeachers));
//       }
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   }

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         const userId = user.uid;
//         const storedFavorites = JSON.parse(localStorage.getItem(`favorites-${userId}`)) || [];
//         setallFavorits(storedFavorites)
//         setFavoriteTeachers(storedFavorites.slice(0, visibleTeachers));
//       }
//     });
  
//     return () => unsubscribe(); 
//   }, [visibleTeachers]);

//   const handleLoadMore = () => {
//     const userId = auth.currentUser?.uid;
//     const storedFavorites = JSON.parse(localStorage.getItem(`favorites-${userId}`)) || [];
//     const newVisibleTeachers = storedFavorites.slice(
//       visibleTeachers,
//       visibleTeachers + 4
//     );
//     setFavoriteTeachers((prevTeachers) => [...prevTeachers, ...newVisibleTeachers]);
//     setVisibleTeachers((prevVisibleTeachers) => prevVisibleTeachers + 4);
//   };
//   const handleFavorite = (e) => {
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//         const userId = user.uid;
//         const storedFavorites = JSON.parse(localStorage.getItem(`favorites-${userId}`)) || [];
//         setallFavorits(storedFavorites)
//         setFavoriteTeachers(storedFavorites.slice(0, visibleTeachers));
//       }
//     });
//   };
  
//   const resetTeachers = () => {    
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//         const userId = user.uid;
//         const storedFavorites = JSON.parse(localStorage.getItem(`favorites-${userId}`)) || [];
         
//         setallFavorits(storedFavorites)
//         setFavoriteTeachers(storedFavorites.slice(0, visibleTeachers));
//         setResultsFound(true)
//       }
//     });
//   };
  
//   const handlerSetTeachers = (e) => {
//     const isTeacherInList = allFavorits.filter(favoriteTeacher => (
//       e.some(selectedTeacher => isEqual(selectedTeacher, favoriteTeacher))
//     ));

//     if (!isEqual(favoriteTeachers, isTeacherInList)) {
//       setFavoriteTeachers(isTeacherInList);
//     }
//   };

//     return (   
//       <WraperBox>
//         <FavoritePageContainer>
//             <FilterMenu setTeachers={handlerSetTeachers} onResultsFoundChange={(e) => setResultsFound(e)} onReset={resetTeachers} />
//             {!resultsFound && <NotFound>This is all we managed to find</NotFound>}

//             { !favoriteTeachers.length && resultsFound &&  <EmptyFavoritesList /> }

//             <ul>
//               {favoriteTeachers.map((teacher, index) => {
//                     return <TeacherCard key={index} teacher={teacher} handleFavorite={handleFavorite} sourceComponent="FavoritePage" />;
//               })}
//             </ul>

//             {favoriteTeachers.length < visibleTeachers  || allFavorits.length === visibleTeachers ? null : (
//               resultsFound ?  <BtnLoadMore  handleLoadMore={handleLoadMore} /> : null
//             )}
//         </FavoritePageContainer> 
//       </WraperBox>      
//     );
// }
  
