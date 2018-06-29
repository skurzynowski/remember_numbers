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
        case 'APPSTATE_CLICK_BUTTON_NEXT':
            //click on next when was checking
            if (state.checkMode === true) {
                newState.saved_numbers = []
                newState.checkMode = false;
                return;
            }
            //TODO qustion for Kevin where to put this function
            let object = Math.floor((Math.random() * 10));
            newState.object = object;
            let savedNumbers = state.saved_numbers;
            savedNumbers = savedNumbers.concat(newState.object);
            newState.saved_numbers = savedNumbers;
            let countNumbers = newState.saved_numbers.length;
            countNumbers++;
            newState.rememberd = countNumbers;

            return newState;
        case 'APPSTATE_CLICK_BUTTON_CHECK':
            //second click
            if (state.checkMode === true) {
                if (state.saved_numbers[state.indexToCheck] === parseInt(state.checkingValue)) {
                    if (state.indexToCheck < state.saved_numbers.length - 1) {
                        newState.checkMessage = 'Congratulation ' + (state.indexToCheck + 1) + ' correct';
                        newState.indexToCheck = state.indexToCheck + 1;
                        newState.checkingValue = '';
                    } else {
                        newState.checkMessage = 'Congratulations all numbers correct!!!';
                        newState.checkingValue = 'Finished';
                    }
                } else {
                    newState.checkMessage = 'Congratulations all numbers correct!!!';
                }
                return;
            }
            newState.checkMode = true;

            //when click check save last subject to array
            var savedNumbers = state.saved_numbers;
            savedNumbers = savedNumbers.concat(state.object);
            newState.savedNumbers = savedNumbers;
            var countNumbers = newState.saved_numbers.length;
            countNumbers++;
            newState.rememberd = countNumbers;
            clearInterval(state.timer);
            return newState;

        case 'APPSTATE_SET_TIMER':
            newState.timer = action.timer;
            return newState;
        default:
            return state
    }
}
