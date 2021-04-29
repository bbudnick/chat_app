/*
    Api.js

    All API function calls. 

    apiCreate: Create a new chat room record
        parameters: 
                JSON payload containing users, title
    apiList: List all chat rooms
        parameters: 
                None

    apiJoin: Append a new user to the chat room
        parameters:
                JSON payload containing updated users and chat room id

    apiLeave: Remove a user from the chat room
        parameters:
                JSON payload containing updated users and chat room id

    apiMembers: List members of a chat room
        parameters:
                JSON payload containing chat room id

    apiUpdate: Update the chat property of a chat room
        parameters:
                JSON payload containing chat room id, updated chat string

    apiDelete: Delete a specific chat room
        parameters:
                JSON payload containing chat room id

    apiFile: Add a file to a chat room
        parameters:
                JSON payload containing chat room id, b64 encoded file

    apiDeleteAll: Delete all chat rooms
        parameters:
                None

*/

export const apiCreate = async (request) => {
    let result = await fetch('/create', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({request)
    })
    .then(res => {
        if(res.status >= 300) { throw new Error(res.statusText); }
        return res.json();
    })
    .then(list => { return list; })
    .catch(err => {
        console.log(err); 
    });
    return result;
};

export const apiList = async () => {
    let result = await fetch('/list', {
        headers: {
            'Content-Type': 'application/json'
        },        
        method: "GET",
    })
    .then(res => {
        if(res.status >= 300) { throw new Error(res.statusText); }
        return res.json();
    })
    .catch(err => { 
        console.log(err); 
    });    
    return result;
};

export const apiJoin = async (request) => {
    let result = await fetch('/join', {
        headers: {
            'Content-Type': 'application/json'
        },        
        method: 'PUT',
        body: JSON.stringify(request)
    })
    .then(res => {
        if(res.status >= 300) { throw new Error(res.statusText); }
        return res.json();
    })
    .catch(err => { 
        console.log(err); 
    });    
    return result;
};

export const apiLeave = async (request) => {
    let result = await fetch('/leave', {
        headers: {
            'Content-Type': 'application/json'
        },        
        method: 'PUT',
        body: JSON.stringify(request)
    })
    .then(res => {
        if(res.status >= 300) { throw new Error(res.statusText); }
        return res.json();
    })
    .then(list => { return list; })
    .catch(err => { 
        console.log(err); 
    });
    return result;
};

export const apiUpdate = async (request) => {
    let result = await fetch('/update', {
        headers: {
            'Content-Type': 'application/json'
        },        
        method: 'PUT',
        body: JSON.stringify(request)
    })
    .then(res => {
        if(res.status >= 300) { throw new Error(res.statusText); }
        return res.json();
    })
    .then(list => { return list; })
    .catch(err => { 
        console.log(err); 
    });
    return result;
};

export const apiDelete = async (request) => {
    let result = await fetch('/delete', {
        headers: {
            'Content-Type': 'application/json'
        },        
        method: 'DELETE',
        body: JSON.stringify(request)
    })
    .then(res => {
        if(res.status >= 300) { throw new Error(res.statusText); }
        return res.json();
    })
    .catch(err => { 
        console.log(err); 
    });
    return result;    
};

export const apiFile = async (request) => {
    let result = await fetch('/file', {
        headers: {
            'Content-Type': 'application/json'
        },        
        method: 'PUT',
        body: JSON.stringify(request)
    })
    .then(res => {
        if(res.status >= 300) { throw new Error(res.statusText); }
        return res.json();
    })
    .then(list => { return list; })
    .catch(err => { 
        console.log(err); 
    });
    return result;
};

export const apiDeleteAll = async () => {
    let result = await fetch('/deleteAll', {
        headers: {
            'Content-Type': 'application/json'
        },        
        method: 'DELETE',
    })
    .then(res => {
        if(res.status >= 300) { throw new Error(res.statusText); }
        return res.json();
    })
    .catch(err => { 
        console.log(err); 
    });
    return result;    
};
