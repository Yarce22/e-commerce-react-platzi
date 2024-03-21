import PropTypes from 'prop-types';

const OrdersCard = (props) => {
	const { totalPrice, totalProducts } = props;

	return (
		<div className="flex justify-between items-center mb-3 borbder">
			<p>
				<span>01.02.23</span>
				<span>{totalProducts}</span>
				<span>{totalPrice}</span>
			</p>
		</div>
	);
}

OrdersCard.propTypes = {
	totalPrice: PropTypes.number,
	totalProducts: PropTypes.number
}

export default OrdersCard;