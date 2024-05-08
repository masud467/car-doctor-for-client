import axios from "axios";
import { useEffect, useState } from "react";


const UseNumber = () => {
   const [numbers,setNumbers] = useState(0)
   useEffect(()=>{
    axios.get('/getNumbers')
    .then(res=>{
        setNumbers(res.data)
    })
   },[])
   return numbers
};

export default UseNumber;