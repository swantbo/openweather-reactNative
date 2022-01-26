import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AppProider } from './app/context';
import MainNav from './app/routes/MainNav';


export default function App() {
  return (
    <AppProider>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <MainNav />
      </View>
    </AppProider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
