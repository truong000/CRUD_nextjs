import { Modal, Button, Form, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { addUser, editUser } from '@/redux/Slice/userSlice';


function ModalEditUser() {
    const dispatch = useDispatch()
    const user = useSelector((state: RootState) => state.users.userDetail)
    const [showModal, setShowModal] = useState(false)
    const [fisrtname, setFirtName] = useState(user.name.firstname);
    const [lastname, setLastName] = useState(user.name.lastname);
    const [email, setEmail] = useState(user.email)
    const [phone, setPhone] = useState(user.phone);
    const [number, setNumber] = useState(user.address.number);
    const [street, setStreet] = useState(user.address.street);
    const [city, setCity] = useState(user.address.city);


    console.log('list', user)

    return (
        <>
            <Button variant="success" onClick={() => setShowModal(true)}>
                Edit User
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
                                        value={fisrtname}  
                                        onChange={(e) => setFirtName(e.target.value)}                                 
                                        autoFocus
                                    />
                                </Col>
                                <Col xs={6} md={6}>
                                    <Form.Control
                                        type="text"
                                        placeholder="Last name"
                                        value={lastname}
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
                                        value={email}
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
                                        value={phone}
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
                                        value={number}
                                        onChange={(e) => setNumber(Number(e.target.value))}      
                                        autoFocus
                                    />
                                </Col>
                                <Col xs={4} md={8}>
                                    <Form.Control
                                        type="text"
                                        placeholder="Street"
                                        value={street}
                                        onChange={(e) => setStreet(e.target.value)}      
                                        autoFocus
                                    />
                                </Col>
                                
                                <Col xs={4} md={12}>
                                    <Form.Control
                                        type="text"
                                        placeholder="City"
                                        value={city}
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

export default ModalEditUser