
import { initializeApp } from "firebase/app";
import {getFirestore, doc, getDoc, collection, getDocs, where, query, addDoc} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBqNK8Q5nIZ2PmibVZJ6u9t--_GkQSawCI",
  authDomain: "mambotienda-bab9e.firebaseapp.com",
  projectId: "mambotienda-bab9e",
  storageBucket: "mambotienda-bab9e.appspot.com",
  messagingSenderId: "862142536741",
  appId: "1:862142536741:web:14e5bc6f17376abbaf73cc"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export function testApp(){

}

export async function getItemDetalle(itemid){
 const docRef = doc(db, "articulos", 
    itemid);
const snapshot = await getDoc(docRef);
 const docData = {...snapshot.data(), id : snapshot.id};     
return docData;
}

export async function getItems() {
    const articulosCollection = collection(db,"articulos")
    const querySnapshot = await getDocs(articulosCollection);
    const dataDocs = querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id}));
    return dataDocs;
}


export async function createBuyOrden(orden){
 const ordenesCollection = collection("ordenes");
    const orderDoc = await addDoc(ordenesCollection, orden)
    console.log (orderDoc);
}
