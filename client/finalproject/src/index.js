import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import SimpleReactLightBox from "simple-react-lightbox"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <SimpleReactLightBox>
    <App />
    </SimpleReactLightBox>
);

