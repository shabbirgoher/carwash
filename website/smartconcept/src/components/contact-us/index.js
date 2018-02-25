import React from 'react';

import Block from "./../block";
import OrgLocation from "./org-location";
import './style.css';

const ContactUs = () => (
    <div className="contact-us-container">
        <Block header="CONTACT US">
            <div className="contact-us-content">
                <div className="contact-address">
                    <ul style={{ listStyleType: 'none' }}>
                        <li>
                            SMART CONCEPT INTERNATIONAL
                        </li>
                            <li>
                                MABEILA SANNIYA NO.5
                        </li>
                            <li>
                                P.O.BOX 1234
                        </li>
                            <li>
                                TEL: 00-00000
                        </li>
                            <li>
                                FAX: 00-000
                        </li>
                            <li>
                                EMAIL- info@smartconceptinternational.com
                        </li>
                    </ul>
                </div>
                <div className="contact-address">
                    <OrgLocation />
                </div>
            </div>

        </Block>
    </div>
)

export default ContactUs;