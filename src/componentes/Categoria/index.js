import React from 'react';
import styles from './Categoria.module.css';
import Card from '../Card'; // Certifique-se de que o caminho está correto

const Categoria = ({ nome, videos }) => {
  const estiloTitulo = {
    backgroundColor: nome === 'Front End' ? '#6bd1ff' :
                     nome === 'Back End' ? '#00c86f' :
                     nome === 'Inovação e Gestão' ? '#FFBA05' : 'transparent'
  };

  return (
    <section className={styles.categoria}>
        <h3 className={styles.titulo} style={estiloTitulo}>{nome}</h3>
        <div className={styles.cardsContainer}>
          {videos.map(video => (
              <Card key={video.id} video={video} />
          ))}
        </div>
    </section>
  );
}

export default Categoria;
