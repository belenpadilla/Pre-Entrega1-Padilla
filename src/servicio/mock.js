import articulos from "../data/articulos";

function getItem() {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(articulos);
    },1000)
});
}

export function getItemDetalle() {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(articulos[1]);
    },1000)
});
}



export default getItem;
