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
                    "Thanks‌ ‌to‌ ‌all‌ ‌these‌ ‌Sponsors‌ ‌who‌ ‌Supported‌ ‌us‌ ‌for‌ ‌this‌ ‌Initiative‌ ‌and‌ ‌without‌ ‌their‌ ‌help‌ ‌this‌ ‌would‌ ‌have‌ ‌not‌ ‌been‌ ‌possible.‌"
                }
            />
            <div className="container my-4">
                <div className="row">
                    <div className="col-md-6">
                        <img
                            src='https://www.mosse-institute.com/static/img/logo-title-with-triangle.png'
                            style={{ width: "80%", marginTop: "15%" }}
                            alt=""
                        />
                    </div>
                    <div className="col-md-6">
                        <img
                            src='data:image/png;base64,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'
                            style={{ width: "30%", marginTop: "10%" }}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
