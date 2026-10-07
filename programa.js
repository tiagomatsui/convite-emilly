/* =====================================================
   BOTÃO "ABRIR CONVITE"
===================================================== */

const botao = document.getElementById("abrirConvite");

const abertura = document.getElementById("abertura");

const conteudo = document.getElementById("conteudo");

const modalConfirmacao = document.getElementById("modalConfirmacao");
const fecharModal = document.getElementById("fecharModal");
const abrirWhatsApp = document.getElementById("abrirWhatsApp");

botao.addEventListener("click", function () {

    // Fecha a primeira tela
    abertura.classList.add("fechar");


    // Depois de meio segundo,
    // mostra a segunda tela
    setTimeout(function () {

        conteudo.classList.add("mostrar");

    }, 500);

});


/* =====================================================
   BOTÃO "CONFIRMAR PRESENÇA"
===================================================== */

const botaoConfirmar = document.getElementById("confirmarPresenca");

botaoConfirmar.addEventListener("click", function () {
    modalConfirmacao.classList.add("ativo");
});
fecharModal.addEventListener("click", function () {
    modalConfirmacao.classList.remove("ativo");
});
abrirWhatsApp.addEventListener("click", function () {
    const numeroWhatsApp = "5511932543205";

    const mensagem =
        "Olá! Quero confirmar minha presença no aniversário da Emilly Akico 🎉✨";

    const linkWhatsApp =
        "https://wa.me/" +
        numeroWhatsApp +
        "?text=" +
        encodeURIComponent(mensagem);

    window.open(linkWhatsApp, "_blank");
});

    // Número que vai receber as confirmações
    const numeroWhatsApp = "5511932543205";


    // Mensagem que será colocada automaticamente
    const mensagem =
        "Olá! Quero confirmar minha presença no aniversário da Emilly Akico 🎉✨";


    // Monta o endereço do WhatsApp
    const linkWhatsApp =
        "https://wa.me/" +
        numeroWhatsApp +
        "?text=" +
        encodeURIComponent(mensagem);


    // Abre o WhatsApp em uma nova aba
    window.open(linkWhatsApp, "_blank");

});
