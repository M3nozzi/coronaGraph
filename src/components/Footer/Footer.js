import React from 'react';
import { FooterBase } from './FooterStyles';
import { FiGithub } from 'react-icons/fi';
import { GrLinkedin } from 'react-icons/gr';

function Footer() {
  return (
    <FooterBase>
      <a  href="https://www.linkedin.com/in/menozzi-fabio/" target="_blank" rel="noopener noreferrer">
        <GrLinkedin size={28} color="#fff"  style={{marginRight: 15}}/>
      </a>
     
      <a href="https://github.com/M3nozzi" target="_blank" rel="noopener noreferrer">
        <FiGithub size={28} color="#fff" />
      </a>
      <p>
        Developed by Fabio Menozzi
      </p>
    </FooterBase>
  );
}

export default Footer;