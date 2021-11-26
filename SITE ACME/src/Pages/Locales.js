import React from 'react';
import Button from '@material-ui/core/Button';

// Stylesheet
import '../Styles/Home.css';
import '../Styles/Locales.css';

// Componentes
import Header from '../Components/Header';
import Footer from '../Components/Footer';

// Json
import locales from './Locais.json';


class Local extends React.Component {
   render() {
      const local = this.props.local
      return (
         <div className="locale">
            <div className="locale-street">{local.Rua}, {local.Numero}</div>
            <div className="locale-neighborhood">Bairro {local.Bairro}</div>
            <div className="locale-city">{local.Cidade}</div>
         </div>
      )
   }
}

class Locales extends React.Component {
	constructor(props){
	super(props)
	this.state = {
		pesquisa: '',
		locais_lista: locales,
		tipo_busca: "Rua",
	}

	this.handleChange = this.handleChange.bind(this)
	this.handleKeyDown = this.handleKeyDown.bind(this)
	this.handleSearch = this.handleSearch.bind(this)

	}

	handleSearch() {
	  let pesquisa = this.state.pesquisa.toLowerCase()
	  let tipo = this.state.tipo_busca

	  let lista_filtrada = locales.filter((item) => item[tipo].toLowerCase().includes(pesquisa))

	  this.setState({locais_lista: lista_filtrada})
	}

	handleChange(e) {
	  this.setState({pesquisa: e.target.value})
	  if (this.state.pesquisa === '') {
	     this.setState({locais_lista: locales})
	  }
	}

	handleKeyDown(e) {
	if (e.key === 'Enter') {
	  this.handleSearch();
	  }
	}


	render(){
	   return(
	      <div className="container">
	            <Header />
	            
	            <div className="body" style={{flexDirection: 'column', alignItems: 'center'}}>
	            <h1>Procure a nossa loja mais próxima de você!</h1>
	            <div className="search">
	               <div className="search-input">
	                  <input
	                     className="search" placeholder="Buscar por endereço..." type="text"
	                     value={this.state.pesquisa} onChange={this.handleChange}
	                     onKeyDown={this.handleKeyDown}
	                  />
	                  <button onClick={this.handleSearch}><span className="material-icons">search</span></button>
	               </div>
	               <div className="locales-buttons">
	                 	<Button
	                 		size="large" color="secondary"
	                 		variant={this.state.tipo_busca === 'Rua' ? "outlined" : "contained"}
	                 		onClick={() => this.setState({tipo_busca: "Rua"})}>RUA</Button>
	                 	<Button
	                 		size="large" color="secondary"
	                 		variant={this.state.tipo_busca === 'Bairro' ? "outlined" : "contained"}
	                 		onClick={() => this.setState({tipo_busca: "Bairro"})}>BAIRRO</Button>
	                 	<Button
	                 		size="large" color="secondary"
	                 		variant={this.state.tipo_busca === 'Cidade' ? "outlined" : "contained"}
	                 		onClick={() => this.setState({tipo_busca: "Cidade"})}>CIDADE</Button>
	                 </div>
	            </div>
	            <div className="container-products">
	               {this.state.locais_lista.map((local, index)=> (
	               		<Local
	               			key={index}
	               			local={local}
	               		/>
	               	))}
	             </div>
	            </div>
	            
	            <Footer/>
	        </div>
	    )
	}
}


export default Locales;
