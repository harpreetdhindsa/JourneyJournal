import React, { useState, useEffect, useRef } from "react";
import { View, Text, Image, Button, TextInput, Alert, Keyboard } from "react-native";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CountryJournalStyles as styles } from "../styles/CountryJournalStyles";
import Toast from "react-native-toast-message";

// Component Props
type JournalProps = {
  countryName: string; // we only pass countryName, as it's the key for storage
};

// CountryJournal component
const CountryJournal = ({ countryName }: JournalProps) => {
  // === Local states ===
  const [photoUri, setPhotoUri] = useState<string | null>(null); // to store selected photo URI
  const [note, setNote] = useState(""); // to store journal text
  const [isEditing, setIsEditing] = useState(true); // flag to control edit/view mode
  const noteInputRef = useRef<TextInput>(null); // reference for text input to blur keyboard

  // === Load saved data on component mount ===
  useEffect(() => {
    const loadJournal = async () => {
      try {
        const savedData = await AsyncStorage.getItem(`journal_${countryName}`);
        if (savedData) {
          const parsed = JSON.parse(savedData);
          setPhotoUri(parsed.photoUri);
          setNote(parsed.note);
          setIsEditing(false); // start in view mode if saved data exists
        }
      } catch (err) {
        console.error("Error loading journal:", err);
      }
    };
    loadJournal();
  }, []);

  // === Pick Image from Gallery ===
  const pickImage = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
     if (!permission.granted) {
      Toast.show({
        type: "error",
        text1: "Permission required",
        text2: "Please grant photo gallery access.",
      });
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: "images",
      allowsEditing: false,
      quality: 0.8,
    });

    if (!result.canceled) {
      setPhotoUri(result.assets[0].uri);
      setIsEditing(true); // allow editing again if new image selected
      Toast.show({
        type: "info",
        text1: "Photo added successfully!",
      });
    }
  };

  // === Save journal data to AsyncStorage ===
  const saveJournal = async () => {
    try {
      await AsyncStorage.setItem(
        `journal_${countryName}`,
        JSON.stringify({ photoUri, note })
      );
   
      Keyboard.dismiss(); // close keyboard
      noteInputRef.current?.blur(); // blur text input
      setIsEditing(false); // switch to view mode after saving
        Toast.show({
        type: "success",
        text1: "Saved!",
        text2: "Your journal entry has been saved.",
      });
    } catch (err) {
      console.error("Save error:", err);
    }
  };

  // === Delete / Clear saved data ===
  const clearJournal = async () => {
//if there is nothing to delete
    if (!photoUri && note.trim().length === 0) {
    Toast.show({
      type: "info",
      text1: "Nothing to clear",
      text1Style: { color: "#6B7280", fontWeight: "500" },
      position: "top",
      topOffset: 60,
    });
    return;
  }
    Alert.alert(
      "Delete Journal?",
      "Are you sure you want to clear your saved photo and note?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Yes, Delete",
          style: "destructive",
          onPress: async () => {
            try {
              await AsyncStorage.removeItem(`journal_${countryName}`);
              setPhotoUri(null);
              setNote("");
              setIsEditing(true); // switch back to edit mode after clearing
              Toast.show({
        type: "info",
        text1: "Journal entry deleted",
      });
            } catch (err) {
                console.error("Error deleting journal:", err);
              Toast.show({
        type: "error",
        text1: "Error deleting entry",
      });
            }
          },
        },
      ]
    );
  };

  // === Render Journal Section ===
  return (
    <View style={styles.journalContainer}>
      <Text style={styles.journalTitle}>My Country Journal</Text>

      {/* show image if added otherwise show placeholder text */}
      {photoUri ? (
        <Image source={{ uri: photoUri }} style={styles.journalImage} />
      ) : (
        <Text style={styles.noPhotoText}>No photo added yet.</Text>
      )}

      {/* conditionally render text input or static text */}
      {isEditing ? (
        <TextInput
          ref={noteInputRef}
          placeholder="Write something about this country..."
          multiline
          value={note}
          onChangeText={setNote}
          style={styles.journalNoteInput}
          textAlignVertical="top"
        />
      ) : (
        <Text style={styles.journalTextView}>
          {note.trim().length > 0 ? note : "No notes added yet."}
        </Text>
      )}

      {/* buttons shown at bottom of journal card */}
      <View style={styles.footerButtons}>
        {isEditing ? (
          <>
            <Button title="📸Add" onPress={pickImage} />
            <Button title="Save" onPress={saveJournal} />
            <Button title="Clear" color="#dc2626" onPress={clearJournal} />
          </>
        ) : (
          <>
            <Button title="Edit" onPress={() => setIsEditing(true)} />
            <Button title="Delete" color="#dc2626" onPress={clearJournal} />
          </>
        )}
      </View>
    </View>
  );
};

export default CountryJournal;
