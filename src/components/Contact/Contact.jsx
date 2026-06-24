import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <div className="px-6 md:px-12 py-12">

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl font-bold text-center text-[#443199] mb-12"
      >
        Get In Touch
      </motion.h1>

      <div className="flex flex-col lg:flex-row justify-center gap-8">

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-[350px] shadow-xl rounded-xl p-6 border-l-4 border-[#792CA2]"
        >
          <h2 className="text-2xl font-bold text-[#443199] mb-6">
            Contact Information
          </h2>

          <div className="space-y-4">

            <div>
              <h3 className="font-semibold text-[#C13383]">
                Email
              </h3>
              <p className="text-gray-600">
                anujjaiswal725041@gmail.com
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-[#C13383]">
                Phone
              </h3>
              <p className="text-gray-600">
                +91 7250414999
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-[#C13383]">
                Location
              </h3>
              <p className="text-gray-600">
                Bhopal, Madhya Pradesh
              </p>
            </div>

          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-[700px] shadow-xl rounded-xl p-8 border-t-4 border-[#C13383]"
        >

          <input
            type="text"
            placeholder="Enter Your Name"
            className="w-full border border-[#792CA2] p-3 mb-4 rounded-lg outline-none focus:ring-2 focus:ring-[#792CA2]"
          />

          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full border border-[#792CA2] p-3 mb-4 rounded-lg outline-none focus:ring-2 focus:ring-[#792CA2]"
          />

          <textarea
            rows="5"
            placeholder="Enter Your Message"
            className="w-full border border-[#792CA2] p-3 mb-4 rounded-lg outline-none focus:ring-2 focus:ring-[#792CA2]"
          ></textarea>

          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="w-full bg-[#C13383] text-white py-3 rounded-lg hover:bg-[#E05454] transition"
          >
            Send Message
          </motion.button>

        </motion.div>

      </div>

    </div>
  );
}

export default Contact;