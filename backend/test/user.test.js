const req = require('supertest')
const app = require('../server')

describe('login', () =>{
    let body = {
        email:'',
        password:''
    }
    test('Username and password are required!', async() => { 
        const res = await req(app).post('/api/auth/login').send(body)
        expect(res.text).toBe("{\"message\":\"Username and password are required!\"}")
    })

    describe('Unauthorized', () =>{
        test('Unauthorized check your email to verify your account or enter correct password', async()=>{
        let body = {
            email:'check_your_email@gmail.com',
            password: '1111'
        }
            const res = await req(app).post('/api/auth/login').send(body)
            expect(res.text).toBe("{\"message\":\"Unauthorized check your email to verify your account or enter correct password\"}")
        })
        
    })

})