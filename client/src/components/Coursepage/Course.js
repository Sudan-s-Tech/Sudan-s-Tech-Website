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
export default function Coursepage() {
    const [course, setCourse] = useState([]);
    const [modules, setModules] = useState([]);
    var render;
    useEffect(() => {
        axios
            .get("https://sudans-tech.firebaseio.com/training.json")
            .then((res) => {
                // setCourse(res.data);
                console.log(res);
                // Object.keys(res.data).map((i) => {
                //     setCourse(course[i].items);
                //     console.log(course);
                // });
            });
    }, []);

    const classes = useStyles();
    {
        course.map((j) => {
            // console.log(j);
            render = j.map((k) => {
                <div>
                    {k.title}

                    {k.items ? (
                        k.items.map((o) => {
                            return <h4>{o.title}</h4>;
                        })
                    ) : (
                        <div></div>
                    )}
                </div>;
            });
        });
    }

    // {
    //     Object.keys(course).map((i) => {
    //         [course[i].items].map((j) => {
    //             console.log(j);
    //             render = j.map((k) => {
    //                 return (
    //                     <div>
    //                         {k.title}

    //                         {k.items ? (
    //                             k.items.map((o) => {
    //                                 return <h4>{o.title}</h4>;
    //                             })
    //                         ) : (
    //                             <div></div>
    //                         )}
    //                     </div>
    //                 );
    //             });
    //         });
    //     });
    // }

    return (
        <div className="course-main-div">
            <div
                className="course-head container"
                style={{
                    textAlign: "center",
                    height: "50em",
                    paddingTop: "15em",
                }}
            >
                <h1
                    style={{
                        textAlign: "center",
                        fontSize: "120px",
                        lineHeight: "110px",
                    }}
                >
                    Cyber Security the life style.
                </h1>{" "}
                <h5
                    style={{
                        color: "black",
                    }}
                >
                    Lets learn about cyber security
                </h5>
                <Button variant="outlined" color="secondary">
                    Register
                </Button>{" "}
                <br />
                <span
                    class="badge badge-primary"
                    style={{ margin: "10px 10px" }}
                >
                    120 Hours
                </span>
                <span
                    class="badge badge-danger"
                    style={{ margin: "10px 10px" }}
                >
                    8 lessons
                </span>
                <span
                    class="badge badge-warning"
                    style={{ margin: "10px 10px" }}
                >
                    basic
                </span>
                {/* <div className="row">
                    <div className="col-md-8"></div>
                    <div className="col-md-8"></div>
                </div> */}
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
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpNOYTBmWQY2joYFMMa_K1-WFZ4s2PboR_zQ&usqp=CAU"
                                        style={{ width: "100%" }}
                                    />
                                </div>
                                <div className="col-md-8" align="left">
                                    <h3>
                                        We will release the info of course very
                                        soon
                                    </h3>
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

                <div>
                    {render}

                    {/* <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>
                                Introduction
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <ul>
                                    <li>
                                        Key Terms Setting up Virtuual Labs Linux
                                        Distros
                                    </li>
                                    <li>Setting up Virtuual Labs</li>
                                    <li>Linux Distros</li>
                                    <li>Introduction to various Platforms</li>
                                </ul>
                            </Typography>
                        </AccordionDetails>
                    </Accordion> */}
                </div>
            </div>
        </div>
    );
}
