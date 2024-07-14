import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Inicio from './paginas/Inicio';
import NovoVideo from './paginas/NovoVideo';
import videosData from './data/videos.json'; // Caminho ajustado para videos.json

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Simula o carregamento inicial dos vídeos a partir do JSON
    setVideos(videosData);
  }, []);

  const aoNovoVideoAdicionado = (video) => {
    setVideos([...videos, video]);
  };

  return (
    <BrowserRouter>
      <div className="main-container">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Inicio videos={videos} />} />
            <Route
              path="/novo_video"
              element={<NovoVideo aoVideoCadastrado={video => aoNovoVideoAdicionado(video)} />}
            />
            {/* Adicione outras rotas aqui, se necessário */}
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
