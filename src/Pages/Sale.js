import React from 'react';
import '../Styles/Sale.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Produto from '../Components/Produto';
import Lista_Produtos from './Data.json';

class Sale extends React.Component {

render(){
   
   let promocoes = Lista_Produtos.filter(produto=>produto.Promocao === true)

      return(
         <div className="container">
            <Header />
            <div className="body">
               <div ref={(div) => {this.scrollDiv = div}}></div>
               <h1>Confira nossos produtos em promoção!</h1>
               <div className="body">
               {promocoes.map((produto, index)=>(
                  <Produto 
                     key={index}
                     produto={produto}
                  />
               ))}
               </div>
            </div>
            
            <Footer />
         </div>
      )
   }
}


export default Sale;
