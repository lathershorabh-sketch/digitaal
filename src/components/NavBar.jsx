
import { useState } from 'react'
import Button from './common/Button'
import { Menu, X } from 'lucide-react'
const navlinks = ["Home","Services","Contact us","About","Pages"]
const NavBar = () => {

  const [open, setOpen] = useState(false);
  return (
    <>
    <nav className='max-w-285 w-full mx-auto flex justify-between  text-white items-center py-5 lg:py-0 px-5 xl:px-0 '>
        <div className=''>
            <a  href="#"><img className='max-w-35 md:max-w-47 w-full' src="./src/assets/png/logo.png" alt="hhjg" /></a>
        </div>
        <div className=' gap-10 hidden lg:flex'>
            {navlinks.map((obj,i)=>(
            <a key={i} href="#">
             {obj}
            </a>
            ))}
        </div>
        <div className='hidden lg:flex'>
          <Button  text={"Get Started"}/>
        </div>
        <button onClick={()=>setOpen(!open)} className='lg:hidden relative z-40'> {open ?<X />: <Menu />}</button>
        <div className={` fixed  inset-0 bg-[rgb(191_247_71)] z-30 duration-500 transition-all ${ open ? "translate-y-0" :"-translate-y-full"}`}>
          <div className='flex justify-center flex-col gap-6 text-center w-full text-black text-3xl  min-h-screen  '>
            {navlinks.map((items , i)=> (
              <a className='text-black' key={i} href="">{items}</a>
            ))}
          </div>
        </div>
    </nav>
    </>
  )
}

export default NavBar