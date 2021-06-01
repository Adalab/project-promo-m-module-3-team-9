import "../stylesheet/App.scss";
import Header from "./Header";
import Card from "./Card";
import Form from "./Form";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main_card--background">
        <div className="main_card">
          <Card />
          <Form />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
