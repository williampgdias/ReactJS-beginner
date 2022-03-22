import React from 'react';
import './App.css';
import Comment from "./components/Comment";

class App extends React.Component {

  state = {
    comments: [
      {
        name: 'William Dias',
        email: 'smdwilliam89@gmail.com',
        date: new Date(),
        message: 'Estou aprendendo React.js com o Jonathan.'
      },
      {
        name: "Bárbara Moreira",
        email: "bcarvalho089@gmail.com",
        date: new Date(),
        message: "Meu marido está aprendendo React com o Jonathan."
      },
    ]
  }

  addComment = () => {
    const newComment = {
      name: "Felipe Melo",
      email: "felipe@gmail.com",
      date: new Date(),
      message: "Mensagem."
    };

    this.setState({
      comments: [...this.state.comments, newComment]
    });
  }


  render() {
    return (
      <div className="App">
        <h1>My comments App!</h1>
        { this.state.comments.map((comment, index) => {
          return (
            <Comment 
              key = { index }
              name= { comment.name }
              email= { comment.email }
              date= { comment.date }
              message= { comment. message }
            />
          );
        }) }
        <button onClick={ this.addComment }>Adicionar comentário</button>
        
      </div>
    );
  };
}


export default App;
