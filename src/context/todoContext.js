import { createContext, useContext, useReducer } from "react";
import { TodoReducer, todosInitialState } from "../reducer/todosReducer";
const todosContext = createContext();

export const TodosProvider = ({ children }) => {
  const [todosData, dispatch] = useReducer(TodoReducer, todosInitialState);

  return (
    <todosContext.Provider value={{ todosData, dispatch }}>
      {children}
    </todosContext.Provider>
  );
};

export const useTodo = () => useContext(todosContext);
