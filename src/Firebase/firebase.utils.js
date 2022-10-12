import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBiVYxxmuLxPJ-qq-F_fZXkcJiP0UGRnfI",
    authDomain: "crwn-db-6bb12.firebaseapp.com",
    projectId: "crwn-db-6bb12",
    storageBucket: "crwn-db-6bb12.appspot.com",
    messagingSenderId: "645218102009",
    appId: "1:645218102009:web:99a90ef16a3064e4ca9028",
    measurementId: "G-9YTHL35NX4"
};

export const createUserProfileDocument = async (userAuth, additionalData ) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get(); 
    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
           await userRef.set({
               displayName,
               email,
               createdAt,
               ...additionalData
           })
        }catch(error){
           console.log('error creating user')
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;