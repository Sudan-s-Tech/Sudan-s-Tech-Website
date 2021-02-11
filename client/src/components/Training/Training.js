import React from "react";
import TrainingCard from "./TrainingCard";
import Hero from "../Hero/Hero";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 500,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));
export default function Events() {
    const [state, setState] = React.useState({
        age: "",
        name: "hai",
    });

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
    };
    const classes = useStyles();

    return (
        <div>
            <Hero
                subheading={"SudansTech"}
                heading={"We are known for our "}
                gradient={"Training courses"}
                para={
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy "
                }
            />
            <FormControl className={classes.formControl}></FormControl>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <Link to="/register/cyber">
                            {" "}
                            <TrainingCard
                                tag={"upcoming"}
                                color={"secondary"}
                                imgurl={
                                    "https://www.eweek.com/imagesvr_ez/b2bezp/2019/10/Machine.learning3.JPG?alias=article_hero"
                                }
                            />
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <TrainingCard
                            tag={"ongoing"}
                            color={"warning"}
                            imgurl={
                                "https://miro.medium.com/max/840/1*RJMxLdTHqVBSijKmOO5MAg.jpeg"
                            }
                        />
                    </div>
                    <div className="col-md-4">
                        <TrainingCard
                            tag={"past"}
                            color={"success"}
                            imgurl={
                                "https://www.eweek.com/imagesvr_ez/b2bezp/2019/10/Machine.learning3.JPG?alias=article_hero"
                            }
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
