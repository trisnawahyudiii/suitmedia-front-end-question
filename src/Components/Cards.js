import React from "react";
import Card from "react-bootstrap/Card";
import icon1 from "../Assets/img/lightbulb-o.png";
import icon2 from "../Assets/img/bank.png";
import icon3 from "../Assets/img/balance-scale.png";

export default function Cards() {
    return (
        <div>
            <h3 className="my-5">OUR VALUES</h3>
            <div className="card-container d-flex align-items-center justify-content-center">
                <Card className="mx-3" style={{ width: "20rem", backgroundColor: "#E97B6F", borderRadius: 0, color: "#FFF" }}>
                    <Card.Body>
                        <img className="my-3 " src={icon1} alt="innovation-icon" />
                        <Card.Title className="my-3">INNOVATIVE</Card.Title>
                        <Card.Text className="my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maxime exercitationem dolorem deserunt, unde, eaque ipsa?</Card.Text>
                    </Card.Body>
                </Card>
                <Card className="mx-3" style={{ width: "20rem", backgroundColor: "#6A9970", borderRadius: 0, color: "#FFF" }}>
                    <Card.Body>
                        <img className="my-3 " src={icon2} alt="innovation-icon" />
                        <Card.Title className="my-3">LOYALTY</Card.Title>
                        <Card.Text className="my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maxime exercitationem dolorem deserunt, unde, eaque ipsa?</Card.Text>
                    </Card.Body>
                </Card>
                <Card className="mx-3" style={{ width: "20rem", backgroundColor: "#5696C2", borderRadius: 0, color: "#FFF" }}>
                    <Card.Body>
                        <img className="my-3 " src={icon3} alt="innovation-icon" />
                        <Card.Title className="my-3">RESPECT</Card.Title>
                        <Card.Text className="my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maxime exercitationem dolorem deserunt, unde, eaque ipsa?</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}
