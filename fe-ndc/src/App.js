import logo from './assets/ndclogo1.png';


function App() {
  return (
    <div className="App">
      <img
            src={logo}
            alt="logo"
            className="w-40 md:cursor-pointer"
          />
      <h1 className="text-6xl text-blue-500 font-bold underline"> NDC </h1>
    </div>
  );
}

export default App;
