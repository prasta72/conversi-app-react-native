import React from 'react'

import {Provider as PaperProvider, DefaultTheme , Appbar} from 'react-native-paper';
import {
  ScrollView,
  StyleSheet,
} from 'react-native';
import Form from './components/Form';
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#239ed9',
    accent: '#FFC107',
  },
};

const Main = () => {
  return (
    <PaperProvider theme={theme}>
      <Appbar.Header style={styles.appbarContent}>
        <Appbar.Content title="Konversi Anacaraka" />
      </Appbar.Header>
      <ScrollView style={styles.safeArea}>
        <Form />
      </ScrollView>
    </PaperProvider>
  );
};


const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollView: {
    flex: 1,
  },
  container: {
    backgroundColor: 'white',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  appbarContent: {
    elevation: 20,
  },
});
export default Main
