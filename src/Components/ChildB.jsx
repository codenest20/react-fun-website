import { useContext } from "react";
import { ContextBox } from "./Parent";

function ChildB() {
  let {username , address , id} = useContext(ContextBox)
  return (
    <>
    <h1> Name : {username} || Address : {address} || id :{id}</h1>
      
    </>
  );
}

export default ChildB;
