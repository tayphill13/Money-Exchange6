# _Money-Exchange6_

#### _This is a currency exchange API for the week 6 project at Epicodus, 7.5.2020_

#### By _**Taylor Phillips**_

## Description

_This is a currency exhange application that will allow the user to enter an amount in US dollars and a country to convert to.  When user submits, their requested amount will be converted to selected country currency using the latest conversion rate gathered by an API call._

### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| User will be able to enter an amount _in U.S. Dollars_ to be converted  |   10  |       |
| User will select the desired currency to convert to  |  Swiss Francs |   |
| Amount user enters will be multiplied by the received converstion rate when they click the button |  10 |  9.46 Swiss Francs   |
| If User selects a currency that is not supported then an error will be thrown   | Rupees  |  There was an error, it's possible that currency is not supported by this application  |

## Setup/Installation Requirements

* _Install Git Bash_
* _Using a Terminal on desktop, user will need to type git init_
* _Clone file to desktop from repo on github_
* _Navigate to project folder using command line type: [cd Desktop] followed by [cd Money-Echange6]_
* _In Command Line, type, npm install and wait for the application to complete it's action
* _Then type npm run build in the command line terminal_

User will need to acquire an API key and protect with .env file:
* _Go to <https://www.exchangerate-api.com/> and enter email address, push Get Free Key_
* _In the main project folder, user will need to make sure to have .gitignore file saved first, containing the text .env on the .gitignore file_
* _In the .env file, user will need to put _API_KEY = acquired API key_ --> ( i.e. API_KEY=sdfo8e4IUDFE9y4 )_
* _**DO NOT SHARE YOUR API KEY**_
* _run index.html with web browser_

## Known Bugs

_Currently no known bugs, please report them to Taylor_

## Support and contact details

_Contact me at <taylorphillips133@gmail.com>_

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _JavaScript_
* _JQuery_
* _VSCode_
* _Webpack_
* _ExchangeRate-API  found at <https://www.exchangerate-api.com/>_

### License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Copyright (c) 2020 **_Taylor Phillips_**