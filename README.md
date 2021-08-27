# Vouch Bug Challenge
Hello, this is a technical challenge for our interview candidates

## Setup

```
yarn install
```

or 

```
npm install
```

## Background
This is a simple app that loads a json data and a text file. 
This app then will try to replace any `{{}}` tag from the text file with any data inside the loaded json.
After replacing the tags, it will try to save the new text to a json file (`result.json`) and then load it again and return the newly loaded json.

## Bug
run `yarn test` and you will see that the second test (`Test-2`) is failing.

## Goal
Fix the issue that causes `Test-2` to fail

## Instruction
- Fork this repo
- Push your fix to your new repo

## Limitation
- you are NOT ALLOWED to change the content of `./data/sample1.json` or `./data/sample2.json`
- you are ALLOWED to change any other files

## Note
there is no correct answer, your primary goal is to make the test successfully run, we will discuss your fix in the second intervew.

Good Luck!