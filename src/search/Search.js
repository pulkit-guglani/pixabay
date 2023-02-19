import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ImageResults from "../image-results/ImageResults";

const Search = () => {
  const apiUrl = "https://pixabay.com/api/";
  const apiKey = "33766889-5d1b5b71f1eafa93fd0cbc515";
  const [imagesData, setImagesData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchLimit, setSearchLimit] = useState(5);

  useEffect(() => {
    getImages();
  }, [searchText]);

  const getImages = async () => {
    const imagesResult = await axios.get(
      `${apiUrl}/?key=${apiKey}&q=${searchText}&image_type=photo&per_page=${searchLimit}`
    );
    console.log(imagesResult.data);
    setImagesData(imagesResult.data.hits);
  };
  return (
    <Box mt={2}>
      <TextField
        fullWidth
        id="outlined-basic"
        label="Search "
        variant="outlined"
        value={searchText}
        onChange={(event) => {
          setSearchText(event.target.value);
        }}
      />

      <br />
      <br />

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Search Limit</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={searchLimit}
          label="Result Count"
          onChange={(event) => {
            setSearchLimit(event.target.value);
          }}
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={15}>15</MenuItem>
          <MenuItem value={20}>20</MenuItem>
        </Select>
      </FormControl>
      <ImageResults itemData={imagesData} />
    </Box>
  );
};

export default Search;