// import libs and components
import { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import styles from './topjobs.style';
import { COLORS, SIZES } from '../../../constants';
import TopJobCard from '../../common/cards/top/TopJobCard';
import useFetch from '../../../hook/useFetch';

const Topjobs = () => {
  // initialize router and loading/error states
  const router = useRouter();

  const { data, isLoading, error } = useFetch('search', {
    query: 'DevOps Engineer',
    num_pages: 1
  })

  // render view for featured jobs
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Featured Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>See all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          // display activity indicator if still loading
          <ActivityIndicator size='large' color={COLORS.primary} />  
        ) : error ? (
          // display error message if error occurs
          <Text>Oops. Something's not right here.</Text>
        ) : (
          // else, display featured jobs
          <FlatList 
            data={data}
            renderItem={({ item }) => (
              <TopJobCard
                item={item}
              />
            )}
            keyExtractor={item => item?.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  )
}

// export TopJobs component as default
export default Topjobs;