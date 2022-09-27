import "./styles.css";

//info going into the Person function
//Making An Array of Info to be put in the ELements
const People = [
  //first person
  {
    id: 1,
    img: "https://images.hdqwalls.com/download/viper-valorant-wa-240x320.jpg",
    Name: "Viper",
    Profile:
      "The American chemist, Viper deploys an array of poisonous chemical devices to control the battlefield and cripple the enemy's vision."
  },
  //SecondPerson
  {
    id: 2,
    img:
      "https://images.hdqwalls.com/download/jett-valorant-4k-2020-dl-240x320.jpg",
    Name: "Jett",
    Profile:
      "Representing her home country of South Korea, Jett's agile and evasive fighting style lets her take risks no one else can"
  },
  {
    id: 3,
    img:
      "https://images.hdqwalls.com/download/reyna-valorant-4k-1k-240x320.jpg",
    Name: "Reyna",
    Profile:
      "Forged in the heart of Mexico, Reyna dominates single combat, popping off with each kill she scores."
  }
];
// const Names=["ar","vr","xr"]
// const NewNames =Names.map((name) =>{
//   return(<h1>{name}</h1>);
// })
function App() {
  return (
    <section className="App">
      {People.map((Element) => {
        //const {img,Name,Profile}=Element <----- not required
        return <Person Key="Element.id" Unit={Element} />;
        //return <Person Key="Element.id" {...Element} />;
      })}
    </section>
  );
}

const Person = (props) => {
  console.log(props);
  const { img, Name, Profile } = props.Unit;
  return (
    <article className="Person">
      <img src={img} alt="Viper"></img>
      <h1>{Name}</h1>
      <h3>{Profile}</h3>
    </article>
  );
};

export default App;
