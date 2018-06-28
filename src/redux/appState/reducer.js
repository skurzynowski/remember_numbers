const defaultState = {
    rememberd: 0,
    saved_numbers: [],
    time: 0,
    timer: null,
    checkMode: false,
    checkingValue: '',
    indexToCheck: 0,
    object: 0,
    checkMessage: 'Write Your quest and click check button',
    placeholder: 'Number'
}

export default function appState(state = defaultState, action) {
    const newState = Object.assign({}, state)
    switch (action.type) {

        case 'APPSTATE_SET_DEFAULT':
            return defaultState

        case 'APPSTATE_SET_NUMBER':
            newState.number = action.number
            return newState

        case 'APPSTATE_SET_TIME':
            newState.time = action.time
            return newState

        case 'SET_DEFAULT_SAVED_NUMBERS':
            newState.saved_numbers = []
            return newState

        case 'APPSTATE_SET_CHECK_MODE':
            newState.checkMode = action.bool
            return newState;

        case 'APPSTATE_SET_OBJECT':
            newState.object = action.object
            return newState;

        case  'APPSTATE_ADD_SAVED_NUMBER':
            newState.saved_numbers = action.number
            return newState;

        case  'APPSTATE_ADD_COUNT_NUMBERS':
            newState.rememberd = action.number
            return newState;

        case   'APPSTATE_SET_CHECK_MESSAGE':
            newState.checkMessage = action.message
            return newState;

        case    'APPSTATE_SET_CHECK_VALUE':
            newState.checkingValue = action.value
            return newState;

        case   'APPSTATE_SET_INDEX_TO_CHECK':
            newState.indexToCheck = action.value
            return newState;

        default:
            return state
    }
}