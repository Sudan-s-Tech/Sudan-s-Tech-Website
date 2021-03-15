import React from "react";
import "./test.css";
import priyanka from "../../assets/priyanka.jpg";
import supriya from "../../assets/supriya (2).jpg";
export default function Testimonial() {
    return (
        <div>
            <section class="testimonial text-center">
                <div class="container">
                    <div class="heading white-heading">Testimonial</div>
                    <div
                        id="testimonial4"
                        class="carousel slide testimonial4_indicators testimonial4_control_button thumb_scroll_x swipe_x"
                        data-ride="carousel"
                        data-pause="hover"
                        data-interval="5000"
                        data-duration="2000"
                    >
                        <div class="carousel-inner" role="listbox">
                            <div class="carousel-item active">
                                <div class="testimonial4_slide">
                                    <img
                                        src={priyanka}
                                        class="img-circle img-responsive"
                                        alt=""
                                    />
                                    <p>
                                    I had participated in Hack The Mountains it was a great hackathon. I really enjoyed working here with talented people, good friends, nice place, strong team and the best support I ever got. It's their support and encouragement that I can manage my work and give my best. The whole experience has been a great learning for me. Thanks to the whole team for this wonderful experience.{" "}
                                    </p>
                                    <h4>Priyanka Mogga</h4>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="testimonial4_slide">
                                    <img
                                        src={supriya}
                                        class="img-circle img-responsive"
                                        alt=""
                                    />
                                    <p>
                                    I'm very glad to participate in the htm qubits in association with sundantech. They are doing great. It is helpful and great to learn from well-experienced mentors. I'm very much interested in open cv and cloud, the qubits helped me to gain some knowledge and hands-on experience. I want to thanks hack the mountains and looking forward to more sessions.
                                    </p>
                                    <h4>Supriya</h4>
                                </div>
                            </div>
                        </div>
                        <a
                            class="carousel-control-prev"
                            href="#testimonial4"
                            data-slide="prev"
                        >
                            <span class="carousel-control-prev-icon"></span>
                        </a>
                        <a
                            class="carousel-control-next"
                            href="#testimonial4"
                            data-slide="next"
                        >
                            <span class="carousel-control-next-icon"></span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
