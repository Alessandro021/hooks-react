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

    // 2 - ARRAY DE DEPENDENCIAS VAZIO
    useEffect(() => {
        //EXECULTA SOMENTE UMA VEZ
        console.log("useEffect: SEREI EXECULTADO SOMENTE UMA VEZ")
    },[])


    // 3 - ITEM NO ARRAY DE DEPENDENCIAS DO USEEFFECT
    const [anotherNumber, setAnotherNumber] = useState(0)

    useEffect(() => {
        if(anotherNumber !== 0){
            console.log("useEffect: SO SEREI EXECULTADO QUANDO A STATE 'anotherNumber' FOR ALTERARDA")
        }
    },[anotherNumber])
    return(
        <div>
            <h2>useEffect</h2>
            <p>Number: {number}</p>
            <button onClick={changeSomething}>clicar</button>

            <p>AnotherNumber: {anotherNumber}</p>
            <button onClick={() => setAnotherNumber(anterior => anterior + 1)}>alterar anotherNumber</button>
            <hr />
        </div>
    )
}

export default HookUseEffect;