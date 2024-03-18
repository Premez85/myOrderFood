export default function Cart({close, orders, add, reduce, openForm}) {
    let totalPrice = 0;
    let listItems = orders.map(order=> {
        totalPrice += +order.price * order.quantity;
        return (
            <li className='cart-item' key={order.title}>
                <p>{order.title}</p>
                <b>{order.price}</b>
                <div className='cart-item-actions'>
                    <button onClick={() => add(order.title)}>+</button>
                    <b>{order.quantity}</b>
                    <button onClick={() => reduce(order.title)}>-</button>
                </div>
            </li>
        );
    })
    return (
        <div className='cart'>
            <h2>Your Card</h2>
            <ul>{listItems}</ul>
            <p className='cart-total'>{totalPrice.toFixed(2)}</p>
            <div className='modal-actions'>
                <button className='text-button' onClick={close}>Close</button>
                <button className='button' onClick={openForm}>Go to Checkout</button>
            </div>
        </div>
    );
}