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
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "./training.css";
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
        //         subheader={`${props.date} | ${props.lesson} lessons | ${props.level}`}
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
        //     {/* <Link to={`${props.link}`} params={{ test: `${props.title}` }}> */}
        //     <Link
        //         to={{
        //             pathname: `/register/${props.title}`,
        //             state: {
        //                 test: `${props.title}`,
        //             },
        //         }}
        //     >
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
        // <div class="container">
        <Link
            to={{
                pathname: `/register/${props.title}`,
                state: {
                    test: `${props.title}`,
                },
            }}
        >
            <div class="fancy_card" style={{ textAlign: "left" }}>
                {/* <img
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--Sqh4MQSK--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/hzc4hdwc234t7p728i5c.jpg"
                class="card_image"
            /> */}
                <div class="card_text">
                    <div class="tags" style={{ fontWeight: 600,fontSize:'22px' }}>
                        {props.title}
                    </div>

                    <div class="summary tags">
                        <b style={{fontFamily:"sans-serif", fontWeight: 400,fontSize:'15px' }}>{props.desc}</b>
                    </div>
                    <h6 class="title tags" style={{ fontWeight: 400 }}>
                        {`${props.date} | ${props.lesson} lessons | ${props.level}`}
                    </h6>
                </div>

                <div class="card_footer">
                    <div class="reading_time tags">See more</div>
                </div>
            </div>{" "}
        </Link>
        // </div>
    );
}
