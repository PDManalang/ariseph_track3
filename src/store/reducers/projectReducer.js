const initState = {
    projects: [
        {id: '1', title: 'Sample1', content: 'Lorem1'},
        {id: '2', title: 'Sample2', content: 'Lorem2'},
        {id: '3', title: 'Sample3', content: 'Lorem3'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err)
            return state;
        default:
            return state;
    }
}

export default projectReducer;