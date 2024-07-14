import { useParams } from "react-router-dom"

import { useEffect, useState } from "react";
import axios from "axios";

export const MobileMainScreen=()=>
{


    const data=[
        {
        "id": 14022,
        "sender_id": 1,
        "role_id": 9,
        "message": "Hi there! Welcome to BeyondChats\nWhat brings you here today?\nAsk me anything about BeyondChats",
        "unanswered": 0,
        "vote": null,
        "chat_id": 3888,
        "action_id": null,
        "is_corrected": 0,
        "created_at": "2024-07-04T09:41:48.000000Z",
        "updated_at": "2024-07-04T09:41:48.000000Z",
        "sender": {
        "id": 1,
        "name": "BeyondChat",
        "email": "contact@beyondchat.com",
        "phone": null,
        "email_verified_at": null,
        "password_updated": 0,
        "created_at": null,
        "updated_at": "2023-04-26T12:43:24.000000Z",
        "device": null,
        "browser": null,
        "os": null,
        "city": null,
        "country": null
        }
        },
        {
        "id": 14023,
        "sender_id": 3828,
        "role_id": 4,
        "message": "hi",
        "unanswered": 0,
        "vote": null,
        "chat_id": 3888,
        "action_id": null,
        "is_corrected": 0,
        "created_at": "2024-07-04T09:41:48.000000Z",
        "updated_at": "2024-07-04T09:41:48.000000Z",
        "sender": {
        "id": 3828,
        "name": "Shone Jogi",
        "email": "asdfaefsdfgqwaeg@beyondexams.orgfasd",
        "phone": "9130907456",
        "email_verified_at": null,
        "password_updated": 0,
        "created_at": "2024-07-04T09:41:23.000000Z",
        "updated_at": "2024-07-04T09:41:23.000000Z",
        "device": "desktop",
        "browser": "Chrome",
        "os": "Mac",
        "city": "Delhi",
        "country": {
        "id": 103,
        "name": "India",
        "code": "IN",
        "phone_code": "91"
        }
        }
        },
        {
        "id": 14024,
        "sender_id": 1,
        "role_id": 9,
        "message": "Hello! \nHow can I assist you today?",
        "unanswered": 0,
        "vote": null,
        "chat_id": 3888,
        "action_id": null,
        "is_corrected": 0,
        "created_at": "2024-07-04T09:41:50.000000Z",
        "updated_at": "2024-07-04T09:41:50.000000Z",
        "sender": {
        "id": 1,
        "name": "BeyondChat",
        "email": "contact@beyondchat.com",
        "phone": null,
        "email_verified_at": null,
        "password_updated": 0,
        "created_at": null,
        "updated_at": "2023-04-26T12:43:24.000000Z",
        "device": null,
        "browser": null,
        "os": null,
        "city": null,
        "country": null
        }
        },
        {
        "id": 14087,
        "sender_id": 1,
        "role_id": 9,
        "message": "Hi there! Welcome to BeyondChats\nWhat brings you here today?\nAsk me anything about BeyondChats",
        "unanswered": 0,
        "vote": null,
        "chat_id": 3888,
        "action_id": null,
        "is_corrected": 0,
        "created_at": "2024-07-10T07:33:27.000000Z",
        "updated_at": "2024-07-10T07:33:27.000000Z",
        "sender": {
        "id": 1,
        "name": "BeyondChat",
        "email": "contact@beyondchat.com",
        "phone": null,
        "email_verified_at": null,
        "password_updated": 0,
        "created_at": null,
        "updated_at": "2023-04-26T12:43:24.000000Z",
        "device": null,
        "browser": null,
        "os": null,
        "city": null,
        "country": null
        }
        },
        {
        "id": 14088,
        "sender_id": 3828,
        "role_id": 4,
        "message": "cost",
        "unanswered": 0,
        "vote": null,
        "chat_id": 3888,
        "action_id": null,
        "is_corrected": 0,
        "created_at": "2024-07-10T07:33:27.000000Z",
        "updated_at": "2024-07-10T07:33:27.000000Z",
        "sender": {
        "id": 3828,
        "name": "Shone Jogi",
        "email": "asdfaefsdfgqwaeg@beyondexams.orgfasd",
        "phone": "9130907456",
        "email_verified_at": null,
        "password_updated": 0,
        "created_at": "2024-07-04T09:41:23.000000Z",
        "updated_at": "2024-07-04T09:41:23.000000Z",
        "device": "desktop",
        "browser": "Chrome",
        "os": "Mac",
        "city": "Delhi",
        "country": {
        "id": 103,
        "name": "India",
        "code": "IN",
        "phone_code": "91"
        }
        }
        },
        {
        "id": 14089,
        "sender_id": 1,
        "role_id": 9,
        "message": "Our costs vary depending on the service you require. \nFor example, an online appraisal via video call is £399, while an express or urgent appraisal is £500 [[1]](https://medicalappraisals.org.uk/cost). \nAdditionally, routine appraisal is priced at £399 and express appraisal at £500 [[1]](https://medicalappraisals.org.uk/cost). \nFeel free to visit our website for further details on pricing. \nHow can I assist you further with this information?",
        "unanswered": 0,
        "vote": null,
        "chat_id": 3888,
        "action_id": null,
        "is_corrected": 0,
        "created_at": "2024-07-10T07:33:37.000000Z",
        "updated_at": "2024-07-10T07:33:37.000000Z",
        "sender": {
        "id": 1,
        "name": "BeyondChat",
        "email": "contact@beyondchat.com",
        "phone": null,
        "email_verified_at": null,
        "password_updated": 0,
        "created_at": null,
        "updated_at": "2023-04-26T12:43:24.000000Z",
        "device": null,
        "browser": null,
        "os": null,
        "city": null,
        "country": null
        }
        },
        {
        "id": 14090,
        "sender_id": 3828,
        "role_id": 4,
        "message": "myths",
        "unanswered": 0,
        "vote": null,
        "chat_id": 3888,
        "action_id": null,
        "is_corrected": 0,
        "created_at": "2024-07-10T07:33:51.000000Z",
        "updated_at": "2024-07-10T07:33:51.000000Z",
        "sender": {
        "id": 3828,
        "name": "Shone Jogi",
        "email": "asdfaefsdfgqwaeg@beyondexams.orgfasd",
        "phone": "9130907456",
        "email_verified_at": null,
        "password_updated": 0,
        "created_at": "2024-07-04T09:41:23.000000Z",
        "updated_at": "2024-07-04T09:41:23.000000Z",
        "device": "desktop",
        "browser": "Chrome",
        "os": "Mac",
        "city": "Delhi",
        "country": {
        "id": 103,
        "name": "India",
        "code": "IN",
        "phone_code": "91"
        }
        }
        },
        {
        "id": 14091,
        "sender_id": 1,
        "role_id": 9,
        "message": "There are many myths surrounding medical appraisals, but one common misconception is that they are time-consuming and complicated. \nAt Medical Appraisals, we strive to make the process as efficient and straightforward as possible for doctors. \nWe offer a user-friendly platform and dedicated support to ensure a smooth experience. \nIs there any specific myth you'd like me to address or clarify further?",
        "unanswered": 0,
        "vote": null,
        "chat_id": 3888,
        "action_id": null,
        "is_corrected": 0,
        "created_at": "2024-07-10T07:33:54.000000Z",
        "updated_at": "2024-07-10T07:33:54.000000Z",
        "sender": {
        "id": 1,
        "name": "BeyondChat",
        "email": "contact@beyondchat.com",
        "phone": null,
        "email_verified_at": null,
        "password_updated": 0,
        "created_at": null,
        "updated_at": "2023-04-26T12:43:24.000000Z",
        "device": null,
        "browser": null,
        "os": null,
        "city": null,
        "country": null
        }
        },
        {
        "id": 14092,
        "sender_id": 3828,
        "role_id": 4,
        "message": "can you tell me some of the myths",
        "unanswered": 0,
        "vote": null,
        "chat_id": 3888,
        "action_id": null,
        "is_corrected": 0,
        "created_at": "2024-07-10T07:34:14.000000Z",
        "updated_at": "2024-07-10T07:34:14.000000Z",
        "sender": {
        "id": 3828,
        "name": "Shone Jogi",
        "email": "asdfaefsdfgqwaeg@beyondexams.orgfasd",
        "phone": "9130907456",
        "email_verified_at": null,
        "password_updated": 0,
        "created_at": "2024-07-04T09:41:23.000000Z",
        "updated_at": "2024-07-04T09:41:23.000000Z",
        "device": "desktop",
        "browser": "Chrome",
        "os": "Mac",
        "city": "Delhi",
        "country": {
        "id": 103,
        "name": "India",
        "code": "IN",
        "phone_code": "91"
        }
        }
        },
        {
        "id": 14093,
        "sender_id": 1,
        "role_id": 9,
        "message": "One common myth about medical appraisals is that they are the main way to identify concerns about doctors [[1]](https://youtube.com/watch?v=-jPmZiMzHVA). \nHowever, issues related to performance, conduct, or health are usually discovered through separate clinical governance processes, not primarily during appraisals [724; 777]. \nAnother myth is that doctors can fail their medical appraisals, but in reality, it's not a pass or fail assessment; instead, it's a formative and developmental process [[2]](https://youtube.com/watch?v=100PU1CCv3E). \nThese myths often lead to misunderstandings about the purpose and outcomes of medical appraisals.",
        "unanswered": 0,
        "vote": null,
        "chat_id": 3888,
        "action_id": null,
        "is_corrected": 0,
        "created_at": "2024-07-10T07:34:23.000000Z",
        "updated_at": "2024-07-10T07:34:23.000000Z",
        "sender": {
        "id": 1,
        "name": "BeyondChat",
        "email": "contact@beyondchat.com",
        "phone": null,
        "email_verified_at": null,
        "password_updated": 0,
        "created_at": null,
        "updated_at": "2023-04-26T12:43:24.000000Z",
        "device": null,
        "browser": null,
        "os": null,
        "city": null,
        "country": null
        }
        },
    ]

    const {id}=useParams();
    const [chats,setChats]=useState(JSON.parse(localStorage.getItem("data"))||[])
    useEffect(()=>{
        axios.get(`https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${id}`)
        .then((response)=>{
            
            localStorage.setItem("data",JSON.stringify(response.data.data))
            setChats(JSON.parse(localStorage.getItem("data")))
            console.log(chats,"ddt");
        })
    },[id])
    
    return (
    <>
      <div className="sticky top-0  bg-white w-12/12 ml-auto p-2 flex gap-4 items-center shadow-md md:hidden">
        <h1 className="logo">S</h1>
        <div className="flex-col gap-0">
          <p>{localStorage.getItem("userName")}</p>
          <p className="mt-0 flex items-center gap-2">
            <span className="text-3xl text-green-700">•</span>{localStorage.getItem("userStatus")}
          </p>
        </div>
      </div>
      <hr />
      <div className="">
        {
            chats.map((item)=>(
                <div className={`${item.sender.id==localStorage.getItem("userId")?"ml-auto mt-10":"ml-4 mt-10"} p-4 w-auto border border-slate-300 text-sm`}>
                    <h1 className="logo1">{item && item.sender.name.charAt(0)}</h1>
                    <p className="mt-2">{item && item.message}</p>
                </div>
            ))
        }
      </div>
    </>
  );
}