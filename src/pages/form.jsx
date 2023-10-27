import {useState} from "react";

export default function Form() {

    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState(0)
    const [usuarios, setUsuarios] = useState([])

    async function salvarUsuario() {
        await fetch('/api/form', {
            method: 'POST',
            body: JSON.stringify({
                nome,
                idade
            })
        })

        const resposta = await fetch('/api/form', {
            method: 'GET'
        })

        const usuarios = await resposta.json()
        setUsuarios(usuarios)

        setIdade(0)
        setNome('')

    }

    function renderizarUsuarios() {
        return usuarios.map((usuario, index) => {
            return <li key={index}>{usuario.nome} tem {usuario.idade} anos.</li>
        })
    }

    return (
        <div>
            <h1>Integrando com a API #2</h1>
            <div>
                <input type="text" value={nome} onChange={(e) => setNome(e.target.value)}/>
            </div>
            <div>
                <input type="number" value={idade} onChange={(e) => setIdade(+e.target.value)}/>
            </div>
            <button onClick={salvarUsuario}>Enviar</button>


            <ul>
                {renderizarUsuarios()}
            </ul>


        </div>
    )
}