import React, { useState } from "react";
import Hero from "../Hero/Hero";
// import { makeStyles } from "@material-ui/core/styles";
import Pic from "../../assets/contact.svg";
import "./contact.css";
import Button from "@material-ui/core/Button";
var Airtable = require('airtable');
var base = new Airtable({ apiKey: 'key9vZntNeQ60A0N5' }).base('app3mDJ5e5VHLIw3c');


export default function Events() {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [message, setmessage] = useState("");
    function submit(e) {
        // console.log(name);
        // console.log(email);
        // console.log(message);
        base('Table 1').create([
            {
                "fields": {
                    "Name": name,
                    "email": email,
                    "message": message,
                }
            }
        ], function (err, records) {
            if (err) {
                console.error(err);
                return;
            }
            records.forEach(function (record) {
                console.log(record.getId());
            });
        });
        alert("Thank you for submitting the form we will contact you shortly");
        setemail("");
        setname("");
        setmessage("");

    }
    return (
        <div className="contact-us-div">
            <Hero
                subheading={"SudansTech"}
                heading={"We keep our doors open "}
                gradient={"24x7"}
                para={
                    "Have‌ ‌a‌ ‌query‌ ‌?‌ ‌Contact‌ ‌Us‌ ‌,‌ ‌We‌ ‌will‌ ‌try‌ ‌our‌ ‌best‌ ‌to‌ ‌solve‌ ‌your‌ ‌query‌ ‌with‌ ‌our‌ ‌best‌ ‌minds‌ ‌on‌ ‌it‌.‌"
                }
            />
            <div className="container">
                <div className="row" style={{ margin: "8% 0%" }}>
                    <div className="col-md-7">
                        <img src={Pic} alt='contactpic' style={{ width: "80%" }} />
                    </div>
                    <div className="col-md-5">
                        <input type="text" placeholder="Name" value={name}
                            onChange={(e) => {
                                setname(e.target.value)
                            }}
                        />
                        <input type="email" placeholder="Email"
                            value={email}
                            onChange={(e) => {
                                setemail(e.target.value)
                            }}
                        />
                        <textarea placeholder="Write your message here..."
                            value={message}
                            onChange={(e) => {
                                setmessage(e.target.value)
                            }}
                        ></textarea>
                        <Button
                            // className="hero-btn"
                            variant="contained"
                            href="#contained-buttons"
                            style={{
                                backgroundColor: "#7289DA",
                                color: "white",
                                marginTop: "2%",
                                borderRadius: "20px",
                            }}
                            onClick={submit}
                        >
                            Submit
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
