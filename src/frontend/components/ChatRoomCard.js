import React, { useState } from 'react';

import { Card } from 'react-bootstrap';
import { apiChat } from './Api';

export function ChatRoomCard({ roomID }) {

    let curChat = apiChat(roomID)

    return (
        <Card className="h-100 shadow-sm bg-white rounded">
            <Card.Body className="d-flex flex-colum">
                <div className="d-flex mb-2 justify-content-between">
                    <Card.Title className="mb-0 font-weight-bold">Title</Card.Title>
                </div>
                <Card.Text className="text-secondary">
                    `{curChat}`
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
