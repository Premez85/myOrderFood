import icon from '../assets/logo.jpg'
export default function SiteHeader({openCard, ordersItem}) {
    return(
        <header id='main-header'>
        <div id='title'>
            <img src={icon} alt="Icon ReactFood"/>
            <h1>Reactfood</h1>
        </div>
            <button className='text-button' onClick={openCard}>Card ({ordersItem})</button>
        </header>
    );
}