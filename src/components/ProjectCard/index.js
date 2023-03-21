const ProjectCard = () => (
  <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
      <img
        className="rounded-t-lg"
        src="https://flowbite.com/docs/images/blog/image-1.jpg"
        alt=""
      />
    </a>
    <div className="p-5">
      <a href="#">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Nxt Watch
        </h5>
      </a>
      <div className="flex w-full justify-between">
        <a
          href="#"
          className="hover:text-pink-600 hover:border-2 hover:border-pink-600 bg-gradient-to-r from-[#ffbd84] to-[#ff1f8e] text-white rounded-full p-3 px-4 text-sm font-semibold shadow-xl hover:bg-gradient-to-r hover:from-white hover:to-white"
        >
          View Project
        </a>
        <a
          href="#"
          className="text-pink-600 border-2 hover:border-none border-pink-600 hover:from-[#ffbd84] hover:to-[#ff1f8e] hover:text-white rounded-full p-3 px-4 text-sm font-semibold shadow-xl bg-gradient-to-r from-white to-white"
        >
          View Code
        </a>
      </div>
    </div>
  </div>
);

export default ProjectCard;
