import { RouterProvider } from 'react-router';
import { appRouter } from './router/app.router';

export const ThumbnailsApp = () => {
	return (
		<>
			<RouterProvider router={appRouter} />
		</>
	);
};
