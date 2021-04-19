import React, { useState, useEffect } from "react";
import TrainingCard from "./TrainingCard";
import Hero from "../Hero/Hero";
// import { makeStyles } from "@material-ui/core/styles";
// import InputLabel from "@material-ui/core/InputLabel";
// import FormHelperText from "@material-ui/core/FormHelperText";
// import FormControl from "@material-ui/core/FormControl";
// import Select from "@material-ui/core/Select";
// import NativeSelect from "@material-ui/core/NativeSelect";
// import { Link } from "react-router-dom";
// import Page from "react-page-loading";
import loader from '../../assets/logo.svg'


import axios from "axios";
// const useStyles = makeStyles((theme) => ({
//     formControl: {
//         margin: theme.spacing(1),
//         minWidth: 500,
//     },
//     selectEmpty: {
//         marginTop: theme.spacing(2),
//     },
// }));
export default function Events() {
    const [trainings, setTraining] = useState([]);
    const[loading,setLoading] = useState(true)

    useEffect(async () => {
        axios
            .get("https://sudans-api.herokuapp.com/trainings")
            .then((res) => {
                setLoading(false)
                setTraining(res.data);
            });
    }, []);

    // const classes = useStyles();

    return (
        <div>
            <Hero
                subheading={"SudansTech"}
                heading={"We are known for our "}
                gradient={"Training courses"}
                para={
                    "“Don’t‌ ‌decrease‌ ‌the‌ ‌goal.‌ ‌Increase‌ ‌the‌ ‌effort”.We‌ ‌Don't‌ ‌Only‌ ‌Provide‌ ‌Courses‌ ‌but‌ ‌Train‌ ‌you‌ ‌for‌ ‌some‌ ‌Real‌ ‌industry‌ ‌experience.‌ "
                }
            />
            {
                (loading ? <><img style={{width:'120px'}} src={loader} alt="loading" />
                     <h4>Loading...</h4></>:(
                    <div className="container" style={{ marginBottom: 100 }}>
                    <div className="row" align="center">
                        {trainings.map((item) => {
                            return (
                                <div className="col-md-4">
                                    <TrainingCard
                                        color={"secondary"}
                                        title={item.title}
                                        date={item.duration}
                                        level={item.level}
                                        lesson={item.lesson}
                                        desc={item.description}
                                        imgurl={item.imageurl}
                                        link={`/register/${item.title}`}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
                ))
            }
        </div>
    );
}
