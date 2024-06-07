const dialog = document.getElementById('dialog');
const blurer = document.getElementById('blurer');
const studentForm = document.getElementById('student-form');
const teacherForm = document.getElementById('teacher-form');
const changeColor1 = document.getElementById('userType1');
const changeColor2 = document.getElementById('userType2');

function openDialog(){
    dialog.style.display='flex';
    blurer.style.display='block';
    setTimeout(function() {
        dialog.style.opacity = '1';
        blurer.style.opacity = '1';
    }, 10);
    showForm('student');
}

function closeDialog(){
    dialog.style.opacity = '0';
    blurer.style.opacity = '0';
    setTimeout(function() {
        dialog.style.display='none';
        blurer.style.display='none';
    }, 300); // Attendre la fin de la transition (0.3s = 300ms)
}

function showForm(type) {
    if (type === 'student') {
        studentForm.style.display = 'block';
        teacherForm.style.display = 'none';
        changeColor1.style.backgroundColor = '#40DCA5';
        changeColor2.style.backgroundColor = '#D9D9D9'; // reset to original color
    } else if (type === 'teacher') {
        studentForm.style.display = 'none';
        teacherForm.style.display = 'block';
        changeColor1.style.backgroundColor = '#D9D9D9' ; // reset to original color
        changeColor2.style.backgroundColor = '#40DCA5' ;
    }
}

function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var toggleButton = document.querySelector(".toggle-password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleButton.innerHTML = '<img src="../image/close.jpg" alt="Hide Password">';
    } else {
        passwordInput.type = "password";
        toggleButton.innerHTML = '<img src="../image/65000.png" alt="Show Password">';
    }
}

// Logique pour gérer l'ajout de technologie dans le formulaire d'inscription étudiant

const stackInput = document.getElementById('stacks');
const entries = document.getElementById('entries');
const errorMessage = document.getElementById('error-message');

const stackArray = []; // Tableau pour stocker les entrées de technologies

stackInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Empêcher la soumission du formulaire ou le rechargement de la page

        const stackValue = stackInput.value.trim();
        if (stackValue && stackArray.length < 4) { // Vérifier si le tableau ne dépasse pas 5 éléments
            // Créer un nouveau div pour afficher l'entrée avec un bouton de suppression
            const entryDiv = document.createElement('div');
            entryDiv.classList.add('entry');

            const entryText = document.createElement('span');
            entryText.textContent = stackValue;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'X';
            deleteButton.classList.add('deleteStackButton');
            deleteButton.addEventListener('click', function() {
                const index = stackArray.indexOf(stackValue);
                if (index !== -1) {
                    stackArray.splice(index, 1);
                    entries.removeChild(entryDiv);
                    stackInput.disabled = false; // Réactiver le champ d'entrée
                    errorMessage.textContent = ''; // Effacer le message d'erreur
                }
            });

            entryDiv.appendChild(entryText);
            entryDiv.appendChild(deleteButton);

            // Ajouter la nouvelle entrée au tableau
            stackArray.push(stackValue);

            // Ajouter le nouveau div à la div des entrées
            entries.appendChild(entryDiv);

            // Effacer le champ d'entrée
            stackInput.value = '';
        } else if (stackArray.length >= 4) {
            errorMessage.textContent = "Limite d'entrées atteinte !"; // Afficher le message d'erreur
            stackInput.disabled = true; // Désactiver le champ d'entrée
        }
    }
});
