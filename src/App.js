import "./styles.css";
import {Data} from "./charchters";
import Charachter from "./Charachter";
// const Names=["ar","vr","xr"]
// const NewNames =Names.map((name) =>{
//   return(<h1>{name}</h1>);
// })
function App() {
  return (
    <section className="App">
      {Data.map((Element) => {
        //const {img,Name,Profile}=Element <----- not required
        //return <Person key={Element.id} Unit={Element} />;
        return <Charachter key={Element.id} {...Element} />;
      })}
    </section>
  );
}



export default App;
