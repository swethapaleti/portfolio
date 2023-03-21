const HeroSection = () => (
  <section id="hero" className="h-screen bg-[#ffd6d6]">
    <div className="h-full flex flex-col justify-center items-center text-center">
      <h1 className="heading text-7xl text- font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-rose-800">
        Hi, I'm Swetha
      </h1>
      <p className="mt-8 text-gray-800 text-3xl font-bold">
        I'm a <span className="type-role"></span>
      </p>
      <div className="mt-12">
        <a
          href="#projects"
          className="mr-4 bg-gradient-to-r from-[#ffbd84] to-[#ff1f8e] text-white rounded-full p-3 px-4 text-sm font-semibold shadow-xl"
        >
          My Projects
        </a>

        <a
          href="#contact"
          className="bg-gradient-to-r from-[#ffbd84] to-[#ff1f8e] text-white rounded-full p-3 px-4 text-sm font-semibold shadow-xl"
        >
          Contact Me
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
