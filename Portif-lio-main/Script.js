// =====================================================
// Script principal (mantém efeitos existentes)
// + adiciona validação do formulário de contato
// =====================================================

$(document).ready(function () {
  // -----------------------------------------------------
  // Navbar fixa (sticky) e botão scroll-up (efeitos originais)
  // -----------------------------------------------------
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $('.navbar').addClass('sticky');
    } else {
      $('.navbar').removeClass('sticky');
    }

    if (this.scrollY > 500) {
      $('.scroll-up-btn').addClass('show');
    } else {
      $('.scroll-up-btn').removeClass('show');
    }
  });

  // Clique no botão scroll-up: rolar para o topo
  $('.scroll-up-btn').click(function () {
    $('html').animate({ scrollTop: 0 });
  });

  // -----------------------------------------------------
  // Efeito de digitação (typed.js) - mantém o comportamento
  // -----------------------------------------------------
  var typed = new Typed('.typing-2', {
    strings: ['Programador Junior', 'Programador Junior'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // -----------------------------------------------------
  // Menu mobile (toggle) - mantém o comportamento original
  // -----------------------------------------------------
  $('.menu-btn').click(function () {
    $('.navbar .menu').toggleClass('active');
    $('.menu-btn i').toggleClass('active');
  });

  // -----------------------------------------------------
  // Carrossel (OwlCarousel2) - mantém o comportamento original
  // -----------------------------------------------------
  $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPauser: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });

  // =====================================================
  // Validação do formulário de contato
  // Requisitos:
  // - Verificar se todos os campos estão preenchidos
  // - Validar formato do email
  // - Exibir mensagem de sucesso e limpar campos
  // =====================================================

  const form = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');
  const nomeInput = document.getElementById('nome');
  const emailInput = document.getElementById('email');
  const mensagemInput = document.getElementById('mensagem');

  // Regex simples e eficiente para validar email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Coleta de valores (trim para ignorar espaços)
      const nome = nomeInput.value.trim();
      const email = emailInput.value.trim();
      const mensagem = mensagemInput.value.trim();

      // Reset feedback
      feedback.textContent = '';
      feedback.style.color = '';

      // 1) Verificar preenchimento de todos os campos
      if (!nome || !email || !mensagem) {
        feedback.textContent = 'Por favor, preencha Nome, Email e Mensagem.';
        feedback.style.color = '#ff6b6b';
        return;
      }

      // 2) Validar formato do email
      if (!emailRegex.test(email)) {
        feedback.textContent = 'Informe um email válido.';
        feedback.style.color = '#ff6b6b';
        return;
      }

      // 3) Sucesso: mensagem e limpeza dos campos
      feedback.textContent = 'Mensagem enviada com sucesso! Obrigado por entrar em contato.';
      feedback.style.color = '#00804b';

      // Limpa os campos após envio
      form.reset();
    });
  }
});

