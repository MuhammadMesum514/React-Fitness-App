import React,{useState,useEffect} from 'react';
import { Params, useParams } from 'react-router-dom';
import {Box} from '@mui/material';
import {FetchData,ApiOptions} from '../utils/FetchData';
import Details from '../Components/Details';
import ExerciseVideos from '../Components/ExerciseVideos';
import SimilarExercises from '../Components/SimilarExercises';


const ExerciseDetails = () => {
const [exerciseDetail, setexerciseDetail] = useState({});
const {id}=useParams();
const exercisesUrl='https://exercisedb.p.rapidapi.com';

useEffect(() => {
  const fetchExerciseDetailsData = async()=> {
    const exerciseDetailData = await FetchData(`${exercisesUrl}/exercises/exercise/${id}`,ApiOptions);
    console.log({exerciseDetailData});
    setexerciseDetail(exerciseDetailData);
  };
  fetchExerciseDetailsData();
}, [id]);

  return (
    <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
      <Details exerciseDetail={exerciseDetail}/>
      <ExerciseVideos/>
      <SimilarExercises/>
    </Box>
  );
};

export default ExerciseDetails