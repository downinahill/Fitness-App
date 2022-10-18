import React, { useState, useEffect } from 'react';
import { Typography, Box, Stack, Button, TextField } from '@mui/material';
import Loader from './Loader';
import { youtubeOptions, fetchData } from '../utils/fetchData';


const ExerciseVideos = ({ exerciseVideos, name }) => {
  const [ search, setSearch ] = useState('')

  const [video, setVideo] = useState([]);

  useEffect(() => {
    const fetchVideoData = async () => {
      let videoData = [];

      
       videoData = await fetchData('https://youtube-search-and-download.p.rapidapi.com/channel/about?id=UCE_M8A5yxnLfW0KghEeajjw', youtubeOptions);

        // videoData = await fetchData(`https://youtube-search-and-download.p.rapidapi.com/channel/about?id=UCE_M8A5yxnLfW0KghEeajjw`, youtubeOptions);
      

      setVideo(videoData);
    };

    fetchVideoData();
  }, [video, setVideo]);

  const handleSearch = async () => {
    if(search) {
      const videoData = await fetchData('https://youtube-search-and-download.p.rapidapi.com/channel/about?id=UCE_M8A5yxnLfW0KghEeajjw', youtubeOptions)
    
    console.log(videoData)
  
    const searchedVideos = videoData.filter(
      (exercises) => exercises.name.toLowerCase().includes(search)
      || exercises.target.toLowerCase().includes(search)
      || exercises.equipment.toLowerCase().includes(search)
      || exercises.bodyPart.toLowerCase().includes(search)
      )
    setSearch('')
      setVideo(searchedVideos)
  }
    }

  if (!exerciseVideos) return <Loader />;

  return (
    <Box sx={{ marginTop: { lg: '203px', xs: '20px' } }} p="20px">
      <Typography sx={{ fontSize: { lg: '44px', xs: '25px' } }} fontWeight={700} color="#000" mb="33px">
        Watch <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{name}</span> exercise videos
      </Typography>
      <Stack sx={{ flexDirection: { lg: 'row' }, gap: { lg: '110px', xs: '0px' } }} justifyContent="flex-start" flexWrap="wrap" alignItems="center">
        {exerciseVideos?.slice(0, 3)?.map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://youtube-search-and-download.p.rapidapi.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img style={{ borderTopLeftRadius: '20px' }} src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography sx={{ fontSize: { lg: '28px', xs: '18px' } }} fontWeight={600} color="#000">
                {item.video.title}
              </Typography>
              <Typography fontSize="14px" color="#000">
                {item.video.channelName}
              </Typography>
            </Box>
            <Box position="relative" mb="72px">
        <TextField 
        sx={{ 
          input: { 
            fontWeight: '700', 
          border: 'none', borderRadius: '4px'
        },
        width: { lg: '800px', xs: '350px'},
        backgroundColor: '#fff',
        borderRadius: '40px'
        }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button className="search-btn"
        sx={{
          bgcolor: '#FF2625',
          color: '#fff',
          textTransform: 'none',
          width: { lg: '175px', xs: '40px'},
          fontSize: { lg: '20px', xs: '14px'},
          height: '56px',
          position: 'absolute',
          right: '0'
        }}
        onClick={handleSearch}
        >
          Search
        </Button>

      </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
