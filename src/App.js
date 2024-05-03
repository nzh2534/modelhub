import {CollapsibleNavbar, Home, Footer, Template} from './components/index';
import { Route, Routes } from 'react-router-dom';
import myData from './projects.json';

import './App.css';
import { Container } from 'react-bootstrap';

function App() {
  const projects = myData.projects

  return (
    <Container>
      <CollapsibleNavbar/>
      <Routes>
        <Route path="/" element={<Home projects={projects}/>} />
        <Route path="/project/:id" element={<Template projects={projects}/>} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
