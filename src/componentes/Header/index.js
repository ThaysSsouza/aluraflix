import Botao from '../Botao'; 
import './Header.css'
import logo from './LogoMain.png';
import { Link } from 'react-router-dom';

const Header = () =>{

    return(
        <div className='menu'>
            <img src={logo}/>
            <div className='botoes_menu'>
            <Link to="/"><Botao texto="HOME" /></Link>
            <Link to="/novo_video"><Botao texto="NOVO VÍDEO" /></Link>
            </div>

        </div>   
    )
}
export default Header
