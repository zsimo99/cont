import { useState } from "react"
import img from "../../assets/slider/plan.jpg"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { useRef } from "react"
import { useEffect } from "react"
const arr = [img, img, img, img, img]

const Slider1 = () => {
    const [imageindex, setImageIndex] = useState(0)
    const slider = useRef(null)
    const previmg = () => {
        setImageIndex(prev => {
            if (prev === 0) return arr.length - 1
            return prev - 1
        })
    }
    const nextimg = () => {
        setImageIndex(prev => {
            if (prev === arr.length - 1) return 0
            return prev + 1
        })
    }
    useEffect(() => {
        console.log(slider.current.children[0].offsetWidth)
        slider.current.scrollLeft = (imageindex * slider.current.children[0].offsetWidth) + (40 * imageindex)
    }, [imageindex])
    return (
        <section className="bg-[#354651] py-[100px] ">
            <div className="flex max-lg:flex-col gap-10 text-white container mx-auto p-4 items-center">
                <div className="lg:basis-1/2 ">
                    <h2 className="text-3xl lg:text-6xl mb-8 font-serif">Lorem ipsum dolor</h2>
                    <p className="text-xl lg:text-2xl text-gray-200 font-normal mb-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor labore voluptas placeat eum id amet possimus reprehenderit.</p>
                    <button className="py-3 px-5 lg:py-4 lg:px-6 text-xl lg:text-2xl bg-transparent border-white border-2 flex items-center gap-2  rounded-full font-medium">
                        <span className="block bg-white p-2 rounded-full"><span className=" block border-[6px] border-transparent border-l-[#354651] translate-x-1/4"></span></span>
                        Lorem ipsum dolor
                    </button>
                </div>
                <div className="lg:basis-1/2 p-4">
                    <div ref={slider} className="flex w-full overflow-hidden  ">
                        {arr.map((url, i) => <div className="basis-[80%] shrink-0 mr-10 " key={i}> <img className="" src={url} /></div>)}
                    </div>
                    <div className="flex justify-center gap-4 mt-5">
                        <button onClick={previmg} className="p-2 rounded-full bg-white"><ArrowLeft stroke="black" /></button>
                        <button onClick={nextimg} className="p-2 rounded-full bg-white"><ArrowRight stroke="black" /></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Slider1