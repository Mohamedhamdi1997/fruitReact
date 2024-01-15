import React from 'react'
import popularStyles from "../styles/popular.module.css";

const Popular = ({title, items}) => {
  return (
    <div className={popularStyles.popularContainer}>
      <div className={popularStyles.heading}>{title}</div>
      <div className={popularStyles.items}>
        {items.map(item => {
          return(
            <div className={popularStyles.item} key={item.id}>
             <div className={popularStyles.picContainer}>
                <img src={item.pic} alt="" />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Popular