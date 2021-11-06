/* eslint-disable react-hooks/exhaustive-deps */
import alanBtn from "@alan-ai/alan-sdk-web";
import { useEffect, useState } from "react";
import useStyles from "./styles.js";
import Logo from "./images/logo.jpg";
import Cards from "./components/Cards/Card";

import wordsToNumbers from "words-to-numbers";

const ALANKEY =
  "8c90cbf3bf5c47bafe9e08724c52b2e72e956eca572e1d8b807a3e2338fdd0dc/stage";

const getNewHeadlines = async () => {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=285b1199aca949d98e67af9dcfcbf6a6`
    );
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};

// const useIsMounted = () => {
//   const isMounted = useRef(false);
//   useEffect(() => {
//     isMounted.current = true;
//     return () => (isMounted.current = false);
//   }, []);
//   return isMounted;
// };

function App() {
  const classes = useStyles();
  const [newsHeadlines, setNewsHeadlines] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);
  getNewHeadlines();

  // const useIsMounted = () => {
  //   const isMounted = useRef(false);
  // };

  useEffect(() => {
    alanBtn({
      key: ALANKEY,
      onCommand: ({ command, articles, number }) => {
        if (command === "newHeadlines") {
          setNewsHeadlines(articles);
          setActiveArticle(-1);
        } else if (command === "highlight") {
          setActiveArticle((prev) => prev + 1);
        } else if (command === "open") {
          console.log(number);
          const parsedNumber =
            number.length > 2
              ? wordsToNumbers(number, { fuzzy: true })
              : number;
          const article = articles[parsedNumber - 1];
          if (parsedNumber > 20) {
            alanBtn().playText(
              "I just have 20 articles. Please try that again."
            );
          } else if (article) {
            window.open(article.url, "_blank");
            alanBtn().playText("Redirecting you to this article.");
          }
        }
      },
    });
  }, []);
  return (
    <div>
      <div className={classes.logoContainer}>
        <img src={Logo} className={classes.logo} alt="" />
      </div>
      <Cards articles={newsHeadlines} activeArticle={activeArticle} />
      {/* {JSON.stringify(newsHeadlines)} */}
    </div>
  );
}

export default App;
