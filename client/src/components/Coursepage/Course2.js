import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import "./course.css";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import axios from "axios";
const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            margin: theme.spacing(1),
        },
    },
    teachers: {
        width: "100%",
        // maxWidth: "36ch",
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: "inline",
    },
}));
var render;
var arr;
export default function Coursepage(props) {
    const [course, setCourse] = useState([]);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [desc, setDesc] = useState("");
    const [lesson, setLesson] = useState("");
    const [level, setLevel] = useState("");
    const [duration, setDuration] = useState("");
    const [img, setImg] = useState("");
    var render;
    useEffect(() => {
        var str = window.location.pathname.substring(100, 10);
        var s = str.replace(/%20/g, " ");
        // console.log(s);
        setTitle(s);
        axios
            .get("https://sudans-tech.firebaseio.com/training.json")
            .then((res) => {
                Object.keys(res.data).map((i) => {
                    if (res.data[i].title === s) {
                        setCourse(res.data[i].items);
                        // console.log(props.location.state.state);
                        // console.log(res.data[i].body);
                        setBody(res.data[i].body);
                        setDesc(res.data[i].desc);
                        setLesson(res.data[i].lesson);
                        setLevel(res.data[i].level);
                        setDuration(res.data[i].duration);
                        setImg(res.data[i].image);
                    }
                });
            });
    }, []);
    // const { test } = props.location.state;
    // console.log(test);
    // console.log(props.title);
    // var str = window.location.pathname.substring(100, 10);
    // var s = str.replace(/%20/g, " ");
    // setTitle(s);

    const classes = useStyles();
    {
        render = course.map((j) => {
            // console.log(j.items);
            return (
                <div>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>
                                {j.title}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <ul>
                                    {j.items ? (
                                        j.items.map((o) => {
                                            return (
                                                <li style={{ color: "#fff" }}>
                                                    {o.title}
                                                </li>
                                            );
                                        })
                                    ) : (
                                        <div></div>
                                    )}
                                </ul>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            );
        });
    }

    return (
        <div className="course-main-div">
            <div className="course-head container-fluid mt-5">
                <div className="row">
                    <div className="col-md-8">
                        {" "}
                        <h1
                            style={{
                                textAlign: "left",
                                fontSize: "9em",
                                lineHeight: "150px",
                            }}
                        >
                            {title}
                        </h1>{" "}
                        <h5
                            style={{
                                textAlign: "left",
                                color: "black",
                            }}
                        >
                            {body}
                        </h5>
                        <div style={{ textAlign: "left" }}>
                            <span
                                class="badge badge-primary"
                                style={{ margin: "10px 10px" }}
                            >
                                {`${duration} Hours`}
                            </span>
                            <span
                                class="badge badge-danger"
                                style={{ margin: "10px 10px" }}
                            >
                                {`${lesson} lessons`}
                            </span>
                            <span
                                class="badge badge-warning"
                                style={{ margin: "10px 10px" }}
                            >
                                {level}
                            </span>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex align-items-center justify-content-center">
                        <Button
                            variant="outlined"
                            color="secondary"
                            size="large"
                        >
                            Register
                        </Button>{" "}
                    </div>
                </div>
            </div>

            <div className=" course-mid-div container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="about container">
                            <h2
                                style={{
                                    color: "#212121",
                                }}
                            >
                                About
                            </h2>
                            <div className="row">
                                <div className="col-md-4">
                                    <img src={img} style={{ width: "100%" }} />
                                </div>
                                <div className="col-md-8" align="left">
                                    <h3>{desc}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h2>Teachers</h2>
                        <List className={classes.teachers}>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar
                                        alt="Remy Sharp"
                                        src="/static/images/avatar/1.jpg"
                                    />
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Brunch this weekend?"
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                component="span"
                                                variant="body2"
                                                className={classes.inline}
                                                color="textPrimary"
                                            >
                                                Ali Connors
                                            </Typography>
                                            {
                                                " — I'll be in your neighborhood doing errands this…"
                                            }
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar
                                        alt="Travis Howard"
                                        src="/static/images/avatar/2.jpg"
                                    />
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Summer BBQ"
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                component="span"
                                                variant="body2"
                                                className={classes.inline}
                                                color="textPrimary"
                                            >
                                                to Scott, Alex, Jennifer
                                            </Typography>
                                            {
                                                " — Wish I could come, but I'm out of town this…"
                                            }
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar
                                        alt="Cindy Baker"
                                        src="/static/images/avatar/3.jpg"
                                    />
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Oui Oui"
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                component="span"
                                                variant="body2"
                                                className={classes.inline}
                                                color="textPrimary"
                                            >
                                                Sandra Adams
                                            </Typography>
                                            {
                                                " — Do you have Paris recommendations? Have you ever…"
                                            }
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                        </List>
                    </div>
                </div>
            </div>

            <div className=" syllabus container" style={{ marginTop: "8em" }}>
                <h2>Syllabus</h2>

                <div>{render}</div>
            </div>
        </div>
    );
}
