import styles from './NaoEncontrada.module.css'
import erro404 from '../../assets/erro_404.png'
import { Link } from 'react-router-dom';

const NaoEncontrada = () => {
        return(
           <>
           
           <div className={styles.conteudoContainer}>
                <span className={styles.texto404}>404</span>
                <h1 className={styles.titulo}>Ops! Página não encontrada</h1>

                <p className={styles.paragrafo}>Tem certeza que era isso que você estava procurando?</p>
                <p className={styles.paragrafo}>Aguarde uns instantes a página, ou volte para a página incial</p>

                <div className={styles.botaoContainer}>

                <Link to='/'>
                <button className={styles.glowOnHover}>Voltar</button>
                </Link>

                </div>

                <img className={styles.imagemCachorro} src={erro404} alt='Imagem de cachorro'/>

            </div>

            <div className={styles.espacoEmBranco}>

            </div>
           
           </>
        )
}


export default NaoEncontrada;