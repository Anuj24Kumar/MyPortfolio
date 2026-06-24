import React from "react";
import { motion } from "framer-motion";

import code from "../../assets/code.png";
import database from "../../assets/database.png";
import html from "../../assets/html.png";
import nodejs from "../../assets/nodejs.png";

function Skill() {
  const skills = [
   
    {
      title: "Frontend",
      image: html,
      items: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      title: "Backend",
      image: nodejs,
      items: ["Node.js", "Express.js"],
    },
    {
      title: "Database & Tools",
      image: database,
      items: ["MongoDB", "Git", "GitHub"],
    },
  ];

  return (
    <div className="px-6 md:px-12 py-12">

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl font-bold text-center mb-12 text-[#443199]"
      >
        Skills
      </motion.h1>

      <div className="flex justify-center gap-8 flex-wrap">

        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
            }}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            className="w-80 min-h-72 shadow-xl rounded-xl p-6 border-t-4 border-[#C13383] bg-white"
          >
            <motion.img
              src={skill.image}
              alt={skill.title}
              className="w-16 h-16 mx-auto"
              whileHover={{
                scale: 1.2,
                rotate: 5,
              }}
            />

            <h2 className="text-2xl font-bold text-center mt-4 mb-6 text-[#443199]">
              {skill.title}
            </h2>

            <div className="flex flex-wrap justify-center gap-3">

              {skill.items.map((item, idx) => (
                <motion.h4
                  key={idx}
                  whileHover={{
                    scale: 1.1,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="bg-[#F4EEFF] text-[#443199] rounded-full shadow-md px-4 py-2 font-medium cursor-pointer"
                >
                  {item}
                </motion.h4>
              ))}

            </div>

          </motion.div>
        ))}

      </div>

    </div>
  );
}

export default Skill;