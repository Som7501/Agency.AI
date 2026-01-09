import assets, { servicesData } from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'
import { motion } from "motion/react"

const Services = () => {
  return (
    <motion.div 
    initial="hidden"
    whileInView="visible"
    transition={{staggerChildren: 0.2}}
    viewport={{once: true}}
    id='services'
    className='relative flex flex-col items-center gap-7
    px-4 sm:px-12 lg:px-24 xl:px-40 placeholder-teal-300
     text-gray-700 dark:text-white mt-30'>

        <img src={assets.bgImage2} className='absolute -top-110
        -left-70 -z-1 dark:hidden' />

        <Title title="How can we help?"
        desc="From strategy to execution, we craft digital solutions that
        move your business forward."/>

       <div className='grid grid-cols-1 md:grid-cols-2 auto-rows-fr gap-6'>
        {servicesData.map((service, index)=>(
          <ServiceCard key={index} service={service} index={index}/>
        ))}
       </div>
 
    </motion.div>
    
  )
}

export default Services