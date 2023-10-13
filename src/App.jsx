
import Cursor from "./Components/Cursor"
import Form1 from "./Components/Form/Form1"
import Hero from "./Components/Hero"
import Slider1 from "./Components/slider/Slider1"
import Slider2 from "./Components/slider/Slider2"
// document.querySelector("a").addEventListener("mousemove")
const App = () => {

    return (
        <div className="overflow-hidden">
            <Hero />
            {/* <Cursor /> */}
            <Slider1 />
            <Slider2 />
            <Form1 />
        </div>
    )
}

export default App