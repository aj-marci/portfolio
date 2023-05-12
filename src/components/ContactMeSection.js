import React, {useEffect} from "react";
import { Formik, useFormik, validateYupSchema } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const LandingSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();

  const {
    errors,
    touched,
    getFieldProps,
    handleSubmit,
  } = useFormik({
    initialValues: {
      firstName:"",
      email:"",
      type:"",
      comment:"",
    },
    onSubmit: (values, {resetForm}) => {
      submit("/#contact-me", values, null)
      onOpen(response.type, response.message)
      resetForm({values: ''});
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      comment: Yup.string().required('Required'),       
  }),
  });

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#2A4365"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={errors.firstName && touched.firstName ?(
                        <div>{errors.firstName}</div>
                          ) : null}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  {...getFieldProps("firstName")}
                  id="firstName"
                  name="firstName"
                />
                <FormErrorMessage>{errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.email && touched.email ?(
                        <div>{errors.email}</div>
                          ) : null}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                {...getFieldProps("email")}
                  id="email"
                  name="email"
                  type="email"
                />
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" name="type">
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={errors.comment && touched.comment ?(
                        <div>{errors.comment}</div>
                          ) : null}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                {...getFieldProps("comment")}
                  id="comment"
                  name="comment"
                  height={250}
                />
                <FormErrorMessage>{errors.comment}</FormErrorMessage>
              </FormControl>
              <Button type="submit" bg="lightblue" width="full">
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
