import React from 'react';
import Button from '@material-ui/core/Button';

// Stylesheet
import '../Styles/Home.css';

// Componentes
import Header from '../Components/Header';
import Footer from '../Components/Footer';

// Json
import product from './Data.json';


class Produto extends React.Component {
   render() {
      const produto = this.props.produto
      return (
         <div className='product'>
            <img className='product-image' src={produto.imagem} alt={produto.Nome} />
            <div className='product-name'>{produto.Nome}</div>
            {produto.Promocao &&
               <div className='on-sale'>EM PROMOÇÃO</div>
            }
         </div>
      )
   }
}

class Home extends React.Component {
   constructor(props){
   super(props)
   this.state = {
      pesquisa: '',
      produto_lista: product,
      tipo_busca: "Marca"
   }

   this.scrollProdutos = this.scrollProdutos.bind(this)
   this.barra_pesquisa = this.barra_pesquisa.bind(this)
   this.handleChange = this.handleChange.bind(this)
   this.handleKeyDown = this.handleKeyDown.bind(this)

   }

   scrollProdutos() {
        this.scrollDiv.scrollIntoView({ behavior: "smooth", block: "end" })
    }
   
   barra_pesquisa() {
      let pesquisa = this.state.pesquisa.toLowerCase()
      let tipo_busca = this.state.tipo_busca
      let lista_filtrada = product.filter((item) => item[tipo_busca].toLowerCase().includes(pesquisa))
      this.setState({produto_lista: lista_filtrada})
   }

   handleChange(e) {
      this.setState({pesquisa: e.target.value})
      if (this.state.pesquisa === '') {
         this.setState({produto_lista: product})
      }
   }

   handleKeyDown(e) {
    if (e.key === 'Enter') {
      this.barra_pesquisa();
      }
   }


   render(){
      return(
         <div className="container">
            <Header />
            <div ref={(div) => {this.scrollDiv = div}}></div>
            
            <div className="body" style={{flexDirection: 'column', alignItems: 'center'}}>
            <h1>Veja todos os nossos produtos!</h1>
            <div className="search">
               <div className="search-input">
                  <input
                     className="search" placeholder="Buscar produtos..." type="text"
                     value={this.state.pesquisa} onChange={this.handleChange}
                     onKeyDown={this.handleKeyDown}
                  />
                  <button onClick={this.barra_pesquisa}><span className="material-icons">search</span>
                  </button>
               </div>
               <div className='search-btns'>
                  <Button
                     color="secondary"
                     variant={this.state.pesquisa === '' ? "outlined" : "contained"} onClick={() => {this.setState({tipo_busca: "Nome", pesquisa: ""})}} onChange={this.handleChange}>Por Nome</Button>
                  <Button
                     color="secondary"
                     variant={this.state.pesquisa === 'Nike' ? "outlined" : "contained"} onClick={() => {this.setState({tipo_busca: "Marca", pesquisa: "Nike"})}} onChange={this.handleChange}>Nike</Button>
                  <Button
                     color="secondary"
                     variant={this.state.pesquisa === 'Adidas' ? "outlined" : "contained"} onClick={() => this.setState({tipo_busca: "Marca", pesquisa: 'Adidas'})} onChange={this.handleChange}>Adidas</Button>
                  <Button
                     color="secondary"
                     variant={this.state.pesquisa === 'Converse' ? "outlined" : "contained"} onClick={() => this.setState({tipo_busca: "Marca", pesquisa: 'Converse'})}onChange={this.handleChange}>Converse</Button>
                  <Button
                     color="secondary"
                     variant={this.state.pesquisa === 'Mizuno' ? "outlined" : "contained"} onClick={() => this.setState({tipo_busca: "Marca", pesquisa: 'Mizuno'})}onChange={this.handleChange}>Mizuno</Button>
                  <Button
                     color="secondary"
                     variant={this.state.pesquisa === 'Olympikus' ? "outlined" : "contained"} onClick={() => this.setState({tipo_busca: "Marca", pesquisa: 'Olympikus'})}onChange={this.handleChange}>Olympikus</Button>
               </div>
            </div>
               <div className='container-products'>
                  {this.state.produto_lista.map((produto, index)=>(
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


export default Home;
