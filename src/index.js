import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Client from 'shopify-buy';
import registerServiceWorker from './registerServiceWorker';


const client = Client.buildClient({
    storefrontAccessToken: 'da44a78a7973ccdc095deab58bea7575',
    domain: 'j-fabric-art-gallery.myshopify.com'
});

ReactDOM.render(<App client={client} />, document.getElementById('root'));
registerServiceWorker();
