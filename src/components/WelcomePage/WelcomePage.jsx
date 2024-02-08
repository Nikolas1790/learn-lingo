import { NavLink } from "react-router-dom";
import photoGreeting from "../../img/home-page-photo.jpg"
import { ChildImg, ContainerGreeting, ContainerMainInf, WelcomePageContainer, WraperBox } from "./WelcomePage.styled";
  
  export default function WelcomePage() {
    return (   
      <WraperBox>
        <WelcomePageContainer>
          <ContainerGreeting>
            <ContainerMainInf>
              <h1>Unlock your potential with the best <span>language</span>  tutors</h1>
              <p>Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language proficiency to new heights by connecting with highly qualified and experienced tutors.</p>
              <NavLink to="/teachers" title="Let's start !">Get started</NavLink>
            </ContainerMainInf>
            <div>
              <ChildImg src={photoGreeting} alt="mainChild"  />
            </div>
          </ContainerGreeting>
          <div>
            <p>32,000 + Experienced tutors</p>
            <p>300,000 + 5-star tutor reviews</p>
            <p>120 + Subjects taught</p>
            <p>200 + Tutor nationalities</p>
          </div>
        </WelcomePageContainer> 
      </WraperBox>  
    
    );
  }
  