import { useRef, useEffect, useState} from "react";

const HookUseRef = () => {
    // 1 - USEREF
    const numberRef = useRef(0)
    const [counter, setCounter] = useState(0)
    const [counterB, setCounterB] = useState(0)

    useEffect(() => {
        numberRef.current = numberRef.current + 1
    })

    // 2 - USEREF E DOM
    const inputRef = useRef()
    const [text, setText] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        setText("")

        inputRef.current.focus()
    }
    return(
        <div>
            <h2>useRef</h2>
                <p>O componente renderrizou: {numberRef.current}  vezes.</p>
                <p>Couter 1: {counter}</p>
                <button onClick={() => setCounter(anterior => anterior + 1)}>Conatdor A</button>
                <p>Couter 2: {counterB}</p>
                <button style={{marginBottom: 15}} onClick={() => setCounterB(anterior => anterior + 1)}>Conatdor B</button>

                {/* 2 - USEREF E DOM */}
                <form onSubmit={handleSubmit}>
                    <label>
                        <input type="text" ref={inputRef} value={text} onChange={e => setText(e.target.value)} />
                    </label>
                    <input type="submit" value={"Enviar"} />
                </form>
            <hr />
        </div>
    )
}

export default HookUseRef;