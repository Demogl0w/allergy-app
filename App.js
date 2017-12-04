import { Constants, Location, Permissions } from "expo";
import React from "react";
import { Button, Platform, StyleSheet, Text, View } from "react-native";

// import SearchYelp from "./components/SearchYelp";
// import sampleApi from "./SampleAPI";

export default class App extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     position: "unknown",
  //     textToDisplay: "No pizza yet.", //state value that will display API response
  //   };
  // }
  state = {
    errorMessage: null,
    location: {
      coords: {
        latidude: 33.4155105,
        longitude: -111.910516,
      },
    },
    textToDisplay: "No pizza yet.",
  };

  componentWillMount() {
    if (Platform.OS === "android" && !Constants.isDevice) {
      this.setState({
        errorMessage:
          "Oops, this will not work on Sketch in an Android emulator. Try it on your device!",
      });
    } else {
      // this._getLocationAsync();
    }
  }

  // _getLocationAsync = async () => {
  //   let { status } = await Permissions.askAsync(Permissions.LOCATION);
  //   if (status !== "granted") {
  //     this.setState({
  //       errorMessage: "Permission to access location was denied",
  //     });
  //   }

  //   let location = await Location.getCurrentPositionAsync({});
  //   this.setState({ location });
  // };

  // componentDidMount() {
  //   // navigator.geolocation.getCurrentPosition(
  //   //   currentPosition => {
  //   //     var position = JSON.stringify(currentPosition);
  //   //     this.setState({ position });
  //   //   },
  //   //   error => alert(JSON.stringify(error)),
  //   //   { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
  //   // );
  // }

  // Action that is called when button is pressed
  retrieveData() {
    this.setState({ textToDisplay: sampleApi.get() });
  }

  render() {
    let text = "Shifting satellites...";
    if (this.state.errorMessage) {
      text = this.state.errorMessage;
    } else if (this.state.location) {
      text = JSON.stringify(this.state.location);
    }

    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Text>
          <Text style={styles.title}>Initial position: </Text>
          {text}
        </Text>
        <Button
          onPress={() => {}}
          // onPress={() => this.retrieveData()}
          title="Search Yelp for 'pizza'"
          color="#841584"
        />

        <Text>{this.state.textToDisplay}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
