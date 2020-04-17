import axios from 'axios';

export default axios.create({
    baseURL: 'https://codesydney-mentors.herokuapp.com/api/'
});