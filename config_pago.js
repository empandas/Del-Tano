// Configuración de Pago y WhatsApp
// Configura aquí tus links de pago según la cantidad de bandejas

const PAYMENT_LINKS = {
    1: 'https://mpago.la/1UAopHF',  // 1 bandeja - REEMPLAZA CON TU LINK
    2: 'https://mpago.la/2nAYAfq', // 2 bandejas - REEMPLAZA CON TU LINK
    3: 'https://mpago.la/11QbVHk', // 3 bandejas - REEMPLAZA CON TU LINK
    4: 'https://mpago.la/4bandejas', // 4 bandejas - REEMPLAZA CON TU LINK
    5: 'https://mpago.la/5bandejas', // 5 bandejas - REEMPLAZA CON TU LINK
    6: 'https://mpago.la/6bandejas', // 6 bandejas - REEMPLAZA CON TU LINK
    7: 'https://mpago.la/7bandejas', // 7 bandejas - REEMPLAZA CON TU LINK
    8: 'https://mpago.la/8bandejas', // 8 bandejas - REEMPLAZA CON TU LINK
    default: 'https://mpago.la/1UAopHF' // Si supera 8, usa este
};

// Número de WhatsApp para pedidos en efectivo (sin + ni guiones)
const WHATSAPP_NUMBER = '59898952492'; // Reemplaza con tu número

// También puedes usar un solo link si tienes configurada la opción de "Monto personalizado" en Mercado Pago
const USE_CUSTOM_AMOUNT = false; // Cambia a true si usas link con monto personalizado
const SINGLE_PAYMENT_LINK = 'https://mpago.la/1UAopHF';

// Nombre de tu negocio
const BUSINESS_NAME = 'El Tano - Empanadas';
