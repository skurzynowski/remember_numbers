const defaultState = {
    rememberd: 0,
    savedNumbers: [],
    time: 0,
    timer: null,
    checkMode: false,
    checkingValue: '',
    indexToCheck: 0,
    object: 0,
    checkMessage: 'Write Your quest and click check button',
    placeholder: 'Number',
    checkingResult: null,
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
            newState.savedNumbers = []
            return newState

        case 'APPSTATE_SET_CHECK_MODE':
            newState.checkMode = action.bool
            return newState;

        case 'APPSTATE_SET_OBJECT':
            newState.object = action.object
            return newState;

        case  'APPSTATE_SET_SAVED_NUMBER':
            newState.savedNumbers = action.number
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
        case 'APPSTATE_CLICK_BUTTON_NEXT':
            //click on next when was checking
            if (state.checkMode === true) {
                newState.savedNumbers = []
                newState.checkMode = false;
                return newState;
            }
            let object = Math.floor((Math.random() * 10));
            newState.object = object;
            let savedNumbers = state.savedNumbers;
            savedNumbers = savedNumbers.concat(state.object);
            newState.savedNumbers = savedNumbers;
            let countNumbers = newState.savedNumbers.length;
            newState.rememberd = countNumbers;

            return newState;

        case 'APPSTATE_SET_TIMER':
            newState.timer = action.timer;
            return newState;

        case 'APPSTATE_CHANGE_INPUT':
            newState.checkingValue = action.e.target.value;
            newState.inputValue = action.e.target.value;
            return newState;

        case 'APPSTATE_SET_CHECKING_RESULT':
            newState.checkingResult = action.result;
            return newState;
        //Set rememberd numbers
        case'APPSTATE_SET_REMEMBERD':
            newState.rememberd = action.rememberd;
            return newState;
        //Set input value
        case 'APPSTATE_SET_INPUT_VALUE':
            newState.value = action.value;
            return newState;
        default:
            return state
    }
}
