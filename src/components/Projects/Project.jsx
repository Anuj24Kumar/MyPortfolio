import React from "react";
import { motion } from "framer-motion";

function Project() {
  const projects = [
    {
      title: "Hospital Management",
      description:
        "Developed a Hospital Management System to manage patients, doctors, appointments, and medical records efficiently through a user-friendly interface.",
    },
    {
      title: "Spotify Clone",
      description:
        "Built a responsive Spotify Clone with music browsing, playlist UI, and modern design to replicate the core Spotify experience.",
    },
    {
      title: "Swiggy Clone",
      description:
        "Created a food delivery web application inspired by Swiggy, featuring restaurant listings, menu browsing, and responsive user interfaces.",
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
        Projects
      </motion.h1>

      <div className="flex justify-center gap-8 flex-wrap">

        {projects.map((project, index) => (
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
              scale: 1.05,
            }}
            className="w-80 min-h-72 shadow-xl rounded-xl p-6 border-t-4 border-[#792CA2] bg-white cursor-pointer"
          >
            <h2 className="text-2xl font-bold mb-4 text-[#443199]">
              {project.title}
            </h2>

            <p className="text-gray-600 leading-7">
              {project.description}
            </p>

            <button className="mt-6 bg-[#C13383] text-white px-4 py-2 rounded-lg hover:bg-[#E05454] transition">
              View Project
            </button>
          </motion.div>
        ))}

      </div>

    </div>
  );
}

export default Project;