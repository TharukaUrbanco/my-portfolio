const Home = () => {
  return (
    <div className="flex h-screen common-margin-x">
      <div className="grid md:grid-cols-2">
        <div className="flex flex-col items-center justify-center">
          <img
            src="/images/myImage.png"
            className="h-[350px] w-[350px] xl:h-[400px] xl:w-[400px]
            rounded-full object-contain border-[4px] border-orange-600"
          />
          <div className="mt-2">
            <div className="text-[16px] text-white">
              Fullstack Software Developer{" "}
              <span className="text-orange-600"> 7 years +</span>
            </div>
            <div className="text-[10px] text-white">( ASP.Net / React )</div>
            <div className="text-[10px] text-white mt-2">
              BSc in Computer Science (USCS)
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl text-white mt-10">
            <span className="text-orange-600">I’m thrilled</span> to have you
            here.
          </h1>
          <p className="mt-10 text-md text-white">
            I’m Tharuka Deshan, a passionate software developer with a knack for
            crafting innovative solutions and a love for problem-solving. With
            expertise in ASP.NET and React, I thrive on building applications
            that not only meet client needs but also enhance user experience.
          </p>
          <p className="mt-6 text-md text-white">
            In this portfolio, you’ll find a collection of my projects and what
            technologies i am expertised. Each project reflects my commitment to
            quality, efficiency, and continuous learning.
          </p>
          <p className="mt-6 text-md text-white">
            I believe in the power of collaboration and am always eager to take
            on new challenges. Feel free to reach out if you’d like to connect
            or discuss potential collaborations!
          </p>
          <button className="px-10 py-3 rounded-3xl text-2xl text-center text-orange-500 border-[3px] w-[200px] border-orange-600 mt-8 mb-8">
            Hire Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
