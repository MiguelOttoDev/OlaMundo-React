import PostModelo from '../../components/PostModelo'
import FotoCapa from '../../assets/sobre_mim_capa.png' 
import fotoSobremim from '../../assets/sobre_mim_foto.png' 
import styles from './SobreMim.module.css'

const SobreMim = () => {
    return(
        <PostModelo FotoCapa={FotoCapa} titulo="Sobre Mim" > 

        <h3 className={styles.subtitulo} > 
            Olá, eu sou o Miguel Otto
        </h3>

        <img src={fotoSobremim} alt='Foto Miguel Otto' className={styles.fotoSobreMim} />

        <p className={styles.paragrafo}>
        Oi, tudo bemz? Eu sou desenvolvedor de software e estou feliz de compartilhar um pouco da minha jornada com você.

        </p>
        <p className={styles.paragrafo}>
        Minha história com programação começou no Senai, onde cursei Análise e Desenvolvimento de Sistemas. Durante esse tempo, aprendi fundamentos de programação e várias linguagens, como Python e JavaScript, além de explorar tecnologias como HTML, CSS e bancos de dados. Desde o início, eu me interessei muito por desenvolvimento e percebi que era isso que eu queria fazer profissionalmente.

        </p >

        <p className={styles.paragrafo}>
        Atualmente, estou cursando Engenharia de Software na FIAP, onde tenho aprofundado meus conhecimentos e habilidades. Nos meus estudos, também tive a oportunidade de trabalhar em projetos práticos, desenvolvendo aplicações web e sistemas. A experiência adquirida ao longo dessa trajetória tem sido fundamental para moldar meu entendimento e paixão pela área.
            
        </p>        

        <p className={styles.paragrafo}>
        Estou animado para continuar minha jornada no mundo da tecnologia e contribuir com soluções que façam a diferença.

        </p>

        <p className={styles.paragrafo}>
        Com isso, tive minha experiência como desenvolvedor mais próxima da realidade, enfrentando prazos de implementação em projetos e aprendendo muito enquanto codificava.

        </p>

        <p className={styles.paragrafo}>
        Foi nesse ambiente de aprendizado que decidi procurar uma oportunidade de estágio em desenvolvimento web. Encontrei uma vaga na Withnocode e percebi que ela combinava duas das minhas paixões: programação e inovação. Para minha alegria, fui selecionado para fazer parte da equipe.

        </p>

        <p className={styles.paragrafo}>
        Desde então, tem sido uma jornada repleta de aprendizados. A Withnocode é uma empresa que valoriza não apenas seus clientes, mas também seus colaboradores. Hoje, sou muito grato pela oportunidade de contribuir com projetos que fazem a diferença e de continuar aprendendo a cada dia. Espero que minha experiência possa inspirar e ajudar você também!

        </p>


        </PostModelo>
    )
}

export default SobreMim
