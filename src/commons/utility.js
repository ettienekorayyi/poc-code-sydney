import { OPTION_TITLE, OPTION_NAME } from '../context/types'

export let DropDownOptions = ({ dropDown, mentors, searchTerm }) => {
    switch (dropDown) {
        case OPTION_NAME:
            return mentors.filter(m => m.fullName.includes(searchTerm));
        case OPTION_TITLE:
            return mentors.filter(m => m.title.includes(searchTerm));
        default:
            return 'Please Select Name or Title';
    }
};