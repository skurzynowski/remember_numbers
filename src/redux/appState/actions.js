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

export const addSavedNumber = (number) => ({
    type: 'APPSTATE_ADD_SAVED_NUMBER',
    number
})
export const addCountNumbers = (number) => ({
    type: 'APPSTATE_ADD_COUNT_NUMBERS',
    number
})
export const SetCheckMessage= (message) => ({
    type: 'APPSTATE_SET_CHECK_MESSAGE',
    message
})
export const SetCheckValue= (value) => ({
    type: 'APPSTATE_SET_CHECK_VALUE',
    value
})
export const SetIndexToCheck= (value) => ({
    type: 'APPSTATE_SET_INDEX_TO_CHECK',
    value
})

export const clickButtonNext= (e) => ({
    type: 'APPSTATE_CLICK_BUTTON_NEXT',
    e
})
export const clickCheckButton= (e) => ({
    type: 'APPSTATE_CLICK_BUTTON_CHECK',
    e
})
export const setTimer= (timer) => ({
    type: 'APPSTATE_SET_TIMER',
    timer
})
export const handleInputChange= (e) => ({
    type: 'APPSTATE_CHANGE_INPUT',
    e
})
