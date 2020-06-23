import React from 'react';
import { Container, Row, Col, TextInput } from "react-materialize";
import PostDisplay from "./PostDisplay";
import MakePost from "./MakePost";
import PostList from "./PostList";

export default () => {
    return (
        <Container>
            <Row>
                <Col className='teal' s={12} m={4}>
                    Profile
                </Col>
                <Col className='red' s={12} m={8}>
                    <MakePost />
                    <PostDisplay />
                    <PostList />
                </Col>
            </Row>
        </Container>
    );
};