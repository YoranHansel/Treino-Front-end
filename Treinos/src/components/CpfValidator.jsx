import React, { useState } from 'react';

export default function CpfValidator() {
  const [cpf, setCpf] = useState('');
  
  const [borderColor, setBorderColor] = useState('#9ca3af'); 


  const validarCPF = (cpfInput) => {
    const limpo = cpfInput.replace(/\D/g, '');

   
    if (limpo.length !== 11 || /^(\d)\1+$/.test(limpo)) return false;

    
    let soma = 0;
    for (let i = 0; i < 9; i++) {
      soma += parseInt(limpo.charAt(i)) * (10 - i);
    }
    let resto = 11 - (soma % 11);
    let digito1 = resto === 10 || resto === 11 ? 0 : resto;
    if (digito1 !== parseInt(limpo.charAt(9))) return false;

   
    soma = 0;
    for (let i = 0; i < 10; i++) {
      soma += parseInt(limpo.charAt(i)) * (11 - i);
    }
    resto = 11 - (soma % 11);
    let digito2 = resto === 10 || resto === 11 ? 0 : resto;
    if (digito2 !== parseInt(limpo.charAt(10))) return false;

    return true;
  };

  
  const handleChange = (e) => {
    const valor = e.target.value;
    setCpf(valor);

    
    const apenasNumeros = valor.replace(/\D/g, '');

    if (apenasNumeros.length < 11) {
     
      setBorderColor('#9ca3af'); 
    } else if (apenasNumeros.length === 11) {
      
      const eValido = validarCPF(apenasNumeros);
      setBorderColor(eValido ? '#22c55e' : '#ef4444'); // Verde se válido, Vermelho se inválido
    } else {
      
      setBorderColor('#ef4444');
    }
  };

  
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f3f4f6',
    fontFamily: 'sans-serif'
  };

  const cardStyle = {
    backgroundColor: '#ffffff',
    padding: '24px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '320px'
  };

  const inputStyle = {
    width: '100%',
    padding: '10px 12px',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: borderColor, 
    borderRadius: '6px',
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'border-color 0.2s ease'
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <label 
          htmlFor="cpf" 
          style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px', color: '#374151' }}
        >
          Digite seu CPF:
        </label>
        
        <input
          id="cpf"
          type="text"
          maxLength="14" 
          value={cpf}
          onChange={handleChange}
          placeholder="000.000.000-00"
          style={inputStyle}
        />
        
        <p style={{ fontSize: '12px', color: '#9ca3af', marginTop: '8px' }}>
          A borda mudará de cor assim que você digitar os 11 números.
        </p>
      </div>
    </div>
  );
}

