import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

import { faFlaskVial, faScrewdriverWrench, faSeedling } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {Projects} from './index';

function Home({projects}) {
return (<Container>
            <Projects projects={projects}/>
        </Container>
    );
}

export default Home;