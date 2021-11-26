import React from 'react';
import '../Styles/Home.css';
import { Link } from 'react-router-dom';

class Header extends React.Component {
   render(){
      return(
         <div className="header">
            <div className="header-top">
               <div style={{display: 'flex', justifyContent: 'center', alignItems: 'unset'}}>
                  <span className="material-icons" style={{fontSize:'20px'}}>phone</span>
                  <div>&nbsp;Contate nossa sede: 0800-1234-5678</div>
               </div>
            </div>
            <div className="header-middle">
               <h1 className="header-title" style={{borderBottom: 'transparent'}}>ACME&nbsp;<span className="material-icons">directions_run</span></h1>
               <div className="links">
                  <Link className="link" to="/"><span>Home</span></Link>
                  <Link className="link" to="/ofertas"><span>Ofertas</span></Link>
                  <Link className="link" to="/locais"><span>Locais</span></Link>
                  <Link className="link" to="/contato"><span>Contato</span></Link>
               </div>
            </div>
            <div className="header-bottom">
               <div className="phrase"> Os melhores produtos, as melhores ofertas, pertinho de você! </div>
            </div>
         </div>
      )
   }
}

export default Header;