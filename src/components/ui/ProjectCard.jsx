const ProjectCard = ({ project }) => {
    return (
      <div className="project-card">
        {project.imageUrl && (
        <div className="project-image">
          <img src={project.imageUrl} alt={project.title} />
        </div>
      )}
        <div className="project-content">
          <h3>{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <div className="tech-tags">
            {project.technologies.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
          <ul className="project-features">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <div className="project-links">
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-link"
            >
              {project.secondaryLink ? 'Frontend Repo' : 'View on GitHub'}
            </a>
            &nbsp;&nbsp;&nbsp;
            {project.secondaryLink && (
              <a 
                href={project.secondaryLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link"
              >
                Backend Repo
              </a>
            )}
          </div>
        </div>
      </div>
    )
  }
  
  export default ProjectCard
  