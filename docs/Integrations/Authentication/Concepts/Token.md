---
id: auth-token
sidebar_label: Tokens
sidebar_position: 2
---

# Tokens

Before diving into **Authentication**, let's first clarify some key terms we'll encounter. These concepts are essential for understanding how secure access and user verification work.

## Authentication Token

An **Authentication Token** acts as a digital key provided to client apps upon successful login. This key verifies the user's identity for subsequent actions within the app, eliminating the need for repeated login prompts. It ensures secure and streamlined access to the app's features.

## Refresh Token

A **Refresh Token** functions as a secondary mechanism to renew the authentication token without requiring the user to re-enter login credentials. This is particularly useful for maintaining a user's session securely, even when the primary authentication token expires, enhancing both security and user experience.

## Token Expiry Time

**Token Expiry Time** refers to the lifespan of an authentication token. It defines the period during which the token remains valid. This is a critical security measure to prevent unauthorized access, ensuring that tokens are regularly refreshed and authenticated.

### Example of Auth using Tokens
For example, when a user logs into an API, the server verifies the submitted credentials and typically responds with both an authentication token (string) and a refresh token (string). The authentication token is short-lived, let's say it's valid for 1 hour. It's used to authenticate API requests. For instance, it might look something like <code>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9....</code>

If you need to use the token, it will typically be included in an API request, such as accessing a blog post that is only available to logged-in users. In this case, the app makes a request to the API with a header that includes an Authorization header with the authentication token.

After an hour, as determined by the token's expiry time, the authentication token expires. Any attempt to access another post with the expired token will result in a 401 Unauthorized response.

To retrieve a new token, a common practice involves the client app making a request to a specific endpoint, submitting the saved refresh token in the request body. The server then validates the refresh token and responds with a new authentication token.

Thanks to the refresh token, the user can continue accessing the app without the need to log in again. This process enhances security by limiting the lifespan of each token while ensuring a seamless experience for the user.

