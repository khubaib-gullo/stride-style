import { Product, Collection, Testimonial } from "./types";

export const HERO_SLIDES = [
	{
		id: 1,
		title: "DEFINING MOVEMENT",
		subtitle: "SS25 COLLECTION",
		description:
			"Engineered for the urban athlete. Experience the perfect fusion of technical performance and contemporary aesthetics.",
		bgImage: "image/img3.jpg",
	},
];

export const FEATURED_COLLECTIONS: Collection[] = [
	{
		id: 1,
		title: "Technical Run",
		subtitle: "Performance First",
		image: "image/img4.jpg",
	},
	{
		id: 2,
		title: "Urban Utility",
		subtitle: "Street Ready",
		image:
			"https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1000&auto=format&fit=crop",
	},
	{
		id: 3,
		title: "Minimalist",
		subtitle: "Clean Lines",
		image:
			"https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=1000&auto=format&fit=crop",
	},
];

export const TRENDING_PRODUCTS: Product[] = [
	{
		id: 1,
		title: "Vanguard Elite X",
		price: 245.0,
		category: "Running",
		images: [
			"https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1000&auto=format&fit=crop",
		],
		isNew: true,
		sizes: [7, 8, 8.5, 9, 9.5, 10, 11, 12],
		colors: ["Red", "White"],
		stockStatus: "In Stock",
		description:
			"The Vanguard Elite X features our proprietary reactive foam technology, providing 40% more energy return. Designed for the serious marathon runner.",
	},
	{
		id: 2,
		title: "Mono Low 01",
		price: 189.0,
		category: "Lifestyle",
		images: [
			"https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1000&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1000&auto=format&fit=crop",
		],
		bestseller: true,
		sizes: [6, 7, 8, 9, 10],
		colors: ["Green", "Black"],
		stockStatus: "Low Stock",
		description:
			"A sustainable take on the classic court shoe. Made with 100% recycled canvas and a natural rubber outsole.",
	},
	{
		id: 3,
		title: "Tech Runner V3",
		price: 210.0,
		category: "Performance",
		images: [
			"https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1000&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=1000&auto=format&fit=crop",
		],
		isNew: true,
		sizes: [8, 9, 9.5, 10, 10.5, 11, 12, 13],
		colors: ["Black", "Grey"],
		stockStatus: "In Stock",
		description:
			"Built for speed. The Tech Runner V3 utilizes a carbon fiber plate and ultra-lightweight mesh upper for maximum breathability.",
	},
	{
		id: 4,
		title: "Retro High '92",
		price: 155.0,
		category: "Lifestyle",
		images: [
			"https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=1000&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1000&auto=format&fit=crop",
		],
		sizes: [7, 8, 9, 10, 11],
		colors: ["Multi", "White"],
		stockStatus: "Out of Stock",
		description:
			"A throwback to the golden era of basketball. Premium leather construction with vintage color blocking.",
	},
	{
		id: 5,
		title: "Shadow Knit",
		price: 175.0,
		category: "Performance",
		images: [
			"https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=1000&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?q=80&w=1000&auto=format&fit=crop",
		],
		bestseller: true,
		sizes: [8, 8.5, 9, 9.5, 10],
		colors: ["Black"],
		stockStatus: "In Stock",
		description:
			"Seamless comfort. The Shadow Knit creates a sock-like fit that adapts to your foot's natural movement.",
	},
	{
		id: 6,
		title: "Force Low",
		price: 130.0,
		category: "Lifestyle",
		images: [
			"https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=1000&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000&auto=format&fit=crop",
		],
		sizes: [5, 6, 7, 8, 9, 10],
		colors: ["White"],
		stockStatus: "In Stock",
		description:
			"The everyday essential. Clean lines, durable leather, and comfortable cushioning for all-day wear.",
	},
];

export const TESTIMONIALS: Testimonial[] = [
	{
		id: 1,
		name: "Marcus Chen",
		role: "Verified Buyer",
		quote:
			"The quality of the Vanguard line is unmatched. Shipping was incredibly fast.",
		image:
			"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
	},
	{
		id: 2,
		name: "Elena Rossi",
		role: "Verified Buyer",
		quote:
			"Finally, a sustainable shoe that actually looks good. The aesthetic is perfect.",
		image:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
	},
];
