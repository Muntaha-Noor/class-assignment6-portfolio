import Image from "next/image";

export default function About() {
  return (
    <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-black min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-16">
        <div className="flex-1 text-left text-gray-200 animate__animated animate__fadeIn animate__delay-1s">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-teal-400">
            About Me
          </h2>
          <h3 className="text-4xl lg:text-5xl font-bold mb-6">
            Hi, I&#39;m <span className="text-teal-400">Muntaha Noor</span>
          </h3>
          <p className="text-lg lg:text-xl leading-relaxed mb-6">
            As a Frontend Developer, I specialize in building intuitive and visually stunning web interfaces using technologies like
            <span className="font-semibold text-teal-400"> React</span>,
            <span className="font-semibold text-teal-400"> Next.js</span>, and
            <span className="font-semibold text-teal-400"> Tailwind CSS</span>.
            With a passion for design and functionality, I aim to create seamless user experiences.
          </p>
          <p className="text-lg lg:text-xl leading-relaxed mb-8">
            Beyond coding, I enjoy learning about the latest tech trends and finding innovative ways to solve real-world problems. Let’s collaborate to bring ideas to life and shape the digital future.
          </p>

          <div className="bg-gray-800 text-teal-200 p-6 rounded-lg shadow-lg">
            <p className="text-lg lg:text-xl font-medium">
              Interested in collaborating or just want to say hi? 
              Feel free to reach out. I&#39;m always excited to connect with fellow tech enthusiasts and explore new opportunities!
            </p>
          </div>
        </div>

        <div className="flex-shrink-0 relative w-72 h-72 lg:w-96 lg:h-96 rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition duration-500 ease-in-out animate__animated animate__fadeIn">
          <Image
            src="/profile.jpg"
            alt="Muntaha Noor"
            layout="fill"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
