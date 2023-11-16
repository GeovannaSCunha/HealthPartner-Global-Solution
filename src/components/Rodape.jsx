import Icone from '../assets/img/icone.png'
import '../assets/styles/rodape.scss'

export default function Rodape(){
    return(
        <>
        <div className="rodape">
                <img className="icone" src={Icone} alt="icone" />
            <div className='conteudoRodape'>
                <p><span>&copy; 2023</span> | Todos os direitos reservados</p>
                <p>Geovanna Silva Cunha - RM 97736</p>
                <p>Mirella de Rossi imenez - RM 97990</p>
            </div>
        </div>
        </>
    )
}