import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ToastAndroid
} from 'react-native';
import {TextInput , Button, Text} from 'react-native-paper';
import Clipboard from '@react-native-clipboard/clipboard';
import {useNavigation} from '@react-navigation/native';

const Form = () => {
  const [anacaraka, setAnacaraka] = useState('');
  const [alfabet, setAlfabet] = useState('');
  const [huruf, setHuruf] = useState([]);
  const [keterangan, setKeterangan] = useState([]);
  const [value, setValue] = useState([]);
  const [sum, setSum] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const navigation = useNavigation();

  let tampung = [];
  const handleCopyButton = () => {
    let copiedText = huruf
      .map((item, index) => `${item} = ${keterangan[index]}`)
      .join('\n');
    if (sum) {
      copiedText += `\n\nHasilnya = ${sum}`;
    }
    Clipboard.setString(copiedText);
    ToastAndroid.show('berhasil di salin', ToastAndroid.SHORT);
  };

  const handleSubmitAnacaraka = () => {
    if(anacaraka == ''){
      ToastAndroid.show('input kosong', ToastAndroid.SHORT);
      return;
    }
    let trim = anacaraka.replace(/\s+/g, '');
    let container = trim.toLowerCase();
    for (let i = 0; i <= container.length - 1; i++) {
      tampung[i] = container.charAt(i);
    }
    const vokal = ['a', 'u', 'i', 'e', 'o'];
    const sastra = [
      'ha',
      'na',
      'ca',
      'ra',
      'ka',
      'da',
      'ta',
      'sa',
      'wa',
      'la',
      'ma',
      'ga',
      'ba',
      'nga',
      'pa',
      'ja',
      'ya',
      'nya',
    ];

    for (let i = 0; i <= tampung.length - 1; i++) {
      for (let a = 0; a <= vokal.length; a++) {
        if (tampung[i] == vokal[a]) {
          tampung[i] = 'a';
        }
      }
    }

    for (let i = 0; i < tampung.length - 1; i++) {
      if (tampung[i + 1] == 'a') {
        tampung[i] += 'a';
        tampung.splice(i + 1, 1);
      }
    }

    for (let i = 0; i <= tampung.length - 1; i++) {
      if (tampung[i] == 'n' && tampung[i + 1] == 'ya') {
        tampung[i] = 'nya';
        tampung.splice(i + 1, 1);
      } else if (tampung[i] == 'n' && tampung[i + 1] == 'ga') {
        tampung[i] = 'nga';
        tampung.splice(i + 1, 1);
      } else if (tampung[i] == 'n' && tampung[i + 1] == 'g') {
        tampung[i] = 'nga';
        tampung.splice(i + 1, 1);
      }
    }

    for (let i = 0; i < tampung.length; i++) {
      if (tampung[i] === ' ') {
        tampung.splice(i, 1);
      }
    }

    for (let i = 0; i <= tampung.length; i++) {
      if (tampung[i] == 'a') {
        tampung[i] = 'ha';
      } else if (tampung[i] == 'b') {
        tampung[i] = 'ba';
      } else if (tampung[i] == ' a') {
        tampung[i] = 'ha';
      } else if (tampung[i] == 'c') {
        tampung[i] = 'ca';
      } else if (tampung[i] == 'd') {
        tampung[i] = 'da';
      } else if (tampung[i] == 'e') {
        tampung[i] = 'ha';
      } else if (tampung[i] == 'f') {
        tampung[i] = 'pa';
      } else if (tampung[i] == 'g') {
        tampung[i] = 'ga';
      } else if (tampung[i] == 'h') {
        tampung[i] = 'ha';
      } else if (tampung[i] == 'i') {
        tampung[i] = 'ha';
      } else if (tampung[i] == 'j') {
        tampung[i] = 'ja';
      } else if (tampung[i] == 'k') {
        tampung[i] = 'ka';
      } else if (tampung[i] == 'l') {
        tampung[i] = 'la';
      } else if (tampung[i] == 'm') {
        tampung[i] = 'ma';
      } else if (tampung[i] == 'n') {
        tampung[i] = 'na';
      } else if (tampung[i] == 'o') {
        tampung[i] = 'ha';
      } else if (tampung[i] == 'p') {
        tampung[i] = 'pa';
      } else if (tampung[i] == 'q') {
        tampung[i] = 'ka';
      } else if (tampung[i] == 'r') {
        tampung[i] = 'ra';
      } else if (tampung[i] == 's') {
        tampung[i] = 'sa';
      } else if (tampung[i] == 't') {
        tampung[i] = 'ta';
      } else if (tampung[i] == 'u') {
        tampung[i] = 'ha';
      } else if (tampung[i] == 'v') {
        tampung[i] = 'pa';
      } else if (tampung[i] == 'w') {
        tampung[i] = 'wa';
      } else if (tampung[i] == 'x') {
        tampung[i] = 'ca';
      } else if (tampung[i] == 'y') {
        tampung[i] = 'ya';
      } else if (tampung[i] == 'z') {
        tampung[i] = 'za';
      }
    }

    let keterangan = [
      'di ubun ubun',
      'di antara kedua alis',
      'di dalam kedua mata',
      'di kedua telinga',
      'di dalam hidung',
      'dalam mulut',
      'di dalam dada',
      'di tangan kanan',
      'di tangan kiri',
      'di hidung',
      'di dalam dada kanan',
      'di dalam  dad kiri',
      'di pusar',
      'didalam alat kelamin',
      'di dalam pantat',
      'di kedua tungkai kaki',
      'di tulang belakang',
      'di tulang ekor',
    ];
    setHuruf(tampung);

    let ket = [];
    let sum = [];

    for (let k = 0; k <= tampung.length - 1; k++) {
      for (let z = 0; z <= sastra.length; z++) {
        if (tampung[k] == sastra[z]) {
          ket[k] = keterangan[z] + '=' + (z + 1);
          sum[k] = z + 1;
        }
      }
    }

    setKeterangan(ket);
    const total = sum.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);

    setSum(total);
  };

  const handleReset = () => {
    setAnacaraka('');
    setAlfabet('');
    setHuruf([]);
    setKeterangan([]);
    setSum('');
  };

  const handleSubmitAlfabet = () => {
    if (alfabet == '') {
      ToastAndroid.show('input kosong', ToastAndroid.SHORT);
      return;
    }
    let name = alfabet.toLowerCase();
    let namefix = name.split(' ').join('');
    let tampung = [];
    let alfa = [
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z',
    ];
    if (namefix != '') {
      for (let i = 0; i <= namefix.length - 1; i++) {
        tampung[i] = namefix.charAt(i);
      }

      setHuruf(tampung);

      let value = [];

      for (let i = 0; i <= tampung.length - 1; i++) {
        for (let j = 0; j <= alfa.length; j++) {
          if (tampung[i] == alfa[j]) {
            value[i] = j + 1;
          }
        }
      }

      setKeterangan(value);

      let hasil = 0;
      for (let k = 0; k <= value.length - 1; k++) {
        hasil += value[k];
      }
      setSum(hasil);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <TextInput
          mode="outlined"
          value={anacaraka}
          label="Masukan Anacaraka"
          placeholder="Type something"
          right={<TextInput.Affix text="/100" />}
          onChangeText={setAnacaraka}
        />
        <TextInput
          mode="outlined"
          label="Masukan Alfabet"
          value={alfabet}
          placeholder="Type something"
          right={<TextInput.Affix text="/100" />}
          onChangeText={setAlfabet}
        />
        <View style={styles.buttonContainer}>
          <Button mode="contained" onPress={handleSubmitAnacaraka}>
            Submit Anacaraka
          </Button>
          <Button mode="contained" onPress={handleSubmitAlfabet}>
            Submit Alfabet
          </Button>
          <Button mode="contained" onPress={handleReset}>
            Reset
          </Button>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.result}>
          <View>
            {huruf &&
              huruf.map((item, index) => (
                <Text key={index} variant="bodyLarge">
                  {item + ' ' + '='}
                </Text>
              ))}
          </View>
          <View>
            {keterangan &&
              keterangan.map((item, index) => (
                <Text variant="bodyLarge" key={index}>
                  {item}
                </Text>
              ))}
          </View>
        </View>
        {sum && (
          <Text variant="bodyLarge" style={styles.hasil}>
            Hasilnya = {sum}
          </Text>
        )}
        <View>
          {sum && (
            <Button mode="contained"  onPress={handleCopyButton}>
              Copy
            </Button>
          )}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap:10,
    padding: 20,
  },
  buttonContainer:{
    flex:1,
    gap:7,
  },
  hasil:{
    paddingLeft:10,
    paddingBottom:10
  },
  result: {
    flexDirection: 'row', 
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft:10
  }
});

export default  Form;
