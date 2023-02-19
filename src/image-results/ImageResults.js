import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  TextField,
  useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const ImageResults = ({ itemData }) => {
  const isPhone = useMediaQuery("(min-width:1200px)");

  return (
    <ImageList cols={isPhone ? 5 : 3} sx={{}}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.largeImageURL}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.tags}
            // subtitle={<span>by: {item.user}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default ImageResults;
