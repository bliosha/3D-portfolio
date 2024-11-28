import { Tilt } from 'react-tilt'
import { motion } from "framer-motion";
import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ title, icon, index }) => {
    return (
        <Tilt>
            <motion.div
                variants={fadeIn("right", "spring", index * 0.5, 0.75)}
                className='green-pink-gradient shadow-card w-full rounded-[20px] p-[1px]'>
                <div
                    options={{
                        max: 45,
                        scale: 1,
                        speed: 450,
                    }}
                    className='bg-tertiary py-5 px-12 flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px]'>
                    <img
                        src={icon}
                        alt='web-development'
                        className='w-16 h-16 object-contain'/>
                    <h3 className='text-white text-center font-bold text-[20px]'>
                        {title}
                    </h3>
                </div>
            </motion.div>
        </Tilt>
    )
}

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className='mt-4 text-secondary leading-[30px] max-w-3xl text-[17px]'>
                I'm a skilled software developer with experience in TypeScript and
                JavaScript, and expertise in frameworks like React, Node.js, and
                Three.js. I'm a quick learner and collaborate closely with clients to
                create efficient, scalable, and user-friendly solutions that solve
                real-world problems. Let's work together to bring your ideas to life!
            </motion.p>
            <div className='mt-20 gap-10 flex flex-wrap'>
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </>
    )
}
export default SectionWrapper(About,"about");