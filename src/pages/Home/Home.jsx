import HookUseEffect from "../../components/HookUseState/HookUseEffect";
import HookUseReducer from "../../components/HookUseState/HookUseReducer";
import HookUseState from "../../components/HookUseState/HookUseState";

const Home = () => {
    return(
        <div>
            <HookUseState />
            <HookUseReducer />
            <HookUseEffect />
        </div>
    )
}

export default Home;