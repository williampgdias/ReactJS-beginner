import './App.css';
import Comment from "./components/Comment";

function App() {
  return (
    <div className="App">
      <h1>My comments App!</h1>
      <Comment 
        name="William Dias"
        email="smdwilliam89@gmail.com"
        date={new Date()}
        message="Estou aprendendo React.js com Jonathan."
      />
      <Comment
        name="Bárbara Moreira"
        email="bcarvalho089@gmail.com"
        date={new Date()}
        message="Meu marido está aprendendo React com o Jonathan."
      />
      
    </div>
  );
}

export default App;
