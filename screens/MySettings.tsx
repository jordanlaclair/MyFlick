import React, { useEffect, useState, useRef, useMemo, useContext } from "react";
import { StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import { Ionicons } from "@expo/vector-icons";
import { RootStackScreenProps } from "../types";
import Colors, { themeColor, lightThemeColor } from "../constants/Colors";
import { View, Text, SafeAreaView } from "../components/Themed";
import useColorScheme from "../hooks/useColorScheme";
import { Chip } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import {
	BottomSheetModal,
	BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import "react-native-gesture-handler";
import DateTimePicker from "@react-native-community/datetimepicker";
import RBSheet from "react-native-raw-bottom-sheet";
import SearchBar from "react-native-dynamic-search-bar";
import { AuthContext } from "../store/AuthContext";

const MySettings = ({ navigation }: RootStackScreenProps<"MySettings">) => {
	const colorScheme = useColorScheme();
	const [image, setImage] = useState<any | null>(null);
	const bottomSheetModalRef = useRef<BottomSheetModal>(null);
	const bottomSheetModalRef2 = useRef<BottomSheetModal>(null);
	const bottomSheetModalRef3 = useRef<BottomSheetModal>(null);
	const bottomSheetModalRef4 = useRef<BottomSheetModal>(null);
	const snapPoints = useMemo(() => ["25%", "50%"], []);
	const refRBSheet = useRef<any | null>(null);
	const refRBSheet2 = useRef<any | null>(null);
	const refRBSheet3 = useRef<any | null>(null);
	const refRBSheet4 = useRef<any | null>(null);

	const { user, dispatch } = useContext(AuthContext);

	useEffect(() => {
		(async () => {
			const cameraRollStatus =
				await ImagePicker.requestMediaLibraryPermissionsAsync();
			const cameraStatus = await ImagePicker.requestCameraPermissionsAsync();
			if (
				cameraRollStatus.status !== "granted" ||
				cameraStatus.status !== "granted"
			) {
				alert("Sorry, we need these permissions to make this work!");
			}
		})();
	}, []);

	const pickImage = async () => {
		// No permissions request is necessary for launching the image library
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});
		//console.log(result);

		if (!result.cancelled) {
			setImage(result.uri);
		}
	};

	const takePhoto = async () => {
		let result = await ImagePicker.launchCameraAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			aspect: [4, 3],
		});

		//console.log(result);
	};

	const [date, setDate] = useState(new Date());
	const [mode, setMode] = useState("date");
	const [show, setShow] = useState(false);
	let newDate = date;

	const onChange = (event: any, selectedDate: any) => {
		newDate = selectedDate;
	};

	const showMode = (currentMode: React.SetStateAction<string>) => {
		setShow(true);
		setMode(currentMode);
	};

	const showDatepicker = () => {
		showMode("date");
	};

	const setNewDate = () => {
		setShow(false);
		setDate(newDate);
	};

	return (
		<BottomSheetModalProvider>
			<SafeAreaView style={styles.container}>
				<View style={styles.titleBar}>
					<TouchableOpacity
						onPress={() => {
							navigation.navigate("MyProfile");
						}}
					>
						<Text style={styles.cancelButton}>Cancel</Text>
					</TouchableOpacity>
					<Text style={styles.title1}>Edit Profile</Text>
					<TouchableOpacity onPress={() => {}}>
						<Text style={styles.saveButton}>Save</Text>
					</TouchableOpacity>
				</View>

				<ScrollView showsVerticalScrollIndicator={false}>
					<View style={[styles.container, { paddingTop: 0 }]}>
						<View style={styles.photoLine}>
							<Text style={styles.sectionHeader}>Photos</Text>
						</View>
					</View>

					<View style={styles.body}>
						<View style={styles.bodyContent}>
							<View
								style={[
									styles.menuBox,
									{ backgroundColor: Colors[colorScheme].primary },
								]}
							>
								<TouchableOpacity
									onPress={() => {
										refRBSheet.current.open();
									}}
								>
									<Ionicons
										name="add"
										size={40}
										color={themeColor}
										style={styles.icon}
									></Ionicons>
								</TouchableOpacity>
								{/* {image && <Image source={{ uri: image }} style={styles.menuBox} />}  */}
							</View>

							<View
								style={[
									styles.menuBox,
									{ backgroundColor: Colors[colorScheme].primary },
								]}
							>
								<TouchableOpacity
									onPress={() => {
										refRBSheet.current.open();
									}}
								>
									<Ionicons
										name="add"
										size={40}
										color={themeColor}
										style={styles.icon}
									></Ionicons>
								</TouchableOpacity>
								{/* {image && <Image source={{ uri: image }} style={styles.menuBox} />} */}
							</View>

							<View
								style={[
									styles.menuBox,
									{ backgroundColor: Colors[colorScheme].primary },
								]}
							>
								<TouchableOpacity
									onPress={() => {
										refRBSheet.current.open();
									}}
								>
									<Ionicons
										name="add"
										size={40}
										color={themeColor}
										style={styles.icon}
									></Ionicons>
								</TouchableOpacity>
								{/* {image && <Image source={{ uri: image }} style={styles.menuBox} />} */}
							</View>
						</View>
					</View>

					<View style={styles.container}>
						<View style={styles.photoLine}>
							<Text style={styles.sectionHeader}>Favorite Movies</Text>
						</View>
					</View>

					<View style={styles.body}>
						<View style={styles.bodyContent}>
							<View
								style={[
									styles.menuBox,
									{ backgroundColor: Colors[colorScheme].primary },
								]}
							>
								<TouchableOpacity
									onPress={() => {
										refRBSheet2.current.open();
									}}
								>
									<Ionicons
										name="add"
										size={40}
										color={themeColor}
										style={styles.icon}
									></Ionicons>
								</TouchableOpacity>
							</View>

							<View
								style={[
									styles.menuBox,
									{ backgroundColor: Colors[colorScheme].primary },
								]}
							>
								<TouchableOpacity
									onPress={() => {
										refRBSheet2.current.open();
									}}
								>
									<Ionicons
										name="add"
										size={40}
										color={themeColor}
										style={styles.icon}
									></Ionicons>
								</TouchableOpacity>
							</View>

							<View
								style={[
									styles.menuBox,
									{ backgroundColor: Colors[colorScheme].primary },
								]}
							>
								<TouchableOpacity
									onPress={() => {
										refRBSheet2.current.open();
									}}
								>
									<Ionicons
										name="add"
										size={40}
										color={themeColor}
										style={styles.icon}
									></Ionicons>
								</TouchableOpacity>
							</View>
						</View>
					</View>

					<View
						style={[
							styles.container2,
							{ backgroundColor: Colors[colorScheme].primary },
						]}
					>
						<Text style={styles.addName}>Name</Text>

						<TextInput
							style={[
								styles.inputName,
								{ color: Colors[colorScheme].opposite },
							]}
							value={user.firstName}
						/>
					</View>

					<View
						style={[
							styles.container2,
							{ backgroundColor: Colors[colorScheme].primary },
						]}
					>
						<View
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								backgroundColor: "transparent",
							}}
						>
							<Text style={styles.addName}>Age</Text>

							{show && (
								<TouchableOpacity onPress={setNewDate}>
									<Text style={styles.setNewDateOK}>OK</Text>
								</TouchableOpacity>
							)}
						</View>
						<TouchableOpacity
							onPress={() => {
								show ? setShow(false) : setShow(true); //click once to open (edit) click again to close it (cancel edit)
							}}
						>
							<Text
								style={[
									styles.inputName,
									{ color: Colors[colorScheme].opposite },
								]}
							>
								{user.age}
							</Text>
						</TouchableOpacity>
						{show && (
							<DateTimePicker
								testID="dateTimePicker"
								value={date}
								mode={"date"}
								onChange={onChange}
								display={"spinner"}
							/>
						)}
					</View>

					<View
						style={[
							styles.container2,
							{ backgroundColor: Colors[colorScheme].primary },
						]}
					>
						<Text style={styles.addName}>Pronouns</Text>
						<TextInput
							style={[
								styles.inputName,
								{ color: Colors[colorScheme].opposite },
							]}
							value={user.pronouns}
						/>
					</View>

					<View
						style={[
							styles.container2,
							{ backgroundColor: Colors[colorScheme].primary },
						]}
					>
						<Text style={styles.addName}>Location</Text>
						<TextInput
							style={[
								styles.inputName,
								{ color: Colors[colorScheme].opposite },
							]}
							value={user.location}
						/>
					</View>

					<View
						style={[
							styles.container2,
							{ backgroundColor: Colors[colorScheme].primary },
						]}
					>
						<Text style={styles.addName}>Bio</Text>
						<TextInput
							style={[
								styles.inputName,
								{ color: Colors[colorScheme].opposite },
							]}
							value={user.bio}
						/>
					</View>

					<View style={styles.container}>
						<Text style={styles.sectionHeader}>Interests</Text>
						<View
							style={{
								flex: 1,
								flexDirection: "row",
								flexWrap: "wrap",
								marginLeft: 10,
							}}
						>
							{user.interests.map((item, index) => {
								return (
									<Chip
										mode="outlined"
										textStyle={{
											color: Colors[colorScheme].secondary,
											fontWeight: "bold",
											fontSize: 15,
										}}
										onPress={() => {}}
										style={{
											marginLeft: 15,
											borderColor: themeColor,
											backgroundColor: themeColor,
										}}
									>
										{item}
									</Chip>
								);
							})}
						</View>
					</View>

					<View style={styles.contentContainer}>
						<RBSheet
							ref={refRBSheet}
							animationType={"slide"}
							closeOnDragDown={true}
							closeOnPressMask={true}
							customStyles={{
								wrapper: {
									backgroundColor: "transparent",
								},
								draggableIcon: {
									backgroundColor: "grey",
								},
								container: {
									backgroundColor: Colors[colorScheme].primary,
									borderRadius: 20,
								},
							}}
						>
							<Text style={styles.headerText}>Upload Photo</Text>
							<Text style={styles.headerSubText}>
								Add Images for Others to See
							</Text>
							<View
								style={{
									borderBottomColor: "black",
									borderBottomWidth: 1,
									width: "100%",
									opacity: 0.2,
								}}
							></View>
							<TouchableOpacity
								onPress={takePhoto}
								style={styles.appButtonContainer}
							>
								<Text style={styles.appButtonText}>Take Photo</Text>
							</TouchableOpacity>
							<TouchableOpacity
								onPress={pickImage}
								style={styles.appButtonContainer}
							>
								<Text style={styles.appButtonText}>Choose from Library</Text>
							</TouchableOpacity>
						</RBSheet>

						<RBSheet
							ref={refRBSheet2}
							animationType={"slide"}
							closeOnDragDown={true}
							closeOnPressMask={true}
							customStyles={{
								wrapper: {
									backgroundColor: "transparent",
								},
								draggableIcon: {
									backgroundColor: "grey",
								},
								container: {
									backgroundColor: Colors[colorScheme].primary,
									borderRadius: 20,
								},
							}}
						>
							<Text style={styles.headerText}>Select a Film</Text>
							<View
								style={{
									borderBottomColor: "black",
									borderBottomWidth: 1,
									width: "100%",
									opacity: 0.2,
									marginBottom: 5,
								}}
							></View>
							<SearchBar
								placeholder="Search here"
								//onPress={() => alert("onPress")}
								onChangeText={(text) => console.log(text)}
							/>
						</RBSheet>

						<RBSheet
							ref={refRBSheet3}
							animationType={"slide"}
							closeOnDragDown={true}
							closeOnPressMask={true}
							customStyles={{
								wrapper: {
									backgroundColor: "transparent",
								},
								draggableIcon: {
									backgroundColor: "grey",
								},
								container: {
									backgroundColor: Colors[colorScheme].primary,
									borderRadius: 20,
								},
							}}
						>
							<Text style={styles.headerText}>Basic Info</Text>
							<View
								style={{
									borderBottomColor: "black",
									borderBottomWidth: 1,
									width: "100%",
									opacity: 0.2,
									marginBottom: 5,
								}}
							></View>

							<SearchBar
								placeholder="Search here"
								//onPress={() => alert("onPress")}
								onChangeText={(text) => console.log(text)}
							/>
						</RBSheet>

						<RBSheet
							ref={refRBSheet4}
							animationType={"slide"}
							closeOnDragDown={true}
							closeOnPressMask={true}
							customStyles={{
								wrapper: {
									backgroundColor: "transparent",
								},
								draggableIcon: {
									backgroundColor: "grey",
								},
								container: {
									backgroundColor: Colors[colorScheme].primary,
									borderRadius: 20,
								},
							}}
						>
							<Text style={styles.headerText}>Hobbies & Interests</Text>
							<View
								style={{
									borderBottomColor: "black",
									borderBottomWidth: 1,
									width: "100%",
									opacity: 0.2,
									marginBottom: 5,
								}}
							></View>

							<SearchBar
								placeholder="Search here"
								//onPress={() => alert("onPress")}
								onChangeText={(text) => console.log(text)}
							/>
						</RBSheet>
					</View>
				</ScrollView>
			</SafeAreaView>
		</BottomSheetModalProvider>
	);
};

