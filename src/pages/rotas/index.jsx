import Link from "next/link"
import router, {useRouter} from "next/router"

export default function rotas() {

    function navegacaoSimple(url) {
        router.push(url)
    }

    function navegacaoComParams() {
        router.push({
            pathname: "/rotas/params",
            query: {
                id: 10,
                nome: "Veronica"
            }
        })
    }


    return (
        <div>
            <h1>Rotas Index</h1>
            <ul>
                <Link href={"/rotas/params?id=12&nome=Murillo"}>
                    <li>Params</li>
                </Link>

                <Link href={"/rotas/123/buscar"}>
                    <li>Buscar</li>
                </Link>

                <Link href={"/rotas/123/Murillo"}>
                    <li>Murillo</li>
                </Link>
            </ul>

            <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                <button onClick={() => {
                    router.push("/rotas/123/buscar")
                }}>Buscar
                </button>

                <button onClick={() => navegacaoSimple("/rotas/123/Murillo")}>Murillo</button>
                <button onClick={navegacaoComParams}>Veronica</button>

            </div>
        </div>
    )
}