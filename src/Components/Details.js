import React from 'react'
import { Typography,Stack } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Details = ({exerciseDetail}) => {
    const {name,target,gifUrl,bodyPart,equipment}=exerciseDetail; 
  return (
    <Stack gap='60px' sx={{
        flexDirection:{lg:'row'},
        p:'20px',
        alignItems: 'center' 
    }} >
        <img src={gifUrl} loading='lazy' alt='name' className='detail-image' />
    </Stack>
  )
}

export default Details