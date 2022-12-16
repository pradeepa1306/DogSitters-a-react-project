import React from 'react'
import { FaPaw } from "react-icons/fa";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Siting = ({ sitingList }) => {
    return (
        <div className="siting">
            <Row>
                <Col md={6}>
                    <h2 style={{ fontSize: '30px' }}><FaPaw style={{ color: '#a89b32' }} />
                        &nbsp;{sitingList.animalName}</h2>
                    <h5>{sitingList.Breed}</h5>
                </Col>
                <Col md={6} className="sittingDate">
                    <p>{sitingList.sittingBookedDate}</p>
                </Col>
            </Row>
        </div>
    )
}

export default Siting