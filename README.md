# cv
Online CV
## Deploy Vue-cli 3 using github page
1. Create a new local branch in your project and name it ‘gh-pages’.
2. Go to github and copy the name of the repository. Let’s assume the repository name is ‘my-first-project’
3. Create a new file in root directory of your project and name it ‘vue.config.js’. 
4. n ‘vue.config.js’ file paste the following code:
```
module.exports = {
publicPath: ‘<my-first-project>’
} 
```
5. Find and open the file .gitignore located in root directory of your project.Next, find and comment the line which has the text ‘/dist’.
6. Run 
```
npm run build
```
and wait for it to finish.

7. Run the command:
```
git add dist && git commit -m "Initial dist subtree commit"
```
8. Run the command
```
it subtree push --prefix dist origin gh-pages
```

