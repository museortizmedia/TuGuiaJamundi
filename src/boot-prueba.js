import {Button, Alert, Breadcrumb, Card, Form, Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
export const BS_prueba = () => {
    return (
        <>
        <Container>
        <Button>Test Button</Button>
        <Alert variant="success">This a alert</Alert>
        <Breadcrumb>
            <Breadcrumb.Item>Test 1</Breadcrumb.Item>
            <Breadcrumb.Item>Test 2</Breadcrumb.Item>
            <Breadcrumb.Item active>Test 3</Breadcrumb.Item>
        </Breadcrumb>
        <Card className="mb-3" style={{color: "#000"}}>
            <Card.Img src="https://picsum.photos/200/50" />
            <Card.Body>
            <Card.Title> Card Example </Card.Title>
            <Card.Text>
                This is an example of react bootstrap card
            </Card.Text>
            <Button variant="primary">Read More</Button>
            </Card.Body>
        </Card>
        <Form>
        <Row>
            <Col md>
            <Form.Group controlId="formEmail">
                <Form.Label> Email Adress </Form.Label>
                <Form.Control type="email" placeholder="example@mail.com" />
                <Form.Text className="text-muted">
                    We'll never share your email with others
                </Form.Text>
            </Form.Group>
            </Col>
            <Col md>
            <Form.Group controlId="formPassword">
                <Form.Label> Password </Form.Label>
                <Form.Control type="password" placeholder="password" />
            </Form.Group>
            </Col>
        <Button variant="secondary" type="submit">Login</Button>
        </Row>
        </Form>
        </Container>
        </>
    )
}
export default BS_prueba;