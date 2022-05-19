import React from 'react'

const DisplayData = ({cordsData}) => {
  return (
    <div >
        <ul>
            <li>Country : {cordsData.country}</li>
            <li>Total Cases : {cordsData.totalCases}</li>
            <li>Today Cases : {cordsData.todayCases}</li>
            <li>Recovered   : {cordsData.recovered}</li>
        </ul>
        
         </div>
  )
}

export default DisplayData