# FAST NEWS BLOG

The Blog API was built using postgres, sequelize and express, it allows users to perform various actions, including user authentication, blog posting, and liking blog posts. The API is secured using rate limiting and API keys.

## Table of Contents

- [Authentication](#authentication)
- [API Keys](#api-keys)
- [Endpoints](#endpoints)
  - [User Signup](#user-signup)
  - [User Login](#user-login)
  - [Create a Blog Post](#create-a-blog-post)
  - [Like a Blog Post](#like-a-blog-post)
  - [Follow a user](#follow-a-user)

## Authentication

To use this API, users need to be authenticated. Authentication is required for actions like creating a blog post and liking a blog post.

## API Keys

API keys are used to authenticate and authorize requests. Each user is provided with an API key upon signup. The API key should be included in the request headers for secured endpoints.

### Request Headers

```bash
Authorization: Bearer YOUR_API_KEY
```

## Endpoints

### User Signup

- **URL:** `/v1/user/create`
- **Method:** `POST`
- **Description:** Allows users to sign up for the service.
- **Request Body:**

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "johndoe@example.com",
  "password": "secure_password"
}
```

- **Response:**

```json
{
  "message": "User created successfully",
  "user": {
    "id": 1,
    "username": "exampleuser",
    "email": "user@example.com"
  }
}
```

### User Login

- **URL:** `/v1/user/login`
- **Method:** `POST`
- **Description:** Allows users to login.
- **Request Body:**

```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

- **Response:**

```json
{
  "message": "Login successful",
  "user": {
    "id": 1,
    "username": "exampleuser",
    "email": "user@example.com"
  },
  "token": "YOUR_ACCESS_TOKEN"
}
```

### Create a Blog Post

- **URL:** `/v1/blog/create`
- **Method:** `POST`
- **Description:** Allows users to create a post.
- **Request Body:**

```json
{
  "title": "New Blog Post",
  "description": "This is the content of the blog post."
}
```

- **Response:**

```json
{
  "message": "Blog post created successfully",
  "post": {
    "id": 1,
    "title": "New Blog Post",
    "content": "This is the content of the blog post.",
    "author": {
      "id": 1,
      "username": "exampleuser"
    }
  }
}
```

### Like a Blog Post

- **URL:** `/api/posts/:postId/like`
- **Method:** `POST`
- **Description:** Allows authenticated users to like a specific blog post.
- **Response:**

```json
{
  "message": "Liked the blog post successfully"
}
```

### Follow a User

- **URL:** `/v1/user/follow`
- **Method:** `POST`
- **Description:** Follow a user to see his post.
- **Response:**

```json
{
  "firstName": "Jane"
}
```

## Rate Limiting

Rate limiting is applied to prevent abuse and ensure fair usage of the API. Users are limited to a certain number of requests per minute.

## Contributions

Contributions are welcome! If you find any issues or want to add new features, feel free to submit a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

Thank you for checking out this CRUD API with PostgreSQL! If you have any questions or feedback, please don't hesitate to contact me.
