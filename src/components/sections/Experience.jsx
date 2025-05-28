import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    {
      role: 'Programmer Analyst Trainee',
      company: 'Cognizant Technology Solutions',
      period: 'Nov 2024 - Present',
      responsibilities: [
        'Built and maintained scalable REST APIs using Spring Boot and Hibernate',
        'Developed the backend logic for an enterprise-level ATM simulation system',
        'Contributed to the development of a full-stack EXPENSE TRACKER using React and Spring Boot',
        'Worked closely with cross-functional teams in Agile environment to deliver feature enhancements',
        'Optimized MySQL queries and integrated JPA for efficient database access',
        'Used Postman and GitHub for API testing and version control in collaborative development'
      ]
    }
  ]

  return (
    <motion.section 
      id="experience"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="section experience"
    >
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="timeline-item"
            >
              <div className="timeline-content">
                <h3>{exp.role}</h3>
                <h4>{exp.company} | {exp.period}</h4>
                <ul>
                  {exp.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Experience
