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

var a;
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
        position: "absolute",
        width: 460,
        backgroundColor: theme.palette.background.paper,
        border: "2px solid #7289DA",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 6, 3),
    },
}));
var render;
var arr;
var data;
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
    const [{ user, token }, dispatch] = useStateValue();
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

    const [course, setCourse] = useState([]);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [desc, setDesc] = useState("");
    const [lesson, setLesson] = useState("");
    const [level, setLevel] = useState("");
    const [duration, setDuration] = useState("");
    const [img, setImg] = useState("");
    const [id, setId] = useState("");
    const [Teacher, setTeacher] = useState("");
    const [Bio, setBio] = useState("");
    var render;
    // let Object;
    useEffect(() => {
        var str = window.location.pathname.substring(100, 10);
        var s = str.replace(/%20/g, " ");
        console.log(s);
        setTitle(s);
        // console.log(title);
        // title != ""
        //     ? axios
        //           .get("https://sudanstechapi.herokuapp.com/teacher", {
        //               params: {
        //                   data: s,
        //               },
        //           })
        //           .then((res) => {
        //               console.log(res);
        //           })
        //     : console.log();
        axios
            .get("https://sudanstechapi.herokuapp.com/trainings")
            .then((res) => {
                res.data.map((i) => {
                    if (i.title === s) {
                        // console.log(i);
                        setCourse(i.modules);

                        setBody(i.body);
                        setDesc(i.description);
                        setLesson(i.lesson);
                        setLevel(i.level);
                        setDuration(i.duration);
                        setImg(i.imageurl);
                        setId(i._id);
                    }
                });
            });
    }, []);

    useEffect(() => {
        var str = window.location.pathname.substring(100, 10);
        var s = str.replace(/%20/g, " ");
        console.log(s);
        setTitle(s);
        // console.log(title);
        axios
            .get("https://sudanstechapi.herokuapp.com/teacher", {
                params: {
                    data: s,
                },
            })
            .then((res) => {
                setTeacher(res.data.name);
                setBio(res.data.bio);
            });
    }, []);
    const buyCourse = () => {
        // function isDate(val) {
        //     return Object.prototype.toString.call(val) === '[object Date]'
        //   }

        //   function isObj(val) {
        //     return typeof val === 'object'
        //   }

        //    function stringifyValue(val) {
        //     if (isObj(val) && !isDate(val)) {
        //       return JSON.stringify(val)
        //     } else {
        //       return val
        //     }
        //   }

        //   function buildForm({ action, params }) {
        //     const form = document.createElement('form')
        //     form.setAttribute('method', 'post')
        //     form.setAttribute('action', action)

        //     Object.keys(params).forEach(key => {
        //       const input = document.createElement('input')
        //       input.setAttribute('type', 'hidden')
        //       input.setAttribute('name', key)
        //       input.setAttribute('value', stringifyValue(params[key]))
        //       form.appendChild(input)
        //     })

        //     return form
        //   }

        //    function post(details) {
        //     const form = buildForm(details)
        //     document.body.appendChild(form)
        //     form.submit()
        //     form.remove()
        //   }
        //   let detail={
        //       amount:500,
        //       email:'hello@gmail.com'
        //   }
        // if (user) {
        //   axios({
        //     method: "post",
        //     url: "http://localhost:5000/api/payment",
        //     data: JSON.stringify(detail) ,
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //   }).then((res)=>{
        //       let information={
        //           action:'https://securegw.paytm.in/order/process' ,
        //           params:res
        //       }
        //       post(information)
        //   }).catch((e)=>{
        //       console.log(e)
        //   })
        if (user) {
            axios({
                method: "post",
                url: "https://sudan-tech-backend.herokuapp.com/users/buy",
                data: id,
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((res) => {
                    console.log(res);
                })
                .catch((e) => {
                    console.log(e);
                });
            console.log("user is logged in");
            history.push("/payment");
        } else {
            history.push("/signin");
        }
    };

    const classes = useStyles();
    {
        render = course.map((j) => {
            // console.log(j);
            return (
                <div>
                    {j.title || j.items ? (
                        <Accordion
                            style={{ borderBottom: "1px solid #7289DA" }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}>
                                    {j.title}
                                </Typography>
                                <h6
                                    style={{
                                        color: "#FFFFFF",
                                        display: "none",
                                    }}
                                >
                                    {(sub_mods = [])}
                                    {j.items
                                        ? (sub_mods = j.items.split(","))
                                        : (a = a + 1)}
                                </h6>
                            </AccordionSummary>

                            <AccordionDetails>
                                <Typography>
                                    <ul>
                                        {j.items ? (
                                            sub_mods.map((o) => {
                                                return (
                                                    <li
                                                        style={{
                                                            color: "#000",
                                                            textAlign: "start",
                                                            fontWeight:
                                                                "normal",
                                                        }}
                                                    >
                                                        {o}
                                                    </li>
                                                );
                                            })
                                        ) : (
                                            <li> </li>
                                        )}
                                    </ul>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    ) : (
                        <div></div>
                    )}
                </div>
            );
        });
    }
    // console.log(id);

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
            <div
                className="course__header"
                style={{ backgroundImage: `url(${img})` }}
            >
                <h2>
                    {title} <span> {level}_</span>
                </h2>
                <h6>{desc}</h6>
                <div className="course__btn">
                    <Button
                        onClick={buyCourse}
                        variant="contained"
                        className="courseBtn"
                        style={{
                            backgroundColor: "#7289DA",
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
                            border: "2px solid #7289DA",
                            backgroundColor: "#fff",
                            fontWeight: "600",
                            color: "#7289DA",
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
                        <h4>What is this course all about?</h4>
                        <p>{body}</p>
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
                            <h4>{duration}</h4>
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
                <h2 style={{ color: "#7289DA", margin: "2rem 0rem" }}>
                    Teachers
                </h2>
                <List className={classes.teachers}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar
                                alt={Teacher}
                                src="/static/images/avatar/1.jpg"
                            />
                        </ListItemAvatar>
                        <ListItemText
                            primary={Teacher}
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        className={classes.inline}
                                        color="textPrimary"
                                    >
                                        {/* {Teacher} */}
                                    </Typography>
                                    {Bio}
                                </React.Fragment>
                            }
                        />{" "}
                    </ListItem>{" "}
                    <Divider variant="inset" component="li" />{" "}
                </List>
            </div>
            <div className="course-main-div">
                <div
                    className=" syllabus container"
                    style={{ marginTop: "2rem", marginBottom: "2rem" }}
                >
                    <h2 style={{ color: "#7289DA", marginBottom: "2rem" }}>
                        Syllabus
                    </h2>
                    <div>{render}</div>
                </div>
            </div>
        </div>
    );
}
