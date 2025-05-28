import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="section about"
    >
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Passionate Java Full Stack Developer with hands-on experience in building enterprise-grade applications using Spring Boot, Hibernate, MySQL, and React.js. I specialize in creating clean, scalable backend systems and responsive user interfaces. Currently working at Cognizant, I actively contribute to client-based projects and bring strong communication and problem-solving skills to every task. Certified by GUVI/IIT Madras and equipped with a strong academic and technical foundation, I bridge the gap between business logic and technical implementation.
            </p>
            <div className="about-details">
              <div className="detail-card">
                <h3>Education</h3>
                <p>B.E. Electronics & Communication Engineering</p>
                <p>St. Joseph's College of Engineering, Chennai</p>
                <p>CGPA: 8.72</p>
                <p>HSC – St. Joseph of Cluny, Tindivanam (77.5%)</p>
                <p>SSLC – St. Joseph of Cluny, Tindivanam (92.4%)</p>
              </div>
              <div className="detail-card">
                <h3>Certifications</h3>
                <p>Java Full Stack Developer – GUVI/IIT Madras</p>
                <p>Business English Certificate – Cambridge Assessment</p>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default About
