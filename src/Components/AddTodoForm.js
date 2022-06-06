import { useState } from "react";
import { actionConstants } from "../constants/actionConstants";
import { useTodo } from "../context/todoContext";

export const AddTodoForm = () => {
  const [todo, setTodo] = useState("");
  const { dispatch } = useTodo();

  return (
    <div className="w-full flex gap-3">
      <input
        type="text"
        value={todo}
        onChange={(evt) => setTodo(evt.target.value)}
        className="border-2 flex-1 p-2 rounded-sm outline-none"
      />
      <button
        onClick={() => {
          dispatch({ type: actionConstants.addTodo, payload: { todo } });
          setTodo("");
        }}
        className="bg-gray-500 text-white rounded-sm py-2 px-5 "
      >
        Add
      </button>
    </div>
  );
};
