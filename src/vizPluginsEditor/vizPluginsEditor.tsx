import React from 'react';
import { render } from 'react-dom';
import { VizPluginsApp } from './VizPluginsApp';
// import './preferences.css';

render(
    <VizPluginsApp adapters={[]}></VizPluginsApp>,
    document.getElementById('root')
);