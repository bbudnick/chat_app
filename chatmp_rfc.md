# Chat Message Protocol (ChatMP) RFC

| Status        | Proposed       |
:-------------- |:---------------------------------------------------- |
| **RFC #**     | TBD |
| **Author(s)** | Brita Budnick and Michael Howard |
| **Sponsor**   | Dr Niru Bulusu |
| **Updated**   | 2021-05-18 |
| **Obsoletes** | None  |

## Objective

The objective of the ChatMP protocol is to provide a predetermine API to form all necessary messages needed internet relay chat. It is to take advantage of the HTTP(s) structure for messaging as well as the TCP packet transmission guarantees.

## Motivation

Developing a chat client/server application can be simplified if the communincation between them is cleanly structured and takes advantage of hardened application and transmission protocols. Thus ChatMP was developed to provide an easy messaging framework which client/server developers can easily integrate.

## User Benefit

As a developer, both client and server chat applications and be designed to send and listen to ChatMP messages.  The details are encapsulated in the protocol and can flexibly support multiple client/server programming languages and environments.

## Design Proposal

The design for ChatMP revolves around the definition of 10 message types that can each be invoked via a unique API endpoint.  All messages go over HTTP(s) and thus take advantage of predetermined handshaking for GET/POST/PUT/DELETE methods.  TLS termination of the connection is supported to provide end-to-end encryption and each connection is transmitted using TCP thus enabling traffic congestion handling and retransmission.

The ChatMP API messages are as follows:

### 1. Create: Create a new chat room record
    method: POST
    endpoint: /create
    body: 
        JSON payload containing users, title
### 2. List: List all chat rooms
    method: GET
    endpoint: /list
    body: 
        None

### 3. Join: Append a new user to the chat room
    method: PUT
    endpoint: /join
    body:
        JSON payload containing updated users and chat room id

### 4. Leave: Remove a user from the chat room
    method: PUT
    endpoint: /leave
    body:
        JSON payload containing updated users and chat room id

### 5. Members: List members of a chat room
    method: PUT
    endpoint: /members
    body:
        JSON payload containing chat room id

### 6. Update: Update the chat property of a chat room
    method: PUT
    endpoint: /update
    body:
        JSON payload containing chat room id, updated chat string

### 7. Delete: Delete a specific chat room
    method: DELETE
    endpoint: /delete
    body:
        JSON payload containing chat room id

### 8. File: Add a file to a chat room
    method: PUT
    endpoint: /file
    body:
        JSON payload containing chat room id, b64 encoded file

### 9. Chat: Get chat room contents
    method: POST
    endpoint: /chat
    body:
        JSON payload containing chat room id

### 10. DeleteAll: Delete all chat rooms
    method: DELETE
    endpoint: /deleteall
    body:
        None


### Alternatives Considered
* The other alternative discussed was to eliminate HTTP as an intermediate layer and create a raw TCP connection directly to the server socket.

### Performance Implications
* The bottleneck will primarily be the network connection between the client and server.

### Dependencies
* The ChatMP protocol depends on HTTP and TCP/IP.  HTTP must be at least v1.1 and will be handled in the client application (webpage).
* For encrypted connections, TLS termination (at least v1.2) must be provided at the server-side proxy. 

### Engineering Impact
* The protocol itself does not define the size, startup time or testing of the client and server components.  Those are left to the developer to optimize.
* All code that implements this protocol is maintained by the developers of FelixChat.

### Platforms and Environments
* Platforms: Any client/server environment that supports HTTP can be used to implement the client/server that use the ChatMP protocol.  However, the FelixChat team felt that a Node.js backend and a React.js web frontend were the most efficient and mainstream implementations that provided for easy scaling and future advances.
* Execution environments are independent of the ChatMP protocol.  The FelixChat application was hosted in Google Cloud Platform within a Google Kubernetes Engine cluster.

### Best Practices
* The DeleteAll API should be hidden from the end user.
* For the FelixChat client/server, all code is build into a container and deployed into a Kubernetes cluster.  This occurs through an automated CI/CD pipeline hosted through GitHub Actions.
* All client/server code should have full unit test coverage via Jest and be run in an automated fashion via the CI/CD pipeline. 

### Tutorials and Examples
* Full source code is hosted at https://github.com/zemar/cs594-project

### Compatibility
* At version 1.0, there are no present compatibility concerns
* All HTTP methods are compatible with HTTP v1.1.  If these are modified/deprecated, the protocol will need to adapt.
* The FelixChat server is implemented with Node.js that contains 3rd party NPM packages.  Version compatibility of these packages over time will be a concern.

### User Impact
* The biggest user facing challenge will be multiple users within a chat room and connections across multiple rooms.  This will be handled as part of the development process of the client/server application and be independent of the ChatMP protocol.

## Detailed Design

See Design Proposal.

## Questions and Discussion Topics

