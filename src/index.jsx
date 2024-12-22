import React from 'react';
import { createRoot } from 'react-dom/client';
import NotesContainer from './components/the-notes';

// import style
import './styles/style.css';

const root = createRoot(document.getElementById('root'));
root.render(<NotesContainer/>);