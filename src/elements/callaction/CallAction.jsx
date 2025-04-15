import React from 'react'
import { Link } from react-router-dom;
const CallAction = () => {
    return (
        <div className="call-to-action-wrapper call-to-action text-white-wrapper  ptb--120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="inner text-center">
                            <span>Physical therapy is the key to unlocking the door of disability.</span>
                            <h2>Insightful strategies, impactful results.</h2>
                            <Link className="rn-button-style--2" to="/contact"><span>Contact Us</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CallAction;
