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
import {Routes, Route} from "react-router-dom";


const socials = [
  {
    icon: faEnvelope,
    url: "mailto: mail@gmail.com",
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

/* const NavPosition = () => {
  const [navPosition, setNavPosition] = useState({
        translateX: 0px
  });

  useEffect(() => {
    const handleNavPositionChange = (e) => {
      setMousePosition({
      translateY: e.clientY,
    });
  };

    window.addEventListener("mousemove", handleMousePositionChange);

    return () => {
      window.removeEventListener("mousemove", handleMousePositionChange);
    };
  }, []);

  return ({ navPosition })
}; */

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

  return (
    <Box
      position="absolute"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      bg="#18181b"
    >
      <Box color="lightblue" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
          <HStack spacing={8}>
            <a href="https://github.com" target="blank">
              <FontAwesomeIcon icon={faGithub} size="2x" /></a>
            <a href="https://linkedin.com" target="blank">
              <FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
            <a href="mailto: abmarcinek@gmail.com" target="blank">
              <FontAwesomeIcon icon={faEnvelope} size="2x" /></a>
              <a href="https://medium.com" target="blank">
              <FontAwesomeIcon icon={faMedium} size="2x" /></a>
              <a href="https://stackoverflow.com" target="blank">
              <FontAwesomeIcon icon={faStackOverflow} size="2x" /></a>
          </HStack>
          </nav>
          <Routes>
            <Route path='icon' component={() => {
              window.location.href = 'https://github.com';
              return null;
             }}/>
            <Route path='icon' component={() => {
              window.location.href = 'https://linkedin.com';
              return null;
             }}/>
            <Route path='icon' component={() => {
              window.location.href = 'mailto: mail@gmail.com';
              return null;
             }}/>
              <Route path='icon' component={() => {
              window.location.href = 'https://medium.com';
              return null;
             }}/>
              <Route path='icon' component={() => {
              window.location.href = 'https://stackoverflow.com';
              return null;
             }}/>
            </Routes>
          <nav>
            <HStack spacing={8}>
            <a onClick={handleClick("projects")} href={"/#projects"}>Projects</a>
            <a onClick={handleClick("contactme")} href={"/#contact-me"}>Contact Me</a>
            </HStack>
          </nav>
          <Routes>
            <Route path="/#projects" element={"projects-section"}/>
            <Route path="/#contact-me" element={"contactme-section"} />
          </Routes>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
