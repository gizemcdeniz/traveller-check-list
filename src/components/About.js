import React from 'react'
import { Col, Row} from 'react-bootstrap';
import NavSection from './Navbar.js';

const gizem = <a href="https://github.com/gizemcdeniz">Gizem Deniz</a>;
const orcun = <a href="https://github.com/orcunsagirsoy">Orcun Sağırsoy</a>;



const About = () => {
  return (
    <>
    <NavSection/>
    <Col span={16} style={{marginTop: '100px'}}>
    <span style={{ fontSize: "38px", color: 'black'}}>
            This website was designed by {gizem} and {orcun}
            </span>
      </Col>
    </>
  );
};

export default About;