

const Button = ({text}) => {
  return (
    <>
      <button className='flex items-center py-5'><button className='bg-[#515151] py-4 px-8 rounded-4xl'>{text}</button><svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="27.5" cy="27.5" r="27.5" fill="#BFF747"/>
<path d="M30.6276 25.7276L22.0207 34.3345L20.6065 32.9203L29.2134 24.3134L21.6276 24.3134L21.6276 22.3137H32.6273V33.3135L30.6276 33.3135V25.7276Z" fill="black"/>
</svg>
</button></>
  )
}

export default Button