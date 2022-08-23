import React,{useState,useEffect} from "react";
import { Box, Stack, Typography, TextField, Button } from "@mui/material";
import {FetchData,ApiOptions} from '../utils/FetchData';
import HorizontalScrollBar from './HorizontalScrollBar';

const SearchBox = ({setExercises,Bodypart,setBodypart}) => {
  const [Search, setSearch] = useState('');
  const [BodyParts, setBodyParts] = useState([]);
  
  // URLS FOR API
  const exercisesUrl='https://exercisedb.p.rapidapi.com/exercises';
  const bodyPartsUrl='https://exercisedb.p.rapidapi.com/exercises/bodyPartList';

  useEffect(() => {
    const exercisesBodyPartsData=async()=> {
      const bodyPartsData = await FetchData(bodyPartsUrl,ApiOptions);
      setBodyParts(['all', ...bodyPartsData]);
  }
  exercisesBodyPartsData();
    },[]);


  const handleSearch = async()=>{
    // console.log(process.env.REACT_APP_EXERCISE_API_KEY);
    if(Search){
      try{
        const response = await FetchData(exercisesUrl,ApiOptions);
        const searchedExercises= response.filter(
          (item) => item.name.toLowerCase().includes(Search)
          || item.target.toLowerCase().includes(Search)
          || item.equipment.toLowerCase().includes(Search)
          || item.bodyPart.toLowerCase().includes(Search),
        )
        setSearch('');
        setExercises(searchedExercises);
    }
    catch(error){
      console.log(error);
    }
  }
}
  return (
    <>
      <Stack
        sx={{
          justifyContent: "center",
          alignItems: "center",
          mt: "37px",
          p: "20px",
        }}
      >
        <Typography
          textAlign="center"
          fontWeight="700"
          sx={{
            fontSize: { lg: "40px", sm: "30px" },
          }}
        >
          Awsome Exercises You
          <br /> Should Know
        </Typography>

{/* SEARCH BOX STARTS HERE */}
        <Box sx={{
          mt:"20px",
        }} position="relative" mb="70px">
          <TextField
            height="77px"
            sx={{
              input: { fontWeight: "700", border: "none", borderRadius: "4px" },
              width: { lg: "1170px", xs: "350px" },
              backgroundColor: "#fff",
              borderRadius: "40px",
              
            }}
            value={Search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            placeholder="Search Exercises"
            type="text"
            />
          <Button
            className="search-btn"
            sx={{
              bgcolor: "#FF2625",
              color: "#fff",
              textTransform: "none",
              width: { lg: "173px", xs: "80px" },
              height: "56px",
              position: "absolute",
              right: "0px",
              fontSize: { lg: "20px", xs: "14px" },
            }}
            onClick={() => {handleSearch()}}
            >
            Search
          </Button>
        </Box>
      {/* SEARCH BOX ENDS HERE */}
      </Stack>
      <Box  sx={{
        width:'100%',
        position:'relative',
        p:"20px",
      }}>
        <HorizontalScrollBar data={BodyParts} Bodypart={Bodypart} setBodypart={setBodypart}/>
      </Box>
    </>
  );
};

export default SearchBox;
