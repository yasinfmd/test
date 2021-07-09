import './grid.css'
import './reboot.css'
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";

function App() {
  return (
      <Container>
          <Row>
              <Col desktop={10}>
                  col 1
              </Col>
              <Col desktop={4}>
                  col 2
              </Col>
              <Col desktop={8}>
                  col 2
              </Col>
              <Col desktop={4}>
                  col 2
              </Col>
          </Row>
      </Container>
  );
}

export default App;
