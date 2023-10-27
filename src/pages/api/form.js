const usuarios = []
export default function Form(req, res) {

    if (req.method === 'POST') {
        post(req, res)
    } else if (req.method === 'GET') {
        get(req, res)
    } else {
        res.status(405).json({
            message: 'We only support POST'
        })
    }

    res.status(200).json({
        dados: JSON.parse(req.body)
    })

}

function post(req, res) {
    const usuario = JSON.parse(req.body)
    usuarios.push(usuario)
    res.status(200).send()
}

function get(req, res) {
    res.status(200).json(usuarios)
}