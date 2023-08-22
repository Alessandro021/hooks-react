import { useReducer } from "react";

const HookUseReducer = () => {
    //1 - COMEÇANDO COM O USEREDUCER
    //O USEREDUCER RECEBE UM VALOR PARA GERENCIAR E UMA FUNÇÃO PARA ALTERAR ESSE VALOR
    const [number, dispath] = useReducer((state, action) => {
        return Math.random(state)
    })
    return(
        <div>
            <h2>useReducer</h2>
                <p>Número: {number}</p>
                <button onClick={dispath}>Alterar número</button>
            <hr />
        </div>
    )
}

export default HookUseReducer;