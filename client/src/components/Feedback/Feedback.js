import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./feedback.css";
export default function Feedback() {
    return (
        <div
            className="feedback-div conatainer"
            style={{ textAlign: "left", padding: "50px 10px" }}
        >
            <div className="row">
                <div className="col-md-8">
                    <h1 style={{ color: "white" }}>
                        Lorem ipsordi djuyej uehnbdj
                    </h1>
                </div>
                <div className="col-md-4">
                    <form>
                        <div class="form-group">
                            <input required={true} />
                        </div>
                        <div class="form-group">
                            <input required={true} />
                        </div>

                        <Button variant="outlined">Submit</Button>
                    </form>
                </div>
            </div>
        </div>
    );
}
