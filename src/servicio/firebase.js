
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
 const ordenesCollection = collection(db, "ordenes");
    const orderDoc = await addDoc(ordenesCollection, orden)
    return (orderDoc.id);
}

export async function exportData(){
  const articulosCollection = collection(db,"articulos");
  const articulos = [
    {
    id:1,
    titulo:"Top MAMBO",
    precio: 4500,
    categoria:"indumentaria",
    stock:5,
    detalle:"Calidad premiun",
    img:"/assets/fotosropa/mambo1.jpg",
    },
    {
    id:2,
    titulo:"Riñoneras SOUL",
    precio: 2000,
    categoria:"Accesorios",
    stock:5,
    detalle: "comodidad asegurada",
    img:"/assets/fotosropa/riñooo.jpg",
    },
    {
    id:3,
    titulo:"Relojes",
    precio:3900,
    categoria:"Accesorios",
    stock:5,
    detalle:"relojes",
    img:"/assets/fotosropa/relojesss.jpg",
    },
    {
    id:4,
    titulo:"Conjunto Arde",
    precio:7900,
    categoria:"indumentaria",
    stock:5,
    detalle:"conjunto limitado",
    img:"/assets/fotosropa/arde.jpg",
    },
    {
    id:5,
    titulo:"mambo pink",
    precio:7900,
    categoria:"indumentaria",
    stock:5,
    detalle:"top cruz",
    img:"/assets/fotosropa/mambo2.jpg",
    },
    {
    id:6,
    titulo:"TOP Negro Air",
    precio:7900,
    categoria:"indumentaria",
    stock:5,
    detalle:"Top basico",
    img:"/assets/fotosropa/photo_2022-12-12_12-46-11.jpg",
        },
    {
    id:7,
    titulo:"Conjunto Black",
    precio:5900,
    categoria:"indumentaria",
    stock:5,
    detalle:"conjunto basico",
    img:"/assets/fotosropa/photo_2022-12-12_12-47-02.jpg",
    },
    {
    id:8,
    titulo:"Conjuntos Blue",
    precio:8900,
    categoria:"indumentaria",
    stock:5,
    detalle:"conjunto blue",
    img:"/assets/fotosropa/photo_2022-12-12_12-44-03.jpg",
    },
    {
    id:9,
    titulo:"Calza Air",
    precio:5400,
    categoria:"indumentaria",
    stock:5,
    detalle:"Calza pescadora",
    img:"/assets/fotosropa/photo_2022-12-12_12-47-01.jpg",
    },
    {
    id:10,
    titulo:"Calza Basica",
    precio:3900,
    categoria:"indumentaria",
    stock:5,
    detalle:"Calza basica",
    img:"/assets/fotosropa/photo_2022-12-12_12-47-09.jpg",
    },
    {
    id:11,
    titulo:"Calza gris",
    precio:4900,
    categoria:"indumentaria",
    stock:5,
    detalle:"Calza pescadora gris",
    img:"/assets/fotosropa/photo_2022-12-12_12-45-44.jpg",
    },
    {
    id:12,
    titulo:"Calza Craquer",
    precio:4900,
    categoria:"indumentaria",
    stock:5,
    detalle:"Calza pescadora craquer",
    img:"/assets/fotosropa/photo_2022-12-12_12-45-19.jpg",
    }

                    
                    
];
for (let item of articulos){
  delete item.id;
  addDoc(articulosCollection, item).then(
    res => console.log("doc creado", res.id)
  )}

}
