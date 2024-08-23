import React from "react";
import Stripe from "./Stripe";

function Stripes() {
  var data = [
    {
      ulr: "abs",
      number: 48,
    },
    {
      ulr: "ssxs",
      number: 11,
    },
    {
      ulr: "zmnxsmnxsk",
      number: 2,
    },
    {
      ulr: "zmnxsmnxsk",
      number: 48,
    },
    {
      ulr: "zmnxsmnxsk",
      number: 11,
    },
    {
      ulr: "zmnxsmnxsk",
      number: 2,
    },
  ];
  
  return (
    <div className="w-full flex mt-12 text-white font-semibold ">
      {data.map((elem, index) => (<Stripe key={index} val={elem} />
      ))}
    </div>
  );
}

export default Stripes;