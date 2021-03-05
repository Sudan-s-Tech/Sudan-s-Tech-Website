import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Input, TextareaAutosize } from "@material-ui/core";
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
import Modal from "@material-ui/core/Modal";
import ReactPlayer from "react-player";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { actionTypes } from "../../reducer";
import logo from "../../assets/logo.svg";
var sub_mods = [];
function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            margin: theme.spacing(1),
        },
    },
    teachers: {
        width: "100%",
        // maxWidth: "36ch",
        backgroundColor: "#f8f8f8",
    },
    inline: {
        display: "inline",
    },
    paper: {
        position: 'absolute',
        width: 460,
        backgroundColor: theme.palette.background.paper,
        border: "2px solid #7289DA",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 6, 3),
    },
}));
var render;
var arr;
export default function Coursepage(props) {
    const [email, setEmail] = useState("");
    const [username, setUserame] = useState();
    const [message, setMessage] = useState();
    const [number, setNumber] = useState("");
    const submitForm = () => {
        console.log("clicked");
        if (email === "") {
            alert("Please fill the form to expect a call");
        }
        if (number === "") {
            alert("Please fill the form to expect a call");
        } else {
            alert(
                "Thank you for submitting the form we will contact you shortly"
            );
            setOpen(false);
            setEmail("");
            setNumber("");
            setUserame("");
            setMessage("");
        }
    };
    // const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const [{ user }, dispatch] = useStateValue();
    useEffect(() => {
        const data = localStorage.getItem("username");
        if (data) {
            dispatch({
                type: actionTypes.SET_USER,
                user: data,
            });
        }
    }, []);
    let history = useHistory();
    const buyCourse = () => {
        if (user) {
            console.log("user is logged in");
            history.push("/payment");
        } else {
            history.push("/signin");
        }
    };

    const [course, setCourse] = useState([]);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [desc, setDesc] = useState("");
    const [lesson, setLesson] = useState("");
    const [level, setLevel] = useState("");
    const [duration, setDuration] = useState("");
    const [img, setImg] = useState("");
    var render;
    // let Object;
    useEffect(() => {
        var str = window.location.pathname.substring(100, 10);
        var s = str.replace(/%20/g, " ");
        // console.log(s);
        setTitle(s);
        axios
            .get("https://sudanstechapi.herokuapp.com/trainings")
            .then((res) => {
                // Object.keys(res.data).map((i) => {
                //     if (res.data[i].title === s) {
                //         setCourse(res.data[i].items);
                //         // console.log(props.location.state.state);
                //         // console.log(res.data[i].body);
                //         setBody(res.data[i].body);
                //         setDesc(res.data[i].desc);
                //         setLesson(res.data[i].lesson);
                //         setLevel(res.data[i].level);
                //         setDuration(res.data[i].duration);
                //         setImg(res.data[i].image);
                //     }
                // });
                res.data.map((i) => {
                    if (i.title === s) {
                        setCourse(i.modules);

                        setBody(i.body);
                        setDesc(i.desc);
                        setLesson(i.lesson);
                        setLevel(i.level);
                        setDuration(i.duration);
                        setImg(i.image);
                    }
                });
                console.log(res.data);
            });
    }, []);

    const classes = useStyles();
    {
        render = course.map((j) => {
            // console.log(j);
            return (
                <div>
                    <Accordion style={{ borderBottom: "1px solid blueviolet" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>
                                {j.title}
                            </Typography>
                            <h6 style={{ color: "#FFFFFF" }}>
                                {(sub_mods = j.items.split(","))}
                            </h6>
                        </AccordionSummary>

                        <AccordionDetails>
                            <Typography>
                                <ul>
                                    {sub_mods.map((o) => {
                                        // console.log(o);
                                        return (
                                            <li
                                                style={{
                                                    color: "#000",
                                                    textAlign: "start",
                                                    fontWeight: "normal",
                                                }}
                                            >
                                                {o}
                                            </li>
                                        );
                                    })}
                                    {/* console.log(nameArr); */}
                                    {}

                                    {/* {j.items ? (
                                      
                                        j.items.map((o) => {
                                            return (
                                                <li
                                                    style={{
                                                        color: "#000",
                                                        textAlign: "start",
                                                        fontWeight: "normal",
                                                    }}
                                                >
                                                    {o.title}
                                                </li>
                                            );
                                        })
                                    ) : (
                                        <div></div>
                                    )} */}
                                </ul>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            );
        });
    }

    return (
        <div className="course">
            <Modal open={open} onClose={handleClose}>
                <div style={modalStyle} className={classes.paper}>
                    <form className="feedback__form">
                        <center>
                            <img
                                className="feedback__logo"
                                src={logo}
                                alt="logo"
                            />
                        </center>
                        <Input
                            required={true}
                            placeholder="Email"
                            type="text"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        ></Input>
                        <Input
                            required={true}
                            placeholder="Name"
                            type="text"
                            value={username}
                            onChange={(e) => {
                                setUserame(e.target.value);
                            }}
                        ></Input>
                        <Input
                            placeholder="Number"
                            type="number"
                            value={number}
                            onChange={(e) => {
                                setNumber(e.target.value);
                            }}
                        ></Input>
                        <TextareaAutosize
                            className="txtarea"
                            placeholder="Message"
                            type="text"
                            rowsMin={5}
                            value={message}
                            onChange={(e) => {
                                setMessage(e.target.value);
                            }}
                        ></TextareaAutosize>
                        <Button className="submitCall" onClick={submitForm}>
                            Submit
                        </Button>
                    </form>
                </div>
            </Modal>
            <div className="course__header">
                <h2>
                    {title} <span> {level}_</span>
                </h2>
                <h6>{body}</h6>
                <div className="course__btn">
                    <Button
                        onClick={buyCourse}
                        variant="contained"
                        className="courseBtn"
                        style={{
                            backgroundColor: "blueviolet",
                            color: "#fff",
                            fontWeight: "600",
                        }}
                    >
                        Buy Now
                    </Button>
                    <Button
                        onClick={() => {
                            setOpen(true);
                        }}
                        className="courseBtn"
                        style={{
                            border: "2px solid blueviolet",
                            backgroundColor: "#fff",
                            fontWeight: "600",
                            color: "blueviolet",
                        }}
                    >
                        Request a Call
                    </Button>
                </div>
            </div>
            <div className="course__container">
                <div className="course__container-left">
                    <div className="course__container-leftHeader">
                        <h2>Overview</h2>
                    </div>
                    <div
                        className="course__container-rightVideo"
                        style={{ paddingLeft: "1rem" }}
                    >
                        <ReactPlayer
                            controls
                            width="375px"
                            height="220px"
                            url="https://youtu.be/inWWhr5tnEA"
                        />
                    </div>
                    <div className="course__container-leftDesc">
                        <h4> What is Cyber Security ?</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Maxime excepturi laboriosam aliquid optio
                            voluptatibus, officiis ipsum, consectetur saepe eum
                            distinctio accusantium ex harum similique quis
                            cupiditate. Molestiae reprehenderit dicta placeat.
                            consectetur saepe eum distinctio accusantium ex
                            harum similique quis cupiditate. Molestiae
                            reprehenderit dicta placeat.
                        </p>
                        <h4> Why choose us ?</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Maxime excepturi laboriosam aliquid optio
                            voluptatibus, officiis ipsum, consectetur saepe eum
                            distinctio accusantium ex harum similique quis
                            cupiditate. Molestiae reprehenderit dicta placeat.
                            consectetur saepe eum distinctio accusantium ex
                            harum similique quis cupiditate. Molestiae
                            reprehenderit dicta placeat.
                        </p>
                    </div>
                </div>
                <div className="course__container-right">
                    <div className="course__container-rightBoxes">
                        <div className="course__container-rightBox">
                            <p>join</p>
                            <h4>1000+ learners</h4>
                        </div>
                        <div className="course__container-rightBox">
                            <p>Time to complete</p>
                            <h4>{duration} hours</h4>
                        </div>
                        <div className="course__container-rightBox">
                            <p>Modules</p>
                            <h4>{lesson} modules</h4>
                        </div>
                        <div className="course__container-rightBox">
                            <p>Prereqisites</p>
                            <h4>None</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="course__teachers">
                <h2 style={{ color: "blueviolet", margin: "2rem 0rem" }}>
                    Teachers
                </h2>
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
                        />{" "}
                    </ListItem>{" "}
                    <Divider variant="inset" component="li" />{" "}
                    <ListItem alignItems="flex-start">
                        {" "}
                        <ListItemAvatar>
                            {" "}
                            <Avatar
                                alt="Travis Howard"
                                src="/static/images/avatar/2.jpg"
                            />{" "}
                        </ListItemAvatar>{" "}
                        <ListItemText
                            primary="Summer BBQ"
                            secondary={
                                <React.Fragment>
                                    {" "}
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        className={classes.inline}
                                        color="textPrimary"
                                    >
                                        {" "}
                                        to Scott, Alex, Jennifer{" "}
                                    </Typography>{" "}
                                    {
                                        " — Wish I could come, but I'm out of town this…"
                                    }{" "}
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
            <div className="course-main-div">
                <div
                    className=" syllabus container"
                    style={{ marginTop: "2rem", marginBottom: "2rem" }}
                >
                    <h2 style={{ color: "blueviolet", marginBottom: "2rem" }}>
                        Syllabus
                    </h2>
                    <div>{render}</div>
                </div>
            </div>
        </div>
    );
}
