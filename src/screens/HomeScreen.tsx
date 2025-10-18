import React, { useEffect, useState } from "react";
import { TouchableOpacity ,Keyboard} from "react-native"; //for adding touch feature
import { useNavigation } from "@react-navigation/native"; //to navigate between screens
import { View, Text, FlatList, Image, ActivityIndicator, TextInput } from "react-native"; //activityIndicator to show loader 
import { fetchCountries } from "../services/api";
import { useLayoutEffect } from "react";
import { homeScreenStyles as styles, headerStyles } from "../styles/HomeScreenStyles";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { ScreenNavigationParams } from "../../App";



type Country = {
  name: string;
  capital: string;
  region: string;
  flag: string;
};

const HomeScreen = () => {
  //states 
  const [countries, setCountries] = useState<Country[]>([]);
  const [filtered, setFiltered] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const navigation = useNavigation<NativeStackNavigationProp<ScreenNavigationParams>>();
  //useNavigation is a hook and NativeStackNavigationProp is generic from react that tells typescript that this Screen..Params prop belongs to native stack validator

  //useLayoutEffect runs before render so it can show header and its styles immediatly unlike useEffect which runs after render 
useLayoutEffect(() => {
  navigation.setOptions({
    title: "Journey Journal 🌍",
    headerStyle: headerStyles.headerStyle,
    headerTintColor: headerStyles.headerTintColor,
  });
}, [navigation]);


  //hook to fetch country data on page load 
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchCountries();
        setCountries(data);
        setFiltered(data);
      } catch (err) {
        setError("Failed to load countries.");
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  // Filter countries as user types and this "text" is automatically coming from react native input system(Os Keyboard event)
  const handleSearch = (text: string) => {
    setSearch(text);
    const results = countries.filter((country) =>
      country.name.toLowerCase().includes(text.toLowerCase())
    );
    setFiltered(results);
  };

  //if loading is true then show loader which is provided from ActivityIndiactor 
  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#007AFF" />
        <Text>Loading countries...</Text>
      </View>
    );
  }

  //if error then show simple error 
  if (error) {
    return (
      <View style={styles.centered}>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <TextInput
        placeholder="Search country..."
        value={search}
        onChangeText={handleSearch}
        style={styles.searchInput}
      />

      {/*  Country List in FlatList that takes 3 props data,keyExtractorand renderItem */}
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.name}
        keyboardShouldPersistTaps="always" 
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => {
        Keyboard.dismiss();
        navigation.navigate("Details", { country: item });
      }}>
            {/* this is the syntax for navigate -*/}
            <View style={styles.card}>
              <Image source={{ uri: item.flag }} style={styles.flag} />
              <View>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.details}>Capital: {item.capital}</Text>
                <Text style={styles.details}>Region: {item.region}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HomeScreen;
