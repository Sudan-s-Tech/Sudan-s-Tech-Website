import React, { useEffect, useState } from "react";
import EventCard from "./EventCard/Eventcard";
import Hero from "../Hero/Hero";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import Button from "@material-ui/core/Button";

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
    const [events, setEvent] = useState([]);
    useEffect(async () => {
        axios.get("https://sudanstechapi.herokuapp.com/events").then((res) => {
            setEvent(res.data);
        });
    }, []);

    return (
        <div style={{ marginBottom: 100 }}>
            <Hero
                subheading={"SudansTech"}
                heading={"Our Events do the "}
                gradient={"Talk"}
                para={
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy "
                }
            />
            <Button
                variant="outlined"
                color="primary"
                style={{ margin: "1px 10px" }}
            >
                Past
            </Button>
            <Button
                variant="outlined"
                color="secondary"
                style={{ margin: "1px 10px" }}
            >
                Ongoing
            </Button>
            <Button
                variant="outlined"
                color="primary"
                style={{ margin: "1px 10px" }}
            >
                Upcoming
            </Button>

            <div className="container">
                <div className="row" align="center">
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
