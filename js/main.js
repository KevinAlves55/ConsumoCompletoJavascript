'use strict'

// Import no javaScrit
import {openModal, closeModal} from './modal.js'; 
import {getProdutos, postProduto, deleteProduto} from './produtos.js';
import {imagemPreview} from './imagemPreview.js'

    const CriarLinha = ({foto, nome, preco, categoria, id}) => {

    const linha = document.createElement('tr');
    linha.innerHTML = 
    `
        <td>
            <img src="${foto}" class="produto-image" />
        </td>
        <td>${nome}</td>
        <td>${preco}</td>
        <td>${categoria}</td>
        <td>
            <button type="button" class="button green" data-idproduto=${id}>
                editar
            </button>
            <button type="button" class="button red" data-idproduto=${id}>
                excluir
            </button>
        </td>
    `

    return linha;

}

const carregarProdutos = async () => {

    const container = document.querySelector('tbody');
    const produtos = await getProdutos();
    const linhas = produtos.map(CriarLinha)
    container.replaceChildren(...linhas)

}

const handlePreview = () => imagemPreview('inputFile', 'imagePreview')

const salvarProduto = () => {

    const produto = {
        nome: document.getElementById('product').value,
        preco: document.getElementById('price').value,
        categoria: document.getElementById('category').value,
        foto: document.getElementById('imagePreview').src,
    };

    postProduto(produto);
    closeModal();
    carregarProdutos();

    console.log(produto);

}

const handleClickTbody = async ({target}) => {

    if (target.type === 'button') {
        
        const acao = target.textContent.trim()

        if (acao === 'excluir') {
            await deleteProduto(target.dataset.idproduto);
            console.log(target.dataset.idproduto);
            carregarProdutos();
        }
    
    }

}

carregarProdutos();

// Eventos
document.getElementById('cadastrarCliente').addEventListener('click', openModal);
document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('cancel').addEventListener('click', closeModal);
document.getElementById('inputFile').addEventListener('change', handlePreview)
document.getElementById('save').addEventListener('click', salvarProduto)
document.querySelector('tbody').addEventListener('click', handleClickTbody)