import FilterMenu from "components/FilterMenu/FilterMenu";
import { BtnLoadMore, TeachersPageContainer, WraperBox } from "./TeachersPage.styled";

  export default function TeachersPage() {
    return (   
      <WraperBox>
        <TeachersPageContainer>
            
            <FilterMenu />

            <BtnLoadMore>Load more</BtnLoadMore>

        </TeachersPageContainer> 
      </WraperBox>  
    
    );
  }
  