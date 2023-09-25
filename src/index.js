// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css'; // Import the styles.css file
import '@fortawesome/fontawesome-free/css/all.min.css'; // Add this line to import the FontAwesome CSS
import App from './App';

import { createRoot } from 'react-dom/client';

// Use createRoot instead of ReactDOM.createRoot
createRoot(document.getElementById('root')).render(<App />);