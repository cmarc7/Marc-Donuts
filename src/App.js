import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavItem from './componentes/NavItem';
import Cards from './componentes/Cards';
import VisionEmpresarial from './componentes/VisionEmpresarial';
import './App.css';

function App() {
  return (
    <><><><header>
      <Navbar expand="md" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">
            <img src='Donut.png' className="navbar-brand___logo" alt="Marc-Donuts Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <ul className="navbar-nav d-flex justify-content-center align-items-center">
                <NavItem
                  texto="Trabajá en MarcDonuts"
                  href="mailto:costantinimarcelo314@gmail.com" />
                <NavItem
                  texto="Productos"
                  href="https://marcdonuts-productos.netlify.app/" />
                <NavItem
                  texto="Sobre Nosotros"
                  href="MarcDonuts.html" />
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>

      <section className="hero align-items-stretch">
        <article className="main-hero text-center d-flex flex-column justify-content-center align-items-center">
          <h1>Pedí ya en <br />MarcDonuts!</h1>
        </article>
      </section>
    </>
      <section className='mcd-container'>
        <div className='container'>
          <div className='row'>
            <Cards
              img='DonaOreo'
              title='LA NUEVA DONA OREO!'
              des='UNA LOCURA!'
              btnTxt='COMPRAR'
              href='https://youtu.be/MVBnkozkneE?si=5qfClGEEFWOebNlw' />
            <VisionEmpresarial
              img='vision_empresarial'
              title='Nuestra visión empresarial'
              des='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt malesuada dolor id tempor. Nunc sit amet iaculis tellus, vitae tempor mauris. Maecenas sagittis nisl dolor, ut interdum dolor sagittis ac. Nunc pellentesque consequat elit, quis bibendum felis dapibus at. Mauris semper risus metus, in sagittis leo faucibus sed.'
              btnTxt='+ INFO' />
            <Cards
              img='donuts_lead'
              title='Pedí en MarcDonuts'
              des='Pedí en la página y lo que pidas llegará a tu domicilio'
              btnTxt='PEDÍ YA!'
              href='https://marcdonuts-productos.netlify.app/cd' />
          </div>
        </div>
      </section>
    </><footer>
        <div className="container d-flex justify-content-end align-items-end">
          <a href="mailto:costantinimarcelo314@gmail.com">Contacto</a>
          <img src="Donut.png" className="MarcDonuts-logo" />
          <p>&copy; MarcDonuts 2023</p>
        </div>
      </footer></>
      
  );
}

export default App;
