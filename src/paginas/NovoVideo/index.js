import React from 'react';
import FormNovoVideo from '../../componentes/FormNovoVideo';
import './NovoVideo.css';

const NovoVideo = ({ aoVideoCadastrado }) => {
  return (
    <div className="novo-video-container">
      <FormNovoVideo aoVideoCadastrado={aoVideoCadastrado} />
    </div>
  );
};

export default NovoVideo;
