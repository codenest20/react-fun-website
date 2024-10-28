import { useNavigate } from "react-router-dom";


const MyComp = ()=>{

  let myNavigate = useNavigate();
  //useNavigate le Function return garcha jasma hamile path dinu parcha


  return <>

    <h1>This is MyComp</h1>
    <button onClick={()=>myNavigate("/contact")} >Navigate Button</button>
  </>
}

export default MyComp;