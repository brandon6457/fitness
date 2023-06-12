import { useState } from 'react';
import { Select, MenuItem, Button } from '@mui/material';
import "./Workouts.css"

const Workouts = () => {
  const [exerciseType, setExerciseType] = useState('');
  const [exerciseMuscle, setExerciseMuscle] = useState('');
  const [exerciseDifficulty, setExerciseDifficulty] = useState('');
  const [renderedVideos, setRenderedVideos] = useState([]);

  const handleTypeChange = (event) => {
    setExerciseType(event.target.value);
  };

  const handleMuscleChange = (event) => {
    setExerciseMuscle(event.target.value);
  };

  const handleDifficultyChange = (event) => {
    setExerciseDifficulty(event.target.value);
  };

  const renderVideos = async () => {
    try {
      const queryParameters = [];
      if (exerciseType) {
        queryParameters.push(`type=${exerciseType}`);
      }
      if (exerciseMuscle) {
        queryParameters.push(`muscle=${exerciseMuscle}`);
      }
      if (exerciseDifficulty) {
        queryParameters.push(`difficulty=${exerciseDifficulty}`);
      }

      const apiUrl = `https://api.api-ninjas.com/v1/exercises${
        queryParameters.length > 0 ? `?${queryParameters.join('&')}` : ''
      }`;
      const response = await fetch(apiUrl, {
        headers: { 'X-Api-Key': process.env.REACT_APP_EXERCISE_API_KEY },
      });

      if (response.ok) {
        const exercises = await response.json();
        const links = exercises.map((exercise) => (
          <div class="workoutBtns" key={exercise.id}>
            <Button
                class="workoutBtn"
              variant="contained"
              href={`https://www.youtube.com/results?search_query=workout+${exercise.name}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {exercise.name}
            </Button>
          </div>
        ));
        setRenderedVideos(links);
      } else {
        throw new Error('Error fetching videos');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div className="container">
      <div className="workoutForm">
        <label htmlFor="exercise-type">Exercise Type:</label>
        <Select id="exercise-type" value={exerciseType} onChange={handleTypeChange}>
          <MenuItem value="">Any</MenuItem>
          <MenuItem value="cardio">Cardio</MenuItem>
          <MenuItem value="olympic_weightlifting">Olympic Weightlifting</MenuItem>
          <MenuItem value="plyometrics">Plyometrics</MenuItem>
          <MenuItem value="powerlifting">Powerlifting</MenuItem>
          <MenuItem value="strength">Strength</MenuItem>
          <MenuItem value="strongman">Strongman</MenuItem>
        </Select>
  
        <label htmlFor="exercise-muscle">Muscle Group:</label>
        <Select id="exercise-muscle" value={exerciseMuscle} onChange={handleMuscleChange}>
          <MenuItem value="">Any</MenuItem>
          <MenuItem value="abdominals">Abdominals</MenuItem>
          <MenuItem value="abductors">Abductors</MenuItem>
          <MenuItem value="adductors">Adductors</MenuItem>
          <MenuItem value="biceps">Biceps</MenuItem>
          <MenuItem value="calves">Calves</MenuItem>
          <MenuItem value="chest">Chest</MenuItem>
          <MenuItem value="forearms">Forearms</MenuItem>
          <MenuItem value="glutes">Glutes</MenuItem>
          <MenuItem value="hamstrings">Hamstrings</MenuItem>
          <MenuItem value="lats">Lats</MenuItem>
          <MenuItem value="lower_back">Lower Back</MenuItem>
          <MenuItem value="middle_back">Middle Back</MenuItem>
          <MenuItem value="neck">Neck</MenuItem>
          <MenuItem value="quadriceps">Quadriceps</MenuItem>
          <MenuItem value="traps">Traps</MenuItem>
          <MenuItem value="triceps">Triceps</MenuItem>
        </Select>
  
        <label htmlFor="exercise-difficulty">Difficulty Level:</label>
        <Select id="exercise-difficulty" value={exerciseDifficulty} onChange={handleDifficultyChange}>
          <MenuItem value="">Any</MenuItem>
          <MenuItem value="beginner">Beginner</MenuItem>
          <MenuItem value="intermediate">Intermediate</MenuItem>
          <MenuItem value="expert">Expert</MenuItem>
        </Select>
  
        <Button className="workoutBtn" variant="contained" onClick={renderVideos}>
          Search
        </Button>
      </div>
  
      <div id="videos-container" className="workoutBtns">
        {renderedVideos}
      </div>
    </div>
  );
  
};

export default Workouts;
