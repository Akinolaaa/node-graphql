import { ArgumentNode } from "graphql";
import db from "./_db";

export const resolvers = {
	Query: {
		games() {
			return db.games;
		},

		game(_: any, args: any) {
			return db.games.find((game) => game.id === args.id);
		},

		authors() {
			return db.authors;
		},

		author(_: any, args: any) {
			return db.authors.find((author) => author.id === args.id);
		},

		reviews() {
			return db.reviews;
		},

		// callback takes (parent, args, content)
		review(_: any, args: any) {
			return db.reviews.find((rev) => rev.id === args.id);
		},
	},

	// for nesting reviews inside game
	Game: {
		reviews(parent: any) {
			return db.reviews.filter((rev) => rev.game_id === parent.id);
		},
	},

	Review: {
		game(parent: any) {
			return db.games.find((game) => game.id === parent.game_id);
		},

		author(parent: any) {
			return db.authors.find((author) => author.id === parent.author_id);
		},
	},

	Mutation: {
		deleteGame(_: any, args: { id: string }) {
			db.games = db.games.filter((game) => game.id !== args.id);
			return db.games;
		},

		addGame(_: any, args: { title: string; platforms: string[] }) {
			db.games.push({
				id: db.games.length.toString(),
				title: args.title,
				platform: args.platforms,
			});
			return db.games;
		},

		addGame2(_: any, args: any) {
			const game = {
				id: Math.floor(Math.random() * 100),
				...args.game,
			};
			db.games.push(game);
			return game;
		},
	},
};
