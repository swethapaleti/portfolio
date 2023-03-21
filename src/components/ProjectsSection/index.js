import ProjectCard from "../ProjectCard";

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
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  </section>
);

export default ProjectsSection;
