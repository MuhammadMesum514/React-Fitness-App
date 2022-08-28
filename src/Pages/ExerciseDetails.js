import React,{useState,useEffect} from 'react';
import {  useParams } from 'react-router-dom';
import {Box} from '@mui/material';
import {FetchData,ApiOptions,youtubeApiOptions} from '../utils/FetchData';
import Details from '../Components/Details';
import ExerciseVideos from '../Components/ExerciseVideos';
import SimilarExercises from '../Components/SimilarExercises';


const ExerciseDetails = () => {
const [exerciseDetail, setexerciseDetail] = useState({});
const [youtubeVideos, setyoutubeVideos] = useState([]);
const [recomendedTargetMuscle, setrecomendedTargetMuscle] = useState([]);
const [recomendedTargetEquipments, setrecomendedTargetEquipments] = useState([]);
const {id}=useParams();
const exercisesUrl='https://exercisedb.p.rapidapi.com';
const youtubeApiUrl='https://youtube-search-and-download.p.rapidapi.com';

useEffect(() => {
  const fetchExerciseDetailsData = async()=> {
    // for fetching exercise Details
    const exerciseDetailData = await FetchData(`${exercisesUrl}/exercises/exercise/${id}`,ApiOptions);
    setexerciseDetail(exerciseDetailData);
    
    // for fetching similar youtube videos
    const youtubeExercises = await FetchData(`${youtubeApiUrl}/search?query=${exerciseDetailData.name}`,youtubeApiOptions);
    setyoutubeVideos(youtubeExercises.contents);

    // for fetching similar target muscle data
    const recomendedTargetMuscleData = await FetchData(`${exercisesUrl}/exercises/target/${exerciseDetailData.target}`,ApiOptions);
    setrecomendedTargetMuscle(recomendedTargetMuscleData);

    // for fetching similar Equipment data
    const recomendedTargetEqupmentData = await FetchData(`${exercisesUrl}/exercises/equipment/${exerciseDetailData.equipment}`,ApiOptions);
    setrecomendedTargetEquipments(recomendedTargetEqupmentData);
  };
  fetchExerciseDetailsData();
}, [id]);

  return (
    <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
      <Details exerciseDetail={exerciseDetail}/>
      <ExerciseVideos youtubeVideos={youtubeVideos} name={exerciseDetail.name} />
      <SimilarExercises recomendedTargetMuscle={recomendedTargetMuscle} recomendedTargetEquipments={recomendedTargetEquipments}/>
    </Box>
  );
};

export default ExerciseDetails