import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom';
import CandidateTable from '../components/CandidateTable'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CandidateTable />, div);
  });