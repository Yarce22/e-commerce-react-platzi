import PropTypes from 'prop-types';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

const OrdersCard = (props) => {
	const { totalPrice, totalProducts } = props;

	return (
		<div className="flex justify-between items-center w-80 p-4 my-3 border border-black rounded-lg">
			<div className='flex justify-between w-full'>
				<p className='flex flex-col'>
					<span className='font-light'>01.02.23 </span>
					<span className='font-light'>{totalProducts} article</span>
				</p>
				<div className='flex items-center gap-2'>
					<span className='font-medium text-xl'>${totalPrice}</span>
					<ChevronRightIcon className='h-6 w-6'/>
				</div>
			</div>
		</div>
	);
}

OrdersCard.propTypes = {
	totalPrice: PropTypes.number,
	totalProducts: PropTypes.number
}

export default OrdersCard;