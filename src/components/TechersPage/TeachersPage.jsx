import FilterMenu from "components/FilterMenu/FilterMenu";
import {  LoaderConteiner, NotFound, TeachersPageContainer, WraperBox } from "./TeachersPage.styled";
import TeacherCard from "components/TeacherCard/TeacherCard";
import { useEffect, useMemo, useState } from "react";
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


  const resetTeachers =  async () => {
    setResultsFound(true)
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
    setVisibleTeachers(4)
  };
   
  const memoizedTeachers = useMemo(() => teachers, [teachers]);

  return (   
    <WraperBox>
      <TeachersPageContainer>            
          <FilterMenu setTeachers={setTeachers} onResultsFoundChange={handleResultsFoundChange} onReset={resetTeachers} />
          {!resultsFound && <NotFound>This is all we managed to find</NotFound>}
          {!teachers.length && resultsFound && (
            <LoaderConteiner>
              <Loader />
            </LoaderConteiner>
          ) }
          
          <ul>
            { memoizedTeachers.map((teacher, index) => (
              <TeacherCard key={index} teacher={teacher}  />
            ))}
          </ul>
          {teachers.length < visibleTeachers  ? null : (
             resultsFound ? <BtnLoadMore  handleLoadMore={handleLoadMore} /> : null
          )}
      </TeachersPageContainer> 
    </WraperBox>      
  );
}