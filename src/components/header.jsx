
import { HiBars3CenterLeft } from "react-icons/hi2";
import { MdCancel } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { MdGroups } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import { MdModeNight } from "react-icons/md";
import { IoSunny } from "react-icons/io5";
import { useState } from "react";


export const Header=()=>
{
    // const [open,setOpen]=useState(false);
    const [open,setOpen]=useState(false)
    const [mode,setMode]=useState(false)
    function handleTheme()
    {
        setMode(!mode)
        localStorage.setItem("mode",mode);
        if(mode)
        {
            // document.style.backgroundColor="black"
            const dom=document.querySelectorAll('div');
            document.querySelector('header').style.backgroundColor="black"
            // document.querySelector('nav').style.backgroundColor="black"
      

            document.querySelectorAll('a').forEach(e=>{
                e.style.backgroundColor="black"
            })

            dom.forEach(element => {
                element.style.backgroundColor = 'black'; 
                element.style.color = 'white'; 
                document.body.style.backgroundColor="black"
                // Set the desired color here
              });
        }
        else{
          

            const dom=document.querySelectorAll('div');
            document.querySelector('header').style.backgroundColor="white"
            // document.querySelector('nav').style.backgroundColor="white"
          
            document.querySelectorAll('a').forEach(e=>{
                e.style.backgroundColor="white"
            })
            // document.getElementById("sidebar").style.color="black"

            dom.forEach(element => {
                element.style.backgroundColor = 'white'; 
                element.style.color = 'black'; 
                document.body.style.backgroundColor="white"
        })
    }
            
    }
    return (
        <>
      
               {
                open?(
                    <div className="h-screen z-20 absolute top-0 w-8/12 shadow-md  md:w-3/12 " id="sidebar">
                    <div className="w-11/12 m-auto flex justify-between p-4 items-start">
                    <div className="flex flex-col gap-2">
                    <h1 className="logo">R</h1>
                    <p>Rahul Adhikari</p>
                    <h4>Frontend Developer</h4>
                    </div>

                    <button onClick={()=>setOpen(!open)}><MdCancel size={20}/></button>
                    </div>
                    <hr />
                   
                    <hr />
                    <div className="flex items-center p-4 gap-10 shadow-md mt-4">
                        <CgProfile size={20}/>
                        <p>My Profile</p>
                    </div>

                    <div className="flex items-center p-4 gap-10 shadow-md mt-2">
                        <MdGroups size={20}/>
                        <p>New Groups</p>
                    </div>

                    <div className="flex items-center p-4 gap-10 shadow-md mt-2">
                        <IoCallSharp size={20}/>
                        <p>Calls</p>
                    </div>


                    
                    <div className="flex items-center p-4 gap-10 shadow-md mt-2">
                        <IoIosSettings size={20}/>
                        <p>Setting</p>
                    </div>
                 </div>
                ):<></>
               }
        
        <header className=" p-8 shadow-md bg-white sticky top-0 z-10">
            <nav className="w-10/12 m-auto flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <button onClick={()=>setOpen(!open)} ><HiBars3CenterLeft size={25}/></button>
                    <h4 className="text-2xl">Telegram</h4>
                </div>
                {/* <div>
                    <button>search</button>
                </div> */}
                <div>
                <button onClick={handleTheme} className="flex justify-between p-4  gap-10 items-center shadoww-md mt-2"> {mode?<MdModeNight size={20}/>:<IoSunny size={20}/>}</button>
                </div>
            </nav>
        </header>
        </>
    )
}