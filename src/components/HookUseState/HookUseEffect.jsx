import { useEffect, useState } from "react";

const HookUseEffect = () => {
    // 1 - USEEFFECT SEM DEPENDENCIAS

    useEffect(() => {
        console.log("useEffect: estou sendo execultado 1️⃣")
    })

    const [number, setNumber] = useState(1)

    const changeSomething = () => {
        setNumber(aterior => aterior + 1)
    }

    // 2 - ARRAY DE DEPENDENCIAS VAZIO
    useEffect(() => {
        //EXECULTA SOMENTE UMA VEZ
        console.log("useEffect: SEREI EXECULTADO SOMENTE UMA VEZ 2️⃣")
    },[])


    // 3 - ITEM NO ARRAY DE DEPENDENCIAS DO USEEFFECT
    const [anotherNumber, setAnotherNumber] = useState(0)

    useEffect(() => {
        if(anotherNumber !== 0){
            console.log("useEffect: SO SEREI EXECULTADO QUANDO A STATE 'anotherNumber' FOR ALTERARDA 3️⃣")
        }
    },[anotherNumber])

    // 4 - CLEANUP NO USEEFFECT

    useEffect(() => {
        // const timer = setTimeout(() =>{ 
        //     console.log("useEffet: execultando o SETTIMEOUT 🕐4️⃣")
        //     setAnotherNumber(anterior => anterior + 1)
        // }, 2000 )
        // return () => clearTimeout(timer)
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