import React from "react";
import Hero from "../Hero/Hero";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import TextField from "@material-ui/core/TextField";
import Pic from "../../assets/contact.svg";
import "./contact.css";
const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 500,
    },
    root: {
        "& > *": {
            margin: theme.spacing(1),
            width: "25ch",
        },
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));
export default function Events() {
    const classes = useStyles();

    return (
        <div>
            <Hero
                subheading={"SudansTech"}
                heading={"We keep our doors open "}
                gradient={"24x7"}
                para={
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy "
                }
            />
            <div className="container">
                <div className="row" style={{ margin: "20% 0%" }}>
                    <div className="col-md-7">
                        <img src={Pic} style={{ width: "80%" }} />
                    </div>
                    <div className="col-md-5">
                        <FormControl
                            className={classes.formControl}
                            className={classes.root}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField
                                id="outlined-basic"
                                label="Name"
                                variant="outlined"
                            />
                            <TextField
                                id="outlined-basic"
                                label="Email"
                                variant="outlined"
                            />
                            <TextField
                                id="outlined-multiline-static"
                                label="Multiline"
                                multiline
                                rows={4}
                                defaultValue="Write your message here..."
                                variant="outlined"
                            />
                        </FormControl>
                    </div>
                </div>
            </div>
        </div>
    );
}
