import React, { useState } from 'react';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './FormNovoVideo.css';

const FormNovoVideo = ({ aoVideoCadastrado }) => {
  const [titulo, setTitulo] = useState('');
  const [imagem, setImagem] = useState('');
  const [video, setVideo] = useState('');
  const [categoria, setCategoria] = useState('');

  const handleClear = () => {
    setTitulo('');
    setImagem('');
    setVideo('');
    setCategoria('');
  };

  const aoSalvar = (evento) => {
    evento.preventDefault();
    aoVideoCadastrado({
      id: Date.now(), // Simples geração de ID para o exemplo
      titulo,
      categoria,
      imagem,
      video,
    });

    // Limpar campos após enviar
    handleClear();
  };

  return (
    <form onSubmit={aoSalvar} className="form-novo-video">
      <div className='topo'>
        <h1>NOVO VÍDEO</h1>  
        <div className='div_subtitulo'>
          <h2 className='subtitulo'>COMPLETE O FORMULÁRIO PARA CRIAR UM NOVO CARD DE VÍDEO.</h2> 
        </div>
      </div>  
      <div>
        <h2 className='criar_card'>Criar Card</h2>
        <div className='primeira_linha'> 
          <CampoTexto 
            obrigatorio={true} 
            label="Título" 
            placeholder="Digite o título do vídeo"
            valor={titulo}
            aoAlterado={valor => setTitulo(valor)}
          />
          <ListaSuspensa 
            label="Categoria" 
            opcoes={['Front End', 'Back End', 'Inovação e Gestão']} 
            valor={categoria}
            aoAlterado={valor => setCategoria(valor)}
          />
        </div>
      </div>
      <div>
        <CampoTexto 
          obrigatorio={true} 
          label="Imagem" 
          placeholder="O link é obrigatório" 
          valor={imagem}
          aoAlterado={valor => setImagem(valor)}
        />
        <CampoTexto 
          obrigatorio={true} 
          label="Vídeo" 
          placeholder="Digite o link do vídeo" 
          valor={video}
          aoAlterado={valor => setVideo(valor)}
        />
      </div>
      <div className='div_botoes'>
        <button className='btn' type="submit">Enviar</button>
        <button className='btn' type="button" onClick={handleClear}>Limpar</button>
      </div>  
    </form>
  );
};

export default FormNovoVideo;
