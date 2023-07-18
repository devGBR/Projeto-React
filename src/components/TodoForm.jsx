import { useState } from "react"

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("")
    const [category, setCategory] = useState("")
    
     const handleSubmit = (e) => {
        e.preventDefault();
        if(!value || !category) return alert("Prenencha todos os campos!!")
        addTodo(value, category)
        // Limpa campos
        setValue("");
        setCategory("");
     }
  return (
    <div className="todo-form">
        <h2>Criar Tarefa</h2>
        <form onSubmit={handleSubmit}>
            <div className="Inputitle">
             <input type="text" value={value}  onChange={ (e) => setValue(e.target.value)}/>
                <label className="Label" htmlFor="">
                    Título
                </label>
            </div>
            <div>
            <select value={category} className="List" onChange={ (e) => setCategory(e.target.value)}>
                
                <option value="">Selecione uma categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estudos">Estudos</option>
                
            </select>
            <label className="label2" htmlFor="">
                Categoria
                </label>
            </div>
            
            <button type="submit" >Criar Tarefa</button>
        </form>
    </div>
  )
}

export default TodoForm