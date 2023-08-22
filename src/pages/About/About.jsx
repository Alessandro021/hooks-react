//USECONTEXT
import { useContext } from "react";
import { SomeContext } from "../../components/HookUseState/HookuseContext";

const About = () => {
    const {contextValue} = useContext(SomeContext)
    return(
        <div>
            <h2>Sobre</h2>
            {/* USECONTEXT */}
            <h3>useContext</h3>
            <p>Valor do context: {contextValue}</p>
            <hr />
        </div>
    )
}

export default About;