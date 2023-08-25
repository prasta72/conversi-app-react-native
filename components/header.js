import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Konversi Anacaraka</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'black', // Warna latar belakang header
    padding: 10,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    color: 'white', // Warna teks header
  },
});

export default Header;
