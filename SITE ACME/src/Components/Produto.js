import React from 'react';
import '../Styles/Home.css';

class Produto extends React.Component {
   render(){
      const produto = this.props.produto
      return(
         <div className="product">
            <img className="product-image" src={produto.imagem} alt={produto.Nome} />
            <div className="product-name">{produto.Nome}</div>
            {produto.Promocao &&
               <div className="on-sale">EM PROMOÇÃO!</div>
            }
         </div>
      )
   }
}

export default Produto;