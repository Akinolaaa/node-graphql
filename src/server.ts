import dotenv from "dotenv";
dotenv.config();
import config from "config";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema";
import db from "./_db";

const resolvers = {
	Query: {
		games() {
			return db.games;
		},
		authors() {
			return db.authors;
		},
		reviews() {
			return db.reviews;
		},
		review(parent: any, args: any) {
			return db.reviews.find((rev) => rev.id === args.id);
		},
	},
};

const server = new ApolloServer({ typeDefs, resolvers });

const PORT = parseInt(process.env.PORT || "5000");

const start = async () => {
	const { url } = await startStandaloneServer(server, {
		listen: { port: PORT },
	});

	console.log(`Server ready at port ${PORT}`);
};

start();
