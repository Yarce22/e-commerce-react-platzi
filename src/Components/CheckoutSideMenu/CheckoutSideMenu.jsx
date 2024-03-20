import { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../Context/Context';

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);

  return (
    <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} flex-col fixed top-[68px] right-0 border border-black rounded-lg bg-white w-[360px] h-[calc(100vh-68px)]`}>
      <div className="flex justify-between items-center p-4">
        <h2 className="font-medium text-xl">Side Menu</h2>
        <button onClick={() => context.closeCheckoutSideMenu()}>
          <XMarkIcon className="h-6 w-6" />
        </button>
      </div>
    </aside>
  );
}

export default CheckoutSideMenu;

