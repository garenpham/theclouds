import { Babylonica } from '@next/font/google';
import { Playfair_Display } from '@next/font/google';
import { Lobster } from '@next/font/google';

export const babylonica = Babylonica({ weight: ['400'], subsets: ['latin'] });
export const lobster = Lobster({
	weight: ['400'],
	subsets: ['latin'],
});

export const playfairDisplay = Playfair_Display({
	weight: ['800'],
	subsets: ['latin'],
});
