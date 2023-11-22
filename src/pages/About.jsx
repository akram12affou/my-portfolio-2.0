import { LuGithub } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";
function About() {
  return (
    <div className="bg_color text-white  main_height">
        <div className="w-11/12 sm:w-10/12 mx-auto pt-12 sm:leading-7 leading-6" >

        
      <h2 className="font-semibold text-xl tracking-wider">About me </h2>
<br />
      <span className="tracking-wide">
        Hi, my name is Akram AFFOU. I'm a Full-stack web developer with decent
        knowledge in other technologies in the field as well. For an in-depth
        insight into my skills and qualifications, I invite you to check out   
        <span className="tech hover:underline cursor-pointer">
        &nbsp; my Resume 
        </span>.
      </span>
      <br /><br />
      <span className="tracking-wide">
        As I said before, my name is Akram. I'm a nineteen year old young man
        from Morocco. I first found out about this programming field last year
        and liked it so much, so I decided that is what I'm gonna do. After
        doing a ton of research on the internet, I did find that it's a large
        domain. After that, I picked web development because it's kind of
        holding the stick from the middle, and you can transact to related
        fields later. So I departed on this journey .  I earned   <span className="tech hover:underline cursor-pointer"> 2-year web
        development degree at  ISTA NTIC</span>, covering front-end and back-end skills.
        Emphasizing practical projects and teamwork, the program equipped me
        with problem-solving abilities and readiness for the dynamic field of
        web development.
      </span>
      <br /><br />
      <span className="tracking-wide">
        I used a wide collection of resources in my learning, from <span className="tech hover:underline cursor-pointer"> freeCodeCamp </span> 
        and  <span className="tech hover:underline cursor-pointer"> MDN </span> to YouTube (I watched so many videos from these channels:
            <span className="tech hover:underline cursor-pointer"> Traversy media </span>  ,  <span className="tech hover:underline cursor-pointer"> Web Dev Simplified </span> , <span className="tech hover:underline cursor-pointer" > Fireship </span> , and so many others).And
        solved so many algorithmic challenges over <span className="tech hover:underline cursor-pointer"> HackerRank </span>   , and build so
        many projects. I devoted all of my time and effort to this. It was a
        rough journey, full of hard times and bugs. But I didn't give up and I
        won't do. And here I'm, after several months of constant battle. That
        was a quick glimpse into my journey, hope you like it . ❤️
      </span>
      </div>
      <div className="flex justify-center gap-6 mt-10 pb-10">
      <LuGithub className="text-4xl text-white  span_size  trans hover:scale-110 hover:text-sky-300 cursor-pointer"/>
      <FaLinkedin className="text-4xl  text-white span_size trans hover:scale-110 hover:text-sky-300 cursor-pointer"/> 
      </div>
    </div>
  );
}

export default About;
