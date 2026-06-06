import { useState, useEffect, useRef } from 'react';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
	Eye,
	// Download,
	// Share2,
	Heart,
	Play,
	Sparkles,
	Flame,
	TrendingUp,
	Palette,
	Zap,
	Star,
	ArrowDown,
	ExternalLink,
} from 'lucide-react';

interface Thumbnail {
	id: number;
	// title: string;
	category: string;
	youtuber: string;
	subscribers: string;
	views: string;
	image: string;
	// description: string;
	tags: string[];
	color: string;
	icon: string;
}

const thumbnails: Thumbnail[] = [
	{
		id: 1,
		// title: 'La Sorprendi con mis DIAS en 99 Nights',
		category: 'Minecraft',
		youtuber: 'SeFiroxx',
		subscribers: '6K',
		views: 'N/A',
		image: '/ThumbnailsImage/minecraft/prueba-mini.jpg',
		// description:
		// 	'Miniatura antes y despues, sobre el minijuego backroom en minecraft, haciendo enfasis en unos de los mobs de la habitacion y haciendo asi un alto CTR',
		tags: ['Gaming', 'Minecraft', 'Entretenimiento'],
		color: 'from-red-500 to-orange-500',
		icon: '',
	},
	{
		id: 2,
		// title: 'Tech Review 2026',
		category: 'Minecraft',
		youtuber: 'SeFiroxx',
		subscribers: '6K',
		views: '5k',
		image: '/ThumbnailsImage/minecraft/thumbfinish.png',
		// description:
		// 	'Miniatura hecha al gusto del cliente, dando a entender que ganaron un evento, Colores vibrantes, composición dinámica que garantiza alto CTR.',
		tags: ['Gaming', 'Minecraft', 'Entretenimiento'],
		color: 'from-blue-500 to-cyan-500',
		icon: '',
	},
	{
		id: 3,
		// title: 'Epic Challenge',
		category: 'Minecraft',
		youtuber: 'By Andres',
		subscribers: '3.8k',
		views: 'N/A',
		image: '/ThumbnailsImage/minecraft/thumb-finish-Trex.png',
		// description:
		// 	'Diseño ultra dinámico con expresiones exageradas y colores saturados. Perfecto para contenido viral que necesita destacar en el feed de YouTube.',
		tags: ['Gaming', 'Minecraft', 'Entretenimiento'],
		color: 'from-purple-500 to-pink-500',
		icon: '',
	},
	{
		id: 4,
		// title: 'I Cooked Food From Every Country',
		category: 'Minecraft',
		youtuber: 'By Andres',
		subscribers: '3.8K',
		views: 'N/A',
		image: '/ThumbnailsImage/minecraft/thumb-siren-head.png',
		// description:
		// 	'Miniatura de practica para mi canal, del mod Siren Head, una composicion bastante dinamica',
		tags: ['Gaming', 'Minecraft', 'Entretenimiento'],
		color: 'from-amber-500 to-red-500',
		icon: '',
	},
	{
		id: 5,
		// title: 'Fitness Transformation',
		category: 'Minecraft',
		youtuber: 'DanielleDestiny',
		subscribers: '172K',
		views: '217K',
		image: '/ThumbnailsImage/minecraft/minecraft-danielle-mod-thumb.1.4.png',
		// description: 'miniatura para una de mis clientes, ',
		tags: ['Gaming', 'Minecraft', 'Entretenimiento'],
		color: 'from-green-500 to-emerald-500',
		icon: '',
	},
	{
		id: 6,
		// title: 'Travel Vlog Bali',
		category: 'Minecraft',
		youtuber: 'SeFiroxx',
		subscribers: '6K',
		views: 'N/A',
		image: '/ThumbnailsImage/minecraft/thumb-finishyandere.png',
		// description:
		// 	'Miniatura de un video de recopilacion de los mejores momentos en 2025',
		tags: ['Gaming', 'Minecraft', 'Entretenimiento'],
		color: 'from-teal-500 to-blue-500',
		icon: '',
	},
	{
		id: 7,
		// title: 'La Sorprendi con mis DIAS en 99 Nights',
		category: 'Minecraft',
		youtuber: 'SeFiroxx',
		subscribers: '6K',
		views: '7.6K',
		image: '/ThumbnailsImage/minecraft/thumb-finish.png',
		// description:
		// 	'Miniatura de un evento contra los mejores jugadores de minecraft con un premio de 500$',
		tags: ['Gaming', 'Minecraft', 'Entretenimiento'],
		color: 'from-red-500 to-orange-500',
		icon: '',
	},
	{
		id: 8,
		// title: 'Tech Review 2026',
		category: 'Minecraft',
		youtuber: 'SeFiroxx',
		subscribers: '6K',
		views: '6.8K',
		image: '/ThumbnailsImage/minecraft/thumb-finishv2.png',
		// description:
		// 	'Miniatura de un evento de parkour extremo, con muchos mas streamers y jugadores de minecraft',
		tags: ['Gaming', 'Minecraft', 'Entretenimiento'],
		color: 'from-blue-500 to-cyan-500',
		icon: '',
	},
	{
		id: 9,
		// title: 'Tech Review 2026',
		category: 'Minecraft',
		youtuber: 'SeFiroxx',
		subscribers: '6K',
		views: 'N/A',
		image: '/ThumbnailsImage/minecraft/thumb-finish-v1.0.png',
		// description:
		// 	'Miniatura de un evento de parkour extremo, con muchos mas streamers y jugadores de minecraft',
		tags: ['Gaming', 'Minecraft', 'Entretenimiento'],
		color: 'from-red-500 to-orange-500',
		icon: '',
	},
	{
		id: 10,
		// title: 'Tech Review 2026',
		category: 'Minecraft',
		youtuber: 'SeFiroxx',
		subscribers: '6K',
		views: 'N/A',
		image: '/ThumbnailsImage/minecraft/thumbfinish-parkour.png',
		// description:
		// 	'Miniatura de un evento de parkour extremo, con muchos mas streamers y jugadores de minecraft',
		tags: ['Gaming', 'Minecraft', 'Entretenimiento'],
		color: 'from-purple-500 to-pink-500',
		icon: '',
	},
	{
		id: 11,
		// title: 'Tech Review 2026',
		category: 'Roblox',
		youtuber: 'DanielleDestiny',
		subscribers: '172K',
		views: '172K',
		image: '/ThumbnailsImage/roblox/danielle-roblox-thumb1.2.png',
		// description:
		// 	'Miniatura de un evento de parkour extremo, con muchos mas streamers y jugadores de minecraft',
		tags: ['Gaming', 'Roblox', 'Entretenimiento'],
		color: 'from-amber-500 to-red-500',
		icon: '',
	},
	{
		id: 12,
		// title: 'Tech Review 2026',
		category: 'Roblox',
		youtuber: 'DanielleDestiny',
		subscribers: '172K',
		views: '109K',
		image: '/ThumbnailsImage/roblox/img7.png',
		// description:
		// 	'Miniatura de un evento de parkour extremo, con muchos mas streamers y jugadores de minecraft',
		tags: ['Gaming', 'Roblox', 'Entretenimiento'],
		color: 'from-green-500 to-emerald-500',
		icon: '',
	},
	{
		id: 13,
		// title: 'Tech Review 2026',
		category: 'Roblox',
		youtuber: 'DanielleDestiny',
		subscribers: '172K',
		views: 'N/A',
		image: '/ThumbnailsImage/roblox/thumb-final-3.1.png',
		// description:
		// 	'Miniatura de un evento de parkour extremo, con muchos mas streamers y jugadores de minecraft',
		tags: ['Gaming', 'Roblox', 'Entretenimiento'],
		color: 'from-teal-500 to-blue-500',
		icon: '',
	},
	{
		id: 14,
		// title: 'Tech Review 2026',
		category: 'Roblox',
		youtuber: 'GalCohenOfficial',
		subscribers: '315K',
		views: 'N/A',
		image: '/ThumbnailsImage/roblox/thumb-finish-v1.0.png',
		// description:
		// 	'Miniatura de un evento de parkour extremo, con muchos mas streamers y jugadores de minecraft',
		tags: ['Gaming', 'Roblox', 'Entretenimiento'],
		color: 'from-red-500 to-orange-500',
		icon: '',
	},
	{
		id: 15,
		// title: 'Tech Review 2026',
		category: 'Roblox',
		youtuber: 'GalCohenOfficial',
		subscribers: '315K',
		views: '30K',
		image: '/ThumbnailsImage/roblox/thumb-finish-v1.1.png',
		// description:
		// 	'Miniatura de un evento de parkour extremo, con muchos mas streamers y jugadores de minecraft',
		tags: ['Gaming', 'Roblox', 'Entretenimiento'],
		color: 'from-blue-500 to-cyan-500',
		icon: '',
	},
	{
		id: 16,
		// title: 'Tech Review 2026',
		category: 'Roblox',
		youtuber: 'GalCohenOfficial',
		subscribers: '315K',
		views: '50K',
		image: '/ThumbnailsImage/roblox/thumb-finishallien-v1.0.png',
		// description:
		// 	'Miniatura de un evento de parkour extremo, con muchos mas streamers y jugadores de minecraft',
		tags: ['Gaming', 'Roblox', 'Entretenimiento'],
		color: 'from-purple-500 to-pink-500',
		icon: '',
	},
	{
		id: 17,
		// title: 'Tech Review 2026',
		category: 'Roblox',
		youtuber: 'GalCohenOfficial',
		subscribers: '315K',
		views: '20K',
		image: '/ThumbnailsImage/roblox/thumb-finishbase-v1.0.png',
		// description:
		// 	'Miniatura de un evento de parkour extremo, con muchos mas streamers y jugadores de minecraft',
		tags: ['Gaming', 'Roblox', 'Entretenimiento'],
		color: 'from-amber-500 to-red-500',
		icon: '',
	},
	{
		id: 18,
		// title: 'Tech Review 2026',
		category: 'Roblox',
		youtuber: 'GalCohenOfficial',
		subscribers: '315K',
		views: '19K',
		image: '/ThumbnailsImage/roblox/thumb-v2.png',
		// description:
		// 	'Miniatura de un evento de parkour extremo, con muchos mas streamers y jugadores de minecraft',
		tags: ['Gaming', 'Roblox', 'Entretenimiento'],
		color: 'from-green-500 to-emerald-500',
		icon: '',
	},
	{
		id: 19,
		// title: 'Tech Review 2026',
		category: 'Roblox',
		youtuber: 'GalCohenOfficial',
		subscribers: '315K',
		views: '115K',
		image: '/ThumbnailsImage/roblox/thumbv1.1.png',
		// description:
		// 	'Miniatura de un evento de parkour extremo, con muchos mas streamers y jugadores de minecraft',
		tags: ['Gaming', 'Roblox', 'Entretenimiento'],
		color: 'from-teal-500 to-blue-500',
		icon: '',
	},
];

