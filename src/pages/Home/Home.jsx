import HookUseEffect from "../../components/HookUseState/HookUseEffect";
import HookUseReducer from "../../components/HookUseState/HookUseReducer";
import HookUseState from "../../components/HookUseState/HookUseState";


//USECONTEXT
import { useContext } from "react";
import { SomeContext } from "../../components/HookUseState/HookuseContext";
import HookUseRef from "../../components/HookUseState/HookUseRef";
import HookUseCallback from "../../components/HookUseState/HookUseCallback";
import HookUseMemo from "../../components/HookUseState/HookUseMemo";
import HookUselayoutEffect from "../../components/HookUseState/HookUseLayoutEffect";

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
            <HookUseCallback />
            <HookUseMemo />
            <HookUselayoutEffect />
        </div>
    )
}

export default Home;