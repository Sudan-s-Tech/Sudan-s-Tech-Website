import React, { useEffect, useState } from "react";
import EventCard from "./EventCard/Eventcard";
import Hero from "../Hero/Hero";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import Button from "@material-ui/core/Button";
import Page from "react-page-loading";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 500,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

var arr = [];

const today = new Date();
const date =
    today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
var currentdate = date;
console.log(currentdate);

export default function Events() {
    const [events, setEvent] = useState([]);
    const [option, setOption] = useState("past");

    useEffect(async () => {
        axios.get("https://sudanstechapi.herokuapp.com/events").then((res) => {
            setEvent(res.data);
        });
    }, []);

    if (option == "ongoing") {
        arr = [];
        var items = [];
        for (let i in events) {
            // console.log(i);
            if (
                parseInt(events[i].enddate.split("-")[2]) >
                    parseInt(currentdate.split("-")[2]) &&
                parseInt(events[i].startdate.split("-")[2]) <
                    parseInt(currentdate.split("-")[2])
            ) {
                items.push(events[i]);
            } else if (
                (parseInt(events[i].enddate.split("-")[2]) ==
                    parseInt(currentdate.split("-")[2]) &&
                    parseInt(events[i].startdate.split("-")[2]) ==
                        parseInt(currentdate.split("-")[2])) ||
                (parseInt(events[i].enddate.split("-")[2]) ==
                    parseInt(currentdate.split("-")[2]) &&
                    parseInt(events[i].startdate.split("-")[2]) <
                        parseInt(currentdate.split("-")[2])) ||
                (parseInt(events[i].enddate.split("-")[2]) >
                    parseInt(currentdate.split("-")[2]) &&
                    parseInt(events[i].startdate.split("-")[2]) ==
                        parseInt(currentdate.split("-")[2]))
            ) {
                if (
                    parseInt(events[i].enddate.split("-")[1]) >
                        parseInt(currentdate.split("-")[1]) &&
                    parseInt(events[i].startdate.split("-")[1]) <
                        parseInt(currentdate.split("-")[1])
                ) {
                    items.push(events[i]);
                } else if (
                    (parseInt(events[i].enddate.split("-")[1]) ==
                        parseInt(currentdate.split("-")[1]) &&
                        parseInt(events[i].startdate.split("-")[1]) ==
                            parseInt(currentdate.split("-")[1])) ||
                    (parseInt(events[i].enddate.split("-")[1]) ==
                        parseInt(currentdate.split("-")[1]) &&
                        parseInt(events[i].startdate.split("-")[1]) <
                            parseInt(currentdate.split("-")[1])) ||
                    (parseInt(events[i].enddate.split("-")[1]) >
                        parseInt(currentdate.split("-")[1]) &&
                        parseInt(events[i].startdate.split("-")[1]) ==
                            parseInt(currentdate.split("-")[1]))
                ) {
                    {
                        if (
                            parseInt(events[i].enddate.split("-")[1]) ==
                                parseInt(currentdate.split("-")[1]) &&
                            parseInt(events[i].startdate.split("-")[1]) ==
                                parseInt(currentdate.split("-")[1])
                        ) {
                            if (
                                parseInt(events[i].enddate.split("-")[0]) >=
                                    parseInt(currentdate.split("-")[0]) &&
                                parseInt(events[i].startdate.split("-")[0]) <=
                                    parseInt(currentdate.split("-")[0])
                            )
                                items.push(events[i]);
                        } else if (
                            parseInt(events[i].enddate.split("-")[1]) ==
                            parseInt(currentdate.split("-")[1])
                        ) {
                            if (
                                parseInt(events[i].enddate.split("-")[0]) >=
                                parseInt(currentdate.split("-")[0])
                            )
                                items.push(events[i]);
                        } else if (
                            parseInt(events[i].startdate.split("-")[1]) ==
                            parseInt(currentdate.split("-")[1])
                        ) {
                            if (
                                parseInt(events[i].startdate.split("-")[0]) <=
                                parseInt(currentdate.split("-")[0])
                            )
                                items.push(events[i]);
                        }
                    }
                }
            }
        }
        for (var it of items) {
            arr.push(it);
        }
    }

    if (option === "upcoming") {
        arr = [];
        var items = [];

        for (let i in events) {
            if (
                parseInt(events[i].startdate.split("-")[2]) >
                parseInt(currentdate.split("-")[2])
            ) {
                items.push(events[i]);
            } else if (
                parseInt(events[i].startdate.split("-")[2]) ==
                parseInt(currentdate.split("-")[2])
            ) {
                if (
                    parseInt(events[i].startdate.split("-")[1]) >
                    parseInt(currentdate.split("-")[1])
                ) {
                    items.push(events[i]);
                    // items.push(5);
                } else if (
                    parseInt(events[i].startdate.split("-")[1]) ==
                    parseInt(currentdate.split("-")[1])
                ) {
                    if (
                        parseInt(events[i].startdate.split("-")[0]) >
                        parseInt(currentdate.split("-")[0])
                    ) {
                        items.push(events[i]);
                    }
                }
            }

            // console.log(items);
            // for (var it of items) {
            //     arr.push(it);
            // }
            {
                let mymap = new Map();

                arr = items.filter((el) => {
                    const val = mymap.get(el.name);
                    if (val) {
                        if (el.id < val) {
                            mymap.delete(el.name);
                            mymap.set(el.name, el.id);
                            return true;
                        } else {
                            return false;
                        }
                    }
                    mymap.set(el.name, el.id);
                    return true;
                });
            }
        }
    }
    if (option === "past") {
        arr = [];
        var items = [];
        for (let i in events) {
            if (
                parseInt(events[i].enddate.split("-")[2]) <
                parseInt(currentdate.split("-")[2])
            ) {
                items.push(events[i]);
                console.log(events[i].enddate);
            } else if (
                parseInt(events[i].enddate.split("-")[2]) ==
                parseInt(currentdate.split("-")[2])
            ) {
                if (
                    parseInt(events[i].enddate.split("-")[1]) <
                    parseInt(currentdate.split("-")[1])
                ) {
                    items.push(events[i]);
                } else if (
                    parseInt(events[i].enddate.split("-")[1]) ==
                    parseInt(currentdate.split("-")[1])
                ) {
                    if (
                        parseInt(events[i].enddate.split("-")[0]) <
                        parseInt(currentdate.split("-")[0])
                    ) {
                        items.push(events[i]);
                    }
                }
            }
        }
        for (var it of items) {
            arr.push(it);
        }
    }
    return (
        <div style={{ marginBottom: 100 }}>
            <Hero
                subheading={"SudansTech"}
                heading={"Our Events do the "}
                gradient={"Talk"}
                para={
                    "Are‌ ‌You‌ ‌fan‌ ‌of‌ ‌workshops‌ ‌,‌ ‌Hacakathon‌ ‌,‌ ‌webinars‌ ‌,‌ ‌Q/A’s‌ ‌?‌ ‌We‌ ‌organise‌ ‌these‌ ‌events‌ ‌.‌ ‌Check‌ ‌It‌ ‌Out‌ ‌!"
                }
            />
            <Button
                variant="outlined"
                color="primary"
                style={{
                    margin: "1px 10px",
                    borderRadius: "15px",
                    backgroundColor: "#7289DA",
                    color: "white",
                }}
                onClick={(e) => {
                    setOption("past");
                }}
            >
                <span style={{color:'#fff',outline:'none', width:'80px'}}> Past</span>
            </Button>
            <Button
                variant="outlined"
                color="primary"
                style={{
                    margin: "1px 10px",
                    borderRadius: "15px",
                    backgroundColor: "#7289DA",
                    color: "white !important",
                    outline: "none",
                }}
                onClick={(e) => {
                    setOption("ongoing");
                }}
            >
               <span style={{color:'#fff',outline:'none', width:'80px'}}> Ongoing</span> 
            </Button>
            <Button
                variant="outlined"
                color="primary"
                style={{
                    margin: "1px 10px",
                    borderRadius: "15px",
                    backgroundColor: "#7289DA",
                    color: "white",
                }}
                onClick={(e) => {
                    setOption("upcoming");
                }}
            >
               <span style={{color:'#fff',outline:'none', width:'80px'}}> Upcoming</span>
            </Button>
            <Page loader={"rotate-spin"} color={"#D864B4"} size={10}>
                <div className="container">
                    <div className="row" align="center">
                        {arr.length === 0 ? (
                            <div className="col-sm-12 my-5">
                                <h3 style={{ textAlign: "center" }}>
                                    No Events to show.
                                </h3>
                            </div>
                        ) : (
                            arr.map((item) => {
                                return (
                                    <div className="col-md-6">
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
                            })
                        )}
                    </div>
                </div>
            </Page>
        </div>
    );
}
