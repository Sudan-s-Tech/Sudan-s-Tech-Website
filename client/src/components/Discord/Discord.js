import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Disc from "../../assets/discord.svg";
import Button from "@material-ui/core/Button";

export default function Discord() {
    return (
        <div
            style={{
                padding: 50,
                backgroundColor: "#7289DA",
                overflow: "hidden",
            }}
        >
            <Grid container style={{ backgroundColor: "#7289DA" }} spacing={1}>
                <Grid xs={0.5}>
                    <img
                        src={Disc}
                        style={{ width: "50px", marginRight: 20 }}
                    />
                </Grid>
                <Grid xs={5.5}>
                    <h3
                        style={{
                            color: "#fff",
                            textAlign: "left",
                            overflow: "hidden",
                        }}
                    >
                        Connect with the community
                    </h3>
                    <p style={{ color: "#fff", textAlign: "left" }}>
                        Feel free to ask questions, report issues, and meet new
                        people.
                    </p>
                </Grid>
                <Grid item xs={5.5} style={{ marginLeft: "40%" }}>
                    <Button
                        variant="contained"
                        href="#contained-buttons"
                        style={{ backgroundColor: "white" }}
                    >
                        Join Our Discord
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}
