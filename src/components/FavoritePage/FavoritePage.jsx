import FilterMenu from "components/FilterMenu/FilterMenu";
import { FavoritePageContainer, WraperBox } from "./FavoritePage.style";
import TeacherCard from "components/TeacherCard/TeacherCard";
import { auth } from '../../firebase';
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import BtnLoadMore from "components/BtnLoadMore/BtnLoadMore";


export default function FavoritePage() {
  const [favoriteTeachers, setFavoriteTeachers] = useState([]);
  const [visibleTeachers, setVisibleTeachers] = useState(4);
  // const [allFavorits, setallFavorits] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userId = user.uid;
        const storedFavorites = JSON.parse(localStorage.getItem(`favorites-${userId}`)) || [];
        // if (JSON.stringify(allFavorits) !== JSON.stringify(storedFavorites)) {
        //   setallFavorits(storedFavorites);
        // }
        console.log(storedFavorites);
        setFavoriteTeachers(storedFavorites.slice(0, visibleTeachers));
      }
    });
  
    return () => unsubscribe(); 
  }, [visibleTeachers]);


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

    return (   
      <WraperBox>
        <FavoritePageContainer>

            <FilterMenu />
            
            <ul>
              {favoriteTeachers.map((teacher, index) => (
                <TeacherCard key={index} teacher={teacher} />
              ))}
            </ul>
            {favoriteTeachers.length < visibleTeachers  ? null : (
               <BtnLoadMore  handleLoadMore={handleLoadMore} />
            )}
        </FavoritePageContainer> 
      </WraperBox>  
    
    );
}
  
