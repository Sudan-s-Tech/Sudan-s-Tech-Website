import React from "react";
import Hero from "../Hero/Hero";
import { makeStyles } from "@material-ui/core/styles";
import Sp1 from "../../assets/sp.png";
import Sp2 from "../../assets/sp2.png";
const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 500,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));
export default function Sponsors() {
    return (
        <div>
            <Hero
                subheading={"SudansTech"}
                heading={"Our supporting "}
                gradient={"Sponsors"}
                para={
                    "Thanks‌ ‌to‌ ‌all‌ ‌these‌ ‌Sponsors‌ ‌which‌ ‌Supported‌ ‌us‌ ‌for‌ ‌this‌ ‌Initiative‌ ‌and‌ ‌without‌ ‌their‌ ‌help‌ ‌this‌ ‌would‌ ‌have‌ ‌not‌ ‌been‌ ‌possible.‌"
                }
            />
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <img
                            src={Sp1}
                            style={{ width: "20%", marginTop: "10%" }}
                            alt=""
                        />
                    </div>
                    <div className="col-md-12">
                        <img
                            src={Sp2}
                            style={{ width: "20%", marginTop: "10%" }}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
