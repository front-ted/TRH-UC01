$(function () {
    var erro = new Audio("../assets/atividades/relacionar_colunas/erro.mp3");
    var acerto = new Audio("../assets/atividades/relacionar_colunas/acerto.mp3");
    $(".resp, .item").click(function () {
        $(this).toggleClass("selecionado");

        if ($(".selecionado").length == 2) {
            console.log($(".selecionado")[0].dataset.resp, $(".selecionado")[1])

            if ($(".selecionado")[0].dataset.resp == $(".selecionado")[1].dataset.resp) {
                $(".selecionado").prop("disabled", "disabled")
                $(".selecionado").addClass("acertou")
                $(".selecionado .txtacao").text($(".selecionado")[0].dataset.resp)
                $(".selecionado").removeClass("selecionado");
                $("#associar_colulas_acertou").modal("show")
                acerto.play()
            } else {
                // $(".selecionado").addClass("errou")
                $(".selecionado").removeClass("selecionado");
                $("#associar_colulas_errou").modal("show")
                erro.play()
            }
        }
    });

    $(".resp02, .item02").click(function () {
        $(this).toggleClass("selecionado");

        if ($(".selecionado").length == 2) {
            let item1 = $(".selecionado")[0];
            let item2 = $(".selecionado")[1];

            let resp1 = item1.dataset.resp02;
            let resp2 = item2.dataset.resp02;

            if (resp1 == resp2) {
                $(".selecionado").prop("disabled", "disabled");
                $(".selecionado").addClass("acertou");
                $(".selecionado .txtacao").text(resp1);
                $(".selecionado").removeClass("selecionado");

                // Abre o modal específico do acerto
                $("#modal_acertou_" + resp1).modal("show");
                acerto.play();
            } else {
                $(".selecionado").removeClass("selecionado");

                // Abre o modal específico do erro
                $("#modal_errou_" + resp1).modal("show");
                erro.play();
            }
        }
    });



    randomizeResp(50);
    randomizeResp02(50);
})


function randomizeResp(total) {
    let resp = Array.from(document.querySelectorAll('.resp'))

    for (let i = 0; i < total; i++) {
        $(resp).each(
            function () {
                $(this).insertBefore($(resp[Math.floor(Math.random() * resp.length - 1)]))
            }
        )
    }
}

function randomizeResp02() {
    let container = document.querySelector('.game-associar-colunas02 .respostas2'); // Container principal
    let resp02 = Array.from(document.querySelectorAll('.resp02'));

    // Embaralha o array de elementos
    resp02.sort(() => Math.random() - 0.5);

    // Adiciona os elementos na nova ordem
    resp02.forEach(item => container.appendChild(item));
}

// Chama a função ao carregar a página
document.addEventListener("DOMContentLoaded", randomizeResp02);
