const Skills = () => {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Next.js"];

  return (
    <section id="skills" className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold">Skills</h2>
      <ul className="mt-4">
        {skills.map((skill, index) => (
          <li key={index} className="p-2 bg-white shadow-md inline-block m-2">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
