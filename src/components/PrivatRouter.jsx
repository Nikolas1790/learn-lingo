import { Navigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const auth = getAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(user);
    });

    return () => unsubscribe();
  }, [auth]);
console.log(isLoggedIn)
  return isLoggedIn ? Component : <Navigate to={redirectTo} /> ;
};