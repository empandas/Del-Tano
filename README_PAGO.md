# Configuración de Pago con Mercado Pago

## Resumen

La tienda tiene integrada una pasarela de pago de Mercado Pago **sin necesidad de servidor**. Solo necesitas crear links de pago en tu cuenta de Mercado Pago y configurarlos.

## Cómo Configurar

### Opción 1: Links por Cantidad (Recomendado)

1. Crea links de pago en [Mercado Pago](https://www.mercadopago.com.ar):
   - Crea un link para 1 bandeja ($420)
   - Crea un link para 2 bandejas ($840)
   - Crea un link para 3 bandejas ($1260)
   - Y así sucesivamente...

2. Edita [`config_pago.js`](config_pago.js:1) y configura tus links:

```javascript
const PAYMENT_LINKS = {
    1: 'https://mpago.la/TU_LINK_1',
    2: 'https://mpago.la/TU_LINK_2',
    3: 'https://mpago.la/TU_LINK_3',
    4: 'https://mpago.la/TU_LINK_4',
    5: 'https://mpago.la/TU_LINK_5',
    // ... hasta 8 o más
    default: 'https://mpago.la/TU_LINK_DEFAULT'
};
```

### Opción 2: Link Único con Monto Personalizado

Si tienes un link de Mercado Pago configurado para aceptar cualquier monto:

1. Cambia en [`config_pago.js`](config_pago.js:27):

```javascript
const USE_CUSTOM_AMOUNT = true;
const SINGLE_PAYMENT_LINK = 'https://mpago.la/TU_LINK';
```

## Cómo Usar

1. Cliente agrega bandejas al carrito
2. Completa nombre y email
3. Click en "Ir a Pagar"
4. Se redirige automáticamente al link de Mercado Pago correspondiente

## No requiere XAMPP

¡Listo! Solo con abrir el archivo HTML funciona.
