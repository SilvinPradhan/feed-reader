import { makeStyles } from "@material-ui/core";
const styles = makeStyles({
  container: {
    padding: "0 5%",
    width: "100%",
    margin: 0,
  },
  card: {
    display: "flex",
    textAlign: "center",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "45vh",
    padding: "12%",
    borderRadius: 9,
    color: "white",
  },
  shortInfos: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
});

export default styles;
