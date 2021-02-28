import { Avatar } from '@material-ui/core'
import React from 'react'
import './DashboardCard.css'

function DashboardCard({title ,image, subTitle }) {
    return (
        <div className='dashBoardCard'>
           <img src={image} alt="course image" className='dashBoardCard__img' />
           <div className="dashBoardCard__info">
               <Avatar
               className='dashBoardCard__avatar'
               alt={title}
               src={title}
               />
               <div className="dashboardCard__text">
                   <h4>{title}</h4>
                   <p>{subTitle}</p>
               </div>
           </div>
        </div>
    )
}

export default DashboardCard
