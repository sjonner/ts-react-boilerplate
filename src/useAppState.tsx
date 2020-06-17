import * as React from "react";
import { useReducer, createContext, useContext } from "react";
import { AppState, initialState, appReducer } from "./appReducer";
import { Action, setField, validateForm } from "./appActions";

type ContextType = {
  state: AppState;
  dispatch: React.Dispatch<Action>;
};

const AppContext = createContext<ContextType>(null);

export const AppProvider: React.FC = (props) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return <AppContext.Provider value={{ state, dispatch }} {...props} />;
};

export function useAppState() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppState must be used within a AppProvider");
  }

  return {
    state: context.state,
    setField<T extends keyof AppState>(field: T, value: AppState[T]) {
      context.dispatch(setField(field, value));
    },
    validateForm(step: number) {
      context.dispatch(validateForm(step))
    }
  };
}
