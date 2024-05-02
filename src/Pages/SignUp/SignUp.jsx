import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg"
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvide";

const SignUp = () => {
const {createUser} = useContext(AuthContext)
    const handleSignUp = e =>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        console.log(name,email,password)
        createUser(email,password)
        .then(result=>{
            const user = result.user
            console.log(user)
        })
        .catch(error =>{
            console.error(error);
        })

    }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img src={img} alt="" />
          
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignUp} className="card-body">
          <h1 className="text-3xl font-bold text-center">SignUp </h1>
            <div className="form-control">
              <label className="label">
              
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
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
              
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">SignUp</button>
            </div>
            <p>Already have an account? <Link className="font-bold text-orange-600" to='/login'>Login</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
