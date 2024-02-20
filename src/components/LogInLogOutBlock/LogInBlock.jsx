import React  from 'react'
import sprite from '../../img/svg-file.svg';
import { BtnLogIn, BtnLogOutAndRegistration, WrapperBlock } from './LogInLogOutStyled/LogInLogOut.styled';

export default function LogInBlock({openLoginModal, openRegisterModal}) {
    return (
        <WrapperBlock>                
                <BtnLogIn onClick={openLoginModal}>
                    <svg width={20} height={20}>
                        <use href={`${sprite}#icon-log-in`} />
                    </svg>
                    <p>Log in</p>
                </BtnLogIn>
                <BtnLogOutAndRegistration onClick={openRegisterModal}>Registration</BtnLogOutAndRegistration>                
        </WrapperBlock>
    )
}
