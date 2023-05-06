import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {eachItem} = props
  const {projectTitle, description, duration, projectUrl, imageUrl} = eachItem

  return (
    <div className="project-container">
      <img src={imageUrl} alt="project" className="project-img" />
      <div className="project-tab">
        <h1 className="project-heading">{projectTitle}</h1>
        <div className="row">
          <AiFillCalendar className="icon" />
          <p>{duration}</p>
        </div>
      </div>
      <p className="project-para">{description}</p>
      <a
        href={projectUrl}
        target="_blank"
        rel="noreferrer"
        className="span-element"
      >
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
