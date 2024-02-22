import photoGreeting from "../../img/home-page-photo.jpg"
import { BtnGetStarted, ChildImg, ContainerBenefits, ContainerGreeting, ContainerMainInf, DataFigures, IndividualContainerBenefits, MotivationalText, SmallTitleFirstTwo, SmallTitleSecondTwo, Title, TitleLenguage, WelcomePageContainer, WraperBox } from "./WelcomePage.styled";
  
export default function WelcomePage() {
  return (   
    <WraperBox>
      <WelcomePageContainer>
        <ContainerGreeting>
          <ContainerMainInf>
            <Title>Unlock your potential with the best <TitleLenguage>language</TitleLenguage>  tutors</Title>
            <MotivationalText>Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language proficiency to new heights by connecting with highly qualified and experienced tutors.</MotivationalText>
            <BtnGetStarted to="/teachers" title="Let's start !">Get started</BtnGetStarted>
          </ContainerMainInf>
          <div>
            <ChildImg src={photoGreeting} alt="mainChild"  />
          </div>
        </ContainerGreeting>

        <ContainerBenefits>
          <IndividualContainerBenefits>
            <DataFigures>32,000 +</DataFigures>
            <SmallTitleFirstTwo> Experienced tutors</SmallTitleFirstTwo>
          </IndividualContainerBenefits>
          <IndividualContainerBenefits>
            <DataFigures>300,000 +</DataFigures>
            <SmallTitleFirstTwo> 5-star tutor reviews</SmallTitleFirstTwo>
          </IndividualContainerBenefits>
          <IndividualContainerBenefits>
            <DataFigures>120 +</DataFigures>
            <SmallTitleSecondTwo> Subjects taught</SmallTitleSecondTwo>
          </IndividualContainerBenefits>
          <IndividualContainerBenefits>
            <DataFigures>200 +</DataFigures>
            <SmallTitleSecondTwo> Tutor nationalities</SmallTitleSecondTwo>
          </IndividualContainerBenefits>

        </ContainerBenefits>
      </WelcomePageContainer> 
    </WraperBox>      
  );
}
  