import { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { todoListState } from "../store";

export default function TodoItemCreator() {
  const [inputValue, setInputValue] = useState("");
  // const setTodoList = useSetRecoilState(todoListState);
  const [todoListt, setTodoListt] = useRecoilState(todoListState);
  console.log("todolist > ", todoListt, setTodoListt);
  const addItem = () => {
    setTodoListt((oldTodoListt) => [
      ...oldTodoListt,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue("");
  };

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
}

// 고유한 Id 생성을 위한 유틸리티
let id = 0;
console.log("id >> ", id);
function getId() {
  return id++;
}
