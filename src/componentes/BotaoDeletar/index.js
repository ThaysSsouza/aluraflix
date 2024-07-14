import './BotaoDeletar.css';

const BotaoDeletar = () => {
    return (
        <div className='container_botoes_deletar'>
            <img src={`${process.env.PUBLIC_URL}/trash.svg`} className='lixo' alt='Deletar'/>
            <h4 className='legenda_deletar'>DELETAR</h4>
        </div>
    );
}

export default BotaoDeletar;
