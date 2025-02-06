import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Mail, Phone, User, MessageCircle } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "emailjs-com";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [captchaValid, setCaptchaValid] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        "your_service_id",   
        "your_template_id",  
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
        },
        "your_public_key"    
      );
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        reset();
      }, 3000);
    } catch (error) {
      console.error("Email sending failed:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 px-4 sm:px-6 py-10">
        <motion.div
          className="w-full max-w-md sm:max-w-lg p-6 sm:p-8 bg-white rounded-2xl shadow-2xl border border-purple-300 my-10 sm:my-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-purple-700 text-center mb-4 sm:mb-6">
            Get in Touch 🚀 
          </h2>

          {submitted && (
            <motion.div
              className="bg-green-100 text-green-700 py-2 px-4 rounded-md text-center mb-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              🎉 Thank you! We'll get back to you soon.
            </motion.div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-5">
            <div className="relative">
              <User className="absolute left-3 top-3 text-purple-500" />
              <input
                type="text"
                placeholder="Your Name"
                {...register("name", { required: "Name is required" })}
                className="w-full pl-10 p-3 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all text-sm sm:text-base"
              />
              {errors.name && (
                <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            <div className="relative">
              <Mail className="absolute left-3 top-3 text-purple-500" />
              <input
                type="email"
                placeholder="Your Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Invalid email address",
                  },
                })}
                className="w-full pl-10 p-3 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all text-sm sm:text-base"
              />
              {errors.email && (
                <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div className="relative">
              <Phone className="absolute left-3 top-3 text-purple-500" />
              <input
                type="tel"
                placeholder="Your Phone Number"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Enter a valid 10-digit number",
                  },
                })}
                className="w-full pl-10 p-3 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all text-sm sm:text-base"
              />
              {errors.phone && (
                <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>

            <div className="relative">
              <MessageCircle className="absolute left-3 top-3 text-purple-500" />
              <textarea
                placeholder="Your Message"
                {...register("message", { required: "Message is required" })}
                className="w-full pl-10 p-3 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all h-24 sm:h-28 resize-none text-sm sm:text-base"
              />
              {errors.message && (
                <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.message.message}</p>
              )}
            </div>

            <motion.button
              type="submit"
              className="w-full p-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition-all focus:ring-4 focus:ring-purple-300 flex justify-center items-center gap-2 text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Send Message"}
            </motion.button>
          </form>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default ContactForm;
