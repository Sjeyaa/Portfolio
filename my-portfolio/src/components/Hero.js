import HeroImg from '../assets/hero.png'
import { AiOutlineGithub , AiOutlineLinkedin} from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";

function Hero() {

    const config = {
        subtitle: "Im a Full-Stack developer",
        social: {
            github: "https://github.com/Sjeyaa",
            linkedin: "https://www.linkedin.com/in/jeya-aravinth-s/",
            leetcode: "https://leetcode.com/u/953621104019/"
        }
    }
    return(
        <section className="flex flex-col md:flex-row px-5 py-32 bg-secondary justify-center">
            <div className="md:w-1/2 flex-col">
                <h1 className="text-white text-6xl font-hero-font">Hi , <br/> Im <span className="text-red-600">Jeya Aravinth S</span>
                    <p className="text-2xl">{config.subtitle}</p>
                </h1>
                <div className="flex py-10">
                    <a target="_blank" href={config.social.github} className="text-red-600 pr-5 hover:text-white"><AiOutlineGithub size={40} /></a>
                    <a target="_blank" href={config.social.linkedin} className="text-red-600 pr-5 hover:text-white"><AiOutlineLinkedin size={40} /></a>
                    <a target="_blank" href={config.social.leetcode} className="text-red-600 hover:text-white"><SiLeetcode size={40}/></a>
                </div>
            </div>
            <img className="md:w-1/3 " src={HeroImg} />
        </section>
    );
}

export default Hero;