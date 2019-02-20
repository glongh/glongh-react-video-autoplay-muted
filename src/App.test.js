import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test('video tag mute attribute is missing in the dom', () => {
     
});

test('VideoAutoplay mute attribute is not missing in the dom', () => {
     
});