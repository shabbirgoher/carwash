import React from 'react';

import Block from "./../block";
import './style.css';

const About = () => (
    <div className="about-container">
        <Block header="About Us">
            <p>Smart Cocept International specializes in auto detailing &amp; premium vehicle cleaning services. We stand apart due to our focus on innovation, convenience &amp; eco-friendly practices. Through our proven method we are able to safely remove dirt, grime, and tar without harming a vehicle’s paint.</p>
        </Block>

        <Block header="Our Vision">
            <p>
                Change the way companies and individuals clean their vehicles. Our innovative way that saves tons of water and produces brilliant results is state of the art.
            </p>
            <p>
                At Smart Concept we aim to serve our customers with unprecedented service. This isn’t only found in exceptional vehicle cleaning but extends to serving our clients with friendly, attentive and excellent service. Our customers continuously experience the <strong>“WOW”</strong> factor.</p>

        </Block>

        <Block>
            <p>
                At Smart Concept, We pride ourselves in meticulous details to make sure that every customer receives the highest standard of service.
            </p>
            <p>
                Our highly trained staff has the ability to more than clean your Car, Trucks and trailers. Our clean cut and sharp crews are there to deliver results that exceed every time. We offer in house training to maintain the unmatched Smart Concept International standard.
            </p>
        </Block>

        <Block header="HOW WE OPERATE">
            <ul>
                <li>We only use environmentally and eco friendly chemicals.</li>
                <li>
                    We operate a <b>five star service</b> regarding customer service, convenience, customer care, customer satisfaction and a perfect result every time as we feel <b>Customer is king</b>.
                </li>
            </ul>
        </Block>
        <Block header="STAFF TRAINING">
            <div>
                <p>
                    Our staff undergo a full two day training session provided by the Ops Manager covering the following:
                </p>
                <ul>
                    <li>Site preparation</li>
                    <li>Appearance</li>
                    <li>Customer Service</li>
                    <li>Product Application</li>

                </ul>
            </div>
        </Block>
    </div>
);

export default About;