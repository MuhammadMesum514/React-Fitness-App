import React,{useEffect,useState} from 'react'
import {Stack,Box,Typography,Pagination} from '@mui/material'
import ExerciseCard from './ExerciseCard';
import {FetchData,ApiOptions} from '../utils/FetchData';


const ExerciseSection = ({Exercises,setExercises,Bodypart}) => {
    const [currentPage, setcurrentPage] = useState(1);
    const exercisePerPage=9;
    const lastExerciseIndex=currentPage*exercisePerPage;
    const firstExerciseIndex=lastExerciseIndex-exercisePerPage;
    const currentExercise=Exercises.slice(firstExerciseIndex,lastExerciseIndex);
    const paginate=(e,value)=>{
      setcurrentPage(value);
      window.scrollTo({top:'1000px',behaviour:'smooth'})
    }
    useEffect(() => {
      const fetchExercisesData = async () => {
        let exercisesData = [];
        if (Bodypart === 'all') {
          exercisesData = await FetchData('https://exercisedb.p.rapidapi.com/exercises', ApiOptions);
        } else {
          exercisesData = await FetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${Bodypart}`, ApiOptions);
        }
  
        setExercises(exercisesData);
      };
      fetchExercisesData();
     } ,[Bodypart]);
  return (
    <Box id="exercises"
    sx={{
      mt:{lg:'100px'},
      
    }}
    mt='50px'
      p='20px'
    >
      <Typography varient="h3" mb="46px">
        Showing Results
      </Typography>
      <Stack direction="row" sx={{
        gap:{lg:'110px',sm:'50px'},
        justifyContent:"center",
        flexWrap:'wrap'
      }}
      >
        {currentExercise.map((exercise,index)=>{
          return(
         <ExerciseCard key={index} exercise={exercise} />
        )})}
      </Stack>
      <Stack sx={{
        mt:'100px',
        alignItems:'center'
      }}>
        {
          Exercises.length>9 && (
            <Pagination
            color='standard'
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(Exercises.length/9)}
            page={currentPage}
          onChange={paginate}
            />
          )

        }
      </Stack>
    </Box>
  )
}

export default ExerciseSection