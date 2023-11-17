import { createStyles } from '$lib/styles-old';

export default createStyles((theme) => ({
	root: {
		[`${theme.dark} &`]: {
			color: theme.colors['dark50']?.value
		},
		focusRing: 'auto',
		cursor: 'pointer',
		border: 0,
		padding: 0,
		appearance: 'none',
		fontFamily: theme.fonts.standard.value ?? 'sans-serif',
		fontSize: theme.fontSizes.md.value,
		backgroundColor: 'transparent',
		textAlign: 'left',
		color: 'black',
		textDecoration: 'none'
	}
}));
