
export default function Home() {
  return (
    <div className="space-y-16">
      <section id="about" className="text-center">
        <h1 className="text-4xl font-bold">Daria Tikho</h1>
        <p className="mt-2 text-xl text-gray-400">Frontend Developer & Designer</p>
      </section>

      <section id="skills" className="space-y-4">
        <h2 className="text-3xl font-semibold">Skills</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {["JavaScript", "React", "Tailwind CSS", "TypeScript", "Python", "SQL"].map((skill, index) => (
            <li key={index} className="p-4 bg-gray-800 rounded shadow hover:bg-teal-500 transition">
              {skill}
            </li>
          ))}
        </ul>
      </section>
          
      <section id="projects" className="space-y-4">
        <h2 className="text-3xl font-semibold">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { name: "Portfolio Website", description: "Responsive design with Tailwind." },
            { name: "Interactive Resume", description: "Dynamic data fetching and animations." },
          ].map((project, index) => (
            <div key={index} className="p-6 bg-gray-800 rounded shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-bold">{project.name}</h3>
              <p className="text-gray-400">{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="py-16 bg-gray-800 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <p className="text-gray-400 mb-4">Feel free to reach out to me!</p>
        <form
          method="POST"
          action="/api/contact"
          className="space-y-4 bg-gray-900 p-6 rounded shadow-lg max-w-lg mx-auto"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-2 bg-gray-700 text-white rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-2 bg-gray-700 text-white rounded"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            className="w-full p-2 bg-gray-700 text-white rounded"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
