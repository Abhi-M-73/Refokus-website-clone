import { motion } from "framer-motion";
import React from "react";

function Marquee({ url, direction }) {
  return (
    <motion.div className="flex w-full  overflow-hidden ">
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ease:"linear" ,duration:15, repeat:Infinity}}
        className="flex flex-shrink-0 gap-40 py-10 pr-40"
      >
        {url.map((elem, index) => (
          <img key={index} src={elem} className="h-5" />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ease:"linear" ,duration:15, repeat:Infinity}}

        className="flex flex-shrink-0 gap-40 py-10 pr-40"
      >
        {url.map((elem, index) => (
          <img key={index} src={elem} className="h-5" />
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Marquee;