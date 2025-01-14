import React from 'react'
import LatestTechNews from '../components/TechNews/LatestTechNews'
import AllTechNews from '../components/TechNews/AllTechNews'
import { useParams } from 'react-router-dom'

function TechNews() {
  const {type} = useParams()
  console.log(type)
  return (
    <div>
      <LatestTechNews />
      <AllTechNews />
    </div>
  )
}

export default TechNews