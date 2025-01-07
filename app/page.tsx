
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

      <section id="contact" className="py-16 bg-gray-900 text-center">
      <h2 className="text-3xl font-bold mb-6 text-white">Contact Me</h2>
      <div className="space-y-4 bg-gray-800 p-6 rounded shadow-lg max-w-lg mx-auto">
        <p className="text-white">
          <strong>Email:</strong> <a href="mailto:your.email@example.com" className="text-teal-500 hover:underline">your.email@example.com</a>
        </p>
        <p className="text-white">
          <strong>Phone:</strong> <a href="tel:+1234567890" className="text-teal-500 hover:underline">+123 456 7890</a>
        </p>
        <p className="text-white">
          <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:underline">linkedin.com/in/yourprofile</a>
        </p>
        <p className="text-white">
          <strong>GitHub:</strong> <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:underline">github.com/yourprofile</a>
        </p>
      </div>
    </section>
    </div>
  );
}
