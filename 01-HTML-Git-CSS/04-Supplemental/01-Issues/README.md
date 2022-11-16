# Issues

## What to do about `.DS_Store`?

The `.DS_Store` is a MacOS file to handle custom attributes of the containing folder. It should not be removed form the computer, instead remove it from the git cached files.

* Add a `.gitignore` file to the root of the repository, the file is to prevent certain files from added.

```
touch .gitignore
```
* Add `.DS_Store` to the file.
```
echo -e .DS_Store >> .gitignore 
```
* Verify text is added to file.
```
cat .gitignore
```
* Remove cached version from git.
```
git rm --cached .DS_Store
```
If it throws an error.
```
git rm -rf --cached .DS_Store
```
* Continue with project as normal.
