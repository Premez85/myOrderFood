import {useEffect, useState} from "react";
import {fetchAllMeals, orderMeals} from "./http"
import ItemCard from "./components/ItemCard";
import SiteHeader from "./components/SiteHeader";
import Cart from "./components/Cart";
import Form from "./components/Form";
import Modal from "./components/Modal";

export default function App() {

    const [meals, setMeals] = useState([]);
    const [error, setError] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const [modalFormOpen, setModalFormOpen] = useState(false);
    const [orders, setOrders] = useState([])

    useEffect(() => {
        async function fetchMeals() {

            try {
                const meal = await fetchAllMeals();
                setMeals(meal);
            } catch (error) {

            }


        }

        fetchMeals();
    }, []);

    async function handleOrderMeala(selectedPlace) {
        await orderMeals(orders);
    }

    function addItem(title, price) {
        if(title.trim().length > 0 && +price > 0) {
            setOrders(prev => {
                let itemIsIncrease = false;
                const newArr = prev.map(val => {
                    if(val.title === title ){
                        itemIsIncrease = true;
                        return  {...val, quantity: +val.quantity + 1 }

                    } else {
                        return {...val}
                    }
                })
                if(itemIsIncrease){
                    return [
                        ...newArr
                    ]
                }
                return [
                    ...prev,
                    {
                        title,
                        price,
                        quantity: 1
                    }
                ]

            })
        }
    }



    function handleModalClose() {
        setModalOpen(false);
    }

    function handleModalOpen() {
        setModalOpen(true);
    }

    function addQuantity(title){
        setOrders(prev => {
            prev = prev.map(val=> {
                if(val.title === title) {
                    return   {...val, quantity: val.quantity + 1}
                }
                return val;
            })
            return [
                ...prev
            ];
        })
    }
    function removeItemFromCard(title){

        setOrders(prev => {
            if(prev.length === 1){
                return [];
            }
            const newArr = prev.filter(val =>val.title !== title)
            return [
                ...newArr
            ];
        })
    }
    function reduceQuantity(title){
        setOrders(prev => {
            prev = prev.map(val=> {
                if(val.title === title) {
                    if(val.quantity === 1) {
                        removeItemFromCard(title);
                    }
                    return   {...val, quantity: val.quantity - 1}
                }
                return val;
            })
            return [
                ...prev
            ];
        })
    }

    function handleModalFormClose() {
        setModalFormOpen(false);
    }
    function handleModalFormOpen() {
        setModalFormOpen(true);
    }
    const totalPrice =  orders.reduce((total,val)=>val? total+val.price*val.quantity: 0, 0).toFixed(2)
    const ordersItem = orders.length
    const cards = <ul id='meals'>{
        meals.map(meal=><li key={meal.id}>
            <ItemCard
                addQuantity={addQuantity}
                description={meal.description}
                price={meal.price}
                imgSrc={meal.image}
                title={meal.name}
                addItem={addItem}
            /></li>)
    }</ul>
    return (
    <>
        <Modal open={modalOpen} >
            {modalOpen &&
            <Cart
                close={handleModalClose}
                orders={orders} add={addQuantity}
                reduce={reduceQuantity}
                openForm={handleModalFormOpen}
            />
            }
        </Modal>
        <Modal open={modalFormOpen}>
            {modalFormOpen && <Form close={handleModalFormClose} totalPrice={totalPrice}/>}
        </Modal>
        <SiteHeader
            openCard={handleModalOpen}
            ordersItem={ordersItem}
        />
        {cards}

    </>
  );
}
