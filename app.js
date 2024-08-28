function incriptarTexto(){
    const textOriginal = document.getElementById("textoOriginal").value;
    
    let textIncriptado = '';

    for (let i = 0; i < textOriginal.length; i++){
        const letra = textOriginal[i];
        switch (letra) {
            case 'e':
                textIncriptado += 'enter';
                break;
            case 'i':
                textIncriptado += 'imes';
                break;
            case 'a':
                textIncriptado += 'ai';
                break;
            case 'o':
                textIncriptado += 'ober';
                break;
            case 'u':
                textIncriptado += 'ufat';
                break;
            default:
                textIncriptado += letra;
        }
    }
    const textarea = document.getElementById('textoIncriptado');
    const div_ocul = document.getElementById('div_oculto');
    const copia_ocul = document.getElementById('copia');
    document.getElementById('textoIncriptado').value = textIncriptado; 
    textarea.value.length === 0 ? (textarea.style.display='none',copia_ocul.style.display='none',div_ocul.style.display='block') : (textarea.style.display='block',copia_ocul.style.display='block',div_ocul.style.display='none')
}
    
function desencriptar_texto(){
    const textOriginal = document.getElementById("textoOriginal").value;
    let textodesencriptado = textOriginal.replace(/enter/g,"e")
                                        .replace(/imes/g, "i")
                                        .replace(/ai/g, "a")
                                        .replace(/ober/g, "o")
                                        .replace(/ufat/g, "u");
    
    document.getElementById('textoIncriptado').value = textodesencriptado;
    return textodesencriptado
    
}

function copiar_texto(){
    const textarea = document.getElementById('textoIncriptado');
    textoIncriptado.select();
    document.execCommand('copy')
    alert('Tienes un texto copiado en el portapapeles...')
}


window.onload = incriptarTexto()
