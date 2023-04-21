import React,{ useContext } from 'react';
import userContext1 from './userContextAPI';

export default function Home() {
  const userObj = useContext(userContext1);
  return (
    <>
      <h1>From Home: {userObj.Name}</h1>
    </>
  )
}
