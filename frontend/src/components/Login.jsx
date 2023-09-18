import logo from "../assets/logo.png";
import React, { useContext, useState } from "react";
import { Button, Form, Input } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/authContext";
import { useAuth } from "../context/authContext";

const Login = () => {
  const [values, setValues] = useState({
    username: "",
    Password: "",
  });

  const navigate = useNavigate();
  const { login } = useAuth();

  const onFinish = (values) => {
    handleSubmit();
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const [err, setError] = useState(null);

  const handleChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    // try {
    //   axios
    //     .post(login(values))
    //     .then((res) => {
    //       console.log(res);
    //       navigate("/");
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // } catch (err) {
    //   console.log(err);
    // }
    try {
      await login(values);
      navigate("/");
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="flex flex-col gap-y-4  mt-[200px] justify-center items-center">
      <h2 className=" text-center text-2xl font-bold  tracking-tight text-gray-900">
        Log in to your account
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
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          onChange={handleChange}
          className="w-[400px]"
          name="username"
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
          name="password"
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
          {err && <p>{setError}</p>}
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
export default Login;

// ! disqualified code

// import { Link } from "react-router-dom";

// const Login = () => {
//   return (
//     <div>
//       <div className="flex min-h-full flex-col justify-center px-6 py-32 lg:px-8">
//         <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//           <img className="mx-auto h-30 w-auto" src={logo} alt="Your Company" />
//           <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
//             Sign in to your Dev-Talk account
//           </h2>
//         </div>

//         <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//           <form className="space-y-6" action="#" method="POST">
//             <div>
//               <label
//                 for="email"
//                 className="block text-sm font-medium leading-6 text-gray-900"
//               >
//                 Email address
//               </label>
//               <div className="mt-2">
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   autocomplete="email"
//                   required
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div>
//               <div className="flex items-center justify-between">
//                 <label
//                   for="password"
//                   className="block text-sm font-medium leading-6 text-gray-900"
//                 >
//                   Password
//                 </label>
//                 {/* <div className="text-sm">
//                   <a
//                     href="#"
//                     className="font-semibold text-indigo-600 hover:text-indigo-500"
//                   >
//                     Forgot password?
//                   </a>
//                 </div> */}
//               </div>
//               <div className="mt-2">
//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   autocomplete="current-password"
//                   required
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//               >
//                 Sign in
//               </button>
//             </div>
//           </form>

//           <p className="mt-10 text-center text-sm text-gray-500">
//             Not a member?
//             <Link
//               className="font-semibold leading-6 mx-2 text-indigo-600 hover:text-indigo-500"
//               to="/register"
//             >
//               <h3>Register</h3>
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
