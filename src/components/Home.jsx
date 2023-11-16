import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img2 from '../assets/img/img2.jpg'
import { useEffect, useState } from 'react';
import '../assets/styles/home.scss'
import { useNavigate } from 'react-router-dom';

function Home() {
  const [firstName, setFirstName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedFirstName = sessionStorage.getItem('firstName');

    if (!storedFirstName) {
      alert('Você não está autenticado. Por favor, faça login.');
      navigate('/');
    } else {
      setFirstName(storedFirstName);
    }
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem('firstName');
    alert('Você foi desconectado.');
    navigate('/');
  };

  return (
    <Container>
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Row>
        <Col xs={12} md={8}>
          <div className="logout">
            <p>Bem vindo(a), <span>{firstName}</span></p>
            <button className='btnLogout' onClick={handleLogout}>Sair</button>
          </div>
        </Col>
        <Col xs={6} md={4}>
          <h2>O que somos</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam quo aut modi sunt, sint maiores voluptates, blanditiis repellendus veniam error vitae iusto ipsa perferendis facere, eveniet nobis et ducimus voluptatibus?</p>
        </Col>
      </Row>

      {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
      <Row>
        <Col xs={12} md={8}>
        <img src={img2} alt="img ilustrativa" width="60%" />
        </Col>
        <Col xs={6} md={4}>
            <h2>Nosso proposito</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptas expedita laborum, aliquam sint unde, dolor totam, fuga eos animi commodi illum in ut repellat quae adipisci fugit distinctio aliquid!</p>
        </Col>
        <Col xs={6} md={4}>
            <h1>TITULO DA SOLUÇÃO</h1>
        </Col>
        <Col xs={6} md={4}>
            <p>texto sobre a solução</p>
        </Col>
        <Col xs={6} md={4}>
            <h2>Como funciona</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptas expedita laborum, aliquam sint unde, dolor totam, fuga eos animi commodi illum in ut repellat quae adipisci fugit distinctio aliquid!</p>
        </Col>
        {/* <Col xs={6} md={4}>
            espace

        </Col> */}
      </Row>

      {/* Columns are always 50% wide, on mobile and desktop */}
      <Row>
        <Col xs={6}><button>Mais Informações</button></Col>
        <Col xs={6}>espace</Col>
      </Row>
    </Container>
  );
}

export default Home;