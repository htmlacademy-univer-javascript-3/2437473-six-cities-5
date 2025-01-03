import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import {OfferCards} from './mocks/offer_cards';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      offerCards={OfferCards}
    />
  </React.StrictMode>
);
