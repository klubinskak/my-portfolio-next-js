import React from 'react';
import {render, screen, fireEvent,  waitFor  } from '@testing-library/react';
import '@testing-library/jest-dom';
import preview from 'jest-preview';
import Contact from '@/pages/components/Contact/Contact';


//fetch mock
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ data: { name: "test", email: "test@gmail.com", subject: "test", message:"test message" } }),
  })
) as jest.Mock; ;


  

describe('Testing contact', () => {
    it('Should render as expected', () => {
        render(<Contact/>);
        preview.debug()
      });
    it('Should render and display properly', () => {
        render(<Contact/>);
        expect(screen.getByText("Send me a message")).toBeInTheDocument();
    });
    it('Button should be disabled', () => {
        render(<Contact/>)
        const button = screen.getByText('Submit')
        expect(button).toHaveAttribute('disabled');
    })
    it("Name input should change", () => {
        render(<Contact />);
        const nameInputEl: HTMLInputElement = screen.getByPlaceholderText(/Insert your name*/i);
        const testValue = "test";
      
        fireEvent.change(nameInputEl, { target: { value: testValue } });
        expect(nameInputEl.value).toBe(testValue);
      });
      
    it("Input values should change", async () => {
        render(<Contact />);
        //name
        const nameInputEl: HTMLInputElement = screen.getByPlaceholderText(/Insert your name*/i);
        const testNameValue = "test";
      
        fireEvent.change(nameInputEl, { target: { value: testNameValue } });

        //email
        const emailInputEl: HTMLInputElement = screen.getByPlaceholderText(/Insert your email*/i);
        const testEmailValue = "test@gmail.com";
      
        fireEvent.change(emailInputEl, { target: { value: testEmailValue } });
        expect(emailInputEl.value).toBe(testEmailValue);

        //subject
        const subjectInputEl: HTMLInputElement = screen.getByPlaceholderText(/Insert subject*/i);
        const testSubjectValue = "Test subject";
      
        fireEvent.change(subjectInputEl, { target: { value: testSubjectValue } });
        expect(subjectInputEl.value).toBe(testSubjectValue);


        //message
        const messageInputEl: HTMLInputElement = screen.getByPlaceholderText(/Insert your message*/i);
        const testMessageValue = "Test message";
      
        fireEvent.change(messageInputEl, { target: { value: testMessageValue } });
        expect(messageInputEl.value).toBe(testMessageValue);

        //click submit
        const submit = screen.getByText('Submit');
        await waitFor(() => fireEvent.click(submit));

        expect(screen.findByText('Email send'))
      });
})

