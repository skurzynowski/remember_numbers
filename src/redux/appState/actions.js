export const setDefault = () => ({
    type: 'APPSTATE_SET_DEFAULT'
})

export const setTime = (time) => ({
    type: 'APPSTATE_SET_TIME',
    time
})
export const setDefaultSavedNumbers = () => ({
    type: 'SET_DEFAULT_SAVED_NUMBERS',
})
export const setCheckMode = (bool) => ({
    type: 'APPSTATE_SET_CHECK_MODE',
    bool
})
export const setNewObject = (object) => ({
    type: 'APPSTATE_SET_OBJECT',
    object
})

export const setSavedNumber = (number) => ({
    type: 'APPSTATE_SET_SAVED_NUMBER',
    number
})
export const addCountNumbers = (number) => ({
    type: 'APPSTATE_ADD_COUNT_NUMBERS',
    number
})
export const setCheckMessage = (message) => ({
    type: 'APPSTATE_SET_CHECK_MESSAGE',
    message
})
export const setCheckValue = (value) => ({
    type: 'APPSTATE_SET_CHECK_VALUE',
    value
})
export const setIndexToCheck = (value) => ({
    type: 'APPSTATE_SET_INDEX_TO_CHECK',
    value
})

export const clickButtonNext = (e) => ({
    type: 'APPSTATE_CLICK_BUTTON_NEXT',
    e
})
export const setTimer = (timer) => ({
    type: 'APPSTATE_SET_TIMER',
    timer
})
export const handleInputChange = (e) => ({
    type: 'APPSTATE_CHANGE_INPUT',
    e
})

export const setCheckingResult = (result) => ({
    type: 'APPSTATE_SET_CHECKING_RESULT',
    result
})

//Set rememberd numbers
export const setRememberd = (rememberd) => ({
    type: 'APPSTATE_SET_REMEMBERD',
    rememberd
})
//Set input value
export const setInputValue = (value) => ({
    type: 'APPSTATE_SET_INPUT_VALUE',
    value
})
