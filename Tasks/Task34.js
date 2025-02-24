import {Text, View, StyleSheet} from 'react-native';
import useCurrentTime from './custom-hooks/useCurrentTime';

function Task34() {
  const time = useCurrentTime();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{time}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 30, 
    fontWeight: 'bold', 
    color: '#333',
  },
});

export default Task34;
