import {  ButtonLoadMore } from "./BtnLoadMore.styled";

export default function BtnLoadMore({ handleLoadMore }) {    
    return (  
        <ButtonLoadMore onClick={handleLoadMore}>Load more</ButtonLoadMore>
    );
}