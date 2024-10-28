import { createContext } from "react";
import ChildA from "./ChildA";
import ChildB from "./ChildB";


let ContextBox = createContext()

function Parent(){
  let username = "Ujjwal"
  let address = "Jhumka"
  let id = 1


  return <>
    <h3>This is Parent Component</h3>
    <ContextBox.Provider value={{username,address , id}} >
      <ChildB />
    </ContextBox.Provider>
  </>
}

export default Parent;
export {ContextBox};