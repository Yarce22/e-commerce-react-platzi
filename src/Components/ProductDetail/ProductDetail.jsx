import { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../Context/Context';

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext)
  console.log(context.productToShow.description);

  return (
    <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} flex-col fixed top-[68px] right-0 border border-black rounded-lg bg-white w-[360px] h-[calc(100vh-68px)]`}>
      <div className="flex justify-between items-center p-4">
        <h2 className="font-medium text-xl">Detail</h2>
        <button onClick={() => context.closeProductDetail()}>
          <XMarkIcon className="h-6 w-6" />
        </button>
      </div>
      <figure className='px-6'>
        <img
          className='w-full h-96 rounded-lg'
          src={context.productToShow.image}
          alt={context.productToShow.title}
        />
      </figure>
      <p className='flex flex-col mb-2 px-2'>
        <span className='font-medium text-2xl'>${context.productToShow.price}</span>
        <span className='font-medium text-md'>{context.productToShow.title}</span>
      </p>
      <p className='px-2'>
        <span className='font-light text-sm'>{context.productToShow.description}</span>
      </p>
    </aside>
  );
}

export default ProductDetail;

