import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import './CartPage.css';

/* function CartPage({ items }) {
    return (
        <ul className="CartPage-items">
            {items.map(item =>
                <li key={item.id} className="CartPage-item">
                    <Item item={item} />
                </li>
            )}
        </ul>
    );
} 
CartPage.propTypes = {
    items: PropTypes.array.isRequired
};*/
function CartPage({ items, onAddOne, onRemoveOne }) {
    //console.log(items.length)
  
    if(items.length == 0){
        return (
        <div className="CartPage-empty">
            Your Cart is Empty.<br></br><br></br>
            why not add some expensive product in it?
        </div>)
    }
    
    return (
        
        <ul className="CartPage-items">
            {items.map(item =>
                <li key={item.id} className="CartPage-item">
               
                    <Item item={item}>
                   
                        <div className="CartItem-controls">
                        console.log(items.count);
                            <button
                                className="CartItem-removeOne"
                                onClick={() => onRemoveOne(item)}>&ndash;</button>
                            <span className="CartItem-count">{item.count}</span>
                            <button
                                className="CartItem-addOne"
                                onClick={() => onAddOne(item)}>+</button>
                        </div>
                    </Item>
                </li>
            )}
        </ul>
    );

}
CartPage.propTypes = {
    items: PropTypes.array.isRequired,
    onAddOne: PropTypes.func.isRequired,
    onRemoveOne: PropTypes.func.isRequired
};

export default CartPage;