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