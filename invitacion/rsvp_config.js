// Configuración de la Boda de Carlos & Andrea
const WEDDING_CONFIG = {
  couple: {
    groom: "Carlos Gómez Lázaro",
    bride: "Andrea de Sousa Cubero",
    shortNames: "Carlos & Andrea"
  },
  date: {
    iso: "2027-10-16T18:00:00", // Octubre de 2027 (Fecha estimada)
    display: "Sábado, 16 de Octubre de 2027",
    season: "Otoño 2027"
  },
  locations: {
    civil: {
      title: "Firma Civil",
      place: "Ayuntamiento de Pepino",
      address: "Plaza Mayor, 1, Pepino, Toledo",
      googleMapsUrl: "https://maps.google.com/?q=Ayuntamiento+de+Pepino+Toledo",
      time: "Por confirmar (Días previos)"
    },
    celebration: {
      title: "Ceremonia Simbólica & Celebración",
      place: "Finca en Pepino / Talavera de la Reina",
      address: "Pepino - Talavera de la Reina, Toledo",
      googleMapsUrl: "https://maps.google.com/?q=Pepino+Toledo",
      time: "18:00 h"
    }
  },
  // Configuración de recepción de datos RSVP (Google Sheets / Formspree / Webhook API)
  rsvp: {
    // Reemplaza este URL con tu Webhook de Google Sheets (Google Apps Script), Formspree o Tally.
    // Ejemplo de Google Apps Script: "https://script.google.com/macros/s/AKfycbx.../exec"
    webhookUrl: "", 
    
    // Almacenamiento secundario local para pruebas inmediatas en el navegador
    saveToLocalStorage: true
  }
};

if (typeof module !== 'undefined') {
  module.exports = WEDDING_CONFIG;
}
