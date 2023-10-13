import { useState } from "react"
import img from "../../assets/slider/img1.png"
const arr = [{ bg: "#FFF0C2", text: "#3E030D" }, { bg: "#3E030D", text: "#FECE32" }, { bg: "#FFE48F", text: "#3E030D" }, { bg: "#FDCE31", text: "#3E030D" }]

const Slider2 = () => {
    const [index, setIndex] = useState(0)
    return (
        <section className=" py-[100px] text-black">
            <div className="flex w-full container mx-auto px-4">
                {arr.map(({ bg, text }, ind) => <div onClick={() => setIndex(ind)} style={{ backgroundColor: bg, color: text }} className={`relative transition-all duration-300 min-w-[70px] ${ind === index && "flex-1"}`} key={ind}>
                    <h2 className="absolute whitespace-nowrap bottom-10 left-8 -rotate-90 -translate-x-1/2 text-4xl font-semibold cursor-pointer">Test {ind + 1}</h2>
                    {index === ind && <div>
                        <div className="flex justify-center gap-4 border w-full items-center opacity-0 transition-opacity duration-300 opacity-100">
                            <div className="basis-1/2 flex-1">
                                <img className="max-w-sm mx-auto" src={img} alt="" />
                            </div>
                            <div className="basis-1/2 flex-1">
                                <h3>Lorem ipsum dolor</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, consequuntur.</p>
                            </div>
                        </div>
                    </div>}
                </div>)}
                {/* <div className="relative flex-1">
                    <h2 className="absolute bottom-10 left-4 -rotate-90 -translate-x-1/2 text-4xl font-semibold">test2</h2>
                    <div className="flex justify-center gap-4 border w-full items-center">
                        <div className="basis-1/2 flex-1">
                            <img className="max-w-sm mx-auto" src={img} alt="" />
                        </div>
                        <div className="basis-1/2 flex-1">
                            <h3>Lorem ipsum dolor</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, consequuntur.</p>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    )
}

export default Slider2