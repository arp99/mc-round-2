import { AddTodoForm } from "./Components/AddTodoForm";
import { actionConstants } from "./constants/actionConstants";
import { useTodo } from "./context/todoContext";
import { AiOutlineDelete } from "react-icons/ai";
import "./App.css";

function App() {
  const { todosData, dispatch } = useTodo();
  return (
    <div className="App">
      <main className="w-[40%] h-full mx-auto">
        <div className="w-full mx-auto">
          <AddTodoForm />
        </div>
        <div className="w-full">
          {todosData.todos.map(({ id, todo, background, selected }) => {
            return (
              <div
                key={id}
                className={`bg-white ${
                  background ? background : ""
                } py-2 w-full flex items-center justify-around gap-3 border-0 border-b-2 border-gray-400 last:border-none`}
              >
                <input
                  type="checkbox"
                  checked={selected}
                  onChange={() => {
                    dispatch({
                      type: selected
                        ? actionConstants.unSelectTodo
                        : actionConstants.selectTodo,
                      payload: { id },
                    });
                  }}
                  className="peer"
                />
                <p className="w-1/4">{todo}</p>
                <div className="flex gap-2">
                  <button
                    className="w-4 h-4 rounded-full bg-red-600"
                    onClick={() => {
                      dispatch({
                        type: actionConstants.editTodo,
                        payload: { background: "bg-red-500", id },
                      });
                    }}
                  ></button>
                  <button
                    className="w-4 h-4 rounded-full bg-green-600"
                    onClick={() => {
                      dispatch({
                        type: actionConstants.editTodo,
                        payload: { background: "bg-green-500", id },
                      });
                    }}
                  ></button>
                  <button
                    className="w-4 h-4 rounded-full bg-blue-600"
                    onClick={() => {
                      dispatch({
                        type: actionConstants.editTodo,
                        payload: { background: "bg-blue-500", id },
                      });
                    }}
                  ></button>
                  <button
                    className="w-4 h-4 rounded-full bg-yellow-600"
                    onClick={() => {
                      dispatch({
                        type: actionConstants.editTodo,
                        payload: { background: "bg-yellow-500", id },
                      });
                    }}
                  ></button>
                </div>
                <span className="opacity-0 peer-checked:opacity-100 cursor-pointer w-3">
                  {selected && (
                    <AiOutlineDelete
                      size={20}
                      onClick={() => {
                        dispatch({
                          type: actionConstants.deleteTodo,
                          payload: { id },
                        });
                      }}
                    />
                  )}
                </span>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
