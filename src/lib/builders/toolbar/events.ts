import type { GroupedEvents } from '$lib/internal/types';

export const toolbarEvents = {
	button: ['keydown'] as const,
	link: ['keydown'] as const,
	item: ['click', 'keydown'] as const,
};

export type ToolbarEvents = GroupedEvents<typeof toolbarEvents>;
