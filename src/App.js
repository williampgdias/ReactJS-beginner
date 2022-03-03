import './App.css';
import Comment from './components/Comment';

function App() {
  return (
    <div className="App">
      <h1>My Comments App!</h1>
      <Comment
        name="William Dias"
        email="smdwilliam89@gmail.com"
        date={new Date()}
        message="Front-End Developer"
      />
      <Comment
        name="Bárbara Moreira"
        email="bcarvalho89@gmail.com"
        date={new Date()}
        message="Digital Marketing"
      />
    </div>
  );
}

export default App;
