import React from 'react';
import '../styles/ProjetoModal.css';

export default function ProjetoModal({ projeto, onClose }) {
  if (!projeto) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Botão fechar */}
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Fechar modal"
        >
          ×
        </button>

        {/* Lado esquerdo: carrossel de imagens */}
        <div className="modal-left">
          {projeto.video ? (
            <video
              controls
              className="modal-video"
              style={{
                width: '100%',
                maxWidth: '450px',
                borderRadius: '8px',
              }}
            >
              <source src={projeto.video} type="video/mp4" />
              Seu navegador não suporta vídeo.
            </video>
          ) : (
            projeto.imagens.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${projeto.titulo} – slide ${i + 1}`}
                className="modal-img"
              />
            ))
          )}
        </div>

        {/* Lado direito: detalhes */}
        <div className="modal-right">
          <h2 className="modal-title">{projeto.titulo}</h2>
          <p className="modal-desc">{projeto.descricao}</p>

          <div className="modal-tags">
            {projeto.tecnologias.map((tec, i) => (
              <span key={i} className="modal-tag">
                {tec}
              </span>
            ))}
          </div>

          <a
            href={projeto.link}
            target="_blank"
            rel="noopener noreferrer"
            className="modal-btn"
          >
            Ver Projeto
          </a>
        </div>
      </div>
    </div>
  );
}
