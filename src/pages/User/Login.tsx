import { useState } from "react";
import { Form } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: any) {
    e.preventDefault();
    const fd = new FormData(e.target);
    const uname = fd.get("username") as string;
    const pwd = fd.get("password") as string;
    setUsername(uname)
    setPassword(pwd)
  }

  return (
    <main className="p-8 flex flex-col gap-[2rem]">
      <h2>Login</h2>
      <Form onSubmit={handleSubmit} className="self-center justify-center flex flex-col align-middle gap-[2rem]" action="">
        <div className="flex flex-col">
          <input
            name="username"
            required
            className="outline-0 filter-box "
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="input-bar-form">
          <input
            name="password"
            required
            className="outline-0 filter-box"
            type="password"
            placeholder="Password"
            minLength={8}
          />
        </div>
        <div className="login-btn">
          <button className="outline-0 border-0 cursor-pointer bg-[#ffbb54] p-8 w-full rounded-[1rem]" type="submit">
            Log in
          </button>
        </div>
      </Form>
    </main>
  );
};

export default Login;
