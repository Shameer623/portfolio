import { useContext } from 'react'
import { FaGithub, FaLinkedin, FaSun, FaMoon } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { ThemeContext } from '../../context/ThemeContext'

function Navbar() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext)
  const navItems = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ]

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="navbar"
    >
      <div className="container">
        <a href="#home" className="logo">Mohammed Shameer</a>
        <div className="nav-links">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`}>{item.name}</a>
          ))}
        </div>
        <div className="nav-actions">
          <button onClick={toggleDarkMode} className="theme-toggle">
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <div className="social-icons">
            <a href="https://github.com/Shameer623" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/mohammed-shameer-shameer-n-457353219/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar // Make sure this default export exists