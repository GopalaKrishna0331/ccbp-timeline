import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props
  const listOfItems = timelineItemsList
  const items = listOfItems.map(each => {
    const itemValue = each.title
    return {itemValue}
  })
  console.log(items)
  return (
    <div className="chrono-container">
      <h1 className="chrono-heading">
        MY JOURNEY OF <br /> <span className="head">CCBP 4.0</span>
      </h1>
      <Chrono
        mode="VERTICAL_ALTERNATING"
        items={timelineItemsList}
        theme={{
          primary: '#0967d2',
          secondary: '#ffffff',
          cardForeColor: 'violet',
          titleColor: '#2b237c',
        }}
      >
        {timelineItemsList.map(eachItem => {
          const eachcategoryId = eachItem.categoryId
          if (eachcategoryId === 'COURSE') {
            console.log(items.duration)
            return (
              <CourseTimelineCard eachItem={eachItem} key={items.duration} />
            )
          }
          return (
            <ProjectTimelineCard eachItem={eachItem} key={items.duration} />
          )
        })}
      </Chrono>
    </div>
  )
}

export default TimelineView
