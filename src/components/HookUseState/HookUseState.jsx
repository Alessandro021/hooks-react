import { useState } from "react";


const HookUseState = () => {
    // 1 - USESTATE
    let userName = "Alex"
    const [name, setName] = useState("João")

    const changeNames = () => {
        userName = "Maria"
        setName("Pedro")
    }

    return(
        <div>
            <h2>useState</h2>
            <p>Variavel: {userName}</p>
            <p>useState: {name}</p>
            <button onClick={changeNames}>Click</button>

            <hr />
        </div>
    )
}

export default HookUseState;