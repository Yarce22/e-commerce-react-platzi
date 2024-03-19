import { PlusIcon } from '@heroicons/react/24/solid';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context/Context';

const Card = ({title, price, category, image, description}) => {
  const context = useContext(ShoppingCartContext);
  console.log(description);

  const showProduct = (productDetail) => {
    context.openProductDetail();
    context.setProductToShow(productDetail);
  }

  return (
    <div
      className="bg-white cursor-pointer w-56 h-60"
      onClick={() => showProduct({title, price, category, image, description})}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.2 ">{category}</span>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
        <button 
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
          onClick={() => context.setCount(context.count + 1)}
        >
          <PlusIcon className='h-6 w-6' />
        </button>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-normal">{title}</span>
        <span className="text-lg font-medium">${price}</span>
        <span className="hidden">{description}</span>
      </p>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  category: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
}

export default Card;