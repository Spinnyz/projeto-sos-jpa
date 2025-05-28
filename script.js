document.addEventListener("DOMContentLoaded", () => {
    const botoesComentar = document.querySelectorAll(".comentarios");

    botoesComentar.forEach((botao) => {
        botao.addEventListener("click", () => {
            const card = botao.parentElement;

            if (card.querySelector("textarea")) return;

            const textarea = document.createElement("textarea");
            textarea.placeholder = "Digite seu comentário...";
            textarea.style.width = "100%";
            textarea.style.marginTop = "10px";
            textarea.style.resize = "vertical";

            const enviar = document.createElement("button");
            enviar.textContent = "Enviar";
            enviar.style.marginTop = "5px";
            enviar.style.display = "block";

            enviar.addEventListener("click", () => {
                const texto = textarea.value.trim();
                if (texto !== "") {
                    const comentario = document.createElement("p");
                    comentario.textContent = texto;
                    comentario.style.marginTop = "10px";
                    comentario.style.background = "#f0f0f0";
                    comentario.style.padding = "10px";
                    comentario.style.borderRadius = "8px";
                    comentario.style.fontSize = "14px";

                    const areaTexto = card.querySelector(".text");
                    areaTexto.appendChild(comentario);

                    textarea.remove();
                    enviar.remove();
                }
            });


            card.appendChild(textarea);
            card.appendChild(enviar);
        });
    });
});
