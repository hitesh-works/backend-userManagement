Users routes >>

1. SignUp
   POST:- http://localhost:8080/auth/signup
   ex- {
   "name":"rahul",
   "email":"ra@gmail.com",
   "password":"23747466678"
   }

2. Login
   POST:- http://localhost:8080/auth/login
   ex- {
   "email":"ra@gmail.com",
   "password":"23747466678"
   }

3. Profile
   GET:- http://localhost:8080/auth/profile
   ex- jwt token

4. Update Password
   PUT:- http://localhost:8080/auth/updateprofile
   ex- jwt token and {
   "currentPassword":"123466678",
   "newPassword":"233748536"
   }

5. Delete user (may be for admin)
   DELETE:- http://localhost:8080/auth/deleteuser
   ex- jwt token

6. Logout
   GET:- http://localhost:8080/auth/logout
   ex- jwt token

7. Forgot password
   POST:- http://localhost:8080/auth/forgotPassword
   ex- {
   "email": "user@example.com"
   }

8. Reset Password
   POST:- http://localhost:8080/auth/resetPassword/:token
   ex:- {
   "password": "new_strong_password"
   }

> > Here’s a basic flow for a password reset process:

** User initiates a reset: The user clicks on a “Forgot Password” link on the login page and provides their email address.
** System generates a reset token: Upon receiving the email address, the system generates a unique and time-limited token. This token is usually a random string that is associated with the user’s account.
** Token is sent to the user: The token is then sent to the user’s email address along with a link to the password reset page.
** User resets their password: The user clicks on the link, verifies their identity using the token, and then sets a new password.

Admin routes >>>

1. Signup
   POST:- http://localhost:8080/admin/signup
   ex-{
   "name":"jatin",
   "email":"jatin@gmail.com",
   "password":"388848382600"
   }

2. Login
   POST:- http://localhost:8080/admin/login
   ex- "email":"jatin@gmail.com",
   "password":"388848382600"

3. Get all users
   GET:- http://localhost:8080/admin/getUsers
   ex- jwt token

4. Add new user
   POST:- http://localhost:8080/admin/addUser
   ex- {
   "name":"jatin",
   "email":"jatin@gmail.com",
   "password":"388848382600"
   }

5. Delete exiting user
   DELETE: http://localhost:8080/admin/deleteUser/67876d19fe16f099b45536d0
   ex- jwt token and user id
