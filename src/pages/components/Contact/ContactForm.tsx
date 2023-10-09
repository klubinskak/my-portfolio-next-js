import {
  FormControl,
  FormErrorMessage,
  Input,
  Textarea,
  Button,
  useToast
} from "@chakra-ui/react";
import React, { useState } from "react";
import { sendContactForm } from '../../../lib/api';

const initialState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};


const ContactForm = () => {
  const [values, setValues] = useState(initialState);
  const [touched, setTouched] = useState({})
  const [isLoading, setisLoading] = useState(false);
  const toast = useToast()


  const { name, email, subject, message } = values;

  //required
  const onBlur = (target: EventTarget & HTMLInputElement) => setTouched((prev) => {
    ({ ...prev, [target.name]: true })
  })


  const handleChange = (name: string, value: string) => {
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    setisLoading(true);
    await sendContactForm(values);
    toast({

      title: 'Email send',
      description: "Thanks for your message, I'll respond as soon as possible!",
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
    setisLoading(false);
  }

  return (
    <>
      <form>
        <FormControl isRequired isInvalid={!touched && !name} mb={5} width={350}>
          <Input
            placeholder="Insert your name*"
            type="text"
            value={name}
            name="name"
            onBlur={(e) => onBlur(e.target)}
            errorBorderColor="red.300"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
          <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>

        <FormControl isRequired isInvalid={!touched && !email} mb={8}>
          <Input
            placeholder="Insert your email*"
            type="email"
            name="email"
            onBlur={(e) => onBlur(e.target)}
            errorBorderColor="red.300"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
          <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>

        <FormControl isRequired isInvalid={!touched && !subject} mb={8}>
          <Input
            placeholder="Insert subject*"
            type="text"
            name="subject"
            onBlur={(e) => onBlur(e.target)}
            errorBorderColor="red.300"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
          <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>

        <FormControl isRequired mb={3} isInvalid={!touched && !message}>
          <Textarea
            placeholder="Insert your message*"
            name="message"
            value={message}
            onBlur={() => onBlur}
            rows={4}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
          <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>
        <div className="flex items-center justify-center md:justify-start ">
          <Button className="mt-2 bg-black rounded md:flex hover:opacity-80 group" type="button" colorScheme="black" isDisabled={!message} isLoading={isLoading} onClick={handleSubmit} >Submit</Button>
        </div>
      </form>
    </>


  );
};

export default ContactForm;
