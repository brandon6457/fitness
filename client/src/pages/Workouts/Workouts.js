// import { useEffect, useState } from 'react';
// import { Select, MenuItem, Button } from '@mui/material';

// const Workouts = () => {
//   const [videos, setVideos] = useState([]);
//   const [renderedVideos, setRenderedVideos] = useState([]);

//   useEffect(() => {
//     const fetchVideos = async () => {
//       try {
//         const exerciseType = document.getElementById('exercise-type').value;
//         const exerciseMuscle = document.getElementById('exercise-muscle').value;
//         const exerciseDifficulty = document.getElementById('exercise-difficulty').value;

//         const queryParameters = [];
//         if (exerciseType) {
//           queryParameters.push(`type=${exerciseType}`);
//         }
//         if (exerciseMuscle) {
//           queryParameters.push(`muscle=${exerciseMuscle}`);
//         }
//         if (exerciseDifficulty) {
//           queryParameters.push(`difficulty=${exerciseDifficulty}`);
//         }

//         const apiUrl = `https://api.api-ninjas.com/v1/exercises${queryParameters.length > 0 ? `?${queryParameters.join('&')}` : ''}`;
//         const response = await fetch(apiUrl, {
//           headers: { 'X-Api-Key': //TO BE ADDED },
//         });

//         if (response.ok) {
//           const exercises = await response.json();
//           setVideos(exercises);
//         } else {
//           throw new Error('Error fetching videos');
//         }
//       } catch (error) {
//         console.error('Error:', error.message);
//       }
//     };

//     fetchVideos();
//   }, []);

//   const renderVideos = async () => {
//     const renderedVideos = await Promise.all(
//       videos.map(async (exercise) => {
//         try {
//           const youtubeApiUrl = 'https://www.googleapis.com/youtube/v3/search';
//           const youtubeApiKey = //TO BE ADDED;

//           const youtubeResponse = await fetch(`${youtubeApiUrl}?q=${exercise.name}&part=snippet&maxResults=1&key=${youtubeApiKey}`);

//           if (youtubeResponse.ok) {
//             const youtubeResult = await youtubeResponse.json();

//             // Check if any video results were found
//             if (youtubeResult.items && youtubeResult.items.length > 0) {
//               const videoId = youtubeResult.items[0].id.videoId;

//               // Create an iframe element for the embedded video player
//               const iframe = (
//                 <iframe
//                   key={exercise.id}
//                   src={`https://www.youtube.com/embed/${videoId}`}
//                   width="560"
//                   height="315"
//                 />
//               );

//               return iframe;
//             }
//           } else {
//             throw new Error('Error fetching YouTube videos');
//           }
//         } catch (error) {
//           console.error('Error:', error.message);
//         }
//       })
//     );

//     setRenderedVideos(renderedVideos);
//   };

//   return (
//     <div>
//       <label htmlFor="exercise-type">Exercise Type:</label>
//       <Select id="exercise-type" defaultValue="">
//         <MenuItem value="">Any</MenuItem>
//         <MenuItem value="cardio">Cardio</MenuItem>
//         <MenuItem value="olympic_weightlifting">Olympic Weightlifting</MenuItem>
//         <MenuItem value="plyometrics">Plyometrics</MenuItem>
//         <MenuItem value="powerlifting">Powerlifting</MenuItem>
//         <MenuItem value="strength">Strength</MenuItem>
//         <MenuItem value="strongman">Strongman</MenuItem>
//       </Select>

//       <label htmlFor="exercise-muscle">Muscle Group:</label>
//       <Select id="exercise-muscle" defaultValue="">
//         <MenuItem value="">Any</MenuItem>
//         <MenuItem value="abdominals">Abdominals</MenuItem>
//         <MenuItem value="abductors">Abductors</MenuItem>
//         <MenuItem value="adductors">Adductors</MenuItem>
//         <MenuItem value="biceps">Biceps</MenuItem>
//         <MenuItem value="calves">Calves</MenuItem>
//         <MenuItem value="chest">Chest</MenuItem>
//         <MenuItem value="forearms">Forearms</MenuItem>
//         <MenuItem value="glutes">Glutes</MenuItem>
//         <MenuItem value="hamstrings">Hamstrings</MenuItem>
//         <MenuItem value="lats">Lats</MenuItem>
//         <MenuItem value="lower_back">Lower Back</MenuItem>
//         <MenuItem value="middle_back">Middle Back</MenuItem>
//         <MenuItem value="neck">Neck</MenuItem>
//         <MenuItem value="quadriceps">Quadriceps</MenuItem>
//         <MenuItem value="traps">Traps</MenuItem>
//         <MenuItem value="triceps">Triceps</MenuItem>
//       </Select>

//       <label htmlFor="exercise-difficulty">Difficulty Level:</label>
//       <Select id="exercise-difficulty" defaultValue="">
//         <MenuItem value="">Any</MenuItem>
//         <MenuItem value="beginner">Beginner</MenuItem>
//         <MenuItem value="intermediate">Intermediate</MenuItem>
//         <MenuItem value="expert">Expert</MenuItem>
//       </Select>

//       <Button variant="contained" onClick={renderVideos}>
//         Search
//       </Button>

//       <div id="videos-container">{renderedVideos}</div>
//     </div>
//   );
// };

// export default Workouts;
