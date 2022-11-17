import React from "react";

function Nopage() {
  return (
    <div className="lg:bg-[url('../public/neutral.png')] bg-cover w-screen h-screen flex flex-col justify-center items-center">
      <p className="text-8xl font-black text-green-800">404</p>
      <p className="text-4xl font-bold text-green-800">Page introuvable</p>
    </div>
  );
}

export default Nopage;
