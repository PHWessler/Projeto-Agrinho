// Navegação suave ao clicar nos links do menu
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const sectionId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(sectionId);

        window.scrollTo({
            top: targetSection.offsetTop - 60, // 60px para compensar a altura do header
            behavior: 'smooth'
        });
    });
});

// Validação do formulário de contato
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Obter os valores dos campos
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    // Simples validação dos campos
    if (nome === '' || email === '' || mensagem === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Aqui você pode implementar o envio do formulário via AJAX ou outro método
    // Exemplo básico de exibir os dados no console
    console.log(`Nome: ${nome}, Email: ${email}, Mensagem: ${mensagem}`);

    // Limpar os campos após o envio (opcional)
    document.getElementById('contactForm').reset();
});
