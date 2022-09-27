import React from 'react'

const Charachter = ({img,Name,Profile}) => {
    //const { img, Name, Profile } = props.Unit;
    //const {img,Name,Profile} = props;
    const clickHandler = () =>{
      alert('Hello World');
    };
  
    const complexExample = () =>{
      console.log(Profile);
    };
    return (
      <article className="Charachter" onMouseOver={() =>{
        console.log(Name);
      }}>
        <img src={img} alt="Viper"></img>
        <h1 onClick={() => console.log(Name)}>{Name}</h1>
        <h3>{Profile}</h3>
        <button type="button" onClick={clickHandler}>reference example</button>
        <button type="button" onClick={complexExample}>more complex example</button>
  
      </article>
    );
  };

export default Charachter