import { createStyles, keyframes } from '$lib/styles-old';
import type { SvelteUINumberSize, SvelteUIColor, ColorShades } from '$lib/styles-old';
import type { Sections } from './Progress';

export interface ProgressStylesParams {
	color: SvelteUIColor;
	radius: SvelteUINumberSize;
	size: SvelteUINumberSize;
	shade: ColorShades;
	striped: boolean;
	animate: boolean;
}

interface AccumulatedSection {
	value: number;
	color: SvelteUIColor;
	accumulated: number;
	label?: string;
}

export function getCumulativeSections(sections: Sections[]): AccumulatedSection[] {
	return sections.reduce(
		(acc, section) => {
			acc.sections.push({ ...section, accumulated: acc.accumulated });
			acc.accumulated += section.value;
			return acc;
		},
		{ accumulated: 0, sections: [] }
	).sections;
}

export const sizes = {
	xs: 3,
	sm: 5,
	md: 8,
	lg: 12,
	xl: 16
};

const stripesAnimation = keyframes({
	from: { backgroundPosition: '0 0' },
	to: { backgroundPosition: '40px 0' }
});

export default createStyles(
	(theme, { color, radius, size, striped, animate, shade }: ProgressStylesParams) => ({
		root: {
			[`${theme.dark} &`]: {
				backgroundColor: theme.fn.themeColor('dark', 4)
			},
			position: 'relative',
			height: theme.fn.size({ size, sizes }),
			backgroundColor: theme.fn.themeColor('gray', 2),
			borderRadius: theme.fn.radius(radius),
			overflow: 'hidden'
		},

		bar: {
			position: 'absolute',
			top: 0,
			bottom: 0,
			left: 0,
			height: '100%',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			backgroundColor: theme.fn.themeColor(color || 'blue', shade),
			transition: 'width 100ms linear',
			animation: animate ? `${stripesAnimation} 1000ms linear infinite` : 'none',
			backgroundSize: '20px 20px',
			backgroundImage: striped
				? 'linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)'
				: 'none',

			'&:last-of-type': {
				borderTopRightRadius: theme.fn.radius(radius),
				borderBottomRightRadius: theme.fn.radius(radius)
			},

			'&:first-of-type': {
				borderTopLeftRadius: theme.fn.radius(radius),
				borderBottomLeftRadius: theme.fn.radius(radius)
			},

			'@media (prefers-reduced-motion)': {
				transitionDuration: '0ms'
			}
		},

		label: {
			color: theme.colors.white.value,
			fontSize: theme.fn.size({ size, sizes }) * 0.65,
			fontWeight: 700,
			userSelect: 'none',
			overflow: 'hidden',
			whiteSpace: 'nowrap'
		}
	})
);
