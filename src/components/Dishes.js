import React from 'react'
import './dishes.css'

const Dishes = ({name, image, description,price}) => {
  return (
    <article className='card'>
          <img
            className='card__img'
            src={image}
            alt={name}
          />
         <div className='card__content'>
          <div className='card__info'>
              <p>{name}</p>
              <b>{price}</b>
            </div>
            <p className='card__description'>
            {
              description
            }
            </p>
            <a className='card__btn' href="/" role="button">
              Order a delivery <i>-&gt;</i>
            </a>
         </div>
    </article>
  )
}

export default Dishes