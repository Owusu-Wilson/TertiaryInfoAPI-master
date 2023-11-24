import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Button from "@mui/material/Button";
import SearchBar from "../components/SearchBar";
import {
  Card,
  Box,
  FormControlLabel,
  Grid,
  Input,
  List,
  ListItem,
  ListItemText,
  Radio,
  RadioGroup,
  Select,
} from "@mui/material";
import { Camera, Image, ViewList } from "@mui/icons-material";

import { Close, Comment } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { fontStyle } from "@mui/system";

export default function Home() {
  const [queryText, setQueryText] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");
  const [results, setResults] = useState([]); // list of results

  const fetch_route = async (url) => {
    // fetch options
    const options = {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };
    console.log(url);

    //  fetch request being made
    const response = await fetch(url, options);
    const unis = await response.json();

    // destructuring the results and storing into a list
    let results_list = [];

    unis.forEach((item, key) => {
      results_list.push(item);
    });
    // console.log(results_list)
    setResults(results_list);
    console.log(results);
  };
  const getData = async () => {
    // Log data
    console.log(`query: ${queryText}`);
    console.log(`filter: ${selectedFilter}`);

    //  fetch url - formatting the url with the selected filter
    //  the request is set based on the filter selected

    if (queryText.length < 1) {
      //catching errors associated with empty query from text box
      console.log("Empty query string");
    } else {
      if (selectedFilter) {
        // fetch url with query selectors
        const url = `http://localhost:8080/search/${selectedFilter}/?${selectedFilter}=${queryText}`;
        fetch_route(url);
      } else {
        // if no filter is selected, name is used as defualt
        const default_url = `http://localhost:8080/search/name/?name=${queryText}`;
        fetch_route((url = default_url));
      }
    }
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>GH Tertiary Hub</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Grid columns={4} rowSpacing={20}>
          <Card />
        </Grid>
        <h1 className={styles.title}>
          Welcome to <span>Tertiary Info Hub</span>
        </h1>
        <div>
          <SearchBar
            value={queryText}
            onChange={(text) => {
              setQueryText(text.target.value);
            }}
          />
          <IconButton
            onClick={() => {
              setQueryText("");
            }}
          >
            <Close />
          </IconButton>
        </div>
        {/* Query filters section */}
        {/* Available routes are 
        /universities
        /universities/name/
        /universities/{acronym}
        /universities/query/ = takes either a region or  acronym
         */}
        <h3>Set Filters</h3>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="name"
          value={selectedFilter}
          name="radio-buttons-group"
          row
          onChange={(filterVal) => {
            if (filterVal) {
              setSelectedFilter(filterVal.target.value);
            }
          }}

          // className={styles.filters}
        >
          <FormControlLabel value="name" control={<Radio />} label="Name" />
          <FormControlLabel
            value="acronym"
            control={<Radio />}
            label="Acronym"
          />
          <FormControlLabel value="region" control={<Radio />} label="Region" />
        </RadioGroup>
        <div
          style={{
            flexDirection: "row",
            padding: 5,
          }}
        >
          <Button sx={styles.button} onClick={getData} variant="contained">
            Search
          </Button>
          {/* This button appears when results are returned to the screen */}
          {results.length != 0 ? (
            <Button
              sx={styles.button}
              onClick={() => {
                setResults([]);
              }}
              variant="contained"
            >
              Clear
            </Button>
          ) : null}
        </div>
        {/* <p className="results">{typeof(results)}</p> */}

        {results.length != 0 ? <h3>{results.length} results found</h3> : null}
        <List
          sx={{ width: "100%", maxWidth: 700, bgcolor: "background.paper" }}
        >
          {results.map((value) => (
            <Link
              key={value.name}
              href={{
                pathname: "/details",
                query: value,
              }}
              property={value}
            >
              <Button autoCapitalize="false">
                <Card
                  sx={{
                    marginBottom: 1,
                    padding: 0.5,
                    justifySelf: "center",
                    fontWeight: "bold",
                  }}
                >
                  <ListItem disableGutters>
                    <ListItemText
                      sx={{ fontWeight: "bold" }}
                      primary={`${value.acronym} ◾ ${value.name}`}
                    />
                  </ListItem>
                </Card>
              </Button>
            </Link>
          ))}
        </List>
      </main>

      <footer>
        <a
          href="https://www.linkedin.com/in/wilson-owusu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" SLabs GH Creatives "}
          <img
            src="/vercel.svg"
            alt="SlabsGH Creatives"
            className={styles.logo}
          />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
