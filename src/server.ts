import dotenv from "dotenv";
dotenv.config();
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";

const server = new ApolloServer({ typeDefs, resolvers });

const PORT = parseInt(process.env.PORT || "5000");

const start = async () => {
	const { url } = await startStandaloneServer(server, {
		listen: { port: PORT },
	});

	console.log(`Server ready at port ${PORT}`);
};

start();
