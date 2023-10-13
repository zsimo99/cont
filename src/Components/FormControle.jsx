import { useEffect, useState } from 'react'

// eslint-disable-next-line react/prop-types
const FormControle = ({ Text, bg, type, cmnt }) => {
    const [onTop, setOnTop] = useState(false)
    const [text, setText] = useState("")

    useEffect(() => {
        if (text.length > 0) setOnTop(true)
        else setOnTop(false)
    }, [text])
    return (
        <>
            <div className="relative z-0">
                <label style={{ backgroundColor: onTop ? bg : "transparent" }} className={`absolute  -translate-y-1/2 left-4 transition-[top,background-color,font-size] duration-300 ${onTop ? "top-0 z-0 px-1 text-sm" : "top-1/2 -z-10"}`}>{Text}</label>
                <input onFocus={() => setOnTop(true)} onBlur={() => text.length > 0 ? setOnTop(true) : setOnTop(false)} value={text} onChange={(e) => setText(e.target.value)} type={type} className="w-full outline-none block py-1.5 px-3 bg-transparent border-2 rounded-xl border-gray-400" />
            </div>
            {cmnt && <p className='ps-4 text-sm text-gray-300'>{cmnt}</p>}
        </>
    )
}

export default FormControle