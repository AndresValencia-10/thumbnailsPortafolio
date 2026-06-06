import { lazy } from 'react';
import { createBrowserRouter } from 'react-router';

import { AdminLayout } from '@/admin/layout/AdminLayout';
import { ThumbnailLayout } from '@/thumbnails/layouts/ThumbnailLayout';
import { ThumbnailPage } from '@/thumbnails/pages/thumbnail/ThumbnailPage';
import { HomePage } from '@/thumbnails/pages/home/HomePage';

// import { AdminPage } from '@/admin/pages/AdminPage';

// import { SearchPage } from '@/thumbnails/pages/search/SearchPage';

const SearchPage = lazy(() => import('@/thumbnails/pages/search/SearchPage'));

const AdminPage = lazy(() => import('@/admin/pages/AdminPage'));

export const appRouter = createBrowserRouter([
	{
		path: '/',
		element: <ThumbnailLayout />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: 'thumbnail',
				element: <ThumbnailPage />,
			},
			{
				path: 'search',
				element: <SearchPage />,
			},
		],
	},

	{
		path: '/admin',
		element: <AdminLayout />,
		children: [
			{
				index: true,
				element: <AdminPage />,
			},
		],
	},
]);
