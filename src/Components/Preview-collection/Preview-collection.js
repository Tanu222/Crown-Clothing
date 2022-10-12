import './Preview-collection.css';
import React from 'react';
import CollectionItem from '../Collection-item/Collection-item';

const PreviewCollection = ({ title, items }) => {
    return (
        <div className='collection-preview'>
            <h1>{title.toUpperCase()}</h1>
            <div className='preview'>
                {
                    items
                    .filter((item, idx) => idx < 4)
                    .map((item) => (
                        <CollectionItem key={item.id} item={item} />))
                }
            </div>
        </div>
    )
}

export default PreviewCollection;