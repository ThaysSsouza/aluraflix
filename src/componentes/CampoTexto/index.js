import React, { useState } from 'react';
import './CampoTexto.css';

const CampoTexto = ({ label, placeholder, obrigatorio, valor, aoAlterado }) => {

//let valor =""
//const [valor, setValor] = useState('')

const aoDigitado = (evento) =>{
    aoAlterado(evento.target.value)
  }

  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input value={valor} onChange={aoDigitado} required={obrigatorio} type="text" placeholder={placeholder} />
    </div>
  );
};

export default CampoTexto;