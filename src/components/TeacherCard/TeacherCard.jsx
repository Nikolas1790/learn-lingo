import { BlockShortInformationsTeacher, BlockSkills, BorderImgCard, CardHeartBtn, Divider, FullName, ImgCard, ImgCardConteiner, InformCardConteiner, LanguagesUnderlined, LessonsOnline, LevelLanguage, LevelsList, MainInfBlock, Price, Rating, ReadMoreBtn, Subtitle, WraperCard } from "./TeacherCard.styled";
import sprite from '../../img/svg-file.svg';


  export default function TeacherCard({teacher}) {
    return (   
      <div>
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

                <ReadMoreBtn>Read more</ReadMoreBtn>

                <LevelsList>
                    {teacher.levels.map((language) => (
                        <LevelLanguage key={language} >
                          #{language}
                        </LevelLanguage>
                    ))}
                </LevelsList>
            </InformCardConteiner>
        </WraperCard>
      </div>
    );
  }