import { motion } from 'framer-motion'
import ProjectCard from '../ui/ProjectCard'

const projects = [
  {
    title: 'SmartSpend – Expense Tracker',
    description: 'A full-stack expense tracking app with secure login, filters, charts, and summaries.',
    technologies: ['Spring Boot', 'React.js', 'MySQL', 'Hibernate', 'Axios', 'React Router'],
    features: [
      'User registration and login with validation',
      'Real-time expense filtering and category breakdown',
      'Monthly summaries with interactive charts',
      'Toast notifications and responsive layout',
      'Separate GitHub links for frontend and backend'
    ],
    githubLink: 'https://github.com/Shameer623/updatecss',
    secondaryLink: 'https://github.com/Shameer623/ExpenseTracker',
    imageUrl: './project1.jpg'
  },
  {
    title: 'ATM Backend System',
    description: 'A backend simulation of ATM functionality with denomination handling and note tracking.',
    technologies: ['Java', 'Spring Boot', 'Hibernate', 'REST', 'JSON'],
    features: [
      'Cash withdrawal logic with Rs.100, 200, and 500 notes',
      'Dynamic validation for available notes',
      'Balance endpoint to track note count post withdrawal',
      'Layered architecture with service, controller, and repository',
      'Optimized with Spring Boot annotations and clear response structures'
    ],
    githubLink: 'https://github.com/Shameer623/ATMBackend',
    
  }
]

const Projects = () => {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="section projects"
    >
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Projects
