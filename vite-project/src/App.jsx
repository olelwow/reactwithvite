//import { useState } from 'react'
import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Joke from './components/Joke'
import jokesData from './jokesData'
import airbnbData from './data'


function App() {
    //const colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"]
    //const jokeElements = jokesData.map(joke => <Joke setup={joke.setup} punchline={joke.punchline}/>)

    const dataElements = airbnbData.map(person => 
        (<Card 
            image={person.coverImg}
            rating={person.stats.rating}
            reviewCount={person.stats.reviewCount}
            country={person.location}
            title={person.title}
            price={person.price}
        />));

  return (
    <>
    <img src={reactLogo}></img>
        {dataElements}
        {/* {jokeElements} */}
        {/* {colors.map(c => <h3>{c}</h3>)} */}
        {/* <Navbar 
        
        />
        <Card 
            image={Katie}
            rating={5.5}
            reviewCount={6}
            country='SWE'
            title="Life lessons with Knävrål"
            price={239}
        /> */}
    </>
  )
}

export default App
