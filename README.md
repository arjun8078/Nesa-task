Explain how you would handle:

Creating, reading, updating, and deleting a user.

Validating the inputs.

Handling errors, such as validation errors and database errors (e.g., duplicate emails)


ANSWERS

1.To handle 

    create
    -Use a POST endpoint.
    -Validate input (e.g., name, email, age).
    -Save to database using User.create().

    reading
    -To get all user used GET endpoint with .find() method and for single user use findbyId()

    Updating
    -patch used

    Deleting
    -DELETE is used 

2.Validating input
    Name: Non-empty string.
    Email: Use validator.isEmail and ensure it's unique.
    Age: Integer ≥ 0.
    Added validation rules in the User model schema using Mongoose.   

3.Validation Errors:

    Use Mongoose.Schema validation.
        Return 400 (Bad Request) with the error message.
    
    Duplicate Email:
        Catch MongoServerError with code 11000.
        Return 400 with a friendly message: "Email already exists."

    Database Errors:
        Catch unexpected errors in a try-catch.
        Return 500 (Internal Server Error) with a generic message.
