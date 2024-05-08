import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvide";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";
// import axios from "axios";
import useAxiosSecure from "../../Hookes/useAxiosSecure";


const Booking = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const axiosSecure = useAxiosSecure()

  // const url = `https://car-doctor-for-server.vercel.app/booking?email=${user?.email}`;
  const url = `/booking?email=${user?.email}`;


  useEffect(() => {
    axiosSecure.get(url)
    .then(res=>{
      setBookings(res.data)
    })


    // axios.get(url,{withCredentials:true})
    // .then(res=>{
    //   setBookings(res.data)
    // })


    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => setBookings(data));

  }, [url,axiosSecure]);

  const handleBookingConfirm = id =>{
    fetch(`https://car-doctor-for-server.vercel.app/booking/${id}`,{
      method:"PATCH",
      headers:{
        "content-type": "application/json"
      },
      body:JSON.stringify({status:"confirm"})
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.modifiedCount>0){
        Swal.fire({
          title: "Good job!",
          text: "You Confirmed this service",
          icon: "success"
        });
        const remaining = bookings.filter(booking => booking._id!==id)
        const updated = bookings.find(booking => booking._id ===id)
        updated.status = "confirm"
        const newBookings = [updated, ...remaining]
        setBookings(newBookings)
      }
    })
  }
  return (
    <div>
      
      <h1>Your booking services: {bookings.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Image</th>
              <th>Service</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {user&&
                bookings.map(booking=> <BookingRow
                key={booking._id}
                booking={booking}
                bookings={bookings}
                setBookings={setBookings}
                handleBookingConfirm={handleBookingConfirm}
         
                ></BookingRow>)
            }
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Booking;
