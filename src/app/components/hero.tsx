import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-black min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">

        <div className="flex-shrink-0 lg:w-1/3">
          <Image
            src="/profile.jpg"
            alt="Muntaha Noor - Frontend Developer"
            height={300}
            width={300}
            className="border-4 border-gray-700 shadow-xl rounded transition-transform duration-500 ease-in-out hover:scale-105"
          />
        </div>

        <div className="text-center lg:text-left lg:w-2/3 text-gray-200">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 animate-slideInDown">
            FRONTEND DEVELOPER
          </h1>

          <h2 className="text-2xl lg:text-3xl font-semibold mb-6">
            Hello, I&#39;m <span className="text-teal-400">Muntaha Noor</span>
          </h2>

          <p className="text-lg lg:text-xl leading-relaxed mb-6 text-gray-300">
            I&#39;m a passionate Frontend Developer specializing in creating
            intuitive, responsive, and visually engaging user experiences. With
            expertise in modern technologies such as{" "}
            <span className="font-semibold text-teal-400">Next.js</span>,{" "}
            <span className="font-semibold text-teal-400">TypeScript</span>, and{" "}
            <span className="font-semibold text-teal-400">Tailwind CSS</span>, I
            strive to blend creativity and performance to build exceptional web
            applications.
          </p>

          <div className="flex justify-center lg:justify-start space-x-4">
            <a
              href="https://github.com/Muntaha-Noor?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-6 py-3 rounded-lg text-lg font-semibold border-2 border-teal-400 text-teal-400 bg-gray-800 transition-transform duration-300 ease-in-out hover:bg-teal-400 hover:text-gray-900 hover:scale-105"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12 .297C5.37.297 0 5.66 0 12.293c0 5.288 3.438 9.766 8.205 11.36.6.113.82-.257.82-.577v-2.234c-3.338.724-4.043-1.61-4.043-1.61-.546-1.384-1.333-1.752-1.333-1.752-1.09-.745.083-.729.083-.729 1.205.083 1.839 1.27 1.839 1.27 1.07 1.828 2.809 1.3 3.495.994.11-.776.42-1.3.763-1.598-2.665-.3-5.466-1.333-5.466-5.93 0-1.31.467-2.384 1.235-3.23-.124-.303-.535-1.526.118-3.18 0 0 1.008-.322 3.3 1.23.957-.266 1.984-.398 3.003-.403 1.02.005 2.047.137 3.006.403 2.287-1.553 3.294-1.23 3.294-1.23.657 1.654.246 2.877.121 3.18.772.846 1.235 1.92 1.235 3.23 0 4.609-2.807 5.625-5.481 5.92.431.372.815 1.102.815 2.222v3.293c0 .32.216.694.825.576C20.565 22.053 24 17.582 24 12.293 24 5.66 18.627.297 12 .297z"
                  clipRule="evenodd"
                />
              </svg>
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/muntaha-noor-3a723531b/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-6 py-3 rounded-lg text-lg font-semibold border-2 border-blue-400 text-blue-400 bg-gray-800 transition-transform duration-300 ease-in-out hover:bg-blue-400 hover:text-gray-900 hover:scale-105"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M20 0h-16c-2.2 0-4 1.8-4 4v16c0 2.2 1.8 4 4 4h16c2.2 0 4-1.8 4-4v-16c0-2.2-1.8-4-4-4zm-11 19h-3v-10h3v10zm-1.5-11.2c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm12.5 11.2h-3v-4.6c0-2.6-3-2.4-3 0v4.6h-3v-10h3v1.7c1.4-2.5 6-2.7 6 2.4v5.9z"></path>
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}