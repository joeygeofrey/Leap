// import libs and components
import { useState } from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Topjobs, Popularjobs, Welcome, ScreenHeaderBtn, Nearbyjobs } from '../components';
import { COLORS, icons, images, SIZES } from '../constants';

// define home component
const Home = () => {
    // use router hook
    const router = useRouter();
    // render safeareaview with white bg
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            {/* stack screen */}
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightwhite },
                    headerShadowVisible: false,
                    headerLeft: () => ( <ScreenHeaderBtn iconURL={icons.menu} dimenstion="60%" />),
                    headerRight: () => ( <ScreenHeaderBtn iconURL={images.profile} dimenstion="100%" />),
                    headerTitle: ''
                }}
            />
            {/* scrollable view */}
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* main content container */}
                <View
                    style={{
                        flex: 1,
                        padding: SIZES.medium,
                    }}
                />
                    {/* Welcome component */}
                    <Welcome

                    />

                    {/* Topjobs component */}
                    <Topjobs

                    />

                    {/* Nearbyjobs component */}
                    <Nearbyjobs

                    />


            </ScrollView>
        </SafeAreaView>
    )
}

// export home component as default export
export default Home;