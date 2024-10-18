import styles from './Banner.module.css'
import circuloColorido from '../../assets/circulo_colorido.png'
import minhaFoto from '../../assets/minha_foto.jpg'


const Banner = () => {
    return (
        <div className={styles.banner}>
    <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>
            Olá, Mundo
        </h1>
        <p className={styles.paragrafo}>
            Boas vindas ao meu espaço pessoal! Eu sou Miguel Otto, estudante de Front-end da Alura. Aqui compartilho vários conhecimentos, espero que aprenda algo novo :)
        </p>
    </div>
    <div className={styles.imagens}>
        <img className={styles.circuloColorido} src={circuloColorido} alt="" /> 
        <img className={styles.minhaFoto} src={minhaFoto} alt="Foto do Miguel Otto" /> 
    </div>
</div>
    )
}

export default Banner;