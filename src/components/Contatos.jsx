import emailIcon from '../Imagens/email.svg';
import phoneIcon from '../Imagens/phone.svg';
import linkedinIcon from '../Imagens/linkedin.svg';
import githubIcon from '../Imagens/github.svg';
import instaIcon from '../Imagens/Icone - Insta.svg';
import '../styles/Contatos.css';

const Contatos = () => {
  const contatos = [
    {
      icon: emailIcon,
      title: 'E-mail',
      value: 'ronanpinheiro001@gmail.com',
    },
    {
      icon: phoneIcon,
      title: 'Telefone',
      value: '(62) 9 9341-1237',
    },
    {
      icon: linkedinIcon,
      title: 'LinkedIn',
      value: 'Ronan Pinheiro Otávio',
      link: 'https://www.linkedin.com/in/ronan-pinheiro-ot%C3%A1vio-37173425b/',
    },
    {
      icon: githubIcon,
      title: 'GitHub',
      value: 'Ronan_Pinheiro',
      link: 'https://github.com/Ronan-Pinheiro',
    },
    {
      icon: instaIcon,
      title: 'Instagram',
      value: 'Ronan._.Pinheiro',
      link: 'https://www.instagram.com/Ronan._.Pinheiro',
    },
  ];

  return (
    <section className="Contatos">
      <div className="ContatosContainer">
        <h1>CONTATOS</h1>
      </div>
      <div className="ContatosLista">
        {contatos.map((contato, index) => (
          <a
            key={index}
            href={contato.link}
            target="_blank"
            rel="noopener noreferrer"
            className="ContatoItem"
          >
            <div className="ContatoIcon">
              <img src={contato.icon} alt={contato.title} />
            </div>
            <h2>{contato.title}</h2>
            <p>{contato.value}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contatos;
