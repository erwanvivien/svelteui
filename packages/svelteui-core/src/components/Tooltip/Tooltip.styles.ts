import { createStyles } from '$lib/styles-old';
import type { SvelteUIColor, SvelteUINumberSize } from '$lib/styles-old';

export interface TooltipStyleParams {
	color?: SvelteUIColor;
	radius?: SvelteUINumberSize;
}

export default createStyles((theme, { color, radius }: TooltipStyleParams) => {
	return {
		root: {
			display: 'inline-block'
		},

		body: {
			darkMode: {
				backgroundColor: theme.fn.themeColor(color, 3),
				color: theme.fn.themeColor('dark', 9)
			},
			backgroundColor: theme.fn.themeColor(color, 9),
			lineHeight: theme.lineHeights.md,
			fontSize: theme.fontSizes.sm,
			fontFamily: theme.fonts.standard.value,
			borderRadius: theme.radii[radius].value,
			padding: `${+theme.space.xs.value / 2}px ${theme.space.xs.value}px`,
			color: 'white',
			position: 'relative',
			overflow: 'hidden',
			textOverflow: 'ellipsis'
		},

		arrow: {
			darkMode: {
				backgroundColor: theme.fn.themeColor(color, 3)
			},
			background: theme.fn.themeColor(color, 9),
			zIndex: 0
		}
	};
});
