import FilterMenu from "components/FilterMenu/FilterMenu";
import { FavoritePageContainer, WraperBox } from "./FavoritePage.style";
import TeacherCard from "components/TeacherCard/TeacherCard";
import { BtnLoadMore } from "components/TechersPage/TeachersPage.styled";
import { auth } from '../../firebase';
import { useEffect, useState } from "react";

export default function FavoritePage() {
  const [favoriteTeachers, setFavoriteTeachers] = useState([]);
  const [visibleTeachers, setVisibleTeachers] = useState(4);

  useEffect(() => {
    const userId = auth.currentUser?.uid;
    const storedFavorites = JSON.parse(localStorage.getItem(`favorites-${userId}`)) || [];
    
    // console.log(v)
    if (storedFavorites.length !== visibleTeachers) {
      
      setFavoriteTeachers(storedFavorites.slice(0, visibleTeachers));
    }
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
            {favoriteTeachers.length <= visibleTeachers ? null : (
               <BtnLoadMore onClick={handleLoadMore}>Load more</BtnLoadMore>
            )}
        </FavoritePageContainer> 
      </WraperBox>  
    
    );
}
  
