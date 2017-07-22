import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionLibrary from './SelectionReducer'

export default combineReducers({
    libraries: LibraryReducer,
    selectedLibraryId: SelectionLibrary
})