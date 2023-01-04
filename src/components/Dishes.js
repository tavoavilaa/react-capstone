import React from 'react';
import './dishes.css';
import { Link } from "react-router-dom";

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
            <Link className='card__btn' to={"/order"} role="button">
              Order a delivery <i>-&gt;</i>
            </Link>
         </div>
    </article>
  )
}

export default Dishes