import React, { useState, useContext } from "react";
import { authContext } from "../../contexts/AuthContext";
import { FormProps } from "../utils/utils";
import "./auth.scss";

interface AuthFormProps extends FormProps {}

type Details = {
  username: string;
  email: string;
  password: string;
  "repeat password": string;
};

export const AuthForm: React.FC<AuthFormProps> = ({ className }) => {
  const { state, dispatch } = useContext(authContext);
  const [action, setAction] = useState<"login" | "sign">("login");
  const login: Array<keyof Details> = ["username", "password"];
  const sign: Array<keyof Details> = ["email", ...login, "repeat password"];
  const options = { login, sign };
  const [details, setDetails] = useState<Details>({
    username: "",
    email: "",
    password: "",
    "repeat password": "",
  });

  const toggleAction = () =>
    setAction((p) => (p === "login" ? "sign" : "login"));

  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setDetails({ ...details, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // log the user in
    alert(JSON.stringify(details));
    dispatch({ type: "toggleIsAuthenticated" });
  };

  return (
    <form className={`authForm ${className}`} onSubmit={handleSubmit}>
      <div className="authInner">
        <h1>{action}</h1>
        {options[action].map((option) => {
          return (
            <label htmlFor={option}>
              {option}
              <input
                type={option.includes("password") ? "password" : "text"}
                placeholder={option}
                id={option}
                name={option}
                value={details[option]}
                onChange={handleChange}
                required
              />
            </label>
          );
        })}
        <button type="submit">{action === "login" ? "login" : "create"}</button>
        <span onClick={toggleAction} className="formSwitch">
          {action === "login"
            ? "do not have an account?"
            : "already have an account?"}
        </span>
      </div>
    </form>
  );
};
