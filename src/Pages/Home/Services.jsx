
import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "../../Components/ServiceCard";


const Services = () => {
    const [services ,setServices] = useState()
    useEffect(()=>{
        fetch('https://car-doctor-for-server.vercel.app/services')
        .then(res=>res.json())
        .then(data=>{
            setServices(data)
        })
    },[])
    return (
        <div>
            <div className="text-center space-y-3 mt-10">
                <h1 className="text-3xl font-semibold text-orange-600 ">Services</h1>
                <h1 className="text-5xl font-bold">Our Service Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br></br> words which do not look even slightly believable. </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services?.map(service => <ServiceCard 
                    key={service._id} 
                    service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;