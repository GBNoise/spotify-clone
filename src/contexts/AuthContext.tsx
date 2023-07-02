import { createContext, useReducer, FC } from "react";
import { AuthForm } from "../components/auth/AuthForm";
import { ContextProps } from "./utils";

interface AuthState {
  username: string;
  email: string;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  username: "",
  email: "",
  isAuthenticated: false,
};

const authReducer = (state: AuthState, action: any) => {
  switch (action.type) {
    case "toggleIsAuthenticated":
      return { ...state, isAuthenticated: !state.isAuthenticated };
    default:
      return { ...state };
  }
};

export const authContext = createContext({} as ContextProps<AuthState>);

interface AuthContextProps {
  children: React.ReactNode;
}

export const AuthContext: FC<AuthContextProps> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const { isAuthenticated } = state;
  return (
    <authContext.Provider value={{ state, dispatch }}>
      {!isAuthenticated && <AuthForm />}
      {children}
    </authContext.Provider>
  );
};
