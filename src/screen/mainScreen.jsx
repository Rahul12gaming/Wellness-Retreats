import { useParams } from "react-router-dom"
import { ChatBox, MobileChatBox } from "../components/chatbox"
import { MessageContainer } from "../components/messagebox";
import { useEffect, useState } from "react";
import axios from "axios";

export const MainScreen=()=>
{

    const {id}=useParams();
    const [chats,setChats]=useState(null)
    useEffect(()=>{
        axios.get(`https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${id}`)
        .then((response)=>{
            // console.log(response);
            setChats(response.data.data.data)
            console.log(chats);
        })
    },[])
    // console.log(chats,"fsdgc");
    // console.log(id);

    const userId=localStorage.getItem("userId")
    return (
        <div className=" gap-2 md:flex">
            <div className="h-auto md:w-4/12 overflow-y-scroll h-screen ">
                <ChatBox />
                <MobileChatBox/>

            </div>
            <div className=" hidden w-full bg-white md:block">
                {
                    !id?<div className="w-full mt-60 flex m-auto justify-center items-center text-center">
                        <p className="text-2xl">Start the New Conservation</p>
                    </div>:<>
                    
                    <div className="w-ful h-screen overflow-y-scroll">
                       <MessageContainer />
                    </div>
                    </>
                }
            </div>
        </div>
    )
}