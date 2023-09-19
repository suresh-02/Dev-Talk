import React, { createContext, useState, useContext } from "react";
import axios from "axios";

export const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  const login = async (inputs) => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/auth/login",
        inputs
      );

      setCurrentUser(res.data);
    } catch (error) {
      // Handle errors here
      console.error("Login error:", error);
    }
  };

  const logout = async () => {
    try {
      await axios.post("http://localhost:3000/api/auth/logout");
      setCurrentUser(null);
    } catch (error) {
      // Handle errors here
      console.error("Logout error:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

//! Disqualified code.

// export const AuthContextProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(
//     JSON.parse(localStorage.getItem("user")) || null
//   );

//   const login = async (inputs) => {
//     try {
//       const res = await axios.post(
//         "http://localhost:3000/api/auth/login",
//         inputs
//       );
//       setCurrentUser(res.data);
//     } catch (error) {
//       // Handle errors here
//       console.error("Login error:", error);
//     }
//   };

//   const logout = async () => {
//     try {
//       await axios.post("http://localhost:3000/api/auth/logout");
//       setCurrentUser(null);
//     } catch (error) {
//       // Handle errors here
//       console.error("Logout error:", error);
//     }
//   };

//   useEffect(() => {
//     localStorage.setItem("user", JSON.stringify(currentUser));
//   }, [currentUser]);

//   return (
//     <AuthContext.Provider value={{ currentUser, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
