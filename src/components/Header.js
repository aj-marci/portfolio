import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBold, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";
import {Routes, Route, Link} from "react-router-dom";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: abmarcinek@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  /*const navSocials = props.data

  .filter((socials) => { 
   return socials.icon == true; 
 }) 

 .sort((a, b) => { 
   return a.socials.icon === b.socials.icon; 
 })

  .map((socials) => {
    return (
      <li>
        {socials.icon}
      </li>
    )
  })*/

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="lightblue" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
          <HStack spacing={8} >
            <a href="https://github.com/aj-marci" target="blank">
              <FontAwesomeIcon icon={faGithub} size="2x" /></a>
            <a href="https://linkedin.com/in/a-j-marcinek-318545131/" target="blank">
              <FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
            <a href="mailto: abmarcinek@gmail.com" target="blank">
              <FontAwesomeIcon icon={faEnvelope} size="2x" /></a>
          </HStack>
          </nav>
          <Routes>
            <Route path='my github' component={() => {
              window.location.href = 'https://github.com/aj-marci';
              return null;
             }}/>
            <Route path='my linked' component={() => {
              window.location.href = 'https://linkedin.com/in/a-j-marcinek-318545131/';
              return null;
             }}/>
            <Route path='email me' component={() => {
              window.location.href = 'mailto: abmarcinek@gmail.com';
              return null;
             }}/>
            </Routes>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
