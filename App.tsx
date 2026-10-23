import { Text, View } from 'react-native';
import { useAnimatedProps } from 'react-native-reanimated';

export default function App() {
  // A plain object, not a SharedValue. This throws during hook initialization
  // in development, even without attaching the result to an animated view.
  useAnimatedProps(() => ({
    payload: { value: 0.5 },
  }));

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>PASS: the plain object was accepted.</Text>
    </View>
  );
}
