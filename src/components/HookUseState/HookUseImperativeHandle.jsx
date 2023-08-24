import { useRef } from "react";

import SomeComponent from "../SomeComponent/SomeComponent";

const HookUseImperativeHandle = () => {
    //o USEIMPERATIVEHaNDLE SERVE PARA PASSAR UMA REFERENCIA DE UM COMPONENTE PARA OUTRO
    const componetRef = useRef()
    return(
        <div>
            <h2>useImperativeHandle</h2>
            <SomeComponent ref={componetRef} />
            <button onClick={() => componetRef.current.validate()}>Validar</button>
            <hr />
        </div>
    )
}

export default HookUseImperativeHandle;