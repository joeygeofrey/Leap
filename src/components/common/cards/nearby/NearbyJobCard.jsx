// import libs and components
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./nearbyjobcard.style";
import { checkImageURL } from "../../../../utils";

// functional component that recieves job and navigation function as props
const NearbyJobCard = ({ job, handleNavigate }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
        {/* check if job has logo, else display placeholder image */}
        <Image
          source={
            checkImageURL(job.employer_logo)
              ? { uri: job.employer_logo }
              : require("../../../../assets/images/job.jpg")
          }
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        {/* job title */}
        <Text style={styles.jobName} numberOfLines={1}>
          {job.job_title}
        </Text>
        {/* job type and city */}
        <Text style={styles.jobType}>
          {job.job_city && job.job_employment_type
            ? `${job.job_city}, ${job.job_employment_type}`
            : `${job.job_city || job.job_employment_type}`}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

// export NearbyJobCard component as default
export default NearbyJobCard;
