
function Button(props){
  return <>
  <button type="button" className={`btn btn-${props.tags}`} onClick={props.clickButton} >{props.title}</button>
  </>
}


export default Button;