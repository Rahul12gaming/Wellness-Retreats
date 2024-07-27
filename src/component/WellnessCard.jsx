export const WellnessCard=({Data})=>
{
    // const data={
    //     title: "Yoga for Stress Relief",
    //     description: "A weekend retreat focused on yoga and meditation to relieve stress.",
    //     date: 1692921600,
    //     location: "Goa",
    //     price: 200,
    //     type: "Signature",
    //     condition: "Stress Relief",
    //     image: "https://cdn.midjourney.com/a287f9bc-d0fb-4e78-a0fa-e8136d3c408a/0_0.jpeg",
    //     tag: [
    
    //     "meditation",
    //     "weekend"
    //     ],
    //     duration: 3,
    //     id: "1"
    //     }
    const data1=JSON.parse(Data);
    console.log(data1);
    return (
        <>
        {
            data1.map((item)=>(
                
            <div className="card w-10/12 p-2 flex flex-col items-center rounded-md border border-slate-300 shadow-md md:w-3/12" >
            <div className="w-full mb-4"> 
                <img className="w-9/12 m-auto" src={item.image} alt="" />
            </div>
            <div className="flex flex-col gap-2">
                <p className="text-xl font-bold">{item.title}</p>
                <p className="text-md font-medium text-black">{item.description}</p>
                <p className="text-md font-medium text-black">{item.date}</p>
                <p className="text-md font-medium text-black">location : {item.location}</p>
                <p className="text-md font-medium text-black">{item.price}</p>
            </div>
        </div>
            ))
        }
        </>
    )
}