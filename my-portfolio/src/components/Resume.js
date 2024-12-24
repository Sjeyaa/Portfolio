import ResumeImage from "../assets/resume.jpg";

function Resume() {
    const config = {
        link : "https://drive.google.com/uc?id=1mCJT2F5oCoJWz_QKCjZWMV7EU3Kuc926&export=download"
    }
    return(
        <section className="flex flex-col md:flex-row bg-primary px-5" id="resume">
            <div className="py-5 md:w-1/2 flex justify-center md:justify-end">
                <img className="w-[300px]" src={ResumeImage} />
            </div>
            <div className="md:w-1/2 flex justify-center">
                <div className="flex flex-col justify-center text-white">
                    <h1 className="text-4xl text-red-600 border-[#252525] border-b-4 mb-5 w-[120px] font-bold font-hero-font">Resume</h1>
                    <p className="pb-5">You can view my resume <a className="btn" href={config.link} download>Download</a></p>
                </div>   
            </div>
        </section>
    );
}

export default Resume;