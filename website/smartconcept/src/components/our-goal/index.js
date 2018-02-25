import React from 'react';

import Block from "./../block";
import './style.css';

const OurGoal = () => (
    <div className="our-goal-container">
        <Block header="WHY CHOOSE US.?">
            <ul>
                <li>
                    <b>Increased exposure</b> due to our services that are second to none.
                </li>
                <li>
                    The <b>extended business time</b> by patrons whilst their vehicles are being cleaned on the premises.
                </li>
                <li>
                    <b>Conservation</b> of the Eco-System on the premises.
                </li>
                <li>
                    <b>Prevention</b> of the environmental degradation.
                </li>
                <li>
                    <b>Quality of our services</b> and orderly environment.
                </li>
                <li>
                    <b>Water saving</b> at the rate of 180 liters per vehicle cleaned on the premises.
                </li>
                <li>
                    Contributing towards water saving, for the town at the rate of 180 liters per vehicle cleaned.
                </li>
                <li>
                    Contributing towards social up-liftmen programmes of Sultanate of Oman.
                </li>
                <li>
                    Our <b>unique ability to clean</b> and our successful track record in delivering quality service.
                </li>
            </ul>
        </Block>

        <Block header="NO SCRATING">
            <p>
                Waterless Car Wash cannot scratch your vehicle, its chemical composition uses capillary action to envelop every dust and grit particle down to a size smaller than the human eye can see, and does not allow it to come in contact with the surface again.
            </p>
            <p>
                Waterless Car Wash lifts the dirt and grit from the surface you are washing as it dries, and suspends it within the compound, so that it does not come into contact with the bodywork again. Gently removing road grime, tar, bird droppings and tree sap without scratching your cars surface.
            </p>
        </Block>

        <Block header="ADVANTAGES">
            <h6 style={{ fontStyle: 'italic' }}>Convenient & Efficient</h6>
            <ul>
                <li>
                    Facility free wash and wax in just a few minutes
                </li>
                <li>
                    Service performed anywhere and anytime without any hassle
                </li>
                <li>
                    Uses Nano Technology chemical compounds without any harmful ingredients
                </li>
            </ul>
            <h6 style={{ fontStyle: 'italic' }}>Environmentally Friendly</h6>
            <ul>
                <li>
                    Each wash conserves a minimum of 180L of water
                </li>
                <li>
                    No harmful run-off in parking garage
                </li>
                <li>
                    Biodegradable based formula
                </li>
            </ul>
            <h6 style={{ fontStyle: 'italic' }}>Performance Based</h6>
            <ul>
                <li>
                    High quality wash and wax within minutes
                </li>
                <li>
                    Vehicles stay cleaner longer
                </li>
                <li>
                    Experienced, trained and insured staff
                </li>
            </ul>
            <h6 style={{ fontStyle: 'italic' }}>Save Water, Give Water</h6>
            <ul>
                <li>
                    With every wash Smart Concept saves water for those in need
                </li>
            </ul>
        </Block>
    </div>
)

export default OurGoal;