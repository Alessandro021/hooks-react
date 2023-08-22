import { useReducer, useState} from "react";

const HookUseReducer = () => {
    //1 - COMEÇANDO COM O USEREDUCER
    //O USEREDUCER RECEBE UM VALOR PARA GERENCIAR E UMA FUNÇÃO PARA ALTERAR ESSE VALOR
    const [number, dispath] = useReducer((state, action) => {
        return Math.random(state)
    })

    // 2 - avançando no useReducer
    const initialTasks = [
        {id: 1, text: "fazer algo"},
        {id: 2, text: "Já fiz algo"},
        {id: 3, text: "Fazer algo novamente"}
    ]

    const tasksReducer = (state, action) => {
        //FUNÇÃO DO USEREDUCER
        switch (action.type) {
            case "ADD":
                const newTask = {
                    id: Math.random(),
                    text: taskText,
                }

                setTaskText("")
                return [...state, newTask]
            case "DELETE":
                return state.filter(task => task.id !== action.id)
            default: 
                return state
        }
    }

    const [taskText, setTaskText] = useState("")
    const [tasks, dispatchTasks] = useReducer(tasksReducer, initialTasks)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatchTasks({type: "ADD"})
    }

    const removeTask = (id) => {
        dispatchTasks({type: "DELETE", id: id})
    }
    return(
        <div>
            <h2>useReducer</h2>
                <p>Número: {number}</p>
                <button onClick={dispath}>Alterar número</button>
                <h3>Tarefas: </h3>
                <form onSubmit={handleSubmit}>
                    <label>Digitar Tarefa:
                        <input type="text" value={taskText} onChange={e => setTaskText(e.target.value)} />
                    </label>
                    <input type="submit" value={"Enviar"} />
                </form>
                {tasks.map(task => (
                    <li key={task.id}>{task.text}  <button onClick={() => removeTask(task.id)}>deletar</button></li>
                ))}
            <hr />
        </div>
    )
}

export default HookUseReducer;