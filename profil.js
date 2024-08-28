document.addEventListener('DOMContentLoaded', function () {
    const courseCards = document.querySelectorAll('.course-card');
    const popup = document.getElementById('popup');
    const popupOverlay = document.getElementById('popup-overlay');
    const closePopupBtn = document.getElementById('close-popup');
    const popupContent = document.getElementById('popup-content');  // Définit correctement le popupContent

    courseCards.forEach(card => {
        card.addEventListener('click', function () {
            popup.style.display = 'block';
            popupOverlay.style.display = 'block';

            // Charge le contenu du fichier module-parcours.html
            fetch('module-parcours.html')
                .then(response => response.text())
                .then(data => {
                    popupContent.innerHTML = data;
                })
                .catch(error => {
                    popupContent.innerHTML = '<p>Erreur lors du chargement du module.</p>';
                });
        });
    });

    closePopupBtn.addEventListener('click', function () {
        popup.style.display = 'none';
        popupOverlay.style.display = 'none';
    });

    popupOverlay.addEventListener('click', function () {
        popup.style.display = 'none';
        popupOverlay.style.display = 'none';
    });
});