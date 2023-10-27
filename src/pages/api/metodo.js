const metodo =  (req, res) => {
    if(req.method === 'GET'){
        res.status(200).json([
            {name: 'John Doe'},
            {name: 'Murillo Cesar'},
            {name: 'Veronica Pereira'},
            {name: 'Maria Pereira'},
            {name: 'Ana Paula Ferreira da Silva  Nogueira Miranda'},
        ])
    }else{
        res.status(405).json({message: 'We only support GET'})
    }
}

export default metodo;
