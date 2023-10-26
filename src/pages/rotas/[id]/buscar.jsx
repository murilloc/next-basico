import {useRouter} from 'next/Router'
import Link from "next/link";
export default function buscar(){
    const router = useRouter()

   const cid = router.query.id

    return(
        <div>
            <h1>Rotas / {cid} / Buscar</h1>
            <Link href={"/rotas"}>
                <button>Voltar</button>
            </Link>
        </div>
    )
}