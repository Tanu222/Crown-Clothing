import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('uZVkNc4bxLWArzJY6fav')
.collection('cartItems').doc('9ol3Xq2CMjCdYeoqfFus');

firestore.doc('/users/uZVkNc4bxLWArzJY6fav/cartItems/9ol3Xq2CMjCdYeoqfFus')