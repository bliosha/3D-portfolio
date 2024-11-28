import { motion } from "framer-motion";
import { styles } from "../style";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
    return (
        <section className={`relative w-full h-screen mx-auto`}>
            <div
                className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
                <div className='mt-5 flex flex-col items-center justify-center'>
                    <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
                    <div className='w-1 h-40 violet-gradient sm:h-80' />
                </div>
                <div>
                    <h1 className={`${styles.heroHeadText} text-white`}>
                        Hi, I'm <span className='text-[#915EFF]'>Oleksii</span>
                    </h1>
                    <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                        I develop 3D visuals, user <br className='hidden sm:block' />
                        interfaces and web applications
                    </p>
                </div>
            </div>
            <ComputersCanvas />
            <div className='bottom-32 absolute flex w-full items-center justify-center xs:bottom-10'>
                <a href='#about'>
                    <div className='border-secondary p-2 flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4'>
                        <motion.div
                            animate={{
                                y: [0, 24, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                            className='w-3 h-3 bg-secondary mb-1 rounded-full'
                        />
                    </div>
                </a>
            </div>
        </section>
    );
};
export default Hero;