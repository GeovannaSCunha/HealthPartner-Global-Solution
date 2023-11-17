import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/img/logo.png'
import '../assets/styles/cabecalho.scss'
import { Link } from "react-router-dom";

function Cabecalho() {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("user-object");
    sessionStorage.removeItem("token-user");
    navigate("/");
  };

  const user = JSON.parse(sessionStorage.getItem("user-object"));

  if (user) {
    return (
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand><Link to="/"><img className="img" src={Logo} alt="logotipo" /></Link></Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <div className='infos'>
                <span>{user.name}</span>, {user.email}
                <button id='btnLogout' onClick={handleLogout}>Sair</button>
              </div>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }else{
    return (
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand><Link to="/"><img className="img" src={Logo} alt="logotipo" /></Link></Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <p className='textoCabecalho'>Global Solution 2023</p>
              <p className='textoCabecalho'>Engenharia de Software</p>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Cabecalho;
