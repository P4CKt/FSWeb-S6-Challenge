import axios from 'axios';
import React, { useState, useEffect} from 'react';
import Karakter from './components/Karakter';
import { data } from './mocks/handlers';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import Searcher from './components/Search';
import Page from './components/page';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
const [sdata,setsData]= useState();
const [page,setPage]= useState("1");
const[search,setSearch]= useState("Dart");



  

useEffect(()=>{ 
  
  axios.get("https://swapi.dev/api/people?page=" + page).then((response)=>{
        setsData(response.data.results);
        console.log(sdata);
      
    }).catch((error)=>{console.log(error);console.log("DEĞİLLL")})
    },[page])
  
  const SCMain=styled.section`
  font-size:10px;
  `
  
    

  

  return (
    <div className="App">
      <h1 className="Header">Karakterler</h1>
      <div>
        <Searcher setSearch={setSearch} search={search} />
      </div>
         <SCMain>
           {sdata && sdata.map(element => {
           return <Karakter data={element}/>
          })}  
           
        </SCMain>  

        <Page/>
    </div>
  );

}

export default App;
