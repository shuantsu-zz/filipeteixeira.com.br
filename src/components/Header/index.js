import React from 'react';
import './style.scss';
import myPhoto from '../../img/eu.jpg';

export default function Header() {
  return <div className="gradient-wrapper">
    <header className="header container">
      <div className="image"><img src={myPhoto} alt="Filipe Teixeira"/></div>
      <div className="description">
        <h1>Filipe Teixeira</h1>
        <h2>Seja bem-vindo ao meu portfolio!</h2>
        <p>Sou desenvolvedor fullstack e trabalho atualmente no departamento técnico da empresa <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/company/medeiros-contabilidade-e-solucoes/mycompany/">Medeiros Contabilidade e Soluções</a>.</p>
      </div>
    </header>
  </div>;
}