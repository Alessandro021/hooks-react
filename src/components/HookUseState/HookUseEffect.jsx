import { useEffect, useState } from "react";

const HookUseEffect = () => {
    // 1 - USEEFFECT SEM DEPENDENCIAS

    useEffect(() => {
        console.log("useEffect: estou sendo execultado.")
    })

    const [number, setNumber] = useState(1)

    const changeSomething = () => {
        setNumber(aterior => aterior + 1)
    }
    return(
        <div>
            <h2>useEffect</h2>
            <p>Number: {number}</p>
            <button onClick={changeSomething}>clicar</button>
            <hr />
        </div>
    )
}

export default HookUseEffect;