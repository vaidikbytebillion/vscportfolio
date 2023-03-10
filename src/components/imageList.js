import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ActionAreaCard from './actionCards';

export default function StandardImageList() {
  return (
    <ImageList sx={{ width: '100%', height: '100%' }} cols={1} rowHeight={300}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <ActionAreaCard src={item.img} title={item.title}/>
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'karo Manage ui',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Cloud trakr',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
   
 
];