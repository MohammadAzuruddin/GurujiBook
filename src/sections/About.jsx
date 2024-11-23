import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import fBall from "../assets/booky/footBall.png";
import batNball from "../assets/booky/batNball.png";
import horseRacing from "../assets/booky/horse-racing.png";
import dragonTiger from "../assets/booky/poker.png";

const About = () => {
  const controlsText = useAnimation();
  const controlsImage = useAnimation();

  // Create separate controls for each image animation
  const controlsFirstImage = useAnimation();
  const controlsSecondImage = useAnimation();
  const controlsThirdImage = useAnimation();
  const controlsFourthImage = useAnimation();

  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const { ref: firstImageRef, inView: firstImageInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  const { ref: secondImageRef, inView: secondImageInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  const { ref: thirdImageRef, inView: thirdImageInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  const { ref: fourthImageRef, inView: forthImageInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  useEffect(() => {
    if (textInView) {
      controlsText.start({ opacity: 1, x: 0, transition: { duration: 0.8 } });
    } else {
      controlsText.start({ opacity: 0, x: -50, transition: { duration: 0.8 } });
    }
  }, [textInView, controlsText]);

  useEffect(() => {
    if (imageInView) {
      controlsImage.start({ opacity: 1, x: 0, transition: { duration: 0.8 } });
    } else {
      controlsImage.start({
        opacity: 0,
        x: 50,
        transition: { duration: 0.8 },
      });
    }
  }, [imageInView, controlsImage]);

  useEffect(() => {
    if (firstImageInView) {
      controlsFirstImage.start({
        opacity: 1,
        x: 150,
        transition: { duration: 1 },
      });
    } else {
      controlsFirstImage.start({
        opacity: 0,
        x: -100,
        transition: { duration: 1 },
      });
    }
  }, [firstImageInView, controlsFirstImage]);

  useEffect(() => {
    if (secondImageInView) {
      controlsSecondImage.start({
        opacity: 1,
        x: -180,
        transition: { duration: 1 },
      });
    } else {
      controlsSecondImage.start({
        opacity: 0,
        x: -100,
        transition: { duration: 1 },
      });
    }
  }, [secondImageInView, controlsSecondImage]);

  useEffect(() => {
    if (thirdImageInView) {
      controlsThirdImage.start({
        opacity: 1,
        x: -30,
        transition: { duration: 1 },
      });
    } else {
      controlsThirdImage.start({
        opacity: 0,
        x: 100,
        transition: { duration: 1 },
      });
    }
  }, [thirdImageInView, controlsThirdImage]);

  useEffect(() => {
    if (forthImageInView) {
      controlsFourthImage.start({
        opacity: 1,
        rotate: 360,
        transition: { duration: 2, ease: "easeInOut" },
      });
    } else {
      controlsFourthImage.start({
        opacity: 0,
        rotate: 0,
        transition: { duration: 2, ease: "easeInOut" },
      });
    }
  }, [forthImageInView, controlsFourthImage]);

  return (
    <div className="flex flex-col lg:flex-row items-center lg:justify-between px-4 md:px-8 lg:px-24 bg-gradient-to-br from-slate-700 to-orange-950 via-gray-900 text-white-400 ">
      <motion.div
        ref={textRef}
        initial={{ opacity: 0, x: -50 }}
        animate={controlsText}
        className="flex-1 max-w-lg lg:max-w-none w-full text-center lg:text-left lg:pr-8 mb-8 lg:mb-0"
      >
        <div className="flex flex-col items-center lg:items-center justify-center mt-4">
          <h1 className="text-4xl sm:text-6xl font-bold ml-8">
            <span className="text-blue-600 hover:text-yellow-600">Who </span>
            <span className="text-white-400">We </span>
            <span className="text-red-800 hover:text-yellow-600">Are</span>
            <span className="text-white-400">?</span>
          </h1>
          <h2 className="font-montserrat text-center text-gray-400 text-lg leading-8 mb-8 sm:max-w-sm">
            Unlock Your Ultimate Gaming Experience with Guruji-book!
          </h2>
          <p className="font-palanquin text-center text-slate-gray text-lg leading-8 mt-2 mb-2 sm:max-w-sm">
            At Guruji-book, we are your trusted partner for everything related
            to fantasy gaming. As a leading ID promoter, we excel in providing
            exclusive sports IDs for various online games, from cricket and
            football to a wide array of other thrilling sports.
          </p>
          <p className="font-palanquin text-center text-slate-gray text-lg leading-8 mt-2 mb-2 sm:max-w-sm">
            Join a vibrant community of over 50,000 players who trust
            Guruji-book to elevate their gaming experience. Dive into the action
            with our unique sports IDs and explore a world of fun, competition,
            and endless possibilities!
          </p>
        </div>
      </motion.div>

      <motion.div
        ref={imageRef}
        initial={{ opacity: 0, x: 50 }}
        animate={controlsImage}
        className="flex-1 max-w-xl lg:max-w-lg w-full flex items-center justify-center lg:justify-end mb-4"
      >
        <div className="grid grid-cols-2 gap-4 mt-4">
          <motion.img
            ref={firstImageRef}
            src={horseRacing}
            alt="horse-racing"
            className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-lg object-cover"
            initial={{ opacity: 0, x: -100 }}
            animate={controlsFirstImage}
          />
          <motion.img
            ref={secondImageRef}
            src={batNball}
            alt="bat-ball"
            className="w-24 h-24 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-44 lg:h-44 rounded-lg object-cover"
            initial={{ opacity: 0, x: -100 }}
            animate={controlsSecondImage}
          />
          <motion.img
            ref={thirdImageRef}
            src={fBall}
            alt="football"
            className="w-24 h-24 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-44 lg:h-44 rounded-lg object-cover"
            initial={{ opacity: 0, x: 100 }}
            animate={controlsThirdImage}
          />
          <motion.img
            ref={fourthImageRef}
            src={dragonTiger}
            alt="poker"
            className="w-24 h-24 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-44 lg:h-44 rounded-lg object-cover"
            animate={controlsFourthImage}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default About;
