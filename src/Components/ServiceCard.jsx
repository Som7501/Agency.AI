import { useRef, useState } from "react";
import { motion } from "motion/react"


const ServiceCard = ({service, index}) => {

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false)

  const divRef = useRef(null)

  const handleMouseMove = (e)=>{
    const bounds = divRef.current.getBoundingClientRect();
    setPosition({x: e.clientX - bounds.left, y: e.clientY - bounds.top})
  }

  return (
    <motion.div
    initial={{opacity: 0, y: 30}}
    whileInView={{opacity: 1, y: 0}}
    transition={{duration: 0.5, delay: index * 0.2}}
    viewport={{once: true}}
    className="relative overflow-hidden max-w-lg m-2 sm:m-4
     rounded-xl shadow-2xl shadow-gray-200 border border-gray-100 dark:border-none
      dark:shadow-white/10 h-fit self-start p-0.5"
    onMouseEnter={()=> setVisible(true)} onMouseLeave={()=> setVisible(false)}
    ref={divRef} onMouseMove={handleMouseMove}>
      
      <div
        className={`pointer-events-none blur-xl rounded-full bg-linear-to-r
        from-blue-500 via-indigo-500 to-purple-500 w-75 h-75
        absolute z-0 transition-opacity duration-500 border dark:border-gray-800
        ${visible ? "opacity-100" : "opacity-0"}`}
        style={{ top: position.y - 150, left: position.x - 150 }}
      />

        <div
        className="flex items-center gap-10 p-8 bg-white rounded-[10px]
           dark:bg-gray-900 z-10 relative h-full w-full transition-all hover:scale-[1]
            hover:shadow-xl"
      >
          {/* Left Side image   */}
          <div
            key={index}
            className="bg-gray-100 dark:bg-gray-700 rounded-full"
          >
            <img
              src={service.icon}
              className="max-w-24 bg-white dark:bg-gray-900 rounded-full m-2"
            />
          </div>
          {/* Right side text */}
          <div key={index} className="flex-1">
            <h3 className="font-bold">{service.title}</h3>
            <p className="text-sm mt-2 text-gray-400">{service.description}</p>
          </div>

        </div>
      
    </motion.div>
  );
};

export default ServiceCard;
