import React, { useContext } from 'react';
import userContext from './userContext';

export default function Home() {
   const userObj = useContext(userContext);
  return (
    <div>
     <h1>{userObj.Name}</h1>
    </div>
  )
}
