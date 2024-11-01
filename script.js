const apiToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjM2Mjg0YjM4LWRiMzUtNDA0Ny1hYzQ1LTYzNTBlMDIzNDBlOCIsImlhdCI6MTczMDQzODg0OSwic3ViIjoiZGV2ZWxvcGVyL2Y2NDBkNTNiLTlmMTktZGRiYy0wN2M2LTg1MjZmZTlkMTdiYyIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxNDkuMTkuMTY5LjIxMiJdLCJ0eXBlIjoiY2xpZW50In1dfQ.fkK7GjSF6wS00Gx4VHjYsiP0BtYg_KTgX-KhBQidju5fEs3Q2iel7VbdI_t9yk9RF-B06ZkiSWNNnOazBx9aaw";

// Función para realizar la consulta y mostrar los resultados
function consultarCofres() {
    const gamertag = document.getElementById("gamertag").value;

    // URL del endpoint para obtener los cofres próximos
    const url = `https://api.clashroyale.com/v1/players/%23${gamertag}/upcomingchests`;

    // Encabezado de autenticación
    const headers = {
        "Authorization": `Bearer ${apiToken}`
    };

    // Realizar la solicitud GET
    fetch(url, { headers })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(`Error al obtener datos: ${response.status}`);
            }
        })
        .then(data => {
            const resultadoDiv = document.getElementById("resultado");
            resultadoDiv.innerHTML = ""; // Limpia el contenido previo

            data.items.forEach(chest => {
                // Agrega cada cofre como un nuevo párrafo en el div
                const chestInfo = document.createElement("p");
                chestInfo.textContent = `Posición: ${chest.index}, Cofre: ${chest.name}`;
                resultadoDiv.appendChild(chestInfo);
            });
        })
        .catch(error => {
            document.getElementById("resultado").textContent = error;
        });
}