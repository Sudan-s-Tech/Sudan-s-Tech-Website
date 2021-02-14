import React, { useEffect, useState } from "react";
import EventCard from "./EventCard/Eventcard";
import Hero from "../Hero/Hero";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import axios from "axios";
const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 500,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));
var result;

export default function Events() {
    const [state, setState] = useState({
        age: "",
        name: "hai",
    });
    const [events, setEvent] = useState([]);
    useEffect(async () => {
        axios.get("https://sudanstechapi.herokuapp.com/events").then((res) => {
            setEvent(res.data);
        });
    }, []);
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
                heading={"Our Events do the "}
                gradient={"Talk"}
                para={
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy "
                }
            />
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-native-simple">
                    Show All Events
                </InputLabel>
                <Select
                    native
                    value={state.age}
                    onChange={handleChange}
                    inputProps={{
                        name: "age",
                        id: "age-native-simple",
                    }}
                >
                    <option aria-label="None" value="" />
                    <option value={10}>Upcoming</option>
                    <option value={20}>Ongoing</option>
                    <option value={30}>Past</option>
                </Select>
            </FormControl>
            <div className="container">
                <div className="row">
                    {events.map((item) => {
                        return (
                            <div className="col-md-4">
                                <EventCard
                                    tag={"upcoming"}
                                    color={"secondary"}
                                    title={item.title}
                                    date={item.startdate}
                                    desc={item.description}
                                    imgurl={item.imgurl}
                                    link={item.link}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
