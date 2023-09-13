import React, { useState } from "react";
import logo from "../assets/logo.png";
import axios from "axios";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [err, setError] = useState(null);

  const handleChange = (e) => {
    let current = { [e.target.name]: e.target.value };
    setValues((prev) => ({ ...prev, ...current }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      axios
        .post("http://localhost:3000/api/auth/register", values)
        .then((res) => {
          console.log(res);
          navigate("/login");
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err); //! to see what is the error
      setError(err.response.data);
    }
  };

  return (
    <div className="flex flex-col gap-y-4  mt-[200px] justify-center items-center">
      <h2 className=" text-center text-2xl font-bold  tracking-tight text-gray-900">
        Register your account
      </h2>
      <img src={logo} alt="logo" />

      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 15,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          className="w-[400px]"
          onChange={handleChange}
          rules={[
            {
              required: true,
              message: "Please input your Email!",
            },
          ]}
        >
          <Input name="email" />
        </Form.Item>

        <Form.Item
          label="username"
          onChange={handleChange}
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input name="username" />
        </Form.Item>

        <Form.Item
          label="Password"
          onChange={handleChange}
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password name="password" />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button
            type="primary"
            className="w-[150px] bg-[#4076FF]"
            htmlType="submit"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;

// <div>
//   <div className="flex min-h-full flex-col justify-center px-6 py-32 lg:px-8">
//     <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//       <img className="mx-auto h-30 w-auto" src={logo} alt="Your Company" />
//       <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
//         Sign in to your Dev-Talk account
//       </h2>
//     </div>
//     <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//       <form className="space-y-6" action="#" method="POST">
//         <div>
//           <label
//             htmlFor="email"
//             className="block text-sm font-medium leading-6 text-gray-900"
//           >
//             Email address
//           </label>
//           <div className="mt-2">
//             <input
//               id="email"
//               name="email"
//               type="email"
//               autoComplete="email"
//               onChange={handleChange}
//               required
//               className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//             />
//           </div>
//         </div>
//         <div>
//           <div className="flex items-center justify-between">
//             <label
//               htmlFor="password"
//               className="block text-sm font-medium leading-6 text-gray-900"
//             >
//               Username
//             </label>
//           </div>
//           <div className="mt-2">
//             <input
//               id="username"
//               name="username"
//               type="text"
//               autoComplete="current-password"
//               onChange={handleChange}
//               required
//               className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//             />
//           </div>
//         </div>
//         <div>
//           <div className="flex items-center justify-between">
//             <label
//               htmlFor="password"
//               className="block text-sm font-medium leading-6 text-gray-900"
//             >
//               Password
//             </label>
//           </div>
//           <div className="mt-2">
//             <input
//               id="password"
//               name="password"
//               type="password"
//               required
//               className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//             />
//           </div>
//         </div>
//         <div>
//           {err && <p className="text-red-400">User already exist</p>}
//           <button
//             type="submit"
//             onClick={handleSubmit}
//             className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//           >
//             Sign in
//           </button>
//         </div>
//       </form>
//     </div>
//   </div>
// </div>