export default MySettings;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		//marginRight: 12
		//marginTop:10,
	},
	titleBar: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 7,
		marginHorizontal: 10,
		marginBottom: 15,
	},
	title1: {
		fontSize: 20,
		fontWeight: "bold",
	},
	cancelButton: {
		fontSize: 18,
	},
	saveButton: {
		fontSize: 18,
		color: themeColor,
	},
	profileImage: {
		width: 100,
		height: 100,
		borderRadius: 50,
		marginTop: 10,
		marginLeft: 15,
		overflow: "hidden",
	},
	image: {
		flex: 1,
		width: undefined,
		height: undefined,
	},
	sectionHeader: {
		fontWeight: "bold",
		fontSize: 20,
		marginTop: 20,
		marginBottom: 10,
		marginLeft: 25,
	},
	body: {
		flex: 1,
		alignItems: "center",
		padding: 20,
	},
	bodyContent: {
		flexDirection: "row",
		flexWrap: "wrap",
	},
	menuBox: {
		//backgroundColor: "#d0d0d0",
		width: 100,
		height: 100,
		alignItems: "center",
		justifyContent: "center",
		margin: 5,
		borderRadius: 10,
	},
	icon: {
		width: 35,
		height: 50,
		fontWeight: "bold",
	},
	containerEA: {
		alignItems: "center",
		marginTop: -65,
	},
	photoLine: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	appButtonContainer: {
		elevation: 8,
		backgroundColor: themeColor,
		borderRadius: 10,
		paddingVertical: 10,
		paddingHorizontal: 12,
		marginLeft: 20,
		marginRight: 20,
		marginTop: 20,
		//marginBottom: 10
	},
	appButtonText: {
		fontSize: 18,
		color: "white",
		fontWeight: "bold",
		textTransform: "uppercase",
		textAlign: "center",
	},
	headerText: {
		fontSize: 25,
		paddingLeft: 20,
		paddingTop: 10,
		paddingBottom: 10,
		fontWeight: "bold",
		textAlign: "center",
	},
	headerSubText: {
		textAlign: "center",
		opacity: 0.6,
		marginBottom: 10,
	},
	contentContainer: {
		flex: 1,
		alignItems: "center",
		marginTop: 5,
	},
	container2: {
		marginLeft: 20,
		marginRight: 11,
		marginTop: 15,
		borderRadius: 10,
		paddingVertical: 15,
	},
	addName: {
		fontSize: 17,
		color: themeColor,
		fontWeight: "bold",
		marginLeft: 10,
	},
	inputName: {
		height: 40,
		padding: 10,
		fontSize: 17,
		opacity: 0.6,
		color: "grey",
	},
	pickedDateContainer: {
		padding: 20,
		backgroundColor: "#eee",
		borderRadius: 10,
	},
	pickedDate: {
		fontSize: 18,
		color: "black",
	},
	btnContainer: {
		padding: 30,
	},
	// This only works on iOS
	datePicker: {
		width: 320,
		height: 260,
		display: "flex",
		justifyContent: "center",
		alignItems: "flex-start",
	},
	itemStyle: {
		padding: 10,
	},
	setNewDateOK: {
		color: themeColor,
		marginRight: 30,
		fontSize: 20,
	},

	fairSpacing: {
		paddingTop: 10,
	},
});

const basicInfo = [
	"Single",
	"Spiritual",
	"Voter",
	"Libra",
	"Vaccinated",
	"Mother",
	"Dog Lover",
	"ADD +",
];

const myInterests = [
	"Photography",
	"Modeling",
	"Hiking",
	"Foodie",
	"Reading",
	"Wine",
	"Baking",
	"ADD +",
];
