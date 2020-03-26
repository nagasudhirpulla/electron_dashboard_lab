import React from 'react';
import { render } from 'react-dom';
import { VizPluginsEditor } from './VizPluginsEditor';
// import './preferences.css';

render(
    <VizPluginsEditor adapters={[]}></VizPluginsEditor>,
    document.getElementById('root')
);