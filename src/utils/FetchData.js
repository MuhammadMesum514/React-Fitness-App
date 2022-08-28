export const ApiOptions = {
   
    method: 'GET',
    // url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_EXERCISE_API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
}

export const youtubeApiOptions = {
method: 'GET',
headers: {
  'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
  'X-RapidAPI-Key': process.env.REACT_APP_EXERCISE_API_KEY
}
}

// REACT_APP_EXERCISE_API_KEY=31c7fee8f3msh6b7e707c90027d7p17349bjsn9ea4c1d113a3
export const FetchData= async(url,options)=>{
  const response=await fetch(url, options); 
  const data=await response.json();
      return data;  
     }
