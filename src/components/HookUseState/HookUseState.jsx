import { useState } from "react";


const HookUseState = () => {
    // 1 - USESTATE
    let userName = "Alex"
    const [name, setName] = useState("João")

    const changeNames = () => {
        userName = "Maria"
        setName("Pedro")
    }

    // 2 - USESTATE E INPUT
    const [age, setAge] = useState(18)

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return(
        <div>
            <h2>useState</h2>
            <p>Variavel: {userName}</p>
            <p>useState: {name}</p>
            <button onClick={changeNames}>Click</button>
            {/* 2 - USESTATE E INPUT */}
            <form style={{marginTop: 15}} onSubmit={handleSubmit}>
                <label>Idade:
                    <input type="text" name="idade" value={age} onChange={e => setAge(e.target.value)} />
                </label>
                <input type="submit" value="Enviar" />

                <p>Você tem: {age} de idade</p>
            </form>

            <hr />
        </div>
    )
}

export default HookUseState;