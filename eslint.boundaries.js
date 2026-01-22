import boundaries from 'eslint-plugin-boundaries';

export const eslintBoundariesConfig = {
	plugins: {
		boundaries,
	},
	settings: {
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true,
			},
		},
		'boundaries/elements': [
			{
				type: 'context',
				pattern: './src/context',
			},
			{
				type: 'features',
				pattern: './src/features/*',
			},
			{
				type: 'layouts',
				pattern: './src/layouts',
			},
			{
				type: 'modules',
				pattern: './src/modules',
			},
			{
				type: 'pages',
				pattern: './src/pages',
			},
			{
				type: 'router',
				pattern: './src/router',
			},
			{
				type: 'shared',
				pattern: './src/shared',
			},
			{
				type: 'store',
				pattern: './src/store',
			},
			{
				type: 'ui-components',
				pattern: './src/ui-components/*',
			},
			{
				type: 'ui-design-atoms',
				pattern: './src/ui-components/*',
			},
		],
	},
	rules: {
		// Правила залишаються у конфігурації, але ESLint їх ігнорує
		'boundaries/element-types': [0],
		'boundaries/entry-point': [0],
	},
};
