import FilterMenu from "components/FilterMenu/FilterMenu";
import { TeachersPageContainer, WraperBox } from "./TeachersPage.styled";

  export default function TeachersPage() {
    return (   
      <WraperBox>
        <TeachersPageContainer>
            
            <FilterMenu />

        </TeachersPageContainer> 
      </WraperBox>  
    
    );
  }
  