import { Heading, Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack>
      <Box
      bg="white"
      borderRadius="2%"
      >
        <Image src={imageSrc} borderBottomRadius="5%" borderTopRadius="2%" w="100%" h="65%" 
        marginBottom={6}/>
        <Text color="black" fontWeight={"bold"} fontSize={"lg"} 
        marginBottom={2} marginLeft={2}>{title}</Text>
        <Text color="grey" fontWeight={"medium"} fontSize={"md"}
        marginBottom={2} marginLeft={2}>{description}</Text>
        <Text color="black" fontWeight={"medium"} fontSize={"md"}
        marginLeft={2}>See More&nbsp;<FontAwesomeIcon icon={faArrowRight} size="1x"/></Text>
    </Box>
    </VStack>
  )
};

export default Card;
