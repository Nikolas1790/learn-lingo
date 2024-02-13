import { BlockShortInformationsTeacher, BlockSkills, BorderImgCard, FullName, ImgCard, ImgCardConteiner, InformCardConteiner, LanguagesUnderlined, LevelLanguage, LevelsList, MainInfBlock, Price, ReadMoreBtn, Subtitle, WraperCard } from "./TeacherCard.styled";
import sprite from '../../img/svg-file.svg';

const a = [
  {
    "name": "John",
    "surname": "Doe",
    "languages": ["English", "Spanish"],
    "levels": [
      "A1 Beginner",
      "A2 Elementary",
      "B1 Intermediate",
      "B2 Upper-Intermediate",
      "C1 Advanced",
      "C2 Proficient"
    ],
    "rating": 4.5,
    "reviews": [
      {
        "reviewer_name": "Alice",
        "reviewer_rating": 5,
        "comment": "John is an excellent teacher! I highly recommend him."
      },
      {
        "reviewer_name": "Bob",
        "reviewer_rating": 4,
        "comment": "John is very knowledgeable and patient. I enjoyed his classes."
      }
    ],
    "price_per_hour": 25,
    "lessons_done": 1375,
    "avatar_url": "https://ftp.goit.study/img/avatars/1.jpg",
    "lesson_info": "The lessons focus on improving speaking and listening skills through interactive activities and discussions.",
    "conditions": ["Teaches only adult learners (18 years and above).", "Flexible scheduling options available."],
    "experience": "John has been teaching languages for 7 years and has extensive experience in helping students improve their language skills. He has successfully taught numerous students from different backgrounds and proficiency levels."
  },
  {
    "name": "Jane",
    "surname": "Smith",
    "languages": ["French", "German"],
    "levels": ["A1 Beginner", "A2 Elementary", "B1 Intermediate", "B2 Upper-Intermediate"],
    "rating": 4.8,
    "reviews": [
      {
        "reviewer_name": "Eve",
        "reviewer_rating": 5,
        "comment": "Jane is an amazing teacher! She is patient and supportive."
      },
      {
        "reviewer_name": "Frank",
        "reviewer_rating": 4,
        "comment": "Jane's lessons were very helpful. I made good progress."
      }
    ],
    "price_per_hour": 30,
    "lessons_done": 1098,
    "avatar_url": "https://ftp.goit.study/img/avatars/2.jpg",
    "lesson_info": "Lessons are structured to cover grammar, vocabulary, and practical usage of the language.",
    "conditions": [
      "Welcomes both adult learners and teenagers (13 years and above).",
      "Provides personalized study plans."
    ],
    "experience": "Jane is an experienced and dedicated language teacher specializing in German and French. She holds a Bachelor's degree in German Studies and a Master's degree in French Literature. Her passion for languages and teaching has driven her to become a highly proficient and knowledgeable instructor. With over 10 years of teaching experience, Jane has helped numerous students of various backgrounds and proficiency levels achieve their language learning goals. She is skilled at adapting her teaching methods to suit the needs and learning styles of her students, ensuring that they feel supported and motivated throughout their language journey."
  }
]
  export default function TeacherCard() {
    return (   
        <WraperCard>
            <ImgCardConteiner>
                <BorderImgCard>
                    <ImgCard src={a[0].avatar_url} alt="teachers photo" />
                </BorderImgCard>                
            </ImgCardConteiner>

            <InformCardConteiner>
                <MainInfBlock>
                    <Subtitle>Languages</Subtitle>

                    {/* <div> */}
                        <p>
                            <svg width={16} height={16}>
                                <use href={`${sprite}#icon-book-open`} />
                            </svg>
                            Lessons online
                        </p>
                        <p>Lessons done: <span>{a[0].lessons_done}</span></p>
                        <p>
                            <svg width={16} height={16}>
                                <use href={`${sprite}#icon-star`} />
                            </svg>
                            Rating: <span>{a[0].rating}</span>
                        </p>
                        <p>Price / 1 hour: <Price> {a[0].price_per_hour}$</Price></p>
                    {/* </div> */}

                </MainInfBlock>

                <FullName>{a[0].name} {a[0].surname}</FullName>

                <BlockSkills>
                    <BlockShortInformationsTeacher>
                        <Subtitle>Speaks:</Subtitle>
                        <LanguagesUnderlined>{a[0].languages.join(', ')}</LanguagesUnderlined>
                    </BlockShortInformationsTeacher>

                    <BlockShortInformationsTeacher>
                        <Subtitle>Lesson Info:</Subtitle>
                        <p>{a[0].lesson_info}</p>
                   </BlockShortInformationsTeacher>

                    <BlockShortInformationsTeacher>
                        <Subtitle>Conditions:</Subtitle>
                        <p>{a[0].conditions}</p>
                    </BlockShortInformationsTeacher>
                </BlockSkills>

                <ReadMoreBtn>Read more</ReadMoreBtn>

                <LevelsList>
                    {a[0].levels.map((language) => (
                        <LevelLanguage key={language} >
                          {language}
                        </LevelLanguage>
                    ))}
                </LevelsList>
            </InformCardConteiner>
        </WraperCard>
    );
  }