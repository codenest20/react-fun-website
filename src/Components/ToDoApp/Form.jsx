import { useState } from "react";
import Button from "./Button";
import "../style/Form.css";
import Data from "./Data";

function Form() {
  const [todo, setTodo] = useState("");
  const [date, setDate] = useState("");
  const [array, setArray] = useState([]);

  function addData() {
    if (todo && date) {
      let newArray = [...array, { todo, date }];
      setArray(newArray);
      setDate("");
      setTodo("");
    }
  }

  function deleteData(index) {
    const newArray = array.filter((_, i) => i != index);
    setArray(newArray);
  }

  return (
    <>
      <div class="container text-center">
        <div class="row">
          <div class="col-sm-6">
            <input
              type="text"
              className="form-control"
              id=""
              placeholder="Enter To Do"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
          </div>
          <div class="col-sm-4">
            <input
              type="date"
              className="form-control"
              id=""
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div class="col-sm-2">
            <Button tags="success" title="Add" clickButton={addData} />
          </div>
        </div>
      </div>

      {array.map((item, index) => {
        return (
          <Data
            key={index}
            todo={item.todo}
            date={item.date}
            clickButton={() => {
              deleteData(index);
            }}
          />
        );
      })}
    </>
  );
}

export default Form;
