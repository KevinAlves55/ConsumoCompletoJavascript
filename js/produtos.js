'use strict'

const url = 'http://10.107.142.2/produtos/';


const getProdutos = async () => {

    const response = await fetch(url);
    const {data} = await response.json();
    return data;

}

const postProduto = async (produto) => {

    const options = {
        method: 'POST',
        body: JSON.stringify(produto),
        headers: {
            'content-Type': 'application/json'
        },
    };

    await fetch (url, options);
};

const deleteProduto = async (id) => {

    const options = {
        method: 'DELETE',
        headers: {
            'content-Type': 'application/json'
        },
    };

    await fetch(`${url}${id}`, options);

};

export {
    getProdutos,
    postProduto,
    deleteProduto
}