import React from 'react';
import './Collection-item.css';
import CustomButton from '../Custom-button/Custom-button';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.action';

const CollectionItem = ({item, addItem}) => {
    const{name, price, imageUrl} = item;
    return(
        <div className='collection-item'>
            <img src={imageUrl} className='image' alt='cloths'/>
            <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <CustomButton 
        onClick={()=>addItem(item)}
        className='custom-button' inverted>Add to Cart</CustomButton>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})
 export default connect(null, mapDispatchToProps)(CollectionItem);