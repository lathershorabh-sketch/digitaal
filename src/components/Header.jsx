import Button from './common/Button'
import NavBar from './NavBar'

const Header = () => {
  return (
    <>
    <section className='w-full h-full bg-center bg-[url(./src/assets/png/background.png)] bg-no-repeat bg-cover pb-10 lg:pb-27.25' >
        <NavBar/>
        <hr className='text-[#414141]'/>
        <div data-aos="fade-down">
            <h1 className='h-57.5 text-center lg:text-start text-[36px] md:text-[45px] lg:text-[50px] xl:text-[70px] 2xl:text-[96px]  mx-auto xl:mx-46.5 max-w-230 xl:max-w-274 w-fit xl:w-full mt-16 lg:mt-35.5 leading-[120%] font-bold'><span className='text-white'>Innovative solutions for</span> <span className='text-[#BFF747]'>Digital World</span></h1>
            <div className='flex flex-col lg:flex-row justify-center items-center gap-0 lg:gap-15 xl:gap-20 ml-auto 2xl:ml-98.5 mr-auto 2xl:mr-37.5'>
                <span className='mt-10 lg:mt-0'>
                    <img className='max-w-26' src="./src/assets/png/Group.png" alt="group" />
                </span>
                <div>
                    <p className='text-[#FFFFFF] text-[18px] lg:text-[24px] max-w-120 lg:max-w-140 xl:max-w-171 w-full mt-7 text-center lg:text-start px-5 lg:px-0'>At our Creative Digital Agency, we bring your ideas to life by crafting engaging, impactful digital experiences that captivate audiences and drive results. </p>
        <div className='w-fit mx-auto lg:mx-0 text-white'><Button  text={"Get In Touch"} /></div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Header