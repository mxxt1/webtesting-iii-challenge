import React from 'react';
import { render, getByText } from '@testing-library/react'; 
import Dashboard from './Dashboard';
import Controls from '../controls/Controls';
import Display from '../display/Display';
// Test away

//Dashboard component renders
//Dashboard should render Controls and Display

test('Dashboard component renders', () => {
    render(<Dashboard />);
});

test('Control component renders', () => {
    render(<Controls />);
});

test('Display component renders', () => {
    render(<Display />);
});


//defaults to 'unlocked' and 'open'

test ('defaults to unlocked', () => {
    const {getByText} = render(<Dashboard />);

    getByText(/unlocked/i);
    getByText(/open/i);
})
