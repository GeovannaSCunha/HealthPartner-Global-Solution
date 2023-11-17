import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img2 from '../assets/img/img2.jpg'
import { useEffect, useState } from 'react';
import '../assets/styles/home.scss'
import { useNavigate } from 'react-router-dom';
import img3 from '../assets/img/hapvida.png'
import img4 from '../assets/img/notredame.png'
import img5 from '../assets/img/fiap.jpg'

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

  return (
    <Container className='container' id='home'>
      <Row className='row-with-spacing'>
        <Col sm={8}>
          <div className="logout">
            <h3>Bem vindo(a), <span>{firstName}</span>!</h3>
          </div>
        </Col>
        <Col sm={8}>
          <img id='img2' src={img2} alt="img ilustrativa" width="60%" />
        </Col>
        <Col id='blocos' sm={4}>
          <h2>O que somos</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam quo aut modi sunt, sint maiores voluptates, blanditiis repellendus veniam error vitae iusto ipsa perferendis facere, eveniet nobis et ducimus voluptatibus?</p>
        </Col>
      </Row>

      <Row className='row-with-spacing'>
        <Col sm>
          <h1 id='titSolucao'>Health</h1>
          <h1 id='titSolucao'>Partner</h1>
        </Col>
        <Col sm>
          <p>texto sobre a solução</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta commodi quos unde cupiditate nostrum eius itaque error? Voluptas ipsa consequuntur reprehenderit ratione. Quae corrupti saepe atque voluptas doloremque nostrum necessitatibus?</p>
          <button>Mais Informações</button>
        </Col>
        <Col id='blocos' sm>
          <h2>Nosso propósito</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptas expedita laborum, aliquam sint unde, dolor totam, fuga eos animi commodi illum in ut repellat quae adipisci fugit distinctio aliquid!</p>
        </Col>
      </Row>
      
      <Row className='row-with-spacing'>
      <Col sm={8}>
          <h4>Nossos parceiros:</h4>
          <div className="parceiros">
            <img src={img3} alt="logo Hapvida" width="25%" />
            <img src={img4} alt="logo Notredame" width="25%"/>
            <img src={img5} alt="logo FIAP" width="25%"/>
          </div>
        </Col>
        <Col id='blocos' sm={4}>
          <h2>Como funciona</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptas expedita laborum, aliquam sint unde, dolor totam, fuga eos animi commodi illum in ut repellat quae adipisci fugit distinctio aliquid!</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;