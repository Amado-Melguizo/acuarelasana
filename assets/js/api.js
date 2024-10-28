// api.js

// Función para obtener todas las fotos
export async function getAllPhotos() {
    try {
      const response = await fetch("http://localhost:3000/photos");
      return await response.json();
    } catch (error) {
      console.error("Error al obtener las fotos:", error);
      return [];
    }
  }
  
  // Función para agregar una nueva foto
  export async function addPhoto(photoData) {
    try {
      const response = await fetch("http://localhost:3000/photos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(photoData),
      });
      return await response.json();
    } catch (error) {
      console.error("Error al agregar la foto:", error);
    }
  }
  