import React from 'react'
import { useStateValue } from './StateProvider'
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
 
function Checkout() {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">

                <img className="checkout__ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/GiftCards/CorpGCPages/ART/OctLP/Client/420_1500x200_v2.jpg" alt="" />
                {basket?.length === 0 ? (
                    <div>
                        <h2>Your Shopping basket is empty</h2>
                        <p>You have no items in your basket. To buy one or more items,
                         click "Add to basket" next to the item.</p>
                    </div>
                ) : (
                        <div>
                            <h2 className="checkout__title">Your shopping basket</h2>
                            {/*  list out all of the checkout products */}
                            {basket?.map(item => (
                                <CheckoutProduct
                                    id={item.id}
                                    item={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating} />
                            ))}
                        </div>
                    )}
            </div>
{basket?.length>0 && (<div className="checkout__right">
    <Subtotal />
    
</div> )}
        </div >
    );
}

export default Checkout
