import React from 'react'
import { Row, Col, Button } from 'react-materialize'

function Home() {
    return (
        <div>
            <Row>
                <Col className="black white-text" s={12} m={6} l={6}>
                    <h3>HELLO, I'M</h3>
                    <h1>
                        FATIMA OLASUNKANMI-OJO
                    </h1>
                    <p>A Full Stack Software Engineer based in Nigeria</p>
                    <Button
                        node="button"
                        style={{
                            marginRight: '5px'
                        }}
                        waves="light"
                    >
                        VIEW MY WORK
                    </Button>
                </Col>
                <Col
                    className="black white-text" s={12} m={6} l={6}>
                    2
                </Col>
            </Row>
        </div>
    )
}

export default Home