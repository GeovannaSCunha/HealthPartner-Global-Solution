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
          <p>A HealthPartner é uma plataforma criada para estimular o acompanhamento médico e autoconhecimento. Através da plataforma, você poderá realizar uma análise prévia do resultado de seus exames e realizar o monitoramento de seus sinais vitais. Essa capacidade de análise automatizada agiliza o processo diagnóstico, permitindo uma resposta mais rápida e eficaz por parte dos profissionais de saúde. </p>
        </Col>
      </Row>

      <Row className='row-with-spacing'>
        <Col sm>
          <h1 id='titSolucao'>HealthPartner: Plataforma de avaliação de exames e monitoramento de sinais vitais</h1>
          {/* <h1 id='titSolucao'>Partner</h1> */}
        </Col>
        <Col id='blocosolucao'sm>
          <p id="titsol">Nossa solução</p>
          <p>A partir da necessidade de estimular o usuário a autoconhecer seu corpo e identificar sintomas, desenvolvemos uma plataforma capaz de analisar resultados de exames e gerar relatórios, assim como orientar sobre a necessidade de retorno urgente ou em prazo estipulado ao médico solicitante. A plataforma também realiza o armazenamento de sinais vitais em tempo real assim que vinculado ao SmartWatch do cliente, porém este armazenamento pode ser realizado manualmente pelo usuário caso seja de sua preferência.</p>
          <button>Mais Informações</button>
        </Col>
        <Col id='blocos' sm>
          <h2>Nosso propósito</h2>
          <p>A HealthPartner faz parte da nova era da revolução digital, integrando a tecnologia aos cuidados da saúde, proporcionando avanços significativos no diagnóstico e monitoramento médico. Um exemplo notável dessa convergência é o surgimento de plataformas online especializadas na avaliação de exames e no armazenamento de sinais vitais, promovendo uma abordagem proativa à saúde </p>
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
          <p>Esta plataforma utiliza algoritmos avançados para analisar exames médicos, desde simples análises de sangue até imagens de ressonância magnética. A inteligência artificial é empregada para identificar padrões, correlacionar dados e fornecer interpretações precisas. Você deve inserir fotos ou um anexo que contenha nitidamente o resultado de seus exames para que a plataforma realise a análise. Assim que feita a análise do resultado de seus exames, a plataforma exibe um alerta sobre a necessidade de retorno urgente ao médico solicitante ou se poderá manter o prazo de retorno solicitado normalmente.  </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;