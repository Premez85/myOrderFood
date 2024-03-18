export default function ItemCard({description, price, imgSrc, title, addItem}) {
    return (
        <div className="meal-item">
            <img src={`http://localhost:3000/${imgSrc}`} alt={`Image ${name}`}/>
            <h3>{title}</h3>
            <b className='meal-item-price'>{price}</b>
            <article className='meal-item-description'>{description}</article>
            <button className='button meal-item-actions' onClick={()=>addItem(title, price)}>Add to cart</button>
        </div>
    );
}