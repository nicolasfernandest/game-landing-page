document.addEventListener('DOMContentLoaded', function() {
    // Adiciona um evento que será executado quando o DOM estiver completamente carregado.
    const swiper = new Swiper('.swiper', {
        // Cria uma nova instância do Swiper (carrossel), associada ao contêiner com a classe 'swiper'.
        direction: 'horizontal',
        // Define a direção de transição dos slides como horizontal.
        loop: true,
        // Define que o carrossel não irá repetir os slides (não fará looping).

        pagination: {
            el: '.swiper-pagination'
            // Configura a paginação (indicadores de slide) utilizando o seletor '.swiper-pagination'.
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
            // Define os botões de navegação para avançar ('.swiper-button-next') e retroceder ('.swiper-button-prev') os slides.
        }
    });
    

    document.addEventListener('keydown', function (event) {
        // Adiciona um listener para eventos de teclado.
        if(event.key === 'ArrowLeft') {
            swiper.slidePrev();
            // Se a tecla pressionada for a seta para a esquerda, move para o slide anterior.
        } else if(event.key === 'ArrowRight') {
            swiper.slideNext();
            // Se a tecla pressionada for a seta para a direita, move para o próximo slide.
        }
    });

    const gameInput = document.getElementById('gameInput');
    // Seleciona o elemento de entrada de texto com o ID 'gameInput'.

    gameInput.addEventListener('keypress', function (event){
        // Adiciona um evento que será disparado quando uma tecla for pressionada no campo de entrada.
        if(event.key === 'Enter'){
            // Verifica se a tecla pressionada foi 'Enter'.
            let searchGame = gameInput.value.trim().toUpperCase();
            // Obtém o valor do campo de entrada, remove espaços em branco nas extremidades e converte para maiúsculas.

            switch(searchGame){
                case 'MARIO':
                    swiper.slideTo(0);
                    // Se o valor digitado for 'MARIO', move para o primeiro slide (índice 0).
                    break;
                case 'POKEMON':
                    swiper.slideTo(1);
                    // Se o valor digitado for 'POKEMON', move para o segundo slide (índice 1).
                    break;
                case 'ZELDA':
                    swiper.slideTo(2);
                    // Se o valor digitado for 'ZELDA', move para o terceiro slide (índice 2).
                    break;
                default:
                    alert('Jogo não foi encontrado');
                    // Se o valor não corresponder a nenhum dos casos, exibe um alerta informando que o jogo não foi encontrado.
                    break;
            }
        }
    });
        // Abre o modal correspondente ao slide ativo
        const openModalBtn = document.getElementById("openModalBtn");

        openModalBtn.addEventListener("click", function() {
            const activeSlide = document.querySelector(".swiper-slide-active");
    
            if (activeSlide.id === "slide-1") {
                openModal("modal1");
            } else if (activeSlide.id === "slide-2") {
                openModal("modal2");
            } else if (activeSlide.id === "slide-3") {
                openModal("modal3");
            }
        });
    
        // Função para abrir o modal
        function openModal(modalId) {
            document.getElementById(modalId).style.display = "block";
        }
    
        // Função para fechar o modal
        function closeModal(modalId) {
            document.getElementById(modalId).style.display = "none";
        }
    
        // Adiciona o evento de fechar o modal ao clicar no 'x'
        document.querySelectorAll(".close").forEach(closeBtn => {
            closeBtn.addEventListener("click", function() {
                const modalId = this.closest(".modal").id;
                closeModal(modalId);
            });
        });
});