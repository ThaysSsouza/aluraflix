import './BotaoEditar.css';

const BotaoEditar = () => {
    return (
        <div className='container_botoes_editar'>
            <img src={`${process.env.PUBLIC_URL}/pencil.svg`} className='caneta' alt='Editar'/>
            <h4 className='legenda_editar'>EDITAR</h4>
        </div>
    );
}

export default BotaoEditar;
