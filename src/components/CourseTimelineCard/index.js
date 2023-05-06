import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {eachItem} = props
  const {courseTitle, description, duration, tagsList} = eachItem
  return (
    <div className="course-container">
      <div className="course-tab">
        <h1 className="course-heading">{courseTitle}</h1>
        <div className="row">
          <AiFillClockCircle className="icon" />
          <p>{duration}</p>
        </div>
      </div>
      <p className="course-para">{description}</p>
      {tagsList.map(each => (
        <button className="button" type="button">
          <p>{each.name}</p>
        </button>
      ))}
    </div>
  )
}

export default CourseTimelineCard
