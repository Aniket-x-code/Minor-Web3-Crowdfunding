import React from "react";
import { ReactDOM  } from "react";
import { BrowserRouter } from "react-router-dom";
import { ChainId, ThirdwebProvider} from '@thirdweb-dev/react';
import App from "./App";
import { createRoot } from 'react-dom/client';

import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

import { StateContextProvider } from './context';

const root  = createRoot(document.getElementById('root'));

root.render(
    <ThirdwebProvider desiredChainId={ChainId.Goerli}>
        <Router>
        <StateContextProvider>
        <App />
      </StateContextProvider>
        </Router>
    </ThirdwebProvider>
)