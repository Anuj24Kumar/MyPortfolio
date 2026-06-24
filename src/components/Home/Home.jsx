import React from "react";
import { motion } from "framer-motion";
import mypic from "../../assets/profilepic.png";

function Home() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-12 py-16">
     

      <div>
        <motion.div
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        >
          <img
            src={mypic}
            alt="profile"
            className="w-60 h-60 md:w-80 md:h-80 mt-8 md:mt-0 rounded-full border-4 border-[#792CA2] shadow-2xl"
          />
        </motion.div>
      </div>

      
      <div>
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold"
        >
          Hi, I'm
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-bold mt-2 text-[#443199]"
        >
          Anuj Kumar
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-2xl md:text-3xl mt-4 text-[#792CA2]"
        >
          Computer Science Student | Full Stack Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="text-lg mt-6 text-gray-600 leading-8"
        >
          I am a passionate aspiring software engineer
          <br />
          who loves building intuitive and scalable web applications.
          <br />I transform ideas into elegant, modern, and user-friendly
          digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="flex gap-4 mt-8"
        >
          <button className="bg-[#C13383] text-white px-6 py-3 rounded-lg hover:bg-[#E05454] transition">
            View Projects
          </button>

          <button className="border-2 border-[#443199] text-[#443199] px-6 py-3 rounded-lg hover:bg-[#443199] hover:text-white transition">
            Contact Me
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
