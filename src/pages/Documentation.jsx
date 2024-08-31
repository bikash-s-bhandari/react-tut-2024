
import Counter from "../components/Counter";
import ClassComponentCounter from "../components/ClassComponent";
import ImageComponent from "../components/ImageComponent";
import EventHandler from "../components/EventHandler";
import ControllComponentForm from "../components/Forms/ControllComponentForm";
import UnControlledComponentForm from "../components/Forms/UnControlledComponentForm";


const Documentation = () => {
    const greeting = "Helo world";
  const num = 10;
   return (
    <>
    <ImageComponent />
    <p>Helo world {greeting}</p>
    <p>{5 + 5}</p>
    {num > 10 ? <p>Greater than 10</p> : <p>Less than 10</p>}

    <div>
      <Counter />
      <ClassComponentCounter title="Class Based Counter" />
    </div>

    <EventHandler />
    <ControllComponentForm />
    <UnControlledComponentForm />
    </>
   )
  };
  
  export default Documentation;
  