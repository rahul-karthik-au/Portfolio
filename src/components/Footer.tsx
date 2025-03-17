import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail'
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
          <a href="https://github.com/rahul-karthik-au" target="_blank" rel="noreferrer"><GitHubIcon/></a>
          <a href="https://www.linkedin.com/in/rahul-karthik-a-u" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          <a href="mailto:ra6zr@outlook.com" target="_blank" rel="noreferrer"><MailIcon/></a>
      </div>
      <p>A portfolio designed & built by <a href="https://github.com/rahul-karthik-au" target="_blank" rel="noreferrer">Rahul Karthik</a>.</p>
    </footer>
  );
}

export default Footer;