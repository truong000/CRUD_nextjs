import { Modal, Button, Form, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

function ModalDialog() {
    const [showModal, setShowModal] = useState(false)
    const userDetail = useSelector((state: RootState) => state.users.userDetail);
    const [fisrtName, setFirtName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('');
    const [number, setNumber] = useState(0);
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');

    userDetail.name.firstName = fisrtName;
    userDetail.name.lastName = lastName;
    userDetail.email = email;
    userDetail.address.number = number;
    userDetail.address.street = street;
    userDetail.address.city = city;
    userDetail.phone = phone; 

    const handleSubmitAdd = () => {
        
    }

    return (
        <>
            <Button variant="success" onClick={() => setShowModal(true)}>
                Add USER
            </Button>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>React Modal Popover Example</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Row>
                                <Col xs={6} md={6}>
                                    <Form.Control
                                        type="text"
                                        placeholder="Fisrt name"
                                        value={userDetail.name.firstName}  
                                        onChange={(e) => setFirtName(e.target.value)}                                 
                                        autoFocus
                                    />
                                </Col>
                                <Col xs={6} md={6}>
                                    <Form.Control
                                        type="text"
                                        placeholder="Last name"
                                        value={userDetail.name.lastName}
                                        onChange={(e) => setLastName(e.target.value)}      
                                        autoFocus
                                    />
                                </Col>
                            </Row>
                            <Form.Label>Email</Form.Label>
                            <Row>
                                <Col xs={12} md={12}>
                                    <Form.Control
                                        type="text"
                                        placeholder="Email"
                                        value={userDetail.email}
                                        onChange={(e) => setEmail(e.target.value)}      
                                        autoFocus
                                    />
                                </Col>
                            </Row>
                            <Form.Label>Phone</Form.Label>
                            <Row>
                                <Col xs={12} md={12}>
                                    <Form.Control
                                        type="text"
                                        placeholder="Phone"
                                        value={userDetail.phone}
                                        onChange={(e) => setPhone(e.target.value)}      
                                        autoFocus
                                    />
                                </Col>
                            </Row>
                            <Form.Label>Address</Form.Label>
                            <Row>
                                <Col xs={4} md={4}>
                                    <Form.Control
                                        type="text"
                                        placeholder="Number"
                                        value={userDetail.address.number}
                                        onChange={(e) => setNumber(Number(e.target.value))}      
                                        autoFocus
                                    />
                                </Col>
                                <Col xs={4} md={8}>
                                    <Form.Control
                                        type="text"
                                        placeholder="Street"
                                        value={userDetail.address.street}
                                        onChange={(e) => setStreet(e.target.value)}      
                                        autoFocus
                                    />
                                </Col>
                                
                                <Col xs={4} md={12}>
                                    <Form.Control
                                        type="text"
                                        placeholder="City"
                                        value={userDetail.address.city}
                                        onChange={(e) => setCity(e.target.value)}      
                                        autoFocus
                                    />
                                </Col>
                            </Row>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={() => setShowModal(false)}>
                        Close
                    </Button>
                    <Button variant="dark" onClick={() => setShowModal(false)}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal >
        </>
    )
}

export default ModalDialog