import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const textVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const Content = () => {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();
  const controls5 = useAnimation();
  const controls6 = useAnimation();
  const controls7 = useAnimation();
  const controls8 = useAnimation();
  const controls9 = useAnimation();

  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [ref5, inView5] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [ref6, inView6] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [ref7, inView7] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [ref8, inView8] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [ref9, inView9] = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView1) controls1.start("visible");
    if (inView2) controls2.start("visible");
    if (inView3) controls3.start("visible");
    if (inView4) controls4.start("visible");
    if (inView5) controls5.start("visible");
    if (inView6) controls6.start("visible");
    if (inView7) controls7.start("visible");
    if (inView8) controls8.start("visible");
    if (inView9) controls9.start("visible");
  }, [
    controls1,
    inView1,
    controls2,
    inView2,
    controls3,
    inView3,
    controls4,
    inView4,
    controls5,
    inView5,
    controls6,
    inView6,
    controls7,
    inView7,
    controls8,
    inView8,
    controls9,
    inView9,
  ]);

  return (
    <div className="h-full bg-black w-full">
      <div className="flex w-full justify-center">
        <div className="w-[90vw] flex flex-col gap-10 items-center">
          <motion.p
            className="quote text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl mr-[10vw] sm:mr-[15vw] md:mr-[20vw] lg:mr-[25vw]"
            initial="hidden"
            animate={controls1}
            variants={textVariants}
            ref={ref1}
          >
            For the Students
          </motion.p>
          <motion.p
            className="quote text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl ml-[10vw] sm:ml-[15vw] md:ml-[20vw] lg:ml-[25vw]"
            initial="hidden"
            animate={controls2}
            variants={textVariants}
            ref={ref2}
          >
            By the Students
          </motion.p>
        </div>
      </div>
      <div className="w-[90vw] ml-[5vw]">
        <div className="min-h-[50%] flex flex-row flex-nowrap mt-28 gap-6">
          <div className="flex flex-col">
            <motion.p
              className="quote text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl"
              initial="hidden"
              animate={controls3}
              variants={textVariants}
              ref={ref3}
            >
              Supporting
            </motion.p>
            <motion.p
              className="quote text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl"
              initial="hidden"
              animate={controls4}
              variants={textVariants}
              ref={ref4}
            >
              Young
            </motion.p>
            <motion.p
              className="quote text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl"
              initial="hidden"
              animate={controls5}
              variants={textVariants}
              ref={ref5}
            >
              Entrepreneurs
            </motion.p>
          </div>
          <div className="bg-white min-h-full w-full rounded-lg">
            {/* Additional content can go here */}
          </div>
        </div>
        <div className="flex flex-row mt-20 items-end">
          <div className="bg-white min-h-full w-full rounded-lg">
            {/* Additional content can go here */}
          </div>
          <div>
            <div className="items-start">
              <motion.p
                className="quote text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl"
                initial="hidden"
                animate={controls6}
                variants={textVariants}
                ref={ref6}
              >
                At
              </motion.p>
              <motion.p
                className="quote text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl"
                initial="hidden"
                animate={controls7}
                variants={textVariants}
                ref={ref7}
              >
                Every
              </motion.p>
              <motion.p
                className="quote text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl"
                initial="hidden"
                animate={controls8}
                variants={textVariants}
                ref={ref8}
              >
                Step
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
