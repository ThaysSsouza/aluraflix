import React from 'react';
import './ListaSuspensa.css';

const ListaSuspensa = ({ label, opcoes, valor, aoAlterado }) => {
  return (
    <div className="lista-suspensa">
      <label>{label}</label>
      <select onChange={evento => aoAlterado(evento.target.value)} value={valor}>
        {opcoes.map((opcao, index) => (
          <option key={index} value={opcao}>
            {opcao}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ListaSuspensa;