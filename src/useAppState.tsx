import React from "react";
import { useReducer, createContext, useContext, useMemo } from "react";
import { AppState, initialState, appReducer } from "./appReducer";
import { Action, setField, validateForm } from "./appActions";

type StateContextType = AppState;
type DispatchContextType = React.Dispatch<Action>;

const StateContext = createContext<StateContextType>(null);
const DispatchContext = createContext<DispatchContextType>(null);

export const AppStateConsumer = StateContext.Consumer;

// Uses reducer hook, updates ALL components that read something from the state.
// Even if that part wasn't updated
export const AppStateProviderFC: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
    </StateContext.Provider>
  );
};
AppStateProviderFC.displayName = "AppStateProvider";

export class AppStateProvider extends React.Component {
  state = initialState;

  render() {
    return (
      <StateContext.Provider value={this.state}>
        <DispatchContext.Provider value={this.dispatch}>{this.props.children}</DispatchContext.Provider>
      </StateContext.Provider>
    );
  }

  dispatch = (action: Action) => {
    const newState = appReducer(this.state, action);
    this.setState(newState);
  };
}

export function useAppState() {
  const context = useContext(StateContext);

  if (!context) {
    throw new Error("useAppState must be used within a AppStateProvider");
  }

  return context;
}

export function useAppDispatch() {
  const dispatch = useContext(DispatchContext);

  if (!dispatch) {
    throw new Error("useAppState must be used within a DispatchProvider");
  }

  const api = useMemo(
    () => ({
      setField<T extends keyof AppState>(field: T, value: AppState[T]) {
        dispatch(setField(field, value));
      },
      validateForm(step: number) {
        dispatch(validateForm(step));
      },
    }),
    [dispatch]
  );

  return api;
}
