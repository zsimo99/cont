import { useState } from "react"

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const mousemove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY })
    }
    return (
        <div onMouseMove={mousemove} className='fixed w-screen h-screen top-0 left-0 z-0'>
            <span style={{ top: `${position.y}px`, left: `${position.x}px` }} className='border-4 border-[#6A425C] rounded-full w-8 h-8 -translate-y-4 -translate-x-4 fixed top-0 left-0 -z-10'></span>
        </div>
    )
}

export default Cursor