import { ClientData, ClientGrade, ClientImg, ClientName, CustomerReviewBlock, Experience } from "./EducationalBkg.styled";
import unknownImage from "../../img/unknown-img.jpg"
import sprite from '../../img/svg-file.svg';

export default function EducationalBkg({experience, reviews}) {
    return ( 
        <>
            <Experience>{experience}</Experience>
            <ul>
                {reviews.map(({reviewer_name, reviewer_rating, comment }, id) => (
                    <CustomerReviewBlock key={id}>
                        <ClientData>
                            <ClientImg src={unknownImage} alt={reviewer_name} />
                            <div>
                                <ClientName>{reviewer_name}</ClientName>
                                <ClientGrade>
                                    <svg width={16} height={16}>
                                        <use href={`${sprite}#icon-star`} />
                                    </svg>
                                    {reviewer_rating}.0
                                </ClientGrade>
                            </div>
                        </ClientData>
                        <p>{comment}</p>
                    </CustomerReviewBlock>
                ))}
            </ul>
        </>  
    );
}