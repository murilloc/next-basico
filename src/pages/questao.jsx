import {useEffect, useState} from "react";

export default function questao() {

    const [questao, setQuestao] = useState(null)

    useEffect(() => {
        fetch('http://localhost:3000/api/questao/123')
            .then(resp => resp.json())
            .then(setQuestao)
    }, []);

    function resnderizarRespostas() {
        if (questao) {
            return questao.respostas.map((resposta, index) => {
                return <li key={index}>{resposta}</li>
            })
        }
        return false
    }

    return (
        <div>
            <h1>Questao</h1>
            <div>
                <span>{questao && questao.id} - {questao?.enunciado}</span>
                <ul>
                    {resnderizarRespostas()}
                </ul>
            </div>
        </div>

    )
}