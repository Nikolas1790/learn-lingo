import { BlockShortInformationsTeacher, BlockSkills, BorderImgCard, CardHeartBtn, Divider, FullName, ImgCard, ImgCardConteiner, InformCardConteiner, LanguagesUnderlined, LessonsOnline, LevelLanguage, LevelsList, MainInfBlock, Price, Rating, ReadMoreBtn, Subtitle, TrialLessonBtn, WraperCard } from "./TeacherCard.styled";
import sprite from '../../img/svg-file.svg';
import { useState } from "react";
import EducationalBkg from "components/EducationalBkg/EducationalBkg";

  export default function TeacherCard({teacher}) {
    const [expanded, setExpanded] = useState(false);

    const handleReadMoreClick = () => {
      // Переключение состояния раскрытия
      setExpanded((prevExpanded) => !prevExpanded);
    };

    return (   
        <WraperCard>
          <CardHeartBtn >
            <svg width={26} height={26} >
              <use href={`${sprite}#icon-normal-heart`} />
            </svg>
          </CardHeartBtn>

          <ImgCardConteiner>
            <BorderImgCard>
              <ImgCard src={teacher.avatar_url} alt="teachers photo" />
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

                {expanded && <TrialLessonBtn>Book trial lesson</TrialLessonBtn>}

            </InformCardConteiner>
        </WraperCard>      
    );
  }