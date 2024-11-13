import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { AirbnbRating } from "react-native-ratings";
import CheckBox from "@react-native-community/checkbox";

interface ReviewComponentProps {}

const ReviewComponent: React.FC<ReviewComponentProps> = () => {
  const [rating, setRating] = useState<number>(0);
  const [reviewText, setReviewText] = useState<string>("");
  const [acceptedTerms, setAcceptedTerms] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const submitReview = () => {
    // Handle submission logic, like sending the review to a server
    setSubmitted(true);
  };

  return (
    <View style={styles.container}>
      <AirbnbRating
        count={5}
        reviews={["Terrible", "Bad", "Okay", "Good", "Great"]}
        defaultRating={0}
        size={20}
        onFinishRating={(rating: number) => setRating(rating)}
      />
      <TextInput
        style={styles.input}
        placeholder="Write your review..."
        value={reviewText}
        onChangeText={(text: string) => setReviewText(text)}
        multiline
      />
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={acceptedTerms}
          onValueChange={(value: boolean) => setAcceptedTerms(value)}
        />
        <Text style={styles.label}>I accept the terms and conditions</Text>
      </View>
      <Button title="Submit Review" onPress={submitReview} />
      {submitted && (
        <Text style={styles.thankYou}>Thank you for your review!</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
  },
  input: {
    height: 100,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 20,
    width: "100%",
    padding: 10,
    textAlignVertical: "top",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  label: {
    margin: 8,
  },
  thankYou: {
    marginTop: 20,
    color: "green",
  },
});

export default function App() {
  return <ReviewComponent />;
}
