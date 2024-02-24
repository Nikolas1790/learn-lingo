import FilterMenu from "components/FilterMenu/FilterMenu";
import { FavoritePageContainer, WraperBox } from "./FavoritePage.style";
import TeacherCard from "components/TeacherCard/TeacherCard";
import { auth } from '../../firebase';
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import BtnLoadMore from "components/BtnLoadMore/BtnLoadMore";
import EmptyFavoritesList from "components/EmptyFavoritesList/EmptyFavoritesList";
import { NotFound } from "components/TechersPage/TeachersPage.styled";

export default function FavoritePage() {
  const [teachers, setTeachers] = useState([]);
  const [favoriteTeachers, setFavoriteTeachers] = useState([]);
  const [visibleTeachers, setVisibleTeachers] = useState(4);
  const [allFavorits, setallFavorits] = useState([]);
  const [resultsFound, setResultsFound] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userId = user.uid;
        const storedFavorites = JSON.parse(localStorage.getItem(`favorites-${userId}`)) || [];
        setallFavorits(storedFavorites)
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
  const handleFavorite = (e) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const userId = user.uid;
        const storedFavorites = JSON.parse(localStorage.getItem(`favorites-${userId}`)) || [];
        setallFavorits(storedFavorites)
        setFavoriteTeachers(storedFavorites.slice(0, visibleTeachers));
      }
    });
  };
  
  const resetTeachers = () => {
    
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const userId = user.uid;
        const storedFavorites = JSON.parse(localStorage.getItem(`favorites-${userId}`)) || [];
        console.log(storedFavorites)
        setallFavorits(storedFavorites)
        setFavoriteTeachers(storedFavorites.slice(0, visibleTeachers));
        setResultsFound(true)
      }
    });
  };
  console.log(favoriteTeachers)

    return (   
      <WraperBox>
        <FavoritePageContainer>
            <FilterMenu setTeachers={setTeachers} onResultsFoundChange={(e) => setResultsFound(e)} onReset={resetTeachers} />
            {!resultsFound && <NotFound>Information for your request was not found :(</NotFound>}

            { !favoriteTeachers.length && <EmptyFavoritesList /> }

            <ul>
              {favoriteTeachers.map((teacher, index) => {
                console.log(teachers)
                const isTeacherInList = teachers.some(t => t.avatar_url === teacher.avatar_url);  
                  if (teachers.length === 0 || isTeacherInList) {
                    return <TeacherCard key={index} teacher={teacher} handleFavorite={handleFavorite} sourceComponent="FavoritePage" />;
                  }        
                return null;
              })}
            </ul>

            {favoriteTeachers.length < visibleTeachers  || allFavorits.length === visibleTeachers ? null : (
              resultsFound ?  <BtnLoadMore  handleLoadMore={handleLoadMore} /> : null
            )}
        </FavoritePageContainer> 
      </WraperBox>      
    );
}
  
