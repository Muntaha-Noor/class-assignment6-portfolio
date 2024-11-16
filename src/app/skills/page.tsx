import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaAngular } from "react-icons/fa";
import { SiTypescript, SiNextdotjs } from "react-icons/si";

export default function Skills() {
  return (
    <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-black min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-teal-400">
          My Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 lg:gap-12">
          <div className="flex flex-col items-center text-gray-200 space-y-4">
            <FaHtml5 className="text-6xl text-orange-500" />
            <h3 className="text-xl font-semibold">HTML</h3>
            <p className="text-lg">Structure and semantics of web pages.</p>
          </div>

          <div className="flex flex-col items-center text-gray-200 space-y-4">
            <FaCss3Alt className="text-6xl text-blue-500" />
            <h3 className="text-xl font-semibold">CSS</h3>
            <p className="text-lg">Styling and layout techniques for modern designs.</p>
          </div>

          <div className="flex flex-col items-center text-gray-200 space-y-4">
            <FaJs className="text-6xl text-yellow-500" />
            <h3 className="text-xl font-semibold">JavaScript</h3>
            <p className="text-lg">Building interactive and dynamic web applications.</p>
          </div>

          <div className="flex flex-col items-center text-gray-200 space-y-4">
            <SiTypescript className="text-6xl text-blue-600" />
            <h3 className="text-xl font-semibold">TypeScript</h3>
            <p className="text-lg">Strongly typed JavaScript for scalable applications.</p>
          </div>

          <div className="flex flex-col items-center text-gray-200 space-y-4">
            <FaReact className="text-6xl text-cyan-400" />
            <h3 className="text-xl font-semibold">React</h3>
            <p className="text-lg">Building fast and scalable user interfaces.</p>
          </div>

          <div className="flex flex-col items-center text-gray-200 space-y-4">
            <SiNextdotjs className="text-6xl text-gray-100" />
            <h3 className="text-xl font-semibold">Next.js</h3>
            <p className="text-lg">Server-side rendering and static site generation.</p>
          </div>

          <div className="flex flex-col items-center text-gray-200 space-y-4">
            <FaNodeJs className="text-6xl text-green-500" />
            <h3 className="text-xl font-semibold">Node.js</h3>
            <p className="text-lg">Server-side JavaScript runtime for scalable applications.</p>
          </div>

          <div className="flex flex-col items-center text-gray-200 space-y-4">
            <FaAngular className="text-6xl text-red-600" />
            <h3 className="text-xl font-semibold">Angular</h3>
            <p className="text-lg">A framework for building single-page applications.</p>
          </div>
        </div>
      </div>
    </section>
  );
}