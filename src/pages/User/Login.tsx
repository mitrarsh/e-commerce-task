import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Form, redirect } from "react-router-dom";
import { loginUser, type LoginPayload } from "../../utils/auth";
import LoadingIndicator from "../../components/UI/Loadingindicator";
import ErrorBlock from "../../components/UI/ErrorBlock";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg]=useState("")


  //handling login request

  const{mutate, isError, error, isPending}=useMutation({
    mutationFn:(payload:LoginPayload)=>loginUser(payload),
    onSuccess:(data)=>{
        localStorage.setItem("token", data.token);
        alert("Login successfull");
        redirect ('/')
    }
  })


  //submitting form submit

  function handleSubmit(e: any) {
    e.preventDefault();
    const fd = new FormData(e.target);
    const uname = fd.get("username") as string;
    const pwd = fd.get("password") as string;
    setUsername(uname)
    setPassword(pwd)
    mutate({username,password})
  }


  //handling error and loading state
  
    if (isPending) {
      return <LoadingIndicator />;
    }
    if (isError) {
      const message =
        error instanceof Error ? error.message : "Something went wrong";
      return <ErrorBlock title="Fetching Error" message={message} />;
    }

  return (
    <main className="p-8 flex flex-col gap-[2rem]">
      <h2>Login</h2>
      <Form onSubmit={handleSubmit} className="self-center justify-center flex flex-col align-middle gap-[2rem] w-full md:w-[50%]" action="">
        <div className="flex flex-col">
          <input
            name="username"
            required
            className="outline-0 filter-box "
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="flex flex-col">
          <input
            name="password"
            required
            className="outline-0 filter-box"
            type="password"
            placeholder="Password"
            minLength={8}
          />
        </div>
        <p className="errorMsg">{errorMsg}</p>
        <div className="login-btn">
          <button className="outline-0 border-0 cursor-pointer bg-[#ffbb54] p-8 w-full rounded-[1rem]" type="submit">
            <h3>Log In</h3>
          </button>
        </div>
      </Form>
    </main>
  );
};

export default Login;
