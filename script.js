document.addEventListener("DOMContentLoaded", () => {
    const botoesComentar = document.querySelectorAll(".comentarios");

    botoesComentar.forEach((botao) => {
        botao.addEventListener("click", () => {
            const card = botao.parentElement;

            if (card.querySelector("textarea")) return;

            const textarea = document.createElement("textarea");
            textarea.placeholder = "Digite seu comentário...";
            textarea.className = "area-comentario";

            const enviar = document.createElement("button");
            enviar.textContent = "Enviar";
            enviar.className = "enviar-comentario";

            enviar.addEventListener("click", () => {
                const texto = textarea.value.trim();
                if (texto !== "") {
                    const comentario = document.createElement("p");
                    comentario.textContent = texto;
                    comentario.className = "comentario-publicado";

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
