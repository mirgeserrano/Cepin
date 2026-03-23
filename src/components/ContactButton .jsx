import React from 'react';

const ContactButton = () => {
  const phone = "584123938935";
  const message = "Hola, quiero ser Voluntario de la fundación CEPIN \uD83E\uDD1D";
  
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappUrl}
      target="_blank" 
      rel="noopener noreferrer"
      style={{
        backgroundColor: '#25D366',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '8px',
        textDecoration: 'none',
        fontWeight: 'bold',
        display: 'inline-block'
      }}
    >
      Contactar por WhatsApp
    </a>
  );
};

export default ContactButton;