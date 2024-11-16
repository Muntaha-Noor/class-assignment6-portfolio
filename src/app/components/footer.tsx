import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="lg:flex lg:justify-between lg:items-center">
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-200">Quick Links</h3>
              <ul className="space-y-2 mt-4">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-purple-300 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-purple-300 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-purple-300 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-200">Follow Me</h3>
              <div className="flex space-x-6 mt-4">
                <a
                  href="https://github.com/Muntaha-Noor?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-purple-300 transition-colors"
                  aria-label="GitHub"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path
                      fillRule="evenodd"
                      d="M12 .297C5.37.297 0 5.66 0 12.293c0 5.288 3.438 9.766 8.205 11.36.6.113.82-.257.82-.577v-2.234c-3.338.724-4.043-1.61-4.043-1.61-.546-1.384-1.333-1.752-1.333-1.752-1.09-.745.083-.729.083-.729 1.205.083 1.839 1.27 1.839 1.27 1.07 1.828 2.809 1.3 3.495.994.11-.776.42-1.3.763-1.598-2.665-.3-5.466-1.333-5.466-5.93 0-1.31.467-2.384 1.235-3.23-.124-.303-.535-1.526.118-3.18 0 0 1.008-.322 3.3 1.23.957-.266 1.984-.398 3.003-.403 1.02.005 2.047.137 3.006.403 2.287-1.553 3.294-1.23 3.294-1.23.657 1.654.246 2.877.121 3.18.772.846 1.235 1.92 1.235 3.23 0 4.609-2.807 5.625-5.481 5.92.431.372.815 1.102.815 2.222v3.293c0 .32.216.694.825.576C20.565 22.053 24 17.582 24 12.293 24 5.66 18.627.297 12 .297z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>

                <a
                  href="https://www.linkedin.com/in/muntaha-noor-3a723531b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-purple-300 transition-colors flex items-center justify-center bg-gray-800 rounded-full w-8 h-8"
                  aria-label="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                  >
                    <path
                      d="M22.23 0H1.77C.8 0 0 .774 0 1.73v20.54C0 23.226.8 24 1.77 24h20.46c.97 0 1.77-.774 1.77-1.73V1.73C24 .774 23.2 0 22.23 0zm-14.1 20.452H4.337V9.044H8.13v11.408zm-1.896-13a2.193 2.193 0 110-4.385 2.193 2.193 0 010 4.385zm15.543 13H16.9v-5.602c0-1.34-.027-3.064-1.868-3.064-1.871 0-2.16 1.462-2.16 2.971v5.695h-3.796V9.044h3.646v1.561h.05c.509-.965 1.752-1.981 3.605-1.981 3.855 0 4.567 2.537 4.567 5.835v6.993z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 mt-12 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Muntaha. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}