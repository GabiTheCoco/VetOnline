// Configuración de Firebase
const firebaseConfig = {
    apiKey: "TU_API_KEY",
    authDomain: "TU_AUTH_DOMAIN",
    projectId: "TU_PROJECT_ID",
    storageBucket: "TU_STORAGE_BUCKET",
    messagingSenderId: "TU_MESSAGING_SENDER_ID",
    appId: "TU_APP_ID"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
const db = firebase.firestore();

// Función para guardar una mascota en el LocalStorage y Firebase Storage
function guardarMascota() {
    const fileInput = document.getElementById('fileInput');
    const nombreInput = document.getElementById('nombreInput').value;
    const colorInput = document.getElementById('colorInput').value;
    const pesoInput = document.getElementById('pesoInput').value;
    const tipoInput = document.getElementById('tipoInput').value;
    const apodoInput = document.getElementById('apodoInput').value;

    const file = fileInput.files[0];
    const storageRef = storage.ref(`fotos/${file.name}`);

    storageRef.put(file).then(() => {
        storageRef.getDownloadURL().then(url => {
            // Guardar nombre de la imagen en LocalStorage
            localStorage.setItem('imagenMascota', file.name);

            // Guardar datos de la mascota en LocalStorage
            const mascota = {
                nombre: nombreInput,
                color: colorInput,
                peso: pesoInput,
                tipo: tipoInput,
                apodo: apodoInput
            };
            localStorage.setItem('mascota', JSON.stringify(mascota));

            console.log("Mascota guardada correctamente en Firebase Storage y LocalStorage");
            limpiarFormulario();
            mostrarMascotas();
        });
    });
}

// Función para limpiar el formulario después de guardar una mascota
function limpiarFormulario() {
    document.getElementById('nombreInput').value = '';
    document.getElementById('colorInput').value = '';
    document.getElementById('pesoInput').value = '';
    document.getElementById('tipoInput').value = '';
    document.getElementById('apodoInput').value = '';
    document.getElementById('fileInput').value = '';
}

// Función para mostrar la mascota almacenada en el LocalStorage
function mostrarMascotas() {
    const mascotasContainer = document.getElementById('mascotas-container');
    mascotasContainer.innerHTML = '';

    const mascota = JSON.parse(localStorage.getItem('mascota'));
    const imagenMascota = localStorage.getItem('imagenMascota');

    if (mascota && imagenMascota) {
        const mascotaHTML = `
            <div>
                <img src="${imagenMascota}" alt="Foto de la mascota" style="width: 100px; height: 100px; object-fit: cover; border-radius: 50%;">
                <p><strong>Nombre:</strong> ${mascota.nombre}</p>
                <p><strong>Color:</strong> ${mascota.color}</p>
                <p><strong>Peso:</strong> ${mascota.peso}</p>
                <p><strong>Tipo:</strong> ${mascota.tipo}</p>
                <p><strong>Apodo:</strong> ${mascota.apodo}</p>
            </div>
        `;
        mascotasContainer.innerHTML = mascotaHTML;
    }
}

// Mostrar la mascota al cargar la página
window.onload = mostrarMascotas;
