import "./App.css";
import Counter from "./components/Counter";
import ClassComponentCounter from "./components/ClassComponent";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ImageComponent from "./components/ImageComponent"
import EventHandler from "./components/EventHandler";
import ControllComponentForm from "./components/Forms/ControllComponentForm";
import UnControlledComponentForm from "./components/Forms/UnControlledComponentForm";

function App() {
  const greeting = "Helo world";
  const num = 10;

  return (
    <>
      <Header title="This is App Header" content="this is another props" />

      <div className="App">
        <ImageComponent/>
        <p>Helo world {greeting}</p>
        <p>{5 + 5}</p>
        {num > 10 ? <p>Greater than 10</p> : <p>Less than 10</p>}

        <div>
          <Counter />
          <ClassComponentCounter title="Class Based Counter" />
        </div>

        <EventHandler/>
        <ControllComponentForm/>
        <UnControlledComponentForm/>
      </div>

      <Footer title="This is App Footer" content="this is another props" />
    </>
  );
}

export default App;
