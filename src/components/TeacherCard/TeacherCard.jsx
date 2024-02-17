import { ActiveGreenSvg, BlockShortInformationsTeacher, BlockSkills, BorderImgCard, CardHeartBtn, Divider, FullName, ImgCard, ImgCardConteiner, InformCardConteiner, LanguagesUnderlined, LessonsOnline, LevelLanguage, LevelsList, MainInfBlock, Price, Rating, ReadMoreBtn, Subtitle, TrialLessonBtn, WraperCard } from "./TeacherCard.styled";
import sprite from '../../img/svg-file.svg';
import { useEffect, useState } from "react";
import EducationalBkg from "components/EducationalBkg/EducationalBkg";
import TrialLessonModal from "components/LoginAndRegisterModal/TrialLessonModal";
import { auth } from '../../firebase';
import { onAuthStateChanged } from "firebase/auth";

  export default function TeacherCard({teacher}) {
    const [expanded, setExpanded] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);
    const [trailLessonModalOpen, setTrailLessonModalOpen] = useState(false);

    useEffect(() => {
      // Подписываемся на события изменения статуса аутентификации
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        const userId = user?.uid;
        const storedFavorites = JSON.parse(localStorage.getItem(`favorites-${userId}`)) || [];
        setIsFavorite(storedFavorites.some(fav => fav.avatar_url === teacher.avatar_url));
      });
    
      return () => unsubscribe();
    }, [teacher.avatar_url]);


    const openLoginModal = () => {
      setTrailLessonModalOpen(true);
    };
    const closeModals = () => {
      // console.log('Closing modals');
      setTrailLessonModalOpen(false);
  };
    const handleReadMoreClick = () => {
      setExpanded((prevExpanded) => !prevExpanded);
    };

    const handleHeartClick = () => {
      const userId = auth.currentUser?.uid;
      if (auth.currentUser) {
        const newIsFavorite = !isFavorite;
        setIsFavorite(newIsFavorite);
  
        const storedFavorites = JSON.parse(localStorage.getItem(`favorites-${userId}`)) || [];
  
        if (newIsFavorite) {
          localStorage.setItem(`favorites-${userId}`, JSON.stringify([...storedFavorites, teacher]));
        } else {
          const updatedFavorites = storedFavorites.filter((fav) => fav.avatar_url !== teacher.avatar_url);
          localStorage.setItem(`favorites-${userId}`, JSON.stringify(updatedFavorites));
        }        
      } else {
        alert("Для добавления в избранное вам необходимо войти в систему.");
      }
    };


    return (   
        <WraperCard>
          <CardHeartBtn onClick={handleHeartClick} >
            <svg width={26} height={26} >
              <use href={`${sprite}#${isFavorite ? 'icon-heart-active' : 'icon-normal-heart'}`} />
            </svg>
          </CardHeartBtn>

          <ImgCardConteiner>
          <BorderImgCard>
              <ImgCard src={teacher.avatar_url} alt="teachers photo" />
              <ActiveGreenSvg width={12} height={12} >
                <use href={`${sprite}#icon-geen-circle`} />
              </ActiveGreenSvg>

            </BorderImgCard>               
          </ImgCardConteiner>

            <InformCardConteiner>
                <MainInfBlock>
                  <Subtitle>Languages</Subtitle>      

                  <LessonsOnline>
                    <svg width={16} height={16}>
                      <use href={`${sprite}#icon-book-open`} />
                    </svg>
                    Lessons online
                  </LessonsOnline>
                  <Divider />
                  <p>Lessons done: <span>{teacher.lessons_done}</span></p>
                  <Divider />
                  <Rating>
                    <svg width={16} height={16}>
                      <use href={`${sprite}#icon-star`} />
                    </svg>
                    Rating: <span>{teacher.rating}</span>
                  </Rating>
                  <Divider />
                  <p>Price / 1 hour: <Price> {teacher.price_per_hour}$</Price></p>
                    
                </MainInfBlock>

                <FullName>{teacher.name} {teacher.surname}</FullName>

                <BlockSkills>
                  <BlockShortInformationsTeacher>
                    <Subtitle>Speaks:</Subtitle>
                    <LanguagesUnderlined>{teacher.languages.join(', ')}</LanguagesUnderlined>
                  </BlockShortInformationsTeacher>

                  <BlockShortInformationsTeacher>
                    <Subtitle>Lesson Info:</Subtitle>
                    <p>{teacher.lesson_info}</p>
                  </BlockShortInformationsTeacher>

                  <BlockShortInformationsTeacher>
                    <Subtitle>Conditions:</Subtitle>
                    <p>{teacher.conditions}</p>
                  </BlockShortInformationsTeacher>
                </BlockSkills>

                {expanded && <EducationalBkg experience={teacher.experience} reviews={teacher.reviews}/>}
                {!expanded  && <ReadMoreBtn onClick={handleReadMoreClick}>Read more</ReadMoreBtn>}            
                

                <LevelsList>
                    {teacher.levels.map((language) => (
                        <LevelLanguage key={language} >
                          #{language}
                        </LevelLanguage>
                    ))}
                </LevelsList>

                {expanded && <TrialLessonBtn onClick={openLoginModal}  >Book trial lesson</TrialLessonBtn>}
                
                {trailLessonModalOpen && <TrialLessonModal closeModals={closeModals} img={teacher.avatar_url} fullName={`${teacher.name} ${teacher.surname}`} />}
            </InformCardConteiner>
        </WraperCard>      
    );
  }