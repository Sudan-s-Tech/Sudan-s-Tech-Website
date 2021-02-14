import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Logo from "../../assets/logo.svg";
import "./hero.css";
import Nav from "../Navbar/Navbar";
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
    },
}));

export default function CenteredGrid(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Nav />
            <Grid
                container
                spacing={1}
                style={{ margin: "10% 10% 1% 10%", width: "100%" }}
            >
                <Grid item xs={0.5} align="left">
                    <img src={Logo} style={{ width: "50px" }} />
                </Grid>
                <Grid item xs={2.5} align="left">
                    <h2>{props.subheading}</h2>
                </Grid>
                <Grid item xs={9}></Grid>
                <h1 className="gradient-text">
                    <b>
                        {props.heading}
                        <span>{props.gradient}</span>.
                    </b>
                </h1>
                <p
                    style={{
                        textAlign: "left",
                        fontSize: 30,
                        margin: "1% 20% 1% 0%",
                    }}
                >
                    {props.para}
                </p>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 d-flex justify-content-left">
                            <Button
                                // className="hero-btn"
                                variant="contained"
                                href="#contained-buttons"
                                style={{
                                    backgroundColor: "#7289DA",
                                    color: "white",
                                    marginTop: "2%",
                                }}
                            >
                                Join our Discord
                            </Button>
                            <Button
                                className="ml-5"
                                variant="contained"
                                href="#contained-buttons"
                                style={{
                                    backgroundColor: "#111827",
                                    color: "white",
                                    marginTop: "2%",
                                }}
                            >
                                See Our Github
                            </Button>
                        </div>
                    </div>
                </div>
            </Grid>
        </div>
    );
}
