/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
	CompositeScreenProps,
	NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { PeopleDetailsType } from "./db/db";

declare global {
	namespace ReactNavigation {
		interface RootParamList extends RootStackParamList {}
	}
}

export type RootStackParamList = {
<<<<<<< HEAD
	Login: NavigatorScreenParams<LoginParamList> | undefined;
	MyProfile: NavigatorScreenParams<MyProfileList> | undefined;
	Home: undefined;
	Introduction: NavigatorScreenParams<MessageParamList> | undefined;
	MovieSwiping: NavigatorScreenParams<MovieParamsList> | undefined;
	PeopleSwiping: NavigatorScreenParams<MovieParamsList> | undefined;
	Settings: undefined;
	MySettings: undefined;
<<<<<<< HEAD

=======
	Messages: NavigatorScreenParams<MessageParamList> | undefined;
	Root: undefined;
	PersonDetails: NavigatorScreenParams<MessageParamList> | undefined;
	Match: MatchParamList;
=======
  Login: NavigatorScreenParams<LoginParamList> | undefined;
  MyProfile: NavigatorScreenParams<MyProfileList> | undefined;
  Home: undefined;
  Introduction: NavigatorScreenParams<IntroductionParamsList> | undefined;
  MovieSwiping: undefined;
  MovieSwiping2: NavigatorScreenParams<MovieParamsList> | undefined;
  Settings: undefined;
  MySettings: undefined;
>>>>>>> 3da72a6bdfeea0445466f865dcd7d1fce3ea59a8
  Messages: NavigatorScreenParams<MessageParamList> | undefined;
  Root: undefined;
  MovieDetails: undefined;
<<<<<<< HEAD
=======
  PersonDetails: NavigatorScreenParams<PersonDetailsParamsList> | undefined;
  Match: MatchParamList;
>>>>>>> master
>>>>>>> 3da72a6bdfeea0445466f865dcd7d1fce3ea59a8
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
	NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
<<<<<<< HEAD
=======
<<<<<<< HEAD
	TabOne: { id: string };
	TabTwo: undefined;
	Messages: undefined;
	Introduction: undefined;
	MyProfile: undefined;
	MovieSwiping: undefined;
	PeopleSwiping: undefined;
	PersonDetails: undefined;
	MySettings: undefined;
	Home: undefined;
	Match: MatchParamList;
=======
>>>>>>> 3da72a6bdfeea0445466f865dcd7d1fce3ea59a8
  TabOne: { id: string };
  TabTwo: undefined;
  Messages: undefined;
  Introduction: undefined;
  MyProfile: undefined;
  MovieSwiping: undefined;
  MovieSwiping2: undefined;
  PersonDetails: undefined;
  MySettings: undefined;
  Home: undefined;
  Match: MatchParamList;
  MovieDetails: undefined;
<<<<<<< HEAD
=======
>>>>>>> master
>>>>>>> 3da72a6bdfeea0445466f865dcd7d1fce3ea59a8
};

export type LoginParamList = {
	test: string;
};

export type MyProfileList = {
	test: string;
};

export type MovieParamsList = {};
export type IntroductionParamsList = {};
export type MessageParamList = {
	item: PeopleDetailsType;
};

export type PersonDetailsParamsList = {};

export type ImagesSliderParamsList = {
	person: PeopleDetailsType;
};

export type MatchParamList = {
	firstName: string;
	personOneImg: string;
	personTwoImg: string;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
	CompositeScreenProps<
		BottomTabScreenProps<RootTabParamList, Screen>,
		NativeStackScreenProps<RootStackParamList>
	>;
