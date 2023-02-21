import React from 'react';
import {render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from '../../../pages/components/Hero/Hero';
import Type from '../../../pages/components/Hero/Type';
import preview from 'jest-preview';
import Navbar from '@/pages/components/Navbar/Navbar';


// Unit Tests, testing each component isolated

const onClick = jest.fn();

describe('Testing hero', () => {
    it('should work as expected', () => {
        render(<Hero />);
        preview.debug()
      });
    it('Should render properly', () => {
        render(<Hero/>);
        expect(screen.getByText("Software Engineer")).toBeInTheDocument();
    });

    it('Should render Type', () => {
        render(<Type/>);
        expect(screen.getByTestId('typewriter-wrapper')).toBeInTheDocument();
    });

    it('Button should be clickable', () => {
        render (<Hero/>);
        render (<Navbar/>)
        const button = screen.getByTestId('contact-me');

        fireEvent.click(button);
        expect(button).toBeVisible();
    })

});