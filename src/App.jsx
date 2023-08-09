import React, { useState, useEffect } from 'react'
import './App.css'
import TooltipText from './components/TooltipText';
import { Link } from "react-router-dom";

function App() {
  
  const getInitialState = () => {
    const char = localStorage.getItem('char')
    return char ? JSON.parse(char) : 'Loading...'
  }
  const [character, setCharacter] = useState(getInitialState)
  

  useEffect(() => {
    fetch('https://api.disneyapi.dev/character')
      .then(response => response.json())
      .then(data => setCharacter(data))
  }, []);

  

  const values = Object.values(character);
  const filteredData = values[1].filter((item) => item.films.length > 0)
  const sortedData = [...values[1]].sort((a,b)=> a.films.length - b.films.length)
  const threeObjects = sortedData.slice(-3).reverse()

  

  useEffect(() => {
    localStorage.setItem('char', JSON.stringify(character));
  }, [character]);

  console.log(character)
  console.log(values)
  return (
    <div className='main'>
      
      <div className='headlines'>
        <h3>Disney Characters</h3>
        
        <li className='link'><Link to="/MostPopular"> Go to Favourite Chars</Link> </li>
      </div>     
      <div className='mostPopular'>  
        <div className='popularMain'>         
          <p className='popular-headline'>Most popular Characters:</p>
          <p className='absolute'>Films:</p>        
          <div className='popularChar'>
            
            { threeObjects.map((item) => (
              <img src={item.imageUrl} className='popularImages' alt='image of popular char'/>
            ) )}        
            </div>
            <div>
          
    </div>
            <div className='popularCharFlex'>         
              {values ? threeObjects.map((item) => <p className='popularName'> {item.name} </p> ): ''}      
            </div>
            <div className='popularCharFlex'>             
              {values ?  threeObjects.map((item) => <p className='popularFilmLength'>{item.films.length} </p> ): ''}        
            </div>
          </div>
      </div> 
      <div className='flex'>
        <p>Picture</p>
        <p>Name</p>
        <p className='count'>Films count</p>
        <p>Favorites</p>
      </div>
      <div className='another-flex'>        
      <div>
      {filteredData.map((item) => (
        <div key={item.id}>         
        <img src={item.imageUrl} alt={item.name} />
        </div>
      ))}
    </div>
      {values ? <div> 
      {filteredData.map((item) => (
        <div key={item.id}>
          <span>{item.id}</span> <pre className='names'>{item.name}{item.tvShows.length > 0 && <TooltipText style={{marginLeft:'35px'}} item={item} propsvalue={values}/>}</pre>
        </div>
        
      ))}
    </div> : 'Loading...'}   
    {values[1].map((item) => (
        item.films.length > 0
      )) ? <div>
      {filteredData.map((item) => (
        <div key={item.id}>
          <span>{item.id}</span> <p className='films'>{item.films.length}</p>
        </div>
      ))}
    </div> : 'Loading...'}      
      </div>
      
    </div>  
    
  )
}

export default App
