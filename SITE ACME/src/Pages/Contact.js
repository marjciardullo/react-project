import React from 'react';
import '../Styles/Contact.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';


class Contact extends React.Component {

render(){
   return(
      <div className="container">
            <Header />
            
            <div className="body" style={{flexDirection: 'column', alignItems: 'center'}}>
            <h1>Como podemos te ajudar?</h1>

            <h2>E-mail</h2>
            <p>Para entrar em contato conosco, você pode mandar um e-mail para <span className="strong">consumidor@acme.com</span>, ou se estiver insatisfeito com algum produto ou serviço, nos contate por <span className="strong">suporte.sac@acme.com</span>.</p>
            <p>Está interessado em trabalhar na Acme? Envie seu currículo para <span className="strong">acme.rh@acme.com</span>! Estamos sempre braços abertos aqui na Acme!</p>
            <p>Quer fazer alguma parceria com a nossa empresa, então use o e-mail <span className="strong">parceiros@acme.com</span>, nos enviando as informações necessárias de sua empresa e seus planos de colaboração.</p>

            <h2>Telefone</h2>
            <p>Para entrar em contato com o nosso setor de Atendimento ao Consumidor, ligue para <span className="strong">0800-01017-1235</span> entre as 9h às 18h.</p>
            <p>Quer falar com a nossa sede? Então ligue para <span className="strong">0800-1234-5678</span> a partir das 10h até 21h, e converse com o nosso diretor.</p>
            <p>Você está interessado em ser nosso parceiro? Então o número para você é <span className="strong">(13) 1255-1067</span> entre as 9h às 18h. Aguardamos a sua ligação!</p>
               
            </div>
            
            <Footer />
         </div>
      )
   }
}


export default Contact;
