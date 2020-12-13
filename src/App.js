import logo from './logo.svg';

function App() {
  return (
    <div className="app-container">
      <header>
        <nav>
          <img src={logo} className="app-logo" alt="logo" />
          <h1>GROCERY STORE</h1>
          <ul>
            <li><a href="#">home</a></li>
            <li><a href="#">about</a></li>
            <li><a href="#">cart</a></li>
          </ul>
        </nav>
      </header>
      <br />
      <p>Text sample</p>
    </div>
  );
}

export default App;
