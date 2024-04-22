import React from 'react'
import "./Widgets.css"
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {
    const newsArticle = ( heading, subtitle) => (
        <div className='widgets__article'>
        <div className='widgets__articleLeft'>
            <FiberManualRecordIcon />
        </div>

        <div className='widgets__articleRight'>
            <h4>{heading}</h4>
            <p>{subtitle}</p>
        </div>
        </div>
    )

  return (
    <div className='widgets'>
      <div className='widgets__header'>
        <h2>News</h2>
        <InfoIcon />
      </div>
       
      {newsArticle("2024", "1110 readers")}
      {newsArticle("Wooo", "11100 readers")}
      {newsArticle("n1", "110 readers")}
      {newsArticle("news", "11170 readers")}
      {newsArticle("I", "111000 readers")}
    </div>
  )
  
}

export default Widgets
