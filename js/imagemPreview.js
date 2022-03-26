'use strict';

const imagemPreview = (idFile, idImg) => {

    // Recebendo os valarores
    const file = document.getElementById(idFile).files[0];
    const preview = document.getElementById(idImg);
    
    // Instanciando um objeto para ler o arquivo
    const fileReader = new FileReader();

    if (file) {

        fileReader.readAsDataURL(file);

    } else {

        preview.src = '';

    }

    fileReader.onloadend = () => preview.src = fileReader.result;


};

export {
    imagemPreview
};