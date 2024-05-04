
import './App.css'
import { motion} from 'framer-motion'


function App() {

  const text = 'Abdalla Elhagar'

  const pVariants = {
    hidden:{
      opacity:0,
    },
    visible:{
      opacity:1,
      transition:{
        staggerChildren: 0.1,
      }
    }
  }
  const spanVariants = {
    hidden:{
      opacity:0,
    },
    visible:{
      opacity:1,
      
    }
  }

  return (
 <div className='flex w-screen min-h-screen bg-slate-600 text-white '>
    <motion.p className='top-1/2 left-1/2 absolute text-3xl ' variants={pVariants} initial='hidden' animate='visible' >
      {
        text.split('').map((char,index) => 
          <motion.span key={index} variants={spanVariants} >{char}</motion.span>
        )
      }
    </motion.p>
 </div>
  )
}
export default App
