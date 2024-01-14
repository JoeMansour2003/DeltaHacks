import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Checkbox,
  FormControlLabel,
  Slider,
} from "@mui/material";

const Marketplace = () => {
  const [hideCards, setHideCards] = useState({
    toronto: true,
    ottawa: true,
    gatineau: true,
    kingston: true,
    montreal: true,
    flag: false,
  });

  const [query, setQuery] = useState('');
  const [showVegetables, setShowVegetables] = useState(true);
  const [showFruits, setShowFruits] = useState(true);
  const [sliderValue, setSliderValue] = useState(50);

  const handleCheckboxChange = (checkboxId) => {
    setHideCards((prevState) => {
      if (!prevState.flag) {
        prevState.toronto = false;
        prevState.ottawa = false;
        prevState.gatineau = false;
        prevState.kingston = false;
        prevState.montreal = false;
        prevState.flag = true;
      }

      const allUnchecked = Object.values(prevState).every(
        (value) => value === false
      );
      if (allUnchecked) {
        // Make all cards visible by resetting the state
        showAll();
      }

      return {
        ...prevState,
        [checkboxId]: !prevState[checkboxId],
      };
    });
  };

  const showAll = () => {
    setHideCards({
      toronto: true,
      ottawa: true,
      gatineau: true,
      kingston: true,
      montreal: true,
    });
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      // handleSearchAction();
      console.log();
    }
  };

  const handleClick = () => {
    // handleSearchAction();
    console.log();
  };

  const handleVegetableCheckboxChange = () => {
    setShowVegetables(!showVegetables);
  };

  const handleFruitCheckboxChange = () => {
    setShowFruits(!showFruits);
  };

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  return (
    <div className="container">
      <br />
      <br />
      <div className="searchbar" style={{ marginBottom: "10px" }}>
        <Grid container spacing={1} alignItems="center">
          <Grid item>
            <FormControlLabel
              control={
                <Checkbox
                  checked={showVegetables}
                  onChange={handleVegetableCheckboxChange}
                  style={{ color: "#489E47" }}
                />
              }
              label="Vegetable"
              labelPlacement="start"
            />
          </Grid>
          <Grid item>
            <FormControlLabel
              control={
                <Checkbox
                  checked={showFruits}
                  onChange={handleFruitCheckboxChange}
                  color="primary"
                  style={{ marginRight: "100px", color: "#489E47" }}

                />
              }
              label="Fruit"
              labelPlacement="start"
            />
          </Grid>
          <Grid item xs={3}>
            <Slider
              value={sliderValue}
              onChange={handleSliderChange}
              aria-labelledby="continuous-slider"
              style={{ color: "#489E47" }}
            />
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={handleClick}
              style={{ marginLeft: "300px", marginRight: "0px", backgroundColor: "#489E47", color: "#ffffff" }}
            >
              Search
            </Button>
          </Grid>
          <Grid item>
            <TextField
              label="Search"
              variant="outlined"
              fullWidth
              size="small"
              style={{ width: "218px", color: "#489E47" }}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </Grid>
        </Grid>
      </div>
            <div className="row">
                {/* cards */}
                <div className="col">
                    <div className="row row-cols-1 row-cols-md-4 g-3">
                        {hideCards.ottawa && (
                            <div className="col">
                                <div
                                    // onClick={switch_to_Forsale}
                                    className="card h-100"
                                >
                                    {/* <img
                                        src={require("../components/images/House (1).png")}
                                        className="card-img-top"
                                        alt="Image of a Marketplace for rent"
                                    /> */}
                                    <div className="card-body">
                                        <h5 className="card-title">Apples</h5>
                                        <p className="card-text">$2</p>
                                        <p className="card-text">
                                            <small className="text-body-secondary">
                                                McIntosh
                                            </small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                        {hideCards.toronto && (
                            <div className="col">
                                <div
                                    // onClick={switch_to_Forsale}
                                    className="card h-100"
                                >
                                    {/* <img
                                        src={require("../components/images/House (2).png")}
                                        className="card-img-top"
                                        alt="Image of a Marketplace for rent"
                                    /> */}
                                    <div className="card-body">
                                        <h5 className="card-title">Banana</h5>
                                        <p className="card-text">$3841</p>
                                        <p className="card-text">
                                            <small className="text-body-secondary">
                                                Cavendish Banana
                                            </small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                        {hideCards.gatineau && (
                            <div className="col">
                                <div
                                    // onClick={switch_to_Forsale}
                                    className="card h-100"
                                >
                                    {/* <img
                                        src={require("../components/images/House (3).png")}
                                        className="card-img-top"
                                        alt="Image of a Marketplace for rent"
                                    /> */}
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Juicy ass Tomato
                                        </h5>
                                        <p className="card-text">$6</p>
                                        <p className="card-text">
                                            <small className="text-body-secondary">
                                                Campari tomato
                                            </small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                        {hideCards.kingston && (
                            <div className="col">
                                <div
                                    // onClick={switch_to_Forsale}
                                    className="card h-100"
                                >
                                    {/* <img
                                        src={require("../components/images/House (4).png")}
                                        className="card-img-top"
                                        alt="Image of a Marketplace for rent"
                                    /> */}
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Coriander
                                        </h5>
                                        <p className="card-text">$5</p>
                                        <p className="card-text">
                                            <small className="text-body-secondary">
                                                Coriander, also known as
                                                cilantro, is an annual herb in
                                                the family Apiaceae. All parts
                                                of the plant are edible, but the
                                                fresh leaves and the dried seeds
                                                are the parts most traditionally
                                                used in cooking.
                                            </small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                        {hideCards.montreal && (
                            <div className="col">
                                <div
                                    // onClick={switch_to_Forsale}
                                    className="card h-100"
                                >
                                    {/* <img
                                        src={require("../components/images/House (5).png")}
                                        className="card-img-top"
                                        alt="Image of a Marketplace for rent"
                                    /> */}
                                    <div className="card-body">
                                        <h5 className="card-title">Cabbage</h5>
                                        <p className="card-text">$8</p>
                                        <p className="card-text">
                                            <small className="text-body-secondary">
                                                The best in the world
                                            </small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Marketplace;
