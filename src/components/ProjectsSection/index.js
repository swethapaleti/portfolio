import ProjectCard from "../ProjectCard";

const projectsList = [
  {
    id:1,
    name:"Netflix Clone",
    imgUrl: "movies.png",
    liveUrl:"https://swethmovieapp.ccbp.tech/",
    githubUrl:"https://github.com/swethapaleti/MoviesPrime",
  },
  {
    id:2,
    name:"Youtube Clone",
    imgUrl: "youtube.png",
    liveUrl:"https://swethanextwatch.ccbp.tech/",
    githubUrl:"https://github.com/swethapaleti/NxtWatch",
  },
  {
    id:3,
    name:"Weather App",
    imgUrl: "weather.png",
    liveUrl:"https://weather-app-swethapaleti.vercel.app/",
    githubUrl:"https://github.com/swethapaleti/weather-app",
  },
  {
    id:4,
    name:"Jobby App",
    imgUrl: "jobby.png",
    liveUrl:"https://swethajobby.ccbp.tech/",
    githubUrl:"https://github.com/swethapaleti/jobby-app",
  },
  {
    id:5,
    name:"Food Munch",
    imgUrl: "food.png",
    liveUrl:"https://fooddelivery.ccbp.tech/",
    githubUrl:"https://github.com/swethapaleti/foodmunch",
  },
  {
    id:6,
    name:"Budget App",
    imgUrl: "budget.png",
    liveUrl:"https://budgetmanager.ccbp.tech/",
    githubUrl:"https://github.com/swethapaleti/budget-app",
  }
]

const ProjectsSection = () => (
  <section
    id="projects"
    className="py-16 flex flex-col items-center bg-blue-100"
  >
    <h1 className="text-center font-semibold text-3xl">
      Cool Stuff I've Built
    </h1>
    <p className="text-gray-500 text-lg  text-center p-8 w-4/5 leading-relaxed">
      These are some of the websites I have built for clients and myself. I have
      used a variety of technologies to build these websites including
      JavaScript, TypeScript, HTML and CSS. I have also used a variety of
      frameworks and libraries including React, Next JS, Bootstrap and Tailwind
      CSS.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-4/5">
      {projectsList.map(each=>(
        <ProjectCard key={each.id} project={each}/>
      ))}
    </div>
  </section>
);

export default ProjectsSection;
