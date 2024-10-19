const Hireme = () => {
  return (
    <div className="flex flex-col common-margin-x">
      <div className="flex flex-col  justify-center items-center mt-10 md:mt-0">
        <h2 className="text-3xl text-center">
          <span className="light-orange">Hire</span>
          <span className="dark-white ml-2">Me</span>
          <span className="text-xl light-orange ml-2"></span>
        </h2>

        <p className="text-xl italic text-center max-w-[650px] mt-10 light-white">
          "My experience and passion make me a great fit for this role, and I’m
          excited to take on new challenges."
        </p>

        <p className="text-lg mt-14 dark-white">
          Please contact me using below methods, and I will respond promptly.
        </p>

        <div className="text-xl dark-white mt-10 text-center">
          <p>Email</p>
          <a
            className="hover:text-blue-300 text-lg"
            href="mailto: tharuka1993deshan@gmail.com"
          >
            tharuka1993deshan@gmail.com
          </a>
        </div>

        <div className="text-xl dark-white mt-10 text-center mb-10">
          <p>Linked In</p>
          <a
            className="hover:text-blue-300 text-lg"
            href="https://www.linkedin.com/in/tharuka1993"
            target="_blank"
          >
            https://www.linkedin.com/in/tharuka1993
          </a>
        </div>

        {/* <div className="text-xl dark-white mt-10 text-center">
          <p>Whatsapp</p>
          <p>+94718714872</p>
        </div> */}
      </div>
    </div>
  );
};

export default Hireme;
