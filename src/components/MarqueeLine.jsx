import Marquee from "react-fast-marquee"

const marquee = [
    "Digital Marketing",
    "Strategy Consulting",
    "Analytics & Reporting",
    "Custom Branding",
]

const MarqueeLine = () => {
  return (
    <>
    <Marquee >
        {marquee.map((obj ,i)=> (
            <div className="flex items-center gap-7 bg-[#BFF747]" >
            <img className=" max-w-15 lg:max-w-22.5 " src="./src/assets/png/marquee.png" alt="marquee" />
                <p className="mx-10 text-[24px] lg:text-[32px] font-bold py-3.5 lg:py-7" key={i}>{obj}</p>
            </div>
        ))}
    </Marquee>
    </>
  )
}

export default MarqueeLine