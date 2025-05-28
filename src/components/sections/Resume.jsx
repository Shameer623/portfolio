import { motion } from 'framer-motion'
import resumePDF from '../../assets/shameer-resume.pdf'

const Resume = () => {
  return (
    <motion.section 
      id="resume"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="section resume"
    >
      <div className="container">
        <h2 className="section-title">My Resume</h2>
        <div className="resume-embed">
          <iframe 
            src={`${resumePDF}#view=fitH`} 
            title="Shameer's Resume"
            className="pdf-viewer"
          />
        </div>
        <div className="text-center mt-4">
          <a 
            href={resumePDF} 
            download="Shameer-Resume.pdf"
            className="btn btn-primary"
          >
            Download Resume
          </a>
        </div>
      </div>
    </motion.section>
  )
}

export default Resume