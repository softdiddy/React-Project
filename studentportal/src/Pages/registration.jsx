import {Container,Row,Col} from 'react-bootstrap';
import RegistrationForm from '../componets/registrationForm';
import Slider from '../componets/Slider';
export default function Registration() {
 

    return (
      <Container>
      <Row className="justify-content-md-center cardBorder mt-70">
        <Col xs={7} className="npm">
          <Slider />
        </Col>
        <Col className="npm">
            <RegistrationForm />
        </Col>
      </Row>
     
    </Container>
    );
  }