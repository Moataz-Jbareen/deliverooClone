import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React from 'react'
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { Link } from "expo-router";



const SearchBar = ()=>{
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchSection}>
        <View style={styles.searchField}>
          <Ionicons
            style={styles.searchIcon}
            name="search-outline"
            size={20}
            color={Colors.medium}
          />

          <TextInput style={styles.input} placeholder="Resurants,dishes " />
        </View>

        <Link href={"/"} asChild>
          <TouchableOpacity style={styles.optionButton}>
            <Ionicons name="options-outline" size={20} color={Colors.primary} />
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );

}

const CustomHeader = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => {}}>
          <Image
            style={styles.bike}
            source={require("@/assets/images/racing.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.titleContainer}>
          <Text style={styles.title}> Delivery . Now</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.subtitle}>Zalafe, Ps</Text>
            <Ionicons name="chevron-down" size={20} color={Colors.primary} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.profileButton}>
          <Ionicons name="person-outline" size={24} color={"#20E1B2"} />
        </TouchableOpacity>
      </View>
      <SearchBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#ccc",
  },
  container: {
    flexDirection: "row",
    height: 60,
    width: "100%",
    backgroundColor: "#fff",
    gap: 20,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 18,
  },
  bike: {
    height: 30,
    width: 30,
    resizeMode: "contain",
    marginBottom: 10,
  },
  titleContainer: {
    flex: 1,
  },
  profileButton: {
    backgroundColor: Colors.lightGrey,
    padding: 10,
    borderRadius: 50,
  },
  title: {
    fontSize: 14,
    color: Colors.medium,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  searchContainer: {
    height: 60,
    backgroundColor: "#fff",
  },
  searchSection: {
    flexDirection: "row",
    gap: 10,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  searchField: {
    flex: 1,
    backgroundColor: Colors.lightGrey,
    borderRadius: 9,
    flexDirection:'row',
    alignItems: "center",
  },
  optionButton: {
    padding: 10,
    borderRadius: 10,
  },
  input:{
    padding: 10,
    color:"#424242"
  },
  searchIcon:{
    paddingLeft: 10,

  }
});







export default CustomHeader


