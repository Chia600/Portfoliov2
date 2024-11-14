const skills = [
  { name: "JavaScript", level: "Avancé" },
  { name: "React", level: "Intermédiaire" },
  { name: "Django", level: "Intermédiaire" },
  { name: "PostgreSQL", level: "Avancé" },
  { name: "PHP", level: "Intermédiaire" },
  { name: "Symphonie", level: "Intermédiaire" },
  // Ajoute d’autres compétences
];

function Skills() {
  return (
    <section>
      <h2>Compétences</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>
            {skill.name} - {skill.level}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
