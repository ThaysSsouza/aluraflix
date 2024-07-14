import React from 'react';
import BotaoDeletar from '../BotaoDeletar';
import BotaoEditar from '../BotaoEditar';
import './Card.css';

const Card = ({ video }) => {
  return (
    <div className='div_card'>
      <img src={video.imagem} className='thumb' alt={video.titulo} />
      <div className='div_botoes'>
        <BotaoDeletar />
        <BotaoEditar />
      </div>
    </div>
  );
}

export default Card;
