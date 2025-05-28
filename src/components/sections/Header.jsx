import { motion } from 'framer-motion'

const Header = () => {
  return (
    <motion.header 
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="header"
    >
      <div className="container">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="header-content"
        >
          <h1>N Mohammed Shameer</h1>
          <h2>Java Full Stack Developer</h2>
          <p>Building scalable backend systems with Spring Boot and intuitive frontends with React.js</p>
          <div className="cta-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Contact Me</a>
          </div>
        </motion.div>
      </div>
    </motion.header>
  )
}

export default Header