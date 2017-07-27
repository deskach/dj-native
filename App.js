import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import Bananas from './src/Bananas';
import LotsOfStyles from "./src/LotsOfStyles";
import FixedDimensionsBasics from "./src/FixedDimensionsBasics";
import AlignItemsBasics from "./src/AlignItemsBasics";
import PizzaTranslator from "./src/PizzaTranslator";
import Touchables from "./src/Touchables";
import SectionListBasics from "./src/SectionListBasics";

export default class App extends React.Component {
  render() {
    console.log('Testing');

    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <Text>Hello World!\n</Text>
        <PizzaTranslator/>
        <Bananas/>
        <LotsOfStyles/>
        <FixedDimensionsBasics/>
        <AlignItemsBasics/>
        <Touchables/>
        <SectionListBasics/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
