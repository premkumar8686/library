import React from "react";
// import userContext from "./contextapi/userContext";
// import Center from "./contextapi/Center";
// import userContext from "./comtextapi2/userContextAPI";
// import Center from "./comtextapi2/Center";

import myCon1 from "./contextapi3/MyContext";
import Center from "./contextapi3/Center";


function App() {
  
  return (
    <>
     {/* <userContext.Provider value={{Name: 'Prem'}}>
        <Center />
     </userContext.Provider> */}

    {/* <userContext.Provider value={{Name: 'Prem'}}>
       <Center />
    </userContext.Provider> */}

    <myCon1.Provider value={{Name: 'Prem'}}>
      <Center />
    </myCon1.Provider>

    </>
  );
}

export default App;
