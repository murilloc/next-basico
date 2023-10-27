import {useRouter} from 'next/router'
import Link from "next/link";

export default function IdENome(){
    const router = useRouter()
    const id = router.query.id
    const nome = router.query.nome
    return(
        <div>
            <h1>Rotas / Id / Nome: {id} e {nome}</h1>
            <Link href={"/rotas"} passHref>
                <button>Voltar</button>
            </Link>
        </div>
    )
}