const categoryIcons: Record<string, React.ReactNode> = {
	all: <Sparkles className="h-4 w-4" />,
	Gaming: <Zap className="h-4 w-4" />,
	Tecnología: <Star className="h-4 w-4" />,
	Entretenimiento: <Flame className="h-4 w-4" />,
	Cocina: <Palette className="h-4 w-4" />,
	Fitness: <TrendingUp className="h-4 w-4" />,
	Viajes: <Play className="h-4 w-4" />,
};

function AnimatedCounter({
	target,
	suffix = '',
}: {
	target: number;
	suffix?: string;
}) {
	const [count, setCount] = useState(0);
	const ref = useRef<HTMLSpanElement>(null);
	const hasAnimated = useRef(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && !hasAnimated.current) {
					hasAnimated.current = true;
					const duration = 1500;
					const steps = 60;
					const increment = target / steps;
					let current = 0;
					const timer = setInterval(() => {
						current += increment;
						if (current >= target) {
							setCount(target);
							clearInterval(timer);
						} else {
							setCount(Math.floor(current));
						}
					}, duration / steps);
				}
			},
			{ threshold: 0.5 },
		);

		if (ref.current) observer.observe(ref.current);
		return () => observer.disconnect();
	}, [target]);

	return (
		<span ref={ref}>
			{count}
			{suffix}
		</span>
	);
}

