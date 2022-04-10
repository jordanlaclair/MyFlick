import { API, graphqlOperation } from "aws-amplify";
import { GetUserQuery, ListUsersQuery } from "../src/API";
import { getUser, listUsers } from "../src/graphql/queries";
import { GraphQLResult } from "@aws-amplify/api-graphql";

export const fetchUsers = async () => {
	try {
		const data = (await API.graphql(
			graphqlOperation(listUsers)
		)) as GraphQLResult<ListUsersQuery>;

		return data;
	} catch (error) {
		console.log(error);
	}
};

export const fetchUserDataMessage = async (id: string) => {
	try {
		const data = (await API.graphql(
			graphqlOperation(getUserDataMessage, {
				cognitoId: id,
			})
		)) as GraphQLResult<GetUserQuery>;

		return data;
	} catch (error) {
		console.log(error);
	}
};

const getUserDataMessage = `query GetUser($cognitoId: ID!) {
  getUser(cognitoId: $cognitoId) {
    firstName
    picture
    cognitoId
  }
}`;

const getLikedInfo = `query MyQuery {
  getLikedTable(likedId: $likedId) {
    UserLikingId
    VictimId
    likedId
  }
}`;

export const fetchLikedInfo = async (id: string) => {
	try {
		const data = (await API.graphql(
			graphqlOperation(getLikedInfo, {
				likedId: id,
			})
		)) as GraphQLResult<GetUserQuery>;

		return data;
	} catch (error) {
		console.log(error);
	}
};
