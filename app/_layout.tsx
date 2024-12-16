import { Stack } from 'expo-router';
import { NhostApolloProvider } from '@nhost/react-apollo';
import { NhostProvider } from '@nhost/react';
// import { nhost } from './nhost';

export default function Layout() {
  return (
    // <NhostProvider nhost={nhost}>
      // <NhostApolloProvider nhost={nhost}>
    <Stack 
      screenOptions={{
        headerStyle: { backgroundColor: '#6200ee' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen name="index" options={{ title: 'TO-DO APP' }} />
    </Stack>
    // </NhostApolloProvider>
    // </NhostProvider>
  );
}

