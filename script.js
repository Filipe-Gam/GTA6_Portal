//lista das noticias do portal
const listaMaterias = ["materia-principal", "material", "material2"]


document.addEventListener("DOMContentLoaded", () => {
    carregarLikes();
});


//----------------------------------------------------------------
// SISTEMA DE CURTIDAS
//----------------------------------------------------------------

function carregarLikes(){
    const idMateria = listaMaterias[index];
    if (!idMateria) return;

    const totalLikes = parseInt(localStorage.getItem('db_likes_${idMateria}') || "0", 10);
    const jaCurtiu = locaalStorage.getItem('db_userLikes${idMateria}') === "true";

    const icone = btn.querySelector(",icone-coracao");
    const contador = btn.querySelector(", contador-likes");

    if (contador) contador.innerText = totalLikes;

    if(jaCurtiu && btn && icone) {
        btn.classList.add("curtido");
        icone.innerText = "❤️";
    }

}

function gerenciarLikes(idMateria, btnClicado) {
    let totalLikes = parseInt(localStorage.getItem(`db_likes_${idMateria}`) || "0", "10");
    let jaCurtiu = localStorage.getItem(`db_userLike_${idMateria}`) === "true";

    const icone = btnClicado.querySelector(".icone-coracao");
    const contador = btnClicado.querySelector(".contador-likes");

    if(!jaCurtiu) {
        totalLikes +=1;
        jaCurtiu = true;
        if (icone) icone.innerText = "❤️";
        btnClicado.classList.add("curtido");
    } else {
        totalLikes = Math.max(0, totalLikes -1);
        jaCurtiu = false;
        if (icone) icone.innerText = "🤍";
        btnClicado.classList.remove("curtido");
    }

    localStorage.setItem(`db_likes_${idMateria}`, totalLikes.toString());
    localStorage.setItem(`db_userLike_${idMateria}`, jaCurtiu.toString());

    contador.innerText = totalLikes;
}

//----------------------------------------------------------------
// SISTEMA DE comentarios
//----------------------------------------------------------------
function carregarComentarios() {
    listaMaterias.forEach((idMateria) => {
        const blocoMateria = document.getElementById(idMateria);
        if(!blocoMateria) return;

        const containerLista = blocoMateria.querySelector(".lista-comentarios");
        const chaveBanco = `db_comentarios_${idMateria}`;
        const listacomentarios = JSON.parse(localStorage.getItem(chaveBanco) || "[]")

        desenharComentarios(containerLista, listacomentarios);

    });
}

function salvarComentario(idMateria, formElement){

    const inputAutor = formElement.querySelector(".input-autor");
    const inputtexto = formElement.querySelector(".input-texto");

    const autor = inputAutor.value.trim();
    const texto = inputAutor.value.trim();

    if(autor === "" || texto === "") return;

    const chaveBanco = `db_comentarios_${idMateria}`;
    const listacomentarios = JSON.parse(localStorage.getItem(chaveBanco) || "[]")

    const novoComentario = {
        autor: autor,
        texto: texto,
        hora: new Date().toLocaleString([], {hour: "2-digit", minute: "2-digit"})
    };

    listacomentarios.unshift(novoComentario);

    localStorage.setItem(chaveBanco, JSON.stringify(listacomentarios));

    inputAutor.value = "";
    inputtexto.value = "";

    const blocoMateria = formElement.closeset(".materia-completa");
    const containerLista = blocoMateria.querySelector(".lista-comentarios")

    desenharComentarios(containerLista, listacomentarios);

}

function desenharComentarios(container, lista){
    if(!container) return;

    container.innerHTML = "";

    if(lista.length === 0){
        container.innertHTML = <span class="tempo-commentario">seja o primeiro a fazer um comentario</span>;
        return;
    }

    lista.forEach((item) => {
        const card = document.createElement("div");
        card.classList.add("card-comentario");

        const strongAutor = document.createElement("strong");
        strongAutor.textContent = item.autor;

        const pTexto = document.createElement("p");
        pTexto.textContent = item.texto; 

        const spanHora = document.createElement("span");
        spanHora.classList.add("tempo-comentario");
        spanHora.textContent = `(${item.hora})`;

        card.append(strongAutor, pTexto, spanHora);
        container.appendChild(card);
        
});
}




//---------------------------------------------------------------------------------//
// TROCA DE TEMA //
function trocarTema(){
      const corpo = document.body;
      const icone = document.getElementById("icone-tema")  

    corpo.classList.toggle("mode-dark");

    if(corpo.classList.contains("mode-dark")){
        icone.innerText = "☀︎";
    }else{
        icone.innerText = " ⏾";
    }
}