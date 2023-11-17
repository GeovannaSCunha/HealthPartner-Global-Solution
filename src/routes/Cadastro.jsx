import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../assets/styles/formulario.scss';
import img1 from '../assets/img/img1.jpg';

export default function Cadastra() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      if (password !== confirmPassword) {
        throw new Error('As senhas não correspondem.');
      }

      const response = await fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, name, lastName, username, password }),
      });

      const data = await response.json();

      if (data.id) {
        alert('Usuário registrado com sucesso!');
        navigate('/');
      } else {
        throw new Error('Erro ao registrar usuário.');
      }
    } catch (error) {
      console.error('Erro no cadastro:', error.message);
      alert(`Erro no cadastro: ${error.message}`);
    }
  };

  return (
    <>
        <div className='cadastro'>
          <div className='conteudoCadastro'>
            <h1 className='titulo'>Cadastre-se!</h1>
            <p id='parag'>Com a HealthPartner você terá controle e a avaliação</p>
            <p id='parag2'>de seus exames de forma prática e simplificada.</p>

            <img src={img1} id='img1' alt="img ilustrativa" width="80%" />
          </div>
          <form className="bg-body-tertiary" id='formulario' onSubmit={handleSubmit}>
            <label>
              E-mail:
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </label>
            <label>
              Primeiro nome:
              <input className="input" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </label>
            <label>
              Sobrenome:
              <input className="input" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
            </label>
            <label>
              Nome de usuário:
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
            </label>
            <label>
              Senha:
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </label>
            <label>
              Confirmar senha:
              <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
            </label>
            <button type="submit">Registrar</button>
          </form> 
        </div>
    </>
  );
}
