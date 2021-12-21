# SocialMediaApp--ReactGraphQL

This project is from a tutorial from youtube video talking about here (https://youtu.be/n1mdAPFq2Os).

## Requirements:
These are the dependancies used for the project.
- MongoDB
- ExpressJS
- ReactJS
- NodeJS
- used GraphQL

## GraphQL Introduction
GraphQL is a Query Language for your API, and a server-side runtime for executing queries using a type system you define for your data. GraphQL isn't tied to any specific database or storage engine and is instead backed by your existing code and data.

A GraphQL service is created by defining types and fields on those types, then providing functions for each field on each type. For example, a GraphQL service that tells you who the logged in user is (```me```) as well as that user's name might look like this:

```
type Query {
    me: User
}

type User {
    id: ID
    name: String
}

```

Along with functions for each field on each paper