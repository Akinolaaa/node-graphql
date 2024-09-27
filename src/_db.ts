let games = [
	{
		id: "1",
		title: "Akinola the greatest to ever do it",
		platform: ["EveryWhere"],
	},
	{
		id: "2",
		title: "Ore does braids",
		platform: ["PS5", "Xbox"],
	},
	{
		id: "3",
		title: "Eri is a clown",
		platform: ["PS5", "Xbox", "Nintendo"],
	},
	{
		id: "4",
		title: "Timilehin has bar",
		platform: ["Instagram", "Facebook"],
	},
	{
		id: "5",
		title: "Mr Eromz dey cook",
		platform: ["Tiktok, Youtube"],
	},
];

let authors = [
	{ id: "1", name: "Chiamaka", verified: true },
	{ id: "2", name: "Aisha", verified: false },
	{ id: "3", name: "ChiChi", verified: true },
];

let reviews = [
	{
		id: "1",
		rating: 1,
		content:
			"Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravidasem",
		author_id: "1",
		game_id: "1",
	},
	{
		id: "2",
		rating: 2,
		content:
			"Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
		author_id: "2",
		game_id: "2",
	},
	{
		id: "3",
		rating: 9,
		content:
			"In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
		author_id: "3",
		game_id: "3",
	},
	{
		id: "4",
		rating: 9,
		content:
			"Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
		author_id: "1",
		game_id: "2",
	},
	{
		id: "5",
		rating: 6,
		content:
			"Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
		author_id: "3",
		game_id: "5",
	},
	{
		id: "6",
		rating: 7,
		content:
			"Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
		author_id: "1",
		game_id: "4",
	},
	{
		id: "7",
		rating: 8,
		content:
			"Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
		author_id: "2",
		game_id: "2",
	},
	{
		id: "8",
		rating: 10,
		content:
			"Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravidan isi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
		author_id: "3",
		game_id: "1",
	},
	{
		id: "9",
		rating: 4,
		content:
			"Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
		author_id: "3",
		game_id: "5",
	},
	{
		id: "10",
		rating: 8,
		content:
			"Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
		author_id: "1",
		game_id: "1",
	},
];

export default {
	games,
	authors,
	reviews,
};
