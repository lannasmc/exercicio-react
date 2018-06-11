import React from 'react';
import './formulario.css';

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      senha: '',
      erro: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()

    console.log('email', this.state.email)
    console.log('senha', this.state.senha)
  }

  render() {
    return (
      <form className="formulario" onSubmit={this.handleSubmit}>
        <h1 className="formulario-titulo">Login</h1>
        <p>Seja Bem vindo(a),<br/>Entre para ver os seus post-it.</p>
        <input className="formulario-campo" type="text" name="email" onChange={this.handleChange} />
        <input className="formulario-campo" type="text" name="senha" onChange={this.handleChange} />
        <button className="formulario-botao">Entrar</button>
        <a href="#">Criar uma conta</a>
      </form>
    )
  };
};

export default Form;
