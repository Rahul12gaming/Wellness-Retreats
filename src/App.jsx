import React, { useEffect, useState } from 'react';
import './App.css'
import { Header } from './component/Header';
import {  HeroBanner } from './component/Banner';
import { WellnessCard } from './component/WellnessCard';
import { Filter } from './component/Filter';
import axios from 'axios';
import { Footer } from './component/Footer';

function App() {
  const [Data,setData]=useState([]);
  const location=localStorage.getItem("location")||null;
  const [loading,setLoading]=useState(true);
  const [next,setNext]=useState(1);
  const [prev,setPrev]=useState(next-1);
  async function LoadApi()
    {

      setLoading(true)
      
        const {data}=await axios.get(`https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?page=${next}&limit=5`);
      
      
      
      
      console.log(data,"fyyutr")
      setData(JSON.stringify(data));
      setLoading(false)
      console.log(Data);
    }

  
  useEffect(()=>{
    console.log(location);
    LoadApi();
    
  },[next])
  return (
    <>
    <Header/>
   <HeroBanner/>
   <Filter/>
   {
    loading?<></>:<div className='mb-4 flex flex-wrap flex-col justify-center  gap-4 m-auto items-center md:flex-row'>

<WellnessCard Data={Data}/>
    </div>
   }
   <div className='flex justify-center gap-10'>

  
   {
   next-1==0?
   <button disabled className='prev text-white border border-slate-500 pl-4 pr-4 pt-2 pb-2' >Prev</button>:
   <button onClick={()=>setNext(next-1)} className='prev text-white border border-slate-500 pl-4 pr-4 pt-2 pb-2'>Prev</button>


   }
    <button onClick={()=>setNext(next+1)} className='next text-white border border-slate-500 pl-4 pr-4 pt-2 pb-2'>Next</button>
   </div>
   <Footer/>
  
  
    </>
    
  );
}

export default App;