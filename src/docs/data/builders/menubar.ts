import { ATTRS, DESCRIPTIONS, KBD, TYPES } from '$docs/constants';
import type { APISchema, KeyboardSchema } from '$docs/types';
import type { BuilderData } from '.';

const builder: APISchema = {
	title: 'createMenubar',
	description: DESCRIPTIONS.BUILDER('menubar'),
	props: [
		{
			name: 'loop',
			type: 'boolean',
			default: 'true',
			description: DESCRIPTIONS.LOOP,
		},
	],
};

const menuBuilder: APISchema = {
	title: 'createMenu',
	description: DESCRIPTIONS.BUILDER('menubar menu'),
	props: [
		{
			name: 'positioning',
			type: 'FloatingConfig',
			default: "placement: 'bottom'",
			description: DESCRIPTIONS.FLOATING_CONFIG,
		},
		{
			name: 'arrowSize',
			type: 'number',
			default: '8',
			description: DESCRIPTIONS.ARROW_SIZE,
		},
		{
			name: 'preventScroll',
			type: 'boolean',
			default: 'true',
			description: DESCRIPTIONS.PREVENT_SCROLL('menu'),
		},
		{
			name: 'loop',
			type: 'boolean',
			default: 'false',
			description: DESCRIPTIONS.LOOP,
		},
	],
	returnedProps: [
		{
			name: 'open',
			type: 'Writable<boolean>',
			description: 'A writable store that controls the open state of the menubar menu.',
		},
		{
			name: 'options',
			type: 'Writable<CreateMenubarMenuProps>',
			description: 'A writable store that controls the options of the menubar menu.',
		},
		{
			name: 'menu',
			description: 'The builder store used to create the menubar menu.',
			link: '#menu',
		},
		{
			name: 'trigger',
			description: 'The builder store used to create the menubar menu trigger.',
			link: '#trigger',
		},
		{
			name: 'checkboxItem',
			description: 'The builder store used to create a checkbox menu item.',
			link: '#checkboxitem',
		},
		{
			name: 'separator',
			description: 'The builder store used to create a separator menu item.',
			link: '#separator',
		},
		{
			name: 'arrow',
			description: 'The builder store used to create the menubar menu arrow.',
			link: '#arrow',
		},
	],
};
const menu: APISchema = {
	title: 'menu',
	description: 'The menu element.',
	dataAttributes: [
		{
			name: 'data-state',
			value: ATTRS.OPEN_CLOSED,
		},
		{
			name: 'data-melt-menubar-menu',
			value: ATTRS.MELT('menu'),
		},
	],
};
const trigger: APISchema = {
	title: 'trigger',
	description: 'The element which opens the menu.',
	dataAttributes: [
		{
			name: 'data-state',
			value: ATTRS.OPEN_CLOSED,
		},
		{
			name: 'data-melt-menubar-menu-trigger',
			value: ATTRS.MELT('trigger'),
		},
	],
};

const item: APISchema = {
	title: 'item',
	description: 'A basic menu item.',
	props: [
		{
			name: 'onSelect',
			type: [TYPES.EVENT_HANDLER, 'undefined'],
			default: 'undefined',
			description: DESCRIPTIONS.ON_SELECT,
		},
	],
	dataAttributes: [
		{
			name: 'data-orientation',
			value: ATTRS.ORIENTATION,
		},
		{
			name: 'data-melt-menubar-menu-item',
			value: ATTRS.MELT('item'),
		},
	],
};

const checkboxItem: APISchema = {
	title: 'checkboxItem',
	description: 'A checkbox menu item.',
	props: [
		{
			name: 'checked',
			type: 'Writable<boolean>',
			default: 'Writable<false>',
			description: 'A writable boolean which determines whether or not the checkbox is checked.',
		},
		{
			name: 'onSelect',
			type: [TYPES.EVENT_HANDLER, 'undefined'],
			default: 'undefined',
			description: DESCRIPTIONS.ON_SELECT,
		},
	],
	dataAttributes: [
		{
			name: 'data-orientation',
			value: ATTRS.ORIENTATION,
		},
		{
			name: 'data-melt-menubar-menu-checkbox-item',
			value: ATTRS.MELT('checkbox item'),
		},
	],
};

const radioGroupBuilder: APISchema = {
	title: 'createMenuRadioGroup',
	description: 'The builder function used to create radio group components',
	props: [
		{
			name: 'value',
			type: 'string',
			description: 'The value of the selected radio item.',
		},
	],
	returnedProps: [
		{
			name: 'value',
			type: 'Writable<string | null>',
			description: 'A writable store which controls the value of the selected radio item.',
		},
		{
			name: 'isChecked',
			type: 'Readable<(itemValue: string) => boolean>',
			description:
				'A derived store which returns a function that checks if a radio item is selected.',
		},
		{
			name: 'radioGroup',
			description: 'The builder store used to create the radio group.',
			link: '#radiogroup',
		},
		{
			name: 'radioItem',
			description: 'The builder store used to create a radio menu item.',
			link: '#radioitem',
		},
	],
};

const radioGroup: APISchema = {
	title: 'radioGroup',
	description: 'A group of radio menu items.',
	dataAttributes: [
		{
			name: 'data-melt-menubar-menu-radio-group',
			value: ATTRS.MELT('radio group'),
		},
	],
};

const radioItem: APISchema = {
	title: 'radioItem',
	description: 'A radiogroup menu item.',
	props: [
		{
			name: 'value',
			type: 'string',
			description: 'The value of the radio item.',
			required: true,
		},
		{
			name: 'disabled',
			type: 'boolean',
			default: 'false',
			description: 'Whether the radio item is disabled.',
		},
		{
			name: 'onSelect',
			type: TYPES.EVENT_HANDLER,
			description: DESCRIPTIONS.ON_SELECT,
		},
	],
	dataAttributes: [
		{
			name: 'data-checked',
			value: ATTRS.CHECKED_UNCHECKED,
		},
		{
			name: 'data-disabled',
			value: ATTRS.DISABLED('radio item'),
		},
		{
			name: 'data-value',
			value: 'The value of the radio item.',
		},
		{
			name: 'data-orientation',
			value: ATTRS.ORIENTATION,
		},
		{
			name: 'data-melt-menubar-menu-radio-item',
			value: ATTRS.MELT('radio item'),
		},
		{
			name: 'data-highlighted',
			value: ATTRS.HIGHLIGHTED('radio item'),
		},
	],
};

const submenuBuilder: APISchema = {
	title: 'createSubmenu',
	description: 'The builder function used to create submenu components.',
	props: [
		{
			name: 'positioning',
			type: 'FloatingConfig',
			default: "placement: 'right'",
			description: DESCRIPTIONS.FLOATING_CONFIG,
		},
		{
			name: 'disabled',
			type: 'boolean',
			default: 'false',
			description: 'Whether or not the submenu is disabled.',
		},
	],
	returnedProps: [
		{
			name: 'subOpen',
			type: 'Writable<boolean>',
			description: 'A writable store that controls the open state of the submenu.',
		},
		{
			name: 'options',
			type: 'Writable<CreateMenubarSubmenuProps>',
			description: 'A writable store that controls the options of the submenu.',
		},
		{
			name: 'subMenu',
			description: 'The store used to create the submenu.',
			link: '#menu',
		},
		{
			name: 'subTrigger',
			description: 'The builder store used to create the submenu trigger.',
			link: '#trigger',
		},
		{
			name: 'arrow',
			description: 'The builder store used to create the submenumenu arrow.',
			link: '#arrow',
		},
	],
};

const arrow: APISchema = {
	title: 'arrow',
	description: 'An optional arrow element which points to the trigger.',
	dataAttributes: [
		{
			name: 'data-arrow',
			value: ATTRS.TRUE,
		},
		{
			name: 'data-melt-menubar-menu-arrow',
			value: ATTRS.MELT('arrow'),
		},
	],
};

const separator: APISchema = {
	title: 'separator',
	description: 'A horizontal line which separates menu items.',
	dataAttributes: [
		{
			name: 'data-melt-menubar-menu-separator',
			value: ATTRS.MELT('separator'),
		},
	],
};

const submenu: APISchema = {
	title: 'submenu',
	description: 'A submenu element displayed when its trigger is selected.',
	dataAttributes: [
		{
			name: 'data-state',
			value: ATTRS.OPEN_CLOSED,
		},
		{
			name: 'data-melt-menubar-menu-submenu',
			value: ATTRS.MELT('submenu'),
		},
	],
};

const subTrigger: APISchema = {
	title: 'subTrigger',
	description: 'A menuitem which opens its associated submenu.',
	dataAttributes: [
		{
			name: 'data-state',
			value: ATTRS.OPEN_CLOSED,
		},
		{
			name: 'data-disabled',
			value: ATTRS.DISABLED('subtrigger'),
		},
		{
			name: 'data-melt-menubar-menu-subtrigger',
			value: ATTRS.MELT('subtrigger'),
		},
	],
};

const keyboard: KeyboardSchema = [
	{
		key: KBD.SPACE,
		behavior:
			'When focused on the `trigger`, opens the associated menu. When focused on an `item`, selects the item.',
	},
	{
		key: KBD.ENTER,
		behavior:
			'When focused on the `trigger`, opens the associated menu. When focused on an `item`, selects the item.',
	},
	{
		key: KBD.ARROW_DOWN,
		behavior:
			'When focused on a `trigger`, opens the associated menu. When focused on an `item`, shifts focus to the next item.',
	},
	{
		key: KBD.ARROW_UP,
		behavior: 'When focused on an `item`, shifts focus to the next item..',
	},
	{
		key: KBD.ARROW_RIGHT,
		behavior:
			'When focused on a `subTrigger`, opens the `subMenu` and focuses the first item. When focus is within the menu, opens the next menu in the menubar',
	},
	{
		key: KBD.ARROW_LEFT,
		behavior:
			"When focused on within a `subMenu`, closes the submenu and shifts focus to that submenu's `subTrigger`. When focus is within the menu, opens the previous menu in the menubar",
	},
	{
		key: KBD.ESCAPE,
		behavior: "Closes the open menu and focuses that menu's `trigger`.",
	},
];

const schemas = [
	builder,
	menuBuilder,
	trigger,
	menu,
	item,
	checkboxItem,
	radioGroupBuilder,
	radioGroup,
	radioItem,
	submenuBuilder,
	subTrigger,
	submenu,
	separator,
	arrow,
];

const features = [
	'Can be controlled or uncontrolled.',
	'Supports submenus with configurable reading direction.',
	'Customize menu positioning.',
	'Optionally render a pointing arrow.',
	'Fully managed focus.',
	'Full keyboard navigation.',
	'Typeahead support',
];

export const menubarData: BuilderData = {
	schemas,
	features,
	keyboard,
};
