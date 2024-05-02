import person from "../assets/images/about_us/person.jpg"
import parts from "../assets/images/about_us/parts.jpg"

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="md:w-1/2 relative">
          <img src={person} className="max-w-sm rounded-lg shadow-2xl w-3/4" />
          <img src={parts} className="max-w-sm rounded-lg shadow-2xl w-1/2 absolute right-36 top-1/2 border-8 border-white" />
          </div>
          <div className="w-1/2">
            <h1 className="text-3xl font-bold text-[#FF3811]">About us</h1>
            <h1 className="text-5xl font-bold mt-5">We are qualified & of experience in this field</h1>
            <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            <button className="btn btn-active btn-warning mt-5">Secondary</button>
          </div>
        </div>
      </div>
    );
};

export default About;