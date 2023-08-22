import { useMemo, useState, useEffect } from "react";

const HookUseMemo = () => {
    const [number, setNumber] = useState(0)
    //USECALLBACK E UTILIZADO PARA FUNÇOES E USEMEMO E UTILIZADO PARA MEMORIZAR VALORES
    // const premiumNumbers = ["0", "100", "200"]

    const premiumNumbers = useMemo(() => {
        return ["0", "100", "200"]
    },[])

    useEffect(() => {
        console.log("PremiumNumbers Foi alterado")
    },[premiumNumbers])
    return(
        <div>
            <h2>useMemo</h2>
            <label>
                <input type="text" onChange={e => setNumber(e.target.value)} />
            </label>
            {premiumNumbers.includes(number) ? <p>Acerou o numero</p> : ""}
            <hr />
        </div>
    )
}

export default HookUseMemo;