import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import Send from "@material-ui/icons/Send";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import "./event.css";
const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        marginTop: 250,
    },
    media: {
        height: 0,
        paddingTop: "56.25%", // 16:9
    },
    expand: {
        transform: "rotate(0deg)",
        marginLeft: "auto",
        transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: "rotate(180deg)",
    },
    avatar: {
        backgroundColor: red[500],
    },
    button: {
        margin: theme.spacing(1),
    },
}));

export default function RecipeReviewCard(props) {
    const [tag, setTag] = useState("");
    const [color, setColor] = useState("danger");

    useEffect(() => {
        setTag(props.tag);
        setColor(props.color);
    }, []);
    const classes = useStyles();

    return (
        // <Card className={classes.root}>
        //     <CardHeader
        //         avatar={
        //             <Avatar aria-label="recipe" className={classes.avatar}>
        //                 ⭐
        //             </Avatar>
        //         }
        //         action={<span class={`badge badge-${color}`}>{tag}</span>}
        //         title={props.title}
        //         subheader={props.date}
        //     />
        //     <CardMedia
        //         className={classes.media}
        //         image={props.imgurl}
        //         title="Paella dish"
        //     />
        //     <CardContent>
        //         <Typography variant="body2" color="textSecondary" component="p">
        //             {props.desc}
        //         </Typography>
        //     </CardContent>
        //     <CardActions disableSpacing></CardActions>
        //     <Link to={`${props.link}`}>
        //         <Button
        //             variant="contained"
        //             color="primary"
        //             className={classes.button}
        //             endIcon={<Send />}
        //         >
        //             More Details
        //         </Button>
        //     </Link>
        // </Card>
        <div
            className="MediaItem s-vflex state-"
            id="event-card"
            style={{ textAlign: "left" }}
        >
            <div className="s-vflex-outer">
                <div class="s-vflex-inner">
                    <h3 class="title">
                        <a href="/courses/production-vue/">{props.title}</a>
                    </h3>

                    <div class="description">{props.date}</div>
                    <div class="meta">
                        <strong class="captioned">{props.desc}</strong>
                    </div>
                </div>
                <div class="cta">
                    <Button
                        variant="outlined"
                        color="primary"
                        // style={{ margin: "1px 10px" }}
                    >
                        Watch Free Preview
                    </Button>
                    <Button
                        variant="outlined"
                        color="secondary"
                        // style={{ margin: "1px 10px" }}
                    >
                        Get Full Access
                    </Button>
                </div>
            </div>
            <div className="thumbnail-wrap">
                <a class="thumbnail" href="/courses/production-vue/">
                    <img
                        id="blur_img"
                        class="lazyload lazyloaded"
                        src={props.imgurl}
                        data-src={props.imgurl}
                        alt="Production-Grade Vue.js"
                        data-loaded="true"
                    />
                </a>
            </div>
        </div>
    );
}