export const HomePage = () => {
	const [selectedCategory, setSelectedCategory] = useState<string>('all');
	const [favorites, setFavorites] = useState<number[]>([]);
	const [hoveredCard, setHoveredCard] = useState<number | null>(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

	const categories = [
		'all',
		...Array.from(new Set(thumbnails.map((t) => t.category))),
	];

	const filteredThumbnails =
		selectedCategory === 'all'
			? thumbnails
			: thumbnails.filter((t) => t.category === selectedCategory);

	const toggleFavorite = (id: number, e: React.MouseEvent) => {
		e.stopPropagation();
		setFavorites((prev) =>
			prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id],
		);
	};

	useEffect(() => {
		setIsLoaded(true);
	}, []);

	useEffect(() => {
		const handler = (e: MouseEvent) => {
			setMousePos({ x: e.clientX, y: e.clientY });
		};
		window.addEventListener('mousemove', handler);
		return () => window.removeEventListener('mousemove', handler);
	}, []);

	const scrollToGallery = () => {
		document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
	};

	const scrollToPrices = () => {
		document.getElementById('prices')?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<>
			{/* Animated Background Orbs */}
			<div className="fixed inset-0 pointer-events-none z-0">
				<div className="animate-orb-1 absolute top-1/4 left-1/4 w-96 h-96 bg-neon-pink/5 rounded-full blur-3xl" />
				<div className="animate-orb-2 absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-blue/5 rounded-full blur-3xl" />
				<div
					className="animate-orb-1 absolute top-1/2 right-1/3 w-64 h-64 bg-neon-purple/5 rounded-full blur-3xl"
					style={{ animationDelay: '-5s' }}
				/>
			</div>

			{/* Cursor Glow Effect */}
			<div
				className="fixed pointer-events-none z-50 w-64 h-64 rounded-full transition-all duration-300 ease-out"
				style={{
					left: mousePos.x - 128,
					top: mousePos.y - 128,
					background:
						'radial-gradient(circle, rgba(255,45,149,0.06) 0%, transparent 70%)',
				}}
			/>

			{/* Hero Section */}
			<section className="relative min-h-screen flex items-center justify-center px-4">
				{/* Grid Pattern Overlay */}
				<div
					className="absolute inset-0 opacity-[0.03]"
					style={{
						backgroundImage:
							'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
						backgroundSize: '60px 60px',
					}}
				/>

				<div
					className={`text-center max-w-5xl mx-auto relative z-10 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
				>
					{/* Floating Badge */}
					<div className="animate-float mb-8 inline-block">
						<Badge variant="default" className="px-5 py-2 text-sm gap-2">
							<Sparkles className="h-4 w-4" />
							Portafolio de Diseño de Thumbnails
						</Badge>
					</div>

					{/* Main Title */}
					<h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-6 leading-[0.9] tracking-tighter">
						<span className="block bg-linear-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
							YouTube
						</span>
						<span
							className="block bg-linear-to-r from-neon-pink via-neon-purple to-neon-blue bg-clip-text text-transparent animate-gradient-shift"
							style={{ backgroundSize: '200% 200%' }}
						>
							Thumbnails
						</span>
					</h1>
					<Badge
						variant="outline"
						className="mt-4 border-yellow-500/30 text-neon-yellow"
					>
						🚧 Beta v1.0
					</Badge>

					<p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
						Diseños que{' '}
						<span className="text-neon-red font-semibold">
							capturan miradas
						</span>
						, aumentan el{' '}
						<span className="text-neon-blue2 font-semibold">CTR</span> y hacen
						que tu contenido
						<span className="text-neon-green font-semibold">
							{' '}
							destaque
						</span>{' '}
						entre millones.
					</p>

					{/* CTA Buttons */}
					<div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
						<Button
							size="lg"
							onClick={scrollToGallery}
							className="cursor-pointer text-base px-8 gap-2"
						>
							<Eye className="h-5 w-5" />
							Ver Galería
						</Button>
						<Button size="lg" className="cursor-pointer text-base px-8 gap-2">
							<ExternalLink className="h-5 w-5" />
							<a
								href="https://x.com/AndresVM__10"
								target="_blank"
								rel="noopener noreferrer"
							>
								Contactar
							</a>
						</Button>
					</div>

					{/* Quick Stats */}
					<div className="flex flex-wrap justify-center gap-8 md:gap-16">
						{[
							{
								label: 'Diseños',
								value: '300+',
								icon: <Palette className="h-5 w-5" />,
							},
							{
								label: 'Clientes',
								value: '30+',
								icon: <Star className="h-5 w-5" />,
							},
							{
								label: 'Vistas Generadas',
								value: '5M+',
								icon: <TrendingUp className="h-5 w-5" />,
							},
						].map((stat, i) => (
							<div key={i} className="text-center group">
								<div className="flex items-center justify-center gap-2 text-neon-pink mb-1 group-hover:text-neon-blue transition-colors duration-300">
									{stat.icon}
									<span className="text-2xl md:text-3xl font-bold text-white">
										{stat.value}
									</span>
								</div>
								<p className="text-sm text-slate-500">{stat.label}</p>
							</div>
						))}
					</div>

					{/* Scroll Indicator */}
					<button
						onClick={scrollToGallery}
						className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-white/30 hover:text-neon-pink transition-colors duration-300 animate-float cursor-pointer"
					>
						<ArrowDown className="h-6 w-6" />
					</button>
				</div>
			</section>

			{/* Gallery Section */}
			<section id="gallery" className="relative z-10 px-4 py-20">
				<div className="max-w-7xl mx-auto">
					{/* Section Header */}
					<div className="text-center mb-12">
						<h2 className="text-4xl md:text-5xl font-bold mb-4">
							<span className="bg-linear-to-r from-neon-pink to-neon-blue bg-clip-text text-transparent">
								Mis Diseños
							</span>
							<p className="text-slate-500 text-sm mt-2">
								"🚀 Portafolio en constante actualización. Nuevos proyectos
								serán añadidos regularmente".
							</p>
						</h2>
						<p className="text-slate-300 text-lg max-w-xl mx-auto">
							Cada miniatura está diseñada al gusto del cliente, maximizar clics
							y transmitir la esencia del video
						</p>
					</div>

					{/* Category Tabs */}
					<Tabs defaultValue="all" className="mb-10">
						<div className="flex justify-center">
							<TabsList className="flex-wrap gap-1">
								{categories.map((category) => (
									<TabsTrigger
										key={category}
										value={category}
										onClick={() => setSelectedCategory(category)}
										className="gap-2 capitalize"
									>
										{categoryIcons[category]}
										{category === 'all' ? 'Todos' : category}
									</TabsTrigger>
								))}
							</TabsList>
						</div>

						<TabsContent value={selectedCategory} className="mt-8">
							<div
								className="	
								flex
								gap-4
								overflow-x-auto
								scroll-smooth
								pb-6
								px-2
								snap-x
								snap-mandatory
								scrollbar-thin
								scrollbar-thumb-white/5
								scrollbar-track-transparent"
							>
								{filteredThumbnails.map((thumbnail, index) => (
									<div
										key={thumbnail.id}
										className="	
										min-w-85
										max-w-85
										shrink-0
										snap-start
										animate-slide-up"
										style={{
											animationDelay: `${index * 100}ms`,
											animationFillMode: 'both',
										}}
									>
										<Card
											className={`group overflow-hidden transition-all duration-500 hover:-translate-y-2 relative p-0 bg-dark-800                        ${
												hoveredCard === thumbnail.id
													? 'shadow-[0_0_40px_rgba(255,45,149,0.2),0_0_80px_rgba(0,212,255,0.1)] border-neon-pink/30'
													: 'hover:shadow-[0_0_30px_rgba(255,45,149,0.15)] hover:border-white/20'
											}`}
											onMouseEnter={() => setHoveredCard(thumbnail.id)}
											onMouseLeave={() => setHoveredCard(null)}
										>
											{/* Gradient Border Effect on Hover */}
											<div
												className={`absolute inset-0 rounded-xl bg-linear-to-r ${thumbnail.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm scale-[1.02]`}
											/>

											<CardHeader className="p-0">
												<div className="relative overflow-hidden h-64">
													{/* Thumbnail Image */}
													<img
														src={thumbnail.image}
														// alt={thumbnail.title}
														className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
													/>

													{/* Shimmer Effect */}
													<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden">
														<div
															className="absolute inset-0 animate-shimmer"
															style={{
																background:
																	'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
															}}
														/>
													</div>

													{/* Hover Overlay */}
													<div className="absolute inset-0 bg-linear-to-t from-dark-900 via-dark-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
														<div className="absolute bottom-4 left-4 right-4 flex gap-2">
															<Dialog>
																<DialogTrigger asChild>
																	<Button
																		size="sm"
																		variant="default"
																		className="cursor-pointer flex-1 gap-2"
																	>
																		<Eye className="h-4 w-4" />
																		Vista Previa
																	</Button>
																</DialogTrigger>
																<DialogContent>
																	<DialogHeader>
																		<DialogTitle className="flex items-center gap-3 text-2xl">
																			<span className="text-2xl">
																				{thumbnail.icon}
																			</span>
																			{/* {thumbnail.title} */}
																		</DialogTitle>
																		<DialogDescription className="flex items-center gap-2 pt-1">
																			Diseñado para{' '}
																			<span className="text-neon-pink font-medium">
																				{thumbnail.youtuber}
																			</span>
																			<Badge variant="default" className="ml-2">
																				{thumbnail.subscribers} subs
																			</Badge>
																		</DialogDescription>
																	</DialogHeader>
																	<div className="space-y-5 mt-2">
																		{/* Image Preview */}
																		<div className="relative rounded-xl overflow-hidden group/preview">
																			<img
																				src={thumbnail.image}
																				// alt={thumbnail.title}
																				className="w-full rounded-xl"
																			/>
																			<div
																				className={`absolute inset-0 bg-linear-to-t ${thumbnail.color} opacity-0 group-hover/preview:opacity-10 transition-opacity duration-300 rounded-xl`}
																			/>
																		</div>

																		{/* Description */}
																		<p className="text-slate-400 leading-relaxed">
																			{/* {thumbnail.description} */}
																		</p>

																		{/* Stats Row */}
																		<div className="flex gap-4">
																			<div className="flex-1 bg-white/5 rounded-xl p-4 text-center border border-white/5">
																				<Eye className="h-5 w-5 text-neon-blue mx-auto mb-1" />
																				<p className="text-xl font-bold">
																					{thumbnail.views}
																				</p>
																				<p className="text-xs text-slate-500">
																					Vistas
																				</p>
																			</div>
																			<div className="flex-1 bg-white/5 rounded-xl p-4 text-center border border-white/5">
																				<TrendingUp className="h-5 w-5 text-neon-green mx-auto mb-1" />
																				<p className="text-xl font-bold">
																					12.4%
																				</p>
																				<p className="text-xs text-slate-500">
																					CTR
																				</p>
																			</div>
																			<div className="flex-1 bg-white/5 rounded-xl p-4 text-center border border-white/5">
																				<Flame className="h-5 w-5 text-neon-pink mx-auto mb-1" />
																				<p className="text-xl font-bold">#3</p>
																				<p className="text-xs text-slate-500">
																					Trending
																				</p>
																			</div>
																		</div>

																		{/* Tags */}
																		<div className="flex flex-wrap gap-2">
																			{thumbnail.tags.map((tag, idx) => (
																				<Badge
																					key={idx}
																					variant="secondary"
																					className="gap-1"
																				>
																					#{tag}
																				</Badge>
																			))}
																		</div>

																		{/* Actions */}
																		<div className="flex justify-center items-center gap-3 pt-2">
																			{/* <Button className="cursor-pointer flex-1 gap-2">
																				<Download className="h-4 w-4" />
																				Descargar HD
																			</Button> */}
																			{/* <Button
																				variant="outline"
																				className="cursor-pointer gap-2"
																			>
																				<Share2 className="h-4 w-4" />
																				Compartir
																			</Button> */}
																			<Button
																				variant={
																					favorites.includes(thumbnail.id)
																						? 'default'
																						: 'outline'
																				}
																				size="icon"
																				onClick={(e) =>
																					toggleFavorite(thumbnail.id, e)
																				}
																				className={
																					favorites.includes(thumbnail.id)
																						? 'bg-linear-to-r from-red-500 to-pink-500'
																						: ''
																				}
																			>
																				<Heart
																					className={`h-4 w-4 ${favorites.includes(thumbnail.id) ? 'fill-current' : ''}`}
																				/>
																			</Button>
																		</div>
																	</div>
																</DialogContent>
															</Dialog>

															<Button
																size="sm"
																variant={
																	favorites.includes(thumbnail.id)
																		? 'default'
																		: 'secondary'
																}
																onClick={(e) => toggleFavorite(thumbnail.id, e)}
																className={`transition-all duration-300 ${
																	favorites.includes(thumbnail.id)
																		? 'bg-linear-to-r from-red-500 to-pink-500 shadow-[0_0_15px_rgba(239,68,68,0.4)]'
																		: ''
																}`}
															>
																<Heart
																	className={`h-4 w-4 transition-transform duration-300 ${
																		favorites.includes(thumbnail.id)
																			? 'fill-current scale-110'
																			: 'group-hover:scale-110'
																	}`}
																/>
															</Button>
														</div>
													</div>

													{/* Category Badge */}
													<Badge
														className={`absolute top-3 right-3 bg-linear-to-r ${thumbnail.color} border-0`}
													>
														{thumbnail.icon} {thumbnail.category}
													</Badge>

													{/* Views Badge */}
													<div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md rounded-full px-3 py-1 flex items-center gap-1 text-xs text-white/90">
														<Eye className="h-3 w-3" />
														{thumbnail.views}
													</div>
												</div>
											</CardHeader>

											<CardContent className="px-4 py-1">
												<div className="flex items-start justify-between gap-3">
													<div className="flex-1 min-w-0">
														<CardTitle className="text-base mb-1 line-clamp-1 group-hover:text-white transition-colors duration-300">
															{/* {thumbnail.title} */}
														</CardTitle>
														<CardDescription className="flex items-center gap-2">
															<span className="text-white text-sm">Para</span>
															<span className="text-neon-red text-shadow-xs text-shadow-black">
																{thumbnail.youtuber}
															</span>
															<span className="text-neon-blue2">•</span>
															<span className="text-xs text-white">
																{thumbnail.subscribers} subs
															</span>
														</CardDescription>
													</div>
													<span className="text-2xl">{thumbnail.icon}</span>
												</div>
											</CardContent>

											<CardFooter className="px-4 pb-3 pt-1 flex flex-wrap gap-1">
												{thumbnail.tags.slice(0, 3).map((tag, idx) => (
													<Badge
														key={idx}
														variant="outline"
														className="text-[10px] px-2 py-0.5"
													>
														#{tag}
													</Badge>
												))}
											</CardFooter>
										</Card>
									</div>
								))}
							</div>

							{filteredThumbnails.length === 0 && (
								<div className="text-center py-20">
									<div className="text-6xl mb-4">🎨</div>
									<p className="text-slate-500 text-lg">
										No hay miniaturas en esta categoría
									</p>
								</div>
							)}
						</TabsContent>
					</Tabs>
				</div>
			</section>

			{/* Stats Section */}
			<section className="relative z-10 px-4 py-20">
				<div className="max-w-5xl mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-4xl md:text-5xl font-bold mb-4">
							<span className="bg-linear-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent">
								Resultados que Hablan
							</span>
						</h2>
						<p className="text-slate-400 text-lg">
							Impacto real en los canales de mis clientes
						</p>
					</div>

					<div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
						{[
							{
								label: 'Diseños Entregados',
								value: 80,
								suffix: '+',
								icon: <Palette className="h-7 w-7" />,
								color: 'from-neon-pink to-rose-500',
								glow: 'rgba(255,45,149,0.15)',
							},
							{
								label: 'YouTubers Felices',
								value: 30,
								suffix: '+',
								icon: <Star className="h-7 w-7" />,
								color: 'from-neon-yellow to-amber-500',
								glow: 'rgba(255,230,0,0.15)',
							},
							{
								label: 'Promedio CTR',
								value: 12,
								suffix: '%',
								icon: <TrendingUp className="h-7 w-7" />,
								color: 'from-neon-green to-emerald-500',
								glow: 'rgba(57,255,20,0.15)',
							},
							{
								label: 'Favoritos',
								value: favorites.length,
								suffix: '',
								icon: <Heart className="h-7 w-7" />,
								color: 'from-neon-blue to-cyan-500',
								glow: 'rgba(0,212,255,0.15)',
							},
						].map((stat, i) => (
							<Card
								key={i}
								className="text-center p-6 group hover:-translate-y-2 transition-all duration-500 border-white/5 hover:border-white/15 relative overflow-hidden"
							>
								{/* Glow background */}
								<div
									className={`absolute inset-0 bg-linear-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
								/>

								<div
									className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-linear-to-br ${stat.color} mb-4 mx-auto group-hover:shadow-[0_0_30px_${stat.glow}] transition-shadow duration-500`}
								>
									{stat.icon}
								</div>
								<p className="text-4xl font-black mb-1 bg-linear-to-r from-dark-800 to-dark-500/80 bg-clip-text text-transparent">
									<AnimatedCounter target={stat.value} suffix={stat.suffix} />
								</p>
								<p className="text-sm text-slate-500">{stat.label}</p>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="relative z-10 px-4 py-20">
				<div className="max-w-4xl mx-auto">
					<Card className="relative overflow-hidden border-0 bg-linear-to-r from-dark-700 to-dark-600">
						{/* Background Pattern */}
						<div
							className="absolute inset-0 opacity-5"
							style={{
								backgroundImage:
									'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
								backgroundSize: '30px 30px',
							}}
						/>
						{/* Gradient Glow */}
						<div className="absolute -top-20 -right-20 w-64 h-64 bg-neon-pink/10 rounded-full blur-3xl" />
						<div className="absolute -bottom-20 -left-20 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl" />

						<CardContent className="relative p-8 md:p-14 text-center">
							<div className="animate-float inline-block mb-6">
								<div className="text-6xl">🚀</div>
							</div>
							<h3 className="text-neon-purple text-3xl md:text-4xl font-bold mb-4">
								¿Listo para hacer{' '}
								<span className="bg-linear-to-r from-neon-pink to-neon-blue bg-clip-text text-transparent">
									explotar
								</span>{' '}
								tu canal?
							</h3>
							<p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">
								Diseños que convierten scrollers en viewers. Haz que cada video
								cuente con una miniatura irresistible.
							</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<Button size="lg" className="text-base px-10 gap-2">
									<Sparkles className="h-5 w-5" />
									<a
										href="https://x.com/AndresVM__10"
										target="_blank"
										rel="noopener noreferrer"
									>
										Solicitar Diseño
									</a>
								</Button>
								<Button
									size="lg"
									onClick={scrollToPrices}
									variant="outline"
									className="text-base px-10 gap-2"
								>
									<ExternalLink className="h-5 w-5" />
									Ver Precios
								</Button>
							</div>
						</CardContent>
					</Card>
				</div>
			</section>

			{/* solicitud de dise;os  */}
			<section></section>

			{/* Lista de precios */}
			<section id="prices" className="py-20 px-4">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-5xl font-bold text-center mb-12 block bg-linear-to-r from-neon-red via-neon-yellow to-neon-blue2 bg-clip-text text-transparent animate-gradient-shift">
						Planes y Precios
					</h2>

					<div className="grid md:grid-cols-2 gap-8">
						<Card className="p-8 text-center">
							<h3 className="text-2xl font-bold mb-4">Básico</h3>

							<p className="text-5xl text-neon-orange font-extrabold mb-6">
								$10
							</p>

							<ul className="space-y-3 text-slate-400 mb-8">
								<li>1 Miniatura</li>
								<li>1 Cambio</li>
								<li>Entrega 24h/48h </li>
							</ul>

							<Button
								onClick={() =>
									window.open('https://forms.gle/VpGc7bqY9gKK49iU8', '_blank')
								}
								className="w-full"
							>
								Comprar
							</Button>
						</Card>

						<Card className="p-8 text-center border-pink-500">
							<h3 className="text-2xl font-bold mb-4">Premium</h3>

							<p className="text-5xl text-neon-pink font-extrabold mb-6">$25</p>

							<ul className="space-y-3 text-slate-400 mb-8">
								<li>Diseño Profesional</li>
								<li>Hasta 3 Cambios</li>
								<li>Entrega Prioritaria</li>
							</ul>

							<Button
								onClick={() =>
									window.open('https://forms.gle/VpGc7bqY9gKK49iU8', '_blank')
								}
								className="w-full bg-linear-to-r from-pink-500 to-cyan-500"
							>
								Más Popular
							</Button>
						</Card>

						{/* <Card className="p-8 text-center">
							<h3 className="text-2xl font-bold mb-4">Ultra</h3>

							<p className="text-5xl font-black mb-6">$30</p>

							<ul className="space-y-3 text-slate-400 mb-8">
								<li>Pack Completo</li>
								<li>Animación</li>
								<li>Atención VIP</li>
							</ul>

							<Button className="w-full">Comprar</Button>
						</Card> */}
					</div>
					<div className="flex justify-center mt-14">
						<Button
							size="lg"
							className="
								text-base
								px-12
								py-6
								gap-2
								bg-linear-to-r
								from-pink-500
								via-purple-500
								to-cyan-500
								hover:scale-105
								transition-all
								duration-300
								shadow-[0_0_30px_rgba(255,0,150,0.5)]
							"
						>
							<Sparkles className="h-5 w-5" />
							<a
								href="https://x.com/AndresVM__10"
								target="_blank"
								rel="noopener noreferrer"
							>
								Solicitar Diseño
							</a>
						</Button>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="relative z-10 border-t border-white/5 bg-dark-900/80 backdrop-blur-xl">
				<div className="max-w-7xl mx-auto px-4 py-12">
					<div className="flex flex-col md:flex-row items-center justify-between gap-6">
						<div className="flex items-center gap-3">
							<div className="bg-linear-to-r from-neon-pink to-neon-purple p-2.5 rounded-xl">
								<Play className="h-6 w-6 text-white fill-current" />
							</div>
							<div>
								<h4 className="font-bold text-lg">AndresVM__10</h4>
								<p className="text-xs text-slate-500">Diseños que destacan</p>
							</div>
						</div>
						<div className="flex gap-6 text-sm text-slate-500">
							<a
								href="https://www.behance.net/byandres"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-neon-pink transition-colors cursor-pointer"
							>
								Portafolio
							</a>
							<span className="hover:text-neon-pink transition-colors cursor-pointer">
								Servicios
							</span>

							<span className="hover:text-neon-pink transition-colors cursor-pointer">
								<a
									href="https://x.com/AndresVM__10"
									target="_blank"
									rel="noopener noreferrer"
								>
									Contacto
								</a>
							</span>
							{/* <span className="hover:text-neon-pink transition-colors cursor-pointer">
								Blog
							</span> */}
						</div>
						<p className="text-xs text-slate-600">
							© 2026 AndresVM__10 - Todos los derechos reservados{' '}
						</p>
					</div>
				</div>
			</footer>
		</>
	);
};

export default HomePage;
