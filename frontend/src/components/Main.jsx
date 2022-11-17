import React from "react";

export default function Main() {
  return (
    <div className="bg-red-600 w-full h-11/12 flex ">
      <div className="bg-[url('../public/Messenger-pana.png')] bg-cover w-2/4 h-screen"></div>
      <div className="text-white mt-56 font-mono">
        <h1 className="font-black  text-6xl mb-3">Marhaba Site de Livraison</h1>
        <h3 className="text-3xl font-semibold  mb-2">
          Chercher le livreur que vous voulez
        </h3>
        <p>
          Les produits sont livrés à l'heure quand vous voulez ou vous voulez
          24/7
        </p>
      </div>
    </div>
  );
}
