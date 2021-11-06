import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import { Grid, Grow, Typography } from "@material-ui/core";
import useStyles from "./styles";

import { shortInfo } from "../../ShortInfo";

const Cards = ({ articles, activeArticle }) => {
  const classes = useStyles();

  return (
    <>
      {!articles.length ? (
        <Grow in>
          <Grid
            className={classes.container}
            container
            alignItems="stretch"
            spacing={3}
          >
            {shortInfo.map((shortInfos, index) => (
              <Grid
                item
                xs={12}
                lg={3}
                md={4}
                sm={6}
                className={classes.info}
                key={index}
              >
                <div
                  className={classes.card}
                  style={{ backgroundColor: shortInfos.color }}
                >
                  <Typography variant="h5">{shortInfos.title}</Typography>
                  {shortInfos.info ? (
                    <Typography variant="h6">
                      <strong>{shortInfos.title.split(" ")[2]} :</strong>
                      <br />
                      {shortInfos.info}
                    </Typography>
                  ) : null}
                  <Typography variant="h6" component="h6">
                    Say: <br />
                    <i>{shortInfos.text}</i>
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grow>
      ) : (
        <div>
          <Grow in>
            <Grid
              className={classes.container}
              container
              alignItems="stretch"
              spacing={3}
            >
              {articles.map((article, i) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  style={{ display: "flex" }}
                >
                  <NewsCard
                    article={article}
                    activeArticle={activeArticle}
                    key={i}
                    i={i}
                  />
                </Grid>
              ))}
            </Grid>
          </Grow>
        </div>
      )}
    </>
  );
};

export default Cards;
