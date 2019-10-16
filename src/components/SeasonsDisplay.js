import React from 'react'

const getSeason = (lat , month) => {
  if(month > 2 && month < 9) {
   return lat > 0 ? 'summer' : 'winter'
  } else {
   return lat > 0 ? 'winter' : 'summer'
  }
}

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth())
  const icon = season === 'winter' ? 'snowflake' : 'sun'
  return (
    <div>
      <i className={`massive ${icon} icon`} />
      {season === 'winter' ? <h1>Burr, it is chilly</h1>: <h1>Lets hit the beach!</h1>} 
      <i className={`massive ${icon} icon`} />
    </div>
  )
}
export default SeasonDisplay