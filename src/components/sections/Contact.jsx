import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from 'emailjs-com'
import { FaPaperPlane, FaCheck, FaTimes } from 'react-icons/fa'

const Contact = () => {
  const formRef = useRef()
  const [status, setStatus] = useState({ success: null, message: '' })

  const sendEmail = (e) => {
    e.preventDefault()
    setStatus({ success: null, message: 'Sending...' })

    emailjs.sendForm(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      formRef.current,
      'YOUR_USER_ID'
    )
    .then((result) => {
      setStatus({ success: true, message: 'Message sent successfully!' })
      formRef.current.reset()
    }, (error) => {
      setStatus({ success: false, message: 'Failed to send message. Please try again.' })
    })
  }

  return (
    <motion.section 
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="section contact"
    >
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-grid">
          <motion.form 
            ref={formRef}
            onSubmit={sendEmail}
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="contact-form"
          >
            <div className="form-group">
              <input type="text" name="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <input type="text" name="subject" placeholder="Subject" required />
            </div>
            <div className="form-group">
              <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              <FaPaperPlane /> Send Message
            </button>
            {status.message && (
              <div className={`form-status ${status.success ? 'success' : 'error'}`}>
                {status.success ? <FaCheck /> : <FaTimes />}
                {status.message}
              </div>
            )}
          </motion.form>
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="contact-info"
          >
            <h3>Contact Information</h3>
            <p><strong>Email:</strong> shameerinfinite@gmail.com</p>
            <p><strong>Phone:</strong> +91 9344187339</p>
            <p><strong>Location:</strong> Chennai, India</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact
