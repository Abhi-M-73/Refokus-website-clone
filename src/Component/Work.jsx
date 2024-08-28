import React, { useState } from "react";
import { motion, useScroll } from "framer-motion";

function Work() {
  const [images, setImages] = useState([
    {
      url: "https://images.unsplash.com/photo-1724562834244-795e00bb7eff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D",
      top: "50%",
      left: "50%",
      isActive: false,
    },

    {
      url: "https://images.unsplash.com/photo-1724562834182-4d4f9b579f93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D",
      top: "56%",
      left: "45%",
      isActive: false,
    },

    {
      url: "https://images.unsplash.com/photo-1724732658948-ee25cb5903b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8aG1lbnZRaFVteE18fGVufDB8fHx8fA%3D%3D",
      top: "45%",
      left: "56%",
      isActive: false,
    },

    {
      url: "https://images.unsplash.com/photo-1724396344968-87e8cd5024e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM3fGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D",
      top: "58%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1724396344976-0aee1f10740d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ2fGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D",
      top: "53%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1723822179858-c3685cc76f9c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUwfGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D",
      top: "65%",
      left: "55%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();
  scrollYProgress.on("change", (data) => {
    function ShowImages(arr) {
      setImages((prev) =>
        prev.map((elem, index) =>
          arr.indexOf(index) === -1
            ? {
                ...elem,
                isActive: false,
              }
            : { ...elem, isActive: true }
        )
      );
    }
    switch (Math.floor(data * 100)) {
      case 0:
        ShowImages([]);
        break;
      case 1:
        ShowImages([0]);
        break;
      case 2:
        ShowImages([0, 1]);
        break;
      case 3:
        ShowImages([0, 1, 2]);
        break;
      case 4:
        ShowImages([1, 2, 3]);
        break;
      case 6:
        ShowImages([1, 2, 3, 4]);
        break;
      case 8:
        ShowImages([1, 2, 3, 4, 5]);
        break;
    }
  });

  return (
    <div className="w-full font-sans">
      <div className="relative max-w-screen-xl mx-auto text-center">
        <h1 className="text-[35vw] font-mediumn select-none leading-none tracking-tighter text-white ">
          work
        </h1>
        <div className="absolute w-full h-full top-0 ">
          {images.map((elem, index) => {
            return (
              elem.isActive && (
                <img
                  className=" absolute w-60 h-60 rounded-lg -translate-x-[50%] -translate-y-[50%]" key={index}
                  style={{ top: elem.top, left: elem.left }}
                  src={elem.url}
                  alt=""
                />
              )
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Work;