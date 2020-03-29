import React from 'react';
import { render } from 'react-dom';
// import './preferences.css';
import { AdaptersEditor } from './AdaptersEditor';

render(
    <AdaptersEditor adapters={[]}></AdaptersEditor>,
    document.getElementById('root')
);