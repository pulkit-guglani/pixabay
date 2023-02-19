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
  const isPC = useMediaQuery("(min-width:1200px)");
  const isBigPhone = useMediaQuery("(min-width:800px)");

  return (
    <ImageList cols={isPC ? 5 : isBigPhone ? 3 : 2} sx={{}}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.webformatURL}?w=248&fit=crop&auto=format`}
            srcSet={`${item.webformatURL}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.tags.split(",")[0]}
            // subtitle={<span>by: {item.user}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default ImageResults;
