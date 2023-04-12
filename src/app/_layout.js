// import stack component from expo router
import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

// disable auto hide splash screen
SplashScreen.preventAutoHideAsync();

// define layout component
const Layout = () => {
  // load fonts using hook
  const [fontsLoaded] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  });

  // callback to hide splash screen once fonts are loaded
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  // return null if fonts are not loaded
  if (!fontsLoaded) {
    return null;
  }
  // render stack component with onLayoutRootView callback
  return <Stack onLayout={onLayoutRootView} />;
};

// export layout component as default export
export default Layout;
