import { HTMLButtonAttributes } from 'svelte/elements';
import type { LiteralUnion } from '$lib/internal/types';
import type { DefaultProps, SvelteUIColor, SvelteUINumberSize } from '$lib/styles-old';
import type { LoaderProps } from '../Loader/Loader';

export type ActionIconVariant =
	| 'hover'
	| 'filled'
	| 'outline'
	| 'light'
	| 'default'
	| 'transparent';

export interface ActionIconProps extends DefaultProps, HTMLButtonAttributes {
	root?: 'a' | 'button';
	color?: SvelteUIColor;
	variant?: ActionIconVariant;
	size?: SvelteUINumberSize | string;
	radius?: SvelteUINumberSize | number;
	loaderProps?: LoaderProps;
	loading?: boolean;
	disabled?: boolean;
	href?: string;
	external?: boolean;
}
