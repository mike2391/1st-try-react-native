import { ClerkProvider } from "@clerk/clerk-expo";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {
  useFonts({
    outfit: require("./../assets/fonts/Outfit-Regular.ttf"),
    'outfit-medium': require("./../assets/fonts/Outfit-Medium.ttf"),
    'outfit-bold': require("./../assets/fonts/Outfit-Bold.ttf"),
  });
  return (
    <ClerkProvider
      publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
    </ClerkProvider>
  );
}
