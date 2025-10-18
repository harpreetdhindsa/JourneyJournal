import React from "react";
import {View,Text,Image,TouchableWithoutFeedback,Keyboard,Platform,KeyboardAvoidingView,} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { DetailScreenStyles as styles } from "../styles/DetailsScreenStyles";
import CountryJournal from "./CountryJournal";

type DetailsScreenProps = {
  route: {
    params: {
      country: {
        name: string;
        capital: string;
        region: string;
        population?: number;
        flag: string;
      };
    };
  };
};

const DetailsScreen = ({ route }: DetailsScreenProps) => {
  const { country } = route.params; //destructuring country object from route.params

  return (
   
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAwareScrollView
            contentContainerStyle={styles.scrollContainer}
            keyboardShouldPersistTaps="handled"
            enableOnAndroid={true}
            extraScrollHeight={60}
          >
            {/*  Country Card  */}
            <View style={styles.countryCard}>
              <Image source={{ uri: country.flag }} style={styles.flagImage} />
              <Text style={styles.countryName}>{country.name}</Text>

              <View style={styles.infoRow}>
                <Text style={styles.label}>Capital:</Text>
                <Text style={styles.value}>{country.capital}</Text>
              </View>

              <View style={styles.infoRow}>
                <Text style={styles.label}>Region:</Text>
                <Text style={styles.value}>{country.region}</Text>
              </View>

              {country.population && (
                <View style={styles.infoRow}>
                  <Text style={styles.label}>Population:</Text>
                  <Text style={styles.value}>
                    {country.population.toLocaleString()}
                  </Text>
                </View>
              )}
            </View>

            {/* Journal Section */}
            <View style={styles.journalCard}>
              {/* passing countryName prop to countryjournal and this is prop drilling parent is passing date to child*/}
              <CountryJournal countryName={country.name} /> 
            </View>
          </KeyboardAwareScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
   
  );
};

export default DetailsScreen;
