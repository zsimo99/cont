import { useState } from "react"
import img from "../../assets/slider/img1.png"
const arr = [{ bg: "#FFF0C2", text: "#3E030D" }, { bg: "#3E030D", text: "#FECE32" }, { bg: "#FFE48F", text: "#3E030D" }, { bg: "#FDCE31", text: "#3E030D" }]

const Slider2 = () => {
    const [index, setIndex] = useState(0)
    return (
        <section className=" py-[100px] text-black">
            <div className="flex max-md:flex-col w-full container mx-auto px-4">
                {arr.map(({ bg, text }, ind) => <div style={{ backgroundColor: bg, color: text }} className={`relative max-md:pt-20 max-md:min-h-[70px] md:h-[400px] md:min-w-[70px] ${ind === index && "flex-1"}`} key={ind}>
                    <h2 onClick={() => setIndex(ind)} className="absolute max-md:top-4 max-md:left-8 whitespace-nowrap md:bottom-10 md:left-8 md:-rotate-90 md:-translate-x-1/2 text-4xl font-semibold cursor-pointer">Title {ind + 1}</h2>
                    <div className={`flex max-md:flex-col h-full justify-center w-full items-center ${ind !== index && "hidden opacity-0"}`}>
                        <div className="basis-1/2 flex-1">
                            <img className="w-1/2 mx-auto" src={img} alt="" />
                        </div>
                        <div className={`basis-1/2 flex-1 p-10 opacity-0 transition-all duration-1000 ${ind === index && "opacity-100"}`}>
                            <h3 className="text-4xl md:text-3xl xl:text-6xl font-bold">Lorem ipsum dolor</h3>
                            <p className="text-xl xl:text-4xl mt-3 font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, consequuntur.</p>
                        </div>
                    </div>
                </div>)}
            </div>
        </section>
    )
}

export default Slider2