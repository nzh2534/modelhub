import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ClickableCard from './flippable-card';

function Projects({projects}) {
return (<Container fluid id="projects" style={{marginBottom: "15vh"}}>
    <Row style={{marginTop: "2vh"}} className='g-3'>
      {projects.map((x, index) => 
        <Col lg={3}><ClickableCard front={x.name} accuracy={x.accuracy} link={`#/project/${index}`}/></Col>
      )}
    </Row>
  </Container>);
}

export default Projects;