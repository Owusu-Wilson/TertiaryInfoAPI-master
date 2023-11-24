import { Button, Card, Box } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import React, { Component } from "react";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
function Details(context) {
  const router = useRouter();
  const data = router.query;

  return (
    <div className={styles.container}>
      <Head>
        <title>Details Page Here</title>
      </Head>
      <body>
        <div>
          <h1 className={styles.title}>{data.name}</h1>
          <iframe src={data.web_pages} width="1000" height="300" />
        </div>
        <Box
          sx={{
            alignSelf: "center",
            justifySelf: "center",
          }}
        >
          <p>
            Acronym:<span>{data.acronym}</span>
          </p>
          <p>
            Locations:<span>{data.town}</span>
          </p>
          <p>
            Region:<span>{data.region}</span>
          </p>
        </Box>

        <Link href="/">
          <Button sx={styles.button} variant="contained">
            Go Back
          </Button>
        </Link>
      </body>
    </div>
  );
}

export default Details;
