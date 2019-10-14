import React from 'react';
import { render } from '@testing-library/react'; 
import Dashboard from './Dashboard';
// Test away

test('Dashboard component renders', () => {
    render(<Dashboard />);
});