document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.confirmation-form');
    const confirmacaoSelect = document.getElementById('confirmacao');
    const acompanhanteSelect = document.getElementById('acompanhante');
    const nomeAcompanhanteGroup = document.getElementById('nomeAcompanhanteGroup');
    const nomeAcompanhanteInput = document.getElementById('nomeAcompanhante');

    acompanhanteSelect.addEventListener('change', function() {
        if (this.value === 'Sim') {
            nomeAcompanhanteGroup.style.display = 'block';
            nomeAcompanhanteInput.setAttribute('required', '');
        } else {
            nomeAcompanhanteGroup.style.display = 'none';
            nomeAcompanhanteInput.removeAttribute('required');
            nomeAcompanhanteInput.value = '';
        }
    });

    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const submitBtn = form.querySelector('.submit-btn');
        submitBtn.textContent = 'Enviando...';
        submitBtn.disabled = true;

        try {
            const formData = new FormData(form);
            
            if (acompanhanteSelect.value === 'Sim' && !nomeAcompanhanteInput.value.trim()) {
                alert('Por favor, informe o nome do acompanhante');
                return;
            }
            
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                mode: 'no-cors'
            });

            alert('✅ Confirmação enviada! Obrigado.');
            form.reset();
            nomeAcompanhanteGroup.style.display = 'none'; 
            
        } catch (error) {
            alert('❌ Erro ao enviar. Tente novamente.');
        } finally {
            submitBtn.textContent = 'Confirmar Presença';
            submitBtn.disabled = false;
        }
    });
});