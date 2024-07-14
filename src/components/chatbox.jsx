import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import {Link} from 'react-router-dom'

export const ChatBox = () => {
    const [data,setData]=useState(null);
    

    useEffect(()=>{
        axios.get("https://devapi.beyondchats.com/api/get_all_chats")
        .then((response)=>{
            // console.log(response.data);
            setData(response.data.data.data);
            console.log(data);
        })
    },[])
    console.log(data);
    function handle(name,status,id,userId)
    {
        window.location.href=`/`;
        localStorage.setItem("userName",name);
        localStorage.setItem("userStatus",status);
        window.location.href=`/user/${id}/${userId}`;
        
    }
  return (
    
        
        
            data==null?<></>:data.map((item)=>(
                <a onClick={()=>{
                    handle(item.creator.name,item.status,item.id,item.creator.id)
                }}   className="hidden w-full bg-white p-2 border border-slate-200 md:block">
      <div className="flex items-start gap-4">
        <h1 className="logo">S</h1>
        <div>
          <p>{data && item.creator.name==null?"Private":item.creator.name}</p>

        </div>
      </div>
    </a>
            ))
        
        
    
  );
};

export const MobileChatBox = () => {
    const [data,setData]=useState(null);
    

    useEffect(()=>{
        axios.get("https://devapi.beyondchats.com/api/get_all_chats")
        .then((response)=>{
            // console.log(response.data);
            setData(response.data.data.data);
            console.log(data);
        })
    },[])
    console.log(data);
  return (
    
        
        
            data==null?<></>:data.map((item)=>(
                <div onClick={()=>{
                    window.location.href=`user-mobile-view/${item.id}`;
                    localStorage.setItem("userId",item.creator.id)
                    localStorage.setItem("userName",item.creator.name);
                    localStorage.setItem("userStatus",item.status);
                    
                }} className="block w-full bg-white p-2 border border-slate-200 md:hidden">
      <div className="flex items-start gap-4">
        <h1 className="logo">S</h1>
        <div>
          <p>{data && item.creator.name==null?"Private":item.creator.name}</p>

        </div>
      </div>
    </div>
            ))
        
        
    
  );
};
