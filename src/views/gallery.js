import  React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function TitlebarBelowImageList() {
  return (
    <ImageList sx={{ width: 1000, height: 450 ,margin:"3rem 15rem"}}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar 
            title={item.title}
            subtitle={<span>by: {item.author}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://www.rwandasafaritour.com/wp-content/uploads/2020/02/akagera-national-park-1.jpg',
    title: 'Lion',
    author: '@akagerapark',
  },
  {
    img: 'https://www.volcanoesparkrwanda.org/wp-content/uploads/2022/03/akagera6-2d6cf640f2-602x403-1.jpg',
    title: 'Elephant',
    author: '@akagerapark',
  },
  {
    img: 'https://visitandtourrwanda.com/wp-content/uploads/2018/11/Akagera-national-park-giraffes.jpg',
    title: 'Giraffe',
    author: '@akagerapark',
  },
  {
    img: 'https://www.silverbackgorillatours.com/wp-content/uploads/2020/01/1-Day-Akagera-National-Park-Safari.jpg',
    title: 'Zebra',
    author: '@akagerapark',
  },
  {
    img: 'http://www.visitrwanda.com/wp-content/uploads/fly-images/1484/Visit-Rwanda-Akagera-Hippo-Family-1920x1280.jpg',
    title: 'Hippo',
    author: '@akagerapark',
  },
  {
    img: 'https://chrisaustria.files.wordpress.com/2014/12/photo1.jpg',
    title: 'Antilops',
    author: '@akagerapark',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyX6V6SArB8u3fNL4XyApTsjCSGg2hkcJ6C_kkstGxxCTfBFkq6k8CfS7BGgt9bMljJ_Q&usqp=CAU',
    title: 'Basketball',
    author: '@akagerapark',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@akagerapark',
  },
  {
    img: 'https://outdoortrip-web.s3.eu-central-1.amazonaws.com/4862-akagera-national-park-safari-4-hour-expedition/akagera-national-park-safari-4-hour-expedition.5ef72f5f2604a-full.jpg',
    title: 'Mushrooms',
    author: '@akagerapark',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyf2GkyOYJL-CfLRR22oTf2tX-HANK-RXUheRBoplcA0wP_yLgbUSDZI_wacnmBKZp-rc&usqp=CAU',
    title: 'Tomato basil',
    author: '@akagerapark',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyBEBPrM3ZO8vZ1nrsySr0vek2qBSP0-53MQ&usqp=CAU',
    title: 'Sea star',
    author: '@akagerapark',
  },
  {
    img: 'https://www.wanderlustmovement.org/wp-content/uploads/2017/10/0be64-akageranationalpark3athecompleteguide7cwanderlustmovementakageranationalpark3athecompleteguide7cwanderlustmovement.jpg',
    title: 'Monkey',
    author: '@akagerapark',
  },
];

