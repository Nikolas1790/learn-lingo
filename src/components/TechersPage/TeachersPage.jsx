import FilterMenu from "components/FilterMenu/FilterMenu";
import { BtnLoadMore, TeachersPageContainer, WraperBox } from "./TeachersPage.styled";
import TeacherCard from "components/TeacherCard/TeacherCard";


  export default function TeachersPage() {
    return (   
      <WraperBox>
        <TeachersPageContainer>
            
            <FilterMenu />

            <TeacherCard />

            <BtnLoadMore>Load more</BtnLoadMore>

        </TeachersPageContainer> 
      </WraperBox>  
    
    );
  }
  