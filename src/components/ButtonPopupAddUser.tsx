import { Modal, Button, Form, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { addUser } from '@/redux/Slice/userSlice';


function ModalAddNewUser() {
    const dispatch = useDispatch()
    const user = useSelector((state: RootState) => state.users)
    const [showModal, setShowModal] = useState(false)
    const [id, setId] = useState(0)
    const [fisrtname, setFirtName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('');
    const [number, setNumber] = useState(0);
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');

    function handleClickSubmit() {
        dispatch(addUser({
                id,
                fisrtname,
                lastname,
                email,
                phone,
                number,
                street,
                city
        }));
        setShowModal(false)
    }

    console.log('list', user)

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
                            <Form.Label>Id</Form.Label>
                            <Row>
                                <Col xs={12} md={4}>
                                    <Form.Control
                                        type="text"
                                        placeholder="id"
                                        value={id}
                                        onChange={(e) => setId(Number(e.target.value))}      
                                        autoFocus
                                    />
                                </Col>
                            </Row>
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
                    <Button variant="dark" onClick={() => handleClickSubmit()}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal >
        </>
    )
}

export default ModalAddNewUser