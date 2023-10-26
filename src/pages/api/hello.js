
export default function handler(req, res) {
    res.status(200).json([
        {name: 'John Doe'},
        {name: 'Murillo Cesar'},
        {name: 'Veronica Pereira'},
        {name: 'Maria Pereira'},
        {name: 'Ana Paula Ferreira da Silva  Nogueira Miranda'},
    ])
}
