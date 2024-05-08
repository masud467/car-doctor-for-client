import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvide";
import Swal from "sweetalert2";


const Checkout = () => {
    const {user} = useContext(AuthContext)
    const service = useLoaderData()
    const {title,_id,price,img} = service

    const handleBookService = e =>{
        e.preventDefault()
        const form =e.target;
        const name = form.name.value;
        const email = user?.email;
        const date = form.date.value;
        const booking= {
            CustomerName:name,
            email,
            img,
            service:title,
            service_id:_id,
            Price:price,
            date,
            
        }
        console.log(booking)
        fetch('https://car-doctor-for-server.vercel.app/booking',{
            method:"POST",
            headers:{
                "content-type":"application/json" 
            },
            body:JSON.stringify(booking)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: "Good job!",
                    text: "Booking is success!",
                    icon: "success"
                  });
            }
            
        })
    }
    return (
        <div>
            <h1>Book service:{title}</h1>
            <div className="hero min-h-screen bg-base-200">
 
      <form onSubmit={handleBookService} className="card-body w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        <div className="form-control ">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" defaultValue={user?.displayName
} placeholder="Your name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" defaultValue={user?.email} placeholder="Your email" className="input input-bordered" required />
         
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" name="date"  className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="text" name="price" defaultValue={'$'+ price} className="input input-bordered" required />
         
        </div>
       
        </div>
        <div className="form-control mt-6">
        
        <input className="btn btn-primary btn-block " type="submit" value="Order Confirm" />
      </div>
      </form>
    </div>
  </div>

    );
};

export default Checkout;