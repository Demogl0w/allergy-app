import React, { Component } from "react";
// import { Navigator } from "react-native";
import { StackNavigator } from "react-navigation";
import SearchYelp from "./SearchYelp";
import ResultsYelp from "./ResultsYelp";

class AppNavigator extends Component {
  // renderScene(route, navigator) {
  //   var globalNavigatorProps = { navigator };

  //   switch (route.ident) {
  //     case "SearchYelp":
  //       return <SearchYelp {...globalNavigatorProps} />;

  //     case "Results":
  //       return <ResultsYelp {...globalNavigatorProps} data={route.data} />;
  //   }
  // }
  const App = StackNavigator({
    // Home: { screen: HomeScreen },
    SearchYelp: { screen: SearchYelp },
    ResultsYelp: {screen: ResultsYelp},
  });

  render() {
    return (
      <Navigator
        initialRoute={this.props.initialRoute}
        renderScene={this.renderScene}
        configureScene={route => Navigator.SceneConfigs.FloatFromRight}
      />
    );
  }
}

export default AppNavigator;
