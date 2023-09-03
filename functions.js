const axios = require('axios');

const functions = {
    add: (num1, num2) => num1 + num2,
    isNull: () => null,  //if its unfined will fail as expect to be null
    checkValue: x => x,
    createUser: () => {
        const user = {
            firstName: 'Olanrewaju'
        }
        user['lastName'] = 'Rasheed';
        return user;
    },
    fetchUser: () => 
     axios
        .get('https://jsonplaceholder.typicode.com/users/1')
        .then(res => res.data)
        .catch(err => err)
};

module.exports = functions;