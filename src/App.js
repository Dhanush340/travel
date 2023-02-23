
import './App.css';
import Nav from "./components/Navbar"
import Card from "./components/Card"
import data from "./data"

function App() {
  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        item={item}
      />
    )
  })
  return (
    <div className="App">
      <Nav />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  );
}

export default App;
/* <Card />
      <Card />
      <Card /> */