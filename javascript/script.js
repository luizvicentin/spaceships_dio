function start() {
  // Inicio da funcao start()

  $("#inicio").hide();

  $("#fundoGame").append("<div id='jogador' class='anima1'></div>");
  $("#fundoGame").append("<div id='inimigo1' class='anima2'></div>");
  $("#fundoGame").append("<div id='inimigo2'></div>");
  $("#fundoGame").append("<div id='amigo' class='anima3'></div>");

  //Principais vari�veis do jogo
  var jogo = {};
  var velocidade = 5;
  var posicaoY = parseInt(Math.random() * 334);
  var TECLA = {
    upArrow: 38,
    downArrow: 40,
    backspace: 8,
  };

  //Verifica se o usu�rio pressionou alguma tecla
  jogo.pressionou = [];

  $(document).keydown(function (e) {
    jogo.pressionou[e.which] = true;
  });

  $(document).keyup(function (e) {
    jogo.pressionou[e.which] = false;
  });

  //Game Loop
  jogo.timer = setInterval(loop, 30);

  function loop() {
    movefundo();
    movejogador();
    moveinimigo1();
  }
  // Fim da fun��o loop()

  //Fun��o que movimenta o fundo do jogo
  function movefundo() {
    esquerda = parseInt($("#fundoGame").css("background-position"));
    $("#fundoGame").css("background-position", esquerda - 1);
  }
  // fim da fun��o movefundo()

  function movejogador() {
    if (jogo.pressionou[TECLA.upArrow]) {
      var topo = parseInt($("#jogador").css("top"));
      $("#jogador").css("top", topo - 10);
      if (topo <= 0) {
        $("#jogador").css("top", topo + 10);
      }
    }

    if (jogo.pressionou[TECLA.downArrow]) {
      var topo = parseInt($("#jogador").css("top"));
      $("#jogador").css("top", topo + 10);
      if (topo >= 434) {
        $("#jogador").css("top", topo - 10);
      }
    }

    if (jogo.pressionou[TECLA.backspace]) {
      //Chama fun��o Disparo
    }
  }
  // fim da fun��o movejogador()

  function moveinimigo1() {
    posicaoX = parseInt($("#inimigo1").css("left"));
    $("#inimigo1").css("left", posicaoX - velocidade);
    $("#inimigo1").css("top", posicaoY);

    if (posicaoX <= 0) {
      posicaoY = parseInt(Math.random() * 325);
      $("#inimigo1").css("left", 685);
      $("#inimigo1").css("top", posicaoY);
    }
  }
  //Fim da fun��o moveinimigo1()
}
// Fim da funcao start
