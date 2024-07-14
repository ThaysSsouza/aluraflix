import React from 'react';
import Categoria from '../../componentes/Categoria'; // Caminho ajustado
import './Inicio.css';

const Inicio = ({ videos }) => {
  // Filtra os vídeos por categoria
  const frontEndVideos = videos.filter(video => video.categoria === 'Front End');
  const backEndVideos = videos.filter(video => video.categoria === 'Back End');
  const inovacaoGestaoVideos = videos.filter(video => video.categoria === 'Inovação e Gestão');

  return (
    <section className='container_inicio'>
      <Categoria nome="Front End" videos={frontEndVideos} />
      <Categoria nome="Back End" videos={backEndVideos} />
      <Categoria nome="Inovação e Gestão" videos={inovacaoGestaoVideos} />
    </section>
  );
}

export default Inicio;
