// import libs and components
import React, { useEffect, useState } from 'react';
import { SafeAreaView, ActivityIndicator, FlatList, Image, TouchableOpacity, View, Text } from 'react-native';
import { Stack, useRouter, useSearchParams } from 'expo-router';
import axios from 'axios';
import { ScreenHeaderBtn, NearbyJobCard } from '../../components';
import { COLORS, icons, SIZES } from '../../constants';
import styles from '../../styles/search';
import { RAPID_API_KEY } from "@env";

// define job search component
const JobSearch = () => {
    // get search term from query parameters
    const params = useSearchParams();
    // use router hook to navigate between screens
    const router = useRouter()

    // state variables for search results, loading, error, and pagination
    const [searchResult, setSearchResult] = useState([]);
    const [searchLoader, setSearchLoader] = useState(false);
    const [searchError, setSearchError] = useState(null);
    const [page, setPage] = useState(1);

    // fetch search results from API
    const handleSearch = async () => {
        setSearchLoader(true);
        setSearchResult([])

        try {
            // options including API key, host, query params for axios request
            const options = {
                method: "GET",
                url: `https://jsearch.p.rapidapi.com/search`,
                headers: {
                    "X-RapidAPI-Key": RAPID_API_KEY,
                    "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
                },
                params: {
                    query: params.id,
                    page: page.toString(),
                },
            };

            // make axios request and set search results to the response data
            const response = await axios.request(options);
            setSearchResult(response.data.data);
        } catch (error) {
            // set search error if error occurs during request
            setSearchError(error);
            console.log(error);
        } finally {
            // set search loader to false to hide loading indicator
            setSearchLoader(false);
        }
    };

    // func to handle pagination
    const handlePagination = (direction) => {
        if (direction === 'left' && page > 1) {
            setPage(page - 1)
            handleSearch()
        } else if (direction === 'right') {
            setPage(page + 1)
            handleSearch()
        }
    }

    // call handleSearch function on component mount to fetch initial search results
    useEffect(() => {
        handleSearch()
    }, [])

    // render search screen
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.left}
                            dimension='60%'
                            handlePress={() => router.back()}
                        />
                    ),
                    headerTitle: "",
                }}
            />

            <FlatList
                data={searchResult}
                renderItem={({ item }) => (
                    <NearbyJobCard
                        job={item}
                        handleNavigate={() => router.push(`/job-details/${item.job_id}`)}
                    />
                )}
                keyExtractor={(item) => item.job_id}
                contentContainerStyle={{ padding: SIZES.medium, rowGap: SIZES.medium }}
                ListHeaderComponent={() => (
                    <>
                        <View style={styles.container}>
                            <Text style={styles.searchTitle}>{params.id}</Text>
                            <Text style={styles.noOfSearchedJobs}>Job Opportunities</Text>
                        </View>
                        <View style={styles.loaderContainer}>
                            {searchLoader ? (
                                <ActivityIndicator size='large' color={COLORS.primary} />
                            ) : searchError && (
                                <Text>Oops something went wrong</Text>
                            )}
                        </View>
                    </>
                )}
                ListFooterComponent={() => (
                    <View style={styles.footerContainer}>
                        <TouchableOpacity
                            style={styles.paginationButton}
                            onPress={() => handlePagination('left')}
                        >
                            <Image
                                source={icons.chevronLeft}
                                style={styles.paginationImage}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                        <View style={styles.paginationTextBox}>
                            <Text style={styles.paginationText}>{page}</Text>
                        </View>
                        <TouchableOpacity
                            style={styles.paginationButton}
                            onPress={() => handlePagination('right')}
                        >
                            <Image
                                source={icons.chevronRight}
                                style={styles.paginationImage}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </SafeAreaView>
    )
}

// export job search component
export default JobSearch;
