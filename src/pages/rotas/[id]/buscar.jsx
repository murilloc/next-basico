import {useRouter} from 'next/Router'
import Link from "next/link";
export default function Buscar(){
    const router = useRouter()

   const cid = router.query.id

    return (
        <div>
            <h1>Rotas / {cid} / Buscar</h1>
            <Link href={"/rotas"} passHref>
                <button>Voltar</button>
            </Link>
        </div>
    )
}