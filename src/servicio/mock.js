import articulos from "../data/articulos";


 export function getItem() {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(articulos);
    },1)
});
}

export function getItemDetalle(itemid) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(articulos.find((item) => item.id === Number(itemid)));
    },1)
});
}


export default getItem;
