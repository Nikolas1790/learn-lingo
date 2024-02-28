import FilterMenu from "components/FilterMenu/FilterMenu";
import {  LoaderConteiner, NotFound, TeachersPageContainer, WraperBox } from "./TeachersPage.styled";
import TeacherCard from "components/TeacherCard/TeacherCard";
import { useCallback, useEffect, useMemo, useState } from "react";
import { getDatabase, ref, get } from 'firebase/database';
import BtnLoadMore from "components/BtnLoadMore/BtnLoadMore";
import { toast } from "react-toastify";
import Loader from "components/Loader/Loader";

export default function TeachersPage() {
  const [allTeachers, setAllTeachers] = useState([]);
  const [visibleTeachers, setVisibleTeachers] = useState(4);
  const [resultsFound, setResultsFound] = useState(true);
  const [teachersBaza, setTeachersBaza] = useState([]);
  const db = getDatabase();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const teachersRef = ref(db, 'teachers');
        const snapshot = await get(teachersRef);
        if (snapshot.exists()) {
          const teachersData = snapshot.val();
          setAllTeachers(Object.values(teachersData));
          setTeachersBaza(Object.values(teachersData));
        } else {
          toast.error("No data available");
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [db]);

  const handleLoadMore = useCallback(() => {
    setVisibleTeachers(prev => prev + 4);
  }, []);

  const handleResultsFoundChange = useCallback((value) => {
    setResultsFound(value);
  }, []);

  const resetTeachers = useCallback(() => {
    setResultsFound(true);
    setVisibleTeachers(4);
    setAllTeachers(teachersBaza);
  }, [teachersBaza]);

  const visibleTeachersList = useMemo(() => allTeachers.slice(0, visibleTeachers), [allTeachers, visibleTeachers]);

  return (
    <WraperBox>
    <TeachersPageContainer>            
        <FilterMenu setTeachers={setAllTeachers} onResultsFoundChange={handleResultsFoundChange} onReset={resetTeachers} />
        
        {!visibleTeachersList.length && resultsFound && (
          <LoaderConteiner>
            <Loader />
          </LoaderConteiner>
        ) }
        
        <ul>
          { visibleTeachersList.map((teacher) => (
            <TeacherCard key={teacher.avatar_url} teacher={teacher}  />
          ))}
        </ul>

        {!resultsFound && <NotFound>This is all we managed to find</NotFound>}
        
        {visibleTeachersList.length < visibleTeachers  ? null : (
           resultsFound ? <BtnLoadMore  handleLoadMore={handleLoadMore} /> : null
        )}
    </TeachersPageContainer> 
  </WraperBox>   
  );
}
