/******GetAllUser*****/
(GET)> http://localhost:5000/api/auth/users

/******Register*****/
(POST)> http://localhost:5000/api/auth/register
(body) => {"name":"Aakash", "email":"aa@gmail.com","password":"12345678","role":"user?"}


/******Login*****/
(POST) => http://localhost:5000/api/auth/login
(body)  => {"email":"aa@gmail.com","password":"12345678"}
(response)=> {auth:true,token:'dgsdg'}

/******UserInfo*****/
(GET) => http://localhost:5000/api/auth/userinfo
(Header) => {'x-access-token':'token value from login'}
(response) => {userinfo}