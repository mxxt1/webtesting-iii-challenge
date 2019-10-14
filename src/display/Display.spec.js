import React from 'react';
import { render } from '@testing-library/react'; 
import Display from './Display';
// Test away


//Display component renders
test('Display component renders', () => {
    render(<Display />);
});


//Displays if gate is open/closed
//getByText Locked || Unlocked
//test on 



//Displays if gate is locked or unlocked
//getByText Closed || Open


//Displays closed if 'closed' prop = true



//Displays locked if 'locked' prop = true


// if 'locked' or 'closed, then 'red-led'


//if 'unlocked' or 'open', then 'green-led
