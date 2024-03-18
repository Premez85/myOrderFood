import Input from "./Inputs";


export default function Form({close, totalPrice}) {

    return (
        <form onSubmit={} className="control">
            <h3>Checkout</h3>
            <p>Total amount <b>{totalPrice} $</b></p>
            <Input label='Full Name' id='name' error={false}/>
            <Input label='E-mail' id='email' error={false} type='email'/>
            <Input label='Street' id='street' error={false}/>
            <div className="control-row">
                <div>
                    <Input label='Post Code' id='postal-code' error={false} type='number'/>
                </div>
                <div>
                    <Input label='City' id='city' error={false}/>

                </div>
                
            </div>
            <div className="modal-actions">
                <button onClick={close} className="text-button">Close</button>
                <button className="button">Submit Order</button>
            </div>
        </form>
    );
}