import FilterMenu from "components/FilterMenu/FilterMenu";
import { FavoritePageContainer, WraperBox } from "./FavoritePage.style";
import TeacherCard from "components/TeacherCard/TeacherCard";
import { BtnLoadMore } from "components/TechersPage/TeachersPage.styled";
import { auth } from '../../firebase';
import { useEffect, useState } from "react";

export default function FavoritePage() {
  const [favoriteTeachers, setFavoriteTeachers] = useState([]);
  const [visibleTeachers, setVisibleTeachers] = useState(4);
  const [storedFavoritesLength, setStoredFavoritesLength] = useState(0);

  useEffect(() => {
    const userId = auth.currentUser?.uid;
    const storedFavorites = JSON.parse(localStorage.getItem(`favorites-${userId}`)) || [];
    setStoredFavoritesLength(storedFavorites.length)
    setFavoriteTeachers(storedFavorites.slice(0, visibleTeachers));
  }, [visibleTeachers, favoriteTeachers]);

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
            {storedFavoritesLength <= visibleTeachers ? null : (
               <BtnLoadMore onClick={handleLoadMore}>Load more</BtnLoadMore>
            )}
        </FavoritePageContainer> 
      </WraperBox>  
    
    );
}
  
