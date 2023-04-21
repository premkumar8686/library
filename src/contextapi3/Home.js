import React, { useContext } from 'react';
import myCon from './MyContext';

export default function Home() {
   const userObj = useContext(myCon);
  return (
    <>
      <h1>{userObj.Name}</h1>
    </>
  )
}
