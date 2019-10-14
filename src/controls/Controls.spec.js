import React from 'react';
import { render, getByText, fireEvent } from '@testing-library/react';
import Controls from './Controls';
// Test away

test('Control component renders', () => {
    render(<Controls />);
});

//Renders buttons to toggle closed and locked states

test('toggleClosed and toggleLocked are called when close gate/lock gate is fired', () => {
    const toggleClosedMock = jest.fn();
    const toggleLockedMock = jest.fn();
    const {getByText} = render(
        <Controls 
            locked={false}
            closed={false}
            toggleLocked={toggleLockedMock}
            toggleClosed={toggleClosedMock}
        />
    );
//button text = state if clicked
    fireEvent.click(getByText(/lock gate/i));

    fireEvent.click(getByText(/close gate/i));
})

//closed toggle button does not fire when clicked if gate is locked

test('if gate is locked, closed button does not toggle', () => {
    const toggleClosedOnLockMock = jest.fn();
    const {getByText} = render(
        <Controls 
            locked={true}
            closed={true}
            toggleClosed={toggleClosedOnLockMock}
        />
    );
    
    const button = getByText(/open gate/i);

    fireEvent.click(button);
    expect(button).toHaveAttribute('disabled',true);


})




//locked toggle button does not fire when clicked if gate is open 