import { PROFILE } from "../constants";
import profilePic from "../assets/robertButcher1.jpg";
import { motion } from "framer-motion";
const HeroSection = () => {
  return (
    <>
      <div
        className="relative flex min-h-screen items-end justify-center "
        id="hero"
      >
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          src={profilePic}
          alt=""
          className="absolute h-full w-full inset-0 z-10 object-cover"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-10 bg-gradient-to-b from-transparent from-60% to-black lg:from-30%"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="z-20 mx-4 max-w-3xl pb-20"
        >
          <h1 className="text-5xl font-semibold uppercase tracking-wide md:text-7xl">
            {PROFILE.name}
          </h1>
          <p className="p-2 font-semibold">{PROFILE.info}</p>
        </motion.div>
      </div>
    </>
  );
};

export default HeroSection;
