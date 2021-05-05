import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom';
import CandidateTableContainer from '../components/CandidateTableContainer'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CandidateTableContainer />, div);
  });