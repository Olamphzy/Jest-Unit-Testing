const functions = require('./functions');

// beforeEach(() => initDatabase());
// afterEach(() => closedDatabase());

beforeAll(() => initDatabase());
afterAll(() => closedDatabase());


// // Dommy function. Initialize a database before each function in it and clear after each function
const initDatabase = () => console.log('Database Initialized...');
const closedDatabase = () => console.log('Database Closed...');

// it will be run before the code block
const nameCheck = () => console.log('Checking Name...functions....');

describe('Checking Names', () => {
    beforeEach(() => nameCheck());

    test('User is Olamphzy', () => {
        const user = 'Olamphzy'
        expect(user).toBe('Olamphzy');
    });

    test('User is Pelumi', () => {
        const user = 'Pelumi'
        expect(user).toBe('Pelumi');
    });
});

// toBe
it('Adds 2 + 2 to equal 4', () => {  //expect(function testing for.matcher)
    expect(functions.add(2, 2)).toBe(4)  //If its fails it gives reason for such failure in the terminal
})

// not.toBe
test('Add 2 + 2 not equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
})

// Falsy values in Js are 0, null, undefined
// CHECK TRINITY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBetruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

// toBeNull
test('Should be null', () => {
    expect(functions.isNull()).toBeNull(); 
});

// toBeFalsy
test('Should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();  //it passes all falsy values 0, null & undefined
});

// toEqual
test('User should be Olanrewaju Rasheed object', () => {
    expect(functions.createUser()).toEqual({  //object in toEqual will compare objecct in arrays
        firstName: 'Olanrewaju',
        lastName: 'Rasheed'
    }); 
});

// less than and greater than
test('Shouldbe under 1700', () => {
    const load1 = 900;
    const load2 = 800;
    expect(load1 + load2).toBeLessThanOrEqual(1700);
})

// Regular expression
test('There is no k in visual', () => {
    expect('visual').not.toMatch(/K/); //it doesn't matter is its lower case
})

// Arrays 
test('Iffe should be in usernames', () => {
    usernames = ['pelumi', 'iffe', 'aisha', 'rasaq'];
    expect(usernames).toContain('iffe')
})

// //Working with async data

//  Promise
// test('User fetched name should be Leanne Graham', () => {
//     expect.assertions(1);  //dealing with async we assertion with number of assertions; this case 1.
//     return functions.fetchUser()
//     .then(data => {
//         expect(data.name).toEqual('Leanne Graham')
//     }) 
// })

// Async Await
test('User fetched name should be Leanne Graham', async () => {
    expect.assertions(1);  //dealing with async we assertion with number of assertions; this case 1.
    const data = await functions.fetchUser();
        expect(data.name).toEqual('Leanne Graham')
})