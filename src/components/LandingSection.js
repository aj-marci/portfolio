import React from "react";
import { Avatar, Heading, VStack, WrapItem } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Stetson!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack
    spacing={3}>
    <WrapItem>
    <Avatar src="https://i.pravatar.cc/150?img=7" size="xl"/>
    </WrapItem>
    <Heading size="sm">{greeting}</Heading>
    <Heading size="xl">{bio1}</Heading>
    <Heading size="xl">{bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
