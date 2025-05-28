const SkillBar = ({ skill }) => {
    return (
      <div className="skill-item">
        <div className="skill-info">
          <span>{skill.name}</span>
          <span>{skill.level}%</span>
        </div>
        <div className="skill-bar">
          <div 
            className="skill-progress" 
            style={{ width: `${skill.level}%` }}
            aria-valuenow={skill.level}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    )
  }
  
  export default SkillBar
  