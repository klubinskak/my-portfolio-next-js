import React from 'react';
import {render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import preview from 'jest-preview';
import Navbar from '@/pages/components/Navbar/Navbar';

const onClick = jest.fn();

describe('Testing navbar', () => {
    it('should work as expected', () => {
        render(<Navbar />);
        preview.debug()
      });
    it('Should render properly', () => {
        render(<Navbar/>);
        expect(screen.getByText("Home")).toBeInTheDocument();
    });
})

