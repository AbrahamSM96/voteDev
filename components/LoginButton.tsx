import { signIn } from "next-auth/react";
import React from "react";

export const LoginButton = () => {
  const handleClick = () => signIn("github");
  return (
    <button
      className="bg-black hover:bg-gray-100 text-white font-bold py-2 px-4 rounded inline-flex items-center"
      onClick={handleClick}
    >
      <img src="https://img.icons8.com/material-sharp/24/000000/github.png" />
      Iniciar sesión
    </button>
  );
};
