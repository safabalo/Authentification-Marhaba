import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <Main />
    </div>
  );
}
