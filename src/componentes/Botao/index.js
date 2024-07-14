import { useLocation } from 'react-router-dom';
import styles from './Botao.module.css';

const Botao = (props) => {
    const local = useLocation();

    let buttonClass = styles.botao;

    if (
        (local.pathname === '/' && props.texto === 'HOME') ||
        (local.pathname === '/novo_video' && props.texto === 'NOVO VÍDEO')
    ) {
        buttonClass = styles.home;
    }

    return <button className={buttonClass}>{props.texto}</button>;
};

export default Botao;
