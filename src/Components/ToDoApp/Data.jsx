import Button from "./Button";
import "../style/Data.css";

function Data(props) {
  return (
    <>
      <div class="container text-center data-container">
        <div class="row">
          <div class="col-sm-6">
            <p> {props.todo} </p>
          </div>
          <div class="col-sm-4">
            <p>{props.date}</p>
          </div>
          <div class="col-sm-2">
            <Button
              tags="danger"
              title="Delete"
              clickButton={props.clickButton}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Data;
