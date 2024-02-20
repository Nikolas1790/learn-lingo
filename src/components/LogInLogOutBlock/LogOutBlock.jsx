import { auth } from '../../firebase'
import { signOut } from 'firebase/auth'
import React  from 'react'
import sprite from '../../img/svg-file.svg';
import { useAuth } from 'components/AuthProvider/AuthProvider';
import {  BtnLogOutAndRegistration, Name, WrapperBlock } from './LogInLogOutStyled/LogInLogOut.styled';


export default function LogOutBlock() {
  const { authUser } = useAuth();

    function userSignOut() {
        signOut(auth)
        // window.location.reload();
        // .then(() => console.log("success"))
        // .catch((e) => console.log(e))
    }
  return (
    <WrapperBlock>                      
      <svg width={40} height={40}>
          <use href={`${sprite}#icon-image`} />
      </svg>                     
      <Name>{authUser.displayName}</Name>
      <BtnLogOutAndRegistration onClick={userSignOut}>Log out</BtnLogOutAndRegistration>     
    </WrapperBlock>
  )
}
