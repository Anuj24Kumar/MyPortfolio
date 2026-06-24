import React from "react";
import { motion } from "framer-motion";
import profilepic from "../../assets/profilepic.png";

function About() {
  return (
    <div>

      
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-center mb-12 mt-6 text-[#443199]"
      >
        About Me
      </motion.h1>

      <div className="flex flex-col items-center justify-center gap-8 px-6 md:px-12">

        <div className="max-w-2xl text-center">

          <motion.img
            src={profilepic}
            alt="about pic"
            className="w-60 h-60 md:h-80 md:w-80 mx-auto rounded-full border-4 border-[#792CA2] "
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />

          <motion.h2
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl md:text-4xl font-bold mt-6 mb-6 text-[#792CA2]"
          >
            Hello! I'm Anuj Kumar
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-gray-600 leading-8"
          >
            Hi, I'm Anuj! I am an enthusiastic and detail-oriented Full Stack
            Developer student constantly exploring the latest web technologies.
            My goal is to craft high-performance applications that solve
            real-world problems while delivering exceptional user experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="w-full max-w-[700px] shadow-xl border-l-4 border-[#792CA2] mt-8 p-8 rounded-xl"
          >
            <div className="flex items-start gap-4">

              <span className="material-symbols-outlined text-8xl text-[#C13383]">
                school
              </span>

              <div className="flex flex-col gap-2 text-left">

                <h2 className="text-2xl font-bold text-[#443199]">
                  B.Tech in Computer Science
                </h2>

                <p>
                  Sagar Institute of Research & Technology (SIRT)
                </p>

                <p>
                  Batch: 2023 – 2027
                </p>

              </div>

            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="w-full max-w-[700px] shadow-xl border-l-4 border-[#C13383] mt-6 p-8 rounded-xl mb-4"
          >
            <h2 className="text-2xl font-bold mb-4 text-[#443199]">
              Career Goal
            </h2>

            <p className="text-gray-600">
              To become a proficient Full Stack Engineer contributing to
              impactful open-source projects and innovative tech products
              that shape the future.
            </p>
          </motion.div>

        </div>

      </div>

    </div>
  );
}

export default About;