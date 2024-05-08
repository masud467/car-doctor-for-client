import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/images/login/login.svg"
// import { useContext } from "react";
// import { AuthContext } from "../../Provider/AuthProvide";
import axios from "axios";
import useAuth from "../../Hookes/useAuth";

const Login = () => {
  const {signIn} = useAuth()
// const {signIn} = useContext(AuthContext)
const location = useLocation()
// console.log(location)
const navigate = useNavigate()
    const handleLogIn = e =>{
        e.preventDefault()
        const form = e.target
        
        const email = form.email.value
        const password = form.password.value
        console.log(email,password)
        signIn(email,password)
        .then(result=>{
            const loggedUser = result.user
            console.log(loggedUser)
            const user = {email};

            // get access token
            axios.post('https://car-doctor-for-server.vercel.app/jwt',user,{withCredentials:true})
            .then(res=>{
              console.log(res.data)
              if(res.data.success){
                     navigate(location?.state? location?.state :'/')
              }
            })
            
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img src={img} alt="" />
          
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogIn} className="card-body">
          <h1 className="text-3xl font-bold text-center">LogIn </h1>
            
            <div className="form-control">
              <label className="label">
              
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <p>Do not have an account? <Link className="font-bold text-orange-600" to='/signup'>Sign Up</Link></p>
          </form>
        </div>
      </div>
    </div>
    );
};

export default Login;