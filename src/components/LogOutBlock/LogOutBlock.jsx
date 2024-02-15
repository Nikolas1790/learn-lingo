import { auth } from '../../firebase'
import { signOut } from 'firebase/auth'
import React  from 'react'
import sprite from '../../img/svg-file.svg';
import { BtnLogOut, Name, WrapperLogOutBlock } from './LogOutBlock.styled';


export default function LogOutBlock({authUser}) {
    // const [authUser, setAuthUser] = useState(null)
    // useEffect(() => {
    //     const listen = onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //             console.log(user)
    //             setAuthUser(user)
    //         } else {
    //             setAuthUser(null)
    //         }
    //     })
    //     return () => {
    //         listen()
    //     }
    // }, [])
    function userSignOut() {
        signOut(auth)
        .then(() => console.log("success"))
        .catch((e) => console.log(e))
    }
  return (
    <WrapperLogOutBlock>
                      
      <svg width={40} height={40}>
          <use href={`${sprite}#icon-image`} />
      </svg>                     
      <Name>{authUser.displayName}</Name>
      <BtnLogOut onClick={userSignOut}>Log out</BtnLogOut>
     
    </WrapperLogOutBlock>
  )
}
