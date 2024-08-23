import React from "react";

function Stripe({ val }) {
  return (
    <div className="w-[16.66%] flex items-center justify-between px-10 py-5 border-t-[1.5px] border-zinc-600 border-r-[1.5px] border-b-[1.5px] text-white ">
      <span className="text-white text-xl uppercase font-sans">{val.ulr}</span>
      <span className="font-semibold">{val.number}</span>
    </div>
  );
}

export default Stripe;