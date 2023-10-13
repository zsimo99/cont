
const Hero = () => {
    return (
        <div className='h-screen w-screen hero'>
            <div className="headerMask">
                <h1 className=' text-2xl sm:text-3xl lg:text-4xl xl:text-6xl font-bold w-full px-10'><br /> </h1>
                <div className="font-header  fixed top-20 left-1/2 -translate-x-1/2 text-center w-full headerShadow">
                    <h1 className="text-4xl text-[#d898d8] sm:text-6xl lg:text-7xl font-bold">Hello!</h1>
                    <h2 className="text-2xl text-[#d4b1d4] sm:text-3xl lg:text-4xl ">Everything here is proudly crafted 100% by Me. </h2>
                </div>
            </div>
        </div>
    )
}

export default Hero