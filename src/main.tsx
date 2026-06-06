import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { ThumbnailsApp } from './ThumbnailsApp';

import './index.css';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThumbnailsApp />
	</StrictMode>,
);
