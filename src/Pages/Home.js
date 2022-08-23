import React,{useState} from 'react';
import { Box} from '@mui/material';
import HomeBanner from '../Components/HomeBanner';
import SearchBox from '../Components/SearchBox';
import ExerciseSection from '../Components/ExerciseSection';
const Home = () => {
  const [Bodypart, setBodypart] = useState('all');
  const [Exercises, setExercises] = useState([]);
  return (
    <Box >
        <HomeBanner/>
        <SearchBox setExercises={setExercises} Bodypart={Bodypart} setBodypart={setBodypart}/>
        <ExerciseSection Exercises={Exercises} Bodypart={Bodypart} setExercises={setExercises} />
    </Box>
    // <div>Home</div>
  )
}

export default Home