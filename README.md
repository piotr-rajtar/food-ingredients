# Ingredients Explorer
Simple APP for exploring ingredients world!

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)

## General info
This is simple APP for exploring ingredients world!
Just type into the input whatever ingredient you want, and start explore!
All ingredients will be fetched from spoonacular API.

## Technologies
* Next - version 13.0.0
* React - version 18.2.0
* chakra-ui - version 2.3.6
* axios - version 1.1.3
* uuid - version 9.0.0
* typescript - version 4.8.4
* jest - version 29.2.2


## Setup
After cloning project repository run `npm install` to install dependencies.

Before starting the project create an account on [spoonacular API](https://spoonacular.com/food-api).

After that, please create `.env.local` file in the project root folder and create local variable
named `NEXT_PUBLIC_API_KEY` like below:
`NEXT_PUBLIC_API_KEY=verylongapikey`.
Your API key can be found under Profile tab in your API console on the API website.

After that, run `npm run dev` to run project in development mode.
