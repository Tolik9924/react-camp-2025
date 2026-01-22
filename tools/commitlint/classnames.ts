type ClassValue = string | undefined | null | false | Record<string, boolean>;

export function classNames(...args: ClassValue[]): string {
	return args
		.flatMap((arg) => {
			if (!arg) return [];
			if (typeof arg === 'string') return [arg];
			return Object.entries(arg)
				.filter(([, value]) => value)
				.map(([key]) => key);
		})
		.join(' ');
}
