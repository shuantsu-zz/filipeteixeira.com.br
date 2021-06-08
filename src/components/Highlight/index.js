import React from 'react';
import './style.scss';
import cinelImg from '../../img/cinel.png';

export default function Highlight() {
  return <div className="highlight">
    <div className="container">
    
      <div className="header">
        <h1>Em destaque:</h1>
        <h2>Sistema de Orçamentos Cinel</h2>
      </div>
      <div className="content">
        <div className="image">
          <img src={cinelImg} alt="Sistema de Orçamentos Cinel" />
        </div>
        <div className="description">
          <p>O Sistema de Orçamentos Cinel é um Web App que permite às empresas se cadastrarem para responder a pedidos de orçamentos da empresa Cinel Rice de Uruguaiana.</p>
          <p>O sitema é usado diariamente e gera uma economia significativa para a empresa.</p>
          <p><strong>Ajudei a desenvolver a maior parte do sistema usando Php, Mysql, Bootstrap e jQuery.</strong></p>
        </div>
      </div>
      <a href="http://cinel.net.br" rel="noreferrer" target="_blank" className="highlight-cta">Acessar</a>
    </div>
  </div>;
}