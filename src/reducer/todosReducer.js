import { v4 as uuidv4 } from "uuid";
import { actionConstants } from "../constants/actionConstants";

export const todosInitialState = {
  todos: [],
};

export const TodoReducer = (state, action) => {
  switch (action.type) {
    case actionConstants.addTodo:
      const { todo } = action.payload;
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: uuidv4(),
            todo,
            background: null,
            selected: false,
          },
        ],
      };
    case actionConstants.deleteTodo:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    case actionConstants.selectTodo:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? { ...todo, selected: true } : todo
        ),
      };
    case actionConstants.unSelectTodo:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? { ...todo, selected: false } : todo
        ),
      };
    case actionConstants.editTodo:
      const { background, id } = action.payload;
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === id ? { ...todo, background } : todo
        ),
      };
    default:
      return { ...state };
  }
};
