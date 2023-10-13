# Linting setup instructions

1. Create project with typescript

<br/><br/>

2. npm init @eslint/config

   1. choose broswer for running mode.
   2. json file for eslint config file creation.

<br/><br/>

3. Add this to the scripts in package.json and test using `yarn run lint`

```
    "lint": "eslint ./src/**"
```

Write the script in this way to make sure its checking only typescript files and not svg or css etc

```
lint": "eslint ./src/**/*.{ts,tsx}
```

<br/>

4.  Add [prettier](https://prettier.io/) as dev dependency

```
yarn add --dev prettier
```

<br/> 5. Add [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier/).
This turns off all rules that are unnecessary or might conflict with Prettier.
So add this to dev dependencies as well.

```
yarn add --dev  eslint-config-prettier
```

Please check this as [reference](https://prettier.io/docs/en/integrating-with-linters.html)
<br/><br/>

6. Add "prettier" inside the eslint config file. Make sure to add it to the end of the extends array list.
   <br/><br/>

7. Create a .prettierrc.json file at the root of the project and add basic config's like

```
{
    "trailingComma": "es5",
    "tabWidth": 2,
    "semi": true,
    "singleQuote": false
}
```

8. Now we need to add [**eslint-plugin-prettier** ](https://github.com/prettier/eslint-plugin-prettier)
   Runs Prettier as an ESLint rule and reports differences as individual ESLint issues.

and update the eslint config like this.

```
{
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error"
  }
}
```

<br/><br/>

9. Add these two under scripts for testing purposes.
   Once we run yarn run format. It will write through all the files under src format it according to prettierrc.json and save all files.

````
 "lint:fix": "eslint --fix ./src/**",
    "format": "prettier --write ./src/**/*.{ts,tsx}"
    ```
````

Make sure to have prettier plugin installed and default set to prettier format. Otherwise the format on save will not work.

10. We can add a [eslint ignore](<https://eslint.org/docs/latest/use/configure/ignore#:~:text=You%20can%20configure%20ESLint%20to,(%20.eslintignore%20by%20default).>) file as well. Mostly we can choose to ignore these files

```
reportWebVitals.ts
commitlint.config.js
index.css
```

11. Also we have a [prettierignore](https://prettier.io/docs/en/ignore.html) file that can be used if we want to ignore linting and prettier for a specific file.

---

12. Now we need to add [Husky](https://typicode.github.io/husky/getting-started.html). This is going to be useful for handling every git hook possible.
    This command below will do every thing required to setup husky in the project.

```
npx husky-init

yarn install
```

13. Open up pre-commit hook bash file which you see is auto created. Remove the default command npm test and add -> `yarn run lint`
    Now if you try to add a commit, it will fail because of linting reasons.

14. Now after that we will add [lint-staged](https://github.com/okonet/lint-staged). This script will run ESLint on all of the TypeScript and TSX files in the src directory before they are staged for commit. Only the files that are staged will be checked and not the other files.

```
yarn add --dev  lint-staged
```

This lint-staged is under progress.

15. We can now add [commitlint](https://commitlint.js.org/#/) which helps the team follow a commit convention.

```
yarn add --dev @commitlint/cli @commitlint/config-conventional
```

We will use [conventional-commits](https://www.conventionalcommits.org/en/v1.0.0/) and extend a few settings to feed our needs. So we will update the rules.

enter this command on terminal to create commit-msg hook

```
npx husky add .husky/commit-msg  'npx --no -- commitlint --edit ${1}'
```

Also add a config file

```
echo "module.exports = { extends: ['@commitlint/config-conventional'] };" > commitlint.config.js
```
