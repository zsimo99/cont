import FormControle from "../FormControle"
import img from "../../assets/slider/img1.png"
import { useState } from "react"

const Form1 = () => {
    const [page, setPage] = useState("login")
    return (
        <section className="py-[100px] bg-[#121212] text-white text-lg ">
            <div className="max-md:hidden max-w-4xl mx-auto px-4 flex border-4 rounded-xl border-[#292929] bg-[#1E1E1E] relative " style={{ perspective: "1500px" }}>
                <div className="basis-1/2 flex gap-4 flex-col p-16 ">
                    <h2 className="text-xl">Sign In</h2>
                    <FormControle Text='User Name' bg="#1E1E1E" type="text" />
                    <FormControle Text='Password' bg="#1E1E1E" type="password" />
                    <button className="w-fit px-10 py-1.5 border-2 border-gray-400  rounded-xl font-semibold">Login</button>
                    <p className="text-gray-300 text-sm mt-auto">Don&apos;t have an account? <span onClick={() => setPage("register")} className="text-blue-600 hover:underline cursor-pointer">Sigup now</span></p>
                </div>
                <div className="basis-1/2 flex gap-4 flex-col p-16 ">
                    <h2>Sign Up</h2>
                    <FormControle Text='User Name' bg="#1E1E1E" type="text" />
                    <FormControle Text='Email' bg="#1E1E1E" type="email" />
                    <FormControle Text='Password' bg="#1E1E1E" type="password" />
                    <button className="w-fit px-10 py-1.5 border-2 border-gray-400  rounded-xl font-semibold">Login</button>
                    <p className="text-gray-300 text-sm mt-auto">Already have an account? <span onClick={() => setPage("login")} className="text-blue-600 hover:underline cursor-pointer">Login now</span></p>
                </div>
                <div style={{ transformOrigin: "left", transformStyle: "preserve-3d" }} className={`absolute top-0 left-1/2 w-1/2 h-full bg-[#313131] rounded-r duration-500 transition-all ${page === "register" && "rotate"}`}>
                    <div style={{ backfaceVisibility: "hidden" }} className="absolute top-0 left-0 w-full h-full">
                        <img className="w-full h-full object-cover" src={img} alt="" />
                    </div>
                    <div style={{ transform: "rotateY(-180deg)", backfaceVisibility: "hidden" }} className="absolute top-0 left-0 w-full h-full">
                        <img className="w-full h-full object-cover" src={img} alt="" />
                    </div>
                </div>
            </div>
            <div className="px-4">
                <div className="md:hidden border-4 rounded-xl border-[#292929] bg-[#1E1E1E] p-10">
                    <p>Im sorry, but this content is not available on small screens.</p>
                    <p>Please access this content on a larger screen for the best experience.</p>
                </div>
            </div>
        </section>
    )
}

export default Form1