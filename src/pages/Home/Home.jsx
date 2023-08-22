import HookUseEffect from "../../components/HookUseState/HookUseEffect";
import HookUseReducer from "../../components/HookUseState/HookUseReducer";
import HookUseState from "../../components/HookUseState/HookUseState";


//USECONTEXT
import { useContext } from "react";
import { SomeContext } from "../../components/HookUseState/HookuseContext";
import HookUseRef from "../../components/HookUseState/HookUseRef";

const Home = () => {
    const {contextValue} = useContext(SomeContext)
    return(
        <div>
            <HookUseState />
            <HookUseReducer />
            <HookUseEffect />

            {/* USECONTEXT */}
            <h2>useContext</h2>
            <p>Valor do context: {contextValue}</p>

            <hr />

            <HookUseRef />
        </div>
    )
}

export default Home;