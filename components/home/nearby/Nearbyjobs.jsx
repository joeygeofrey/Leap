// import libs and components
import { useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import styles from './nearbyjobs.style';
import { COLORS, SIZES } from '../../../constants';
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';
import useFetch from '../../../hook/useFetch';

const Nearbyjobs = () => {
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
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
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
          data?.map((job) => (
            <NearbyJobCard 
              job={job}
              key={`nearby-job-${job?.job_id}`}
              handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
            />
          ))
        )}
      </View>
    </View>
  )
}

// export Nearbyjobs component as default
export default Nearbyjobs;