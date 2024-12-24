import AboutImage from "../assets/about.png";

function About() {

    const config = {
        line1: "Hi , My name is Jeya Aravinth. I am a Full Stack web developer. I build responsive websites with React.js",
        line2: "In backend I know Node.js, Express.js, MongoDB, and Mongoose",
        line3: "My projects are testaments to my dedication, spanning various domains such as app development and web development. Participating in and winning competitions like Smart India Hackathon 2023 has honed my abilities to innovate under pressure and deliver impactful solutions.",
    }
    return(
        <section className="flex flex-col md:flex-row bg-primary px-5 " id="about">
            <div className="py-5 md:w-1/2">
                <img src={AboutImage} />
            </div>
            <div className="md:w-1/2 flex justify-center">
                <div className="flex flex-col justify-center text-white">
                    <h1 className="text-4xl text-red-600 border-[#252525] border-b-4 mb-5 w-[155px] font-bold font-hero-font">About Me</h1>
                    <p className="pb-5">{config.line1}</p>
                    <p className="pb-5">{config.line2}</p>
                    <p className="pb-5">{config.line3}</p>
                </div>   
            </div>
        </section>
    );
}

export default About;