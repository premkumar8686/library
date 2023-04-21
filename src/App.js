import React from "react";
import userContext from "./contextapi/userContext";
import Center from "./contextapi/Center";

function App() {
  console.log(userContext);
  return (
    <>
     <userContext.Provider value={{Name: 'Prem'}}>
        <Center />
     </userContext.Provider>
    </>
  );
}

export default App;
