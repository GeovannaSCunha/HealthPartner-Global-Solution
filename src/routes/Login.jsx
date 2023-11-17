import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/formulario.scss';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const response = await fetch(`http://localhost:5000/users?username=${username}&password=${password}`);
      const users = await response.json();

      if (users.length > 0) {
        const user = users[0];
        const firstName = user.name;

        sessionStorage.setItem('firstName', firstName);
        sessionStorage.setItem('token-user', Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2));
        sessionStorage.setItem('user-object', JSON.stringify(user));

        console.log('Redirecionando para /Home');
        
        navigate('/Home');
      } else {
        throw new Error('Nome de usuário ou senha incorretos.');
      }
    } catch (error) {
      console.error('Erro no login:', error.message);
      alert('Erro no login. Por favor, verifique suas credenciais.');
    }
  };
  

  const handleRegister = () => {
    navigate('/Cadastro');
  };

  return (
    <>
      <div className="textLogin"> 
        <h1>Acesse a nossa plataforma</h1>
        <p>E tenha controle da sua saúde!</p>
      </div>

      <form className="bg-body-tertiary" id='form' onSubmit={handleSubmit}>
        <label>
          Nome de usuário:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </label>
        <label>
          Senha:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <button type="submit">Entrar</button>
        <button type="button" onClick={handleRegister}>Não tem login? Cadastre-se!</button>
      </form>
    </>
  );
}

export default Login;
