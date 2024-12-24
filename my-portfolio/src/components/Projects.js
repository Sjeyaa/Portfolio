import websiteImage1 from '../assets/timesheet.jpg';
import websiteImage2 from '../assets/ecommerce-websites.jpg';
import websiteImage3 from '../assets/website-blog.jpg';


function Projects(){
    const config = {
        projects : [
            {
                image : websiteImage1,
                description : 'A TimeSheet application built with MERN stack',
                link : 'https://github.com/Sjeyaa/TSA'
            },
            {
                image : websiteImage2,
                description : 'Retail Management System built with MERN stack',
                link : 'https://github.com/Sjeyaa/OnlineRetailManagement'
            },
            {
                image : websiteImage3,
                description : 'Blog Website built with MERN stack',
                link : 'https://github.com/Sjeyaa/SIH'
            }
        ]
    }


    return(
        <section className="flex flex-col py-20 px-5 justify-center bg-secondary" id='projects'>
            <div className="w-full">
                <div className="flex flex-col px-10 py-5">
                    <h1 className="text-4xl text-red-600 border-primary border-b-4 mb-5 w-[135px] font-bold font-hero-font">Projects</h1>
                    <p className='text-white'>These are some of my projects . I have built these with React , MERN , Html , CSS check them out.</p>
                </div>    
            </div>
            <div className="w-full text-white">
                <div className="flex flex-col md:flex-row px-10 gap-10">
                    {config.projects.map( (project) => (
                        
                            <div className='relative'>
                                <img className="h-[200px] w-[500px]" src={project.image}/>
                                <div className="project-desc">
                                    <p className='text-center px-5 py-5'>{project.description}</p>
                                    <div className='flex justify-center'>
                                        <a className="btn" target="_blank" href={project.link}>View Project</a>
                                    </div>
                                </div>
                            </div> 
                    ))}   
                </div>
            </div>
        </section>
    );
}

export default Projects;