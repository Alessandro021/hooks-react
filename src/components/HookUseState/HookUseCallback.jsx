import { useCallback, useState, useEffect } from "react";
import List from "../List/List"

const HookUseCallback = () => {
    const [counter, setCounter] = useState(0)

    const getItemsFromDatabase = useCallback(() => {
        return ["a", "b", "c", "d"]
    },[])
    return(
        <div>
            <h2>useCallback</h2>
            <List getItems={getItemsFromDatabase} />
            <button onClick={() => setCounter(anterior => anterior + 1)}>Alterar</button>
            <p>Couter: {counter}</p>
            <hr />
        </div>
    )
}

export default HookUseCallback;