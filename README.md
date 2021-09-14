# Tech interview 

## Tech stack
For the project the following stack provided:

Back-end:
* Spring Boot 
* Hibernate
* JPA
* Lombok
* H2 database

Front-end:

* React (With hooks)
* React Router
* Yarn
* Axios
* Formik (feel free to replace with preferred lib)
* Yup (for form validation)
* react-router-dom library for routing


## Task

You need to create a page(s), where the user can create users, edit them, select one and delete. You need to create 
both, front-end and back-end and have this functionality as a functional unit. If you are more focused to front-end
please make front-end functionality as nice as possible (e.g. cover with tests, make it responsive etc). On the other hand, 
if you are back-end focused, do the same with Spring (e.g. implement model mappers).

For easier start, we created user entity and seeded it (using faker) to H2 database, so you already have some users 
that you can fetch from the database.

- You need to create a table and list all users
- Add a page, where the user can be created
- Add a page where the user can be updated
- Make a button (maybe with alert dialog?) to delete a user
- Make it possible to view a single user (e.g. modal or another page)

### Minimum functionality

- Functioning API
- Usable front-end

### Bonus points
- Unit tests
- Documentation (e.g. Swagger, JavaDoc)
- Search functionality (or filtering)
- Usage of prop-types