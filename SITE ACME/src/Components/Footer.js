import React from 'react';
import '../Styles/Home.css';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
   render(){
      return(
         <div className="footer">
            <div className="info-left">
            <p className="info-title">Suporte</p>
               <div className="info-list">
                  <div>Telefone SAC: 0800-01017-1235</div>
                  <div>suporte.sac@acme.com</div>
                  <div>Sede: Rua das Flores, Bairro Azul, Santos/SP</div>
               </div>
            </div>
            <div className="info-middle">
               <h1 className="footer-title" style={{borderBottom: 'transparent'}}>ACME&nbsp;<span className="material-icons">directions_run</span></h1>
               <span className="footer-subtitle">A maior marca de calçados esportivos da Baixada Santista</span>
            </div>
            <div className="info-right">
            <p className="info-title">Mais</p>
               <div className="info-list">
                  <div>Sobre nós</div>
                  <Link className="footer-link" to="/contato"><span>Seja nosso parceiro!</span></Link>
               </div>
            </div>
         </div>
      )
   }
}

export default Footer;