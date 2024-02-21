import imgFavorite from '../../img/flying-hearts.png';
import { EmptyFavoriteHeart, EmptyFavoriteListImg, EmptyFavoriteListTitle, WrapperEmptyFavoriteList } from './EmptyFavoritesList.seled';
import sprite from '../../img/svg-file.svg';

export default function EmptyFavoritesList() {
    return (        
        <WrapperEmptyFavoriteList>
            <EmptyFavoriteListImg src={imgFavorite} alt="car" width={200} />
            <EmptyFavoriteListTitle>Keep interesting teachers.</EmptyFavoriteListTitle>
            <p>Click             
                <EmptyFavoriteHeart>
                    <svg width={20} height={20} >
                        <use href={`${sprite}#icon-normal-heart`} style={{ stroke: 'black' }} />
                    </svg>
                </EmptyFavoriteHeart>
             on the ad that interests you and we will save it here</p>
        </WrapperEmptyFavoriteList> 
    );
}