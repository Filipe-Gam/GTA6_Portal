document.addEventListener("DOMContentLoaded", () => {
    carregarLikes();
});

//lista das noticias do portal
const listaMaterias = ["materia-principal", "material", "material2"]

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