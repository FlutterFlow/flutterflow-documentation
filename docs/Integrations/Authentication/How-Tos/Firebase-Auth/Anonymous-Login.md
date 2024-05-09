---
title: Anonymous Login
sidebar_position: 3
---

# Anonymous Login

:::info[Prerequisites]

Before getting started with this section, ensure you have:

- Completed all steps in [**Firebase Setup**](..%2F..%2F..%2FFirebase%2FConnect%20to%20Firebase%20Setup.md).

- Completed [**Initial Setup**](docs/Integrations/Authentication/How-Tos/Firebase-Auth/initial-setup.md)
required for authentication.

- Learn more about the concepts
of [**Anonymous Authentication**](docs/Integrations/Authentication/Concepts/authentication-approaches.md)
:::

## Enable Anonymous Authentication in Firebase

To enable Anonymous authentication, first go to your Firebase console and enable
the authentication provider:

<iframe src="https://demo.arcade.software/rzWEzk1DdYGG7V5AA8pd?embed&show_copy_link=true" title="EcommerceFlow - Authentication - Sign-in method - Firebase console" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen allow="clipboard-write" width="100%" height="600"></iframe>

## Add Anonymous Login Action

1. On the button designated for anonymous authentication, add a new Action.

2. Search for and select the **Log In** action (located under Backend/Database > Firebase
   Authentication).

3. Set the Auth Provider to **Anonymous**.

4. Enable the **Create User Document** toggle and set the Collection to _users_. This action will
   create an entry for the user in the database without any details upon successful login.