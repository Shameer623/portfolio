import { motion } from 'framer-motion'
import SkillBar from '../ui/SkillBar'

const skills = [
  { name: 'Java', level: 90 },
  { name: 'Spring Boot', level: 85 },
  { name: 'Hibernate', level: 80 },
  { name: 'MySQL', level: 75 },
  { name: 'React.js', level: 80 },
  { name: 'JavaScript', level: 85 },
  { name: 'HTML/CSS', level: 75 },
  { name: 'REST APIs', level: 85 },
  { name: 'Git', level: 80 },
  { name: 'Docker', level: 70 },
]

const Skills = () => {
  return (
    <motion.section 
      id="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="section skills"
    >
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <SkillBar skill={skill} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Skills