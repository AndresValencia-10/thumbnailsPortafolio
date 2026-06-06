import { Outlet } from 'react-router';

export const ThumbnailLayout = () => {
	return (
		<div className="min-h-screen bg-zinc-900 text-white relative overflow-hidden">
			<Outlet />
		</div>
	);
};
