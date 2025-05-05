document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.confirmation-form');
    const confirmacaoSelect = document.getElementById('confirmacao');
    const acompanhantesGroup = document.getElementById('acompanhantes-group');

    confirmacaoSelect.addEventListener('change', function() {
        acompanhantesGroup.style.display = this.value === 'Sim' ? 'block' : 'none';
    });

    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const submitBtn = form.querySelector('.submit-btn');
        submitBtn.textContent = 'Enviando...';
        submitBtn.disabled = true;

        try {
            const formData = new FormData(form);
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                mode: 'no-cors'
            });

            alert('✅ Confirmação enviada! Obrigado.');
            form.reset();
            
        } catch (error) {
            alert('❌ Erro ao enviar. Tente novamente.');
        } finally {
            submitBtn.textContent = 'Confirmar Presença';
            submitBtn.disabled = false;
        }
    });
});