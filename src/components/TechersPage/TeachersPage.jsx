import FilterMenu from "components/FilterMenu/FilterMenu";
import {  LoaderConteiner, NotFound, TeachersPageContainer, WraperBox } from "./TeachersPage.styled";
import TeacherCard from "components/TeacherCard/TeacherCard";
import { useEffect, useState } from "react";
import { getDatabase, ref, get } from 'firebase/database';
import BtnLoadMore from "components/BtnLoadMore/BtnLoadMore";
import { toast } from "react-toastify";
import Loader from "components/Loader/Loader";

export default function TeachersPage() {
  const [teachers, setTeachers] = useState([]);
  const [visibleTeachers, setVisibleTeachers] = useState(4);
  const [resultsFound, setResultsFound] = useState(true);
  const db = getDatabase();

  useEffect(() => {
    const fetchData = async () => {
      try {         
        const teachersRef = ref(db, 'teachers');
        const snapshot = await get(teachersRef);
        
        if (snapshot.exists()) {
          const teachersData = snapshot.val();
          const teachersArray = Object.values(teachersData);
          setTeachers(teachersArray.slice(0, visibleTeachers));
        } else {
          toast.error("No data available")
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };  
    fetchData();
  }, [db, visibleTeachers]);

  const handleLoadMore = async () => {
    try {
      const teachersRef = ref(db, 'teachers');
      const snapshot = await get(teachersRef);

      if (snapshot.exists()) {
        const teachersData = snapshot.val();
        const teachersArray = Object.values(teachersData);
        const newVisibleTeachers = teachersArray.slice(
          visibleTeachers,
          visibleTeachers + 4
        );
        setTeachers((prevTeachers) => [...prevTeachers, ...newVisibleTeachers]);
        setVisibleTeachers((prevVisibleTeachers) => prevVisibleTeachers + 4);
      } else {
        toast.error("No data available")
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleResultsFoundChange = (value) => {
    setResultsFound(value);
  };

  return (   
    <WraperBox>
      <TeachersPageContainer>            
          <FilterMenu setTeachers={setTeachers} onResultsFoundChange={handleResultsFoundChange} />
          {!resultsFound && <NotFound>Information for your request was not found :(</NotFound>}
          {!teachers.length && resultsFound && (
            <LoaderConteiner>
              <Loader />
            </LoaderConteiner>
          ) }
          
          <ul>
            {teachers.map((teacher, index) => (
              <TeacherCard key={index} teacher={teacher}  />
            ))}
          </ul>
          {teachers.length < visibleTeachers ? null : (
             <BtnLoadMore  handleLoadMore={handleLoadMore} />
          )}
      </TeachersPageContainer> 
    </WraperBox>      
  );
}
  