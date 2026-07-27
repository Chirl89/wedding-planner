// Configuración de la Boda de Carlos & Andrea
const WEDDING_CONFIG = {
  couple: {
    groom: "Carlos Gómez Lázaro",
    bride: "Andrea De Sousa Cubero",
    shortNames: "Carlos & Andrea"
  },
  date: {
    iso: "2027-10-16T18:00:00", // Octubre de 2027 (Fecha estimada)
    display: "Sábado, 16 de Octubre de 2027",
    season: "Otoño 2027"
  },
  locations: {
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
    // URL de Google Apps Script proporcionado por el usuario
    webhookUrl: "https://script.google.com/macros/s/AKfycbwiuxQdcKIj3S_WSDrC_-eewOZLEIHhSvuCy7huTbvnl3FIlmG8K6s4Phy7BLsVJ-Hk/exec", 
    
    // Almacenamiento secundario local para pruebas inmediatas en el navegador
    saveToLocalStorage: true
  }
};

if (typeof module !== 'undefined') {
  module.exports = WEDDING_CONFIG;
}
