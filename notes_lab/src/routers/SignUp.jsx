import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { z } from "zod";
import Input from "../utils/Input";
import Button from "../utils/Button";
import { useNavigate } from "react-router-dom";
import User from "../utils/userValidation";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [userExist, setUserExist] = useState(true);
  const [errors, setErrors] = useState(null);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await API.getUsers();
      setUsers(response);
    };
    fetchUsers();
  }, []);

  const navigate = useNavigate();

  function handleSignUp() {
    try {
      const userExists = users.some((user) => user.email === email);
      if (userExists) {
        setUserExist(false);
        throw new Error("A user with this email exists");
      } else {
        setUserExist(true);
      }
      if (password !== repeatPassword) {
        setPasswordsMatch(false);
        throw new Error("Passwords don't match");
      }
      const user = User.parse({
        email,
        password,
      });
      setErrors(null);
      API.signUp(email, password);
      navigate("/login");
    } catch (err) {
      if (err instanceof z.ZodError) {
        setErrors(err.format());
      }
    }
  }

  return (
    <div className=" items-center mt-10 mb-10 w-3/4 ml-auto mr-auto">
      <div className="grid gap-6 mb-6 md:grid-cols-1">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:black text-center">
          Sign Up
        </h1>
        <div className="mb-6">
          <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-black text-center">
            Email address
          </div>
          <Input
            $type="email"
            $placeholder="dasha@gmail.com"
            $onDataChange={setEmail}
          />
          {errors?.email && (
            <div className="text-red-400 text-center">
              {errors?.email?._errors}
            </div>
          )}
        </div>
        <div className="mb-6">
          <div className="block mb-2  text-center text-sm font-medium text-gray-900 dark:text-black">
            Password
          </div>
          <Input $type="password" $onDataChange={setPassword} />
          {errors?.password && (
            <div className="">
              <div className="text-red-400 text-center">
                {errors?.password?._errors}
              </div>
            </div>
          )}
        </div>
        <div className="mb-6">
          <div className="block mb-2 text-sm text-center font-medium text-gray-900 dark:text-black">
            Confirm password
          </div>
          <Input
            $type="password"
            $onDataChange={(value) => {
              setRepeatPassword(value);
              setPasswordsMatch(true);
            }}
          />
          {!passwordsMatch && (
            <div className="text-red-400 text-center">
              Passwords do not match
            </div>
          )}
          {!userExist && (
            <div className="text-red-400 text-center">
              A user with this email exists
            </div>
          )}
        </div>
      </div>
      <Button $text="Sign Up" $handleOnClick={handleSignUp} />
      <div>
        <Button $text="Login" $to="/login" />
      </div>
    </div>
  );
}
