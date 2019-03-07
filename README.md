# JavaScript exercises

1. Fork this repo
2. Clone it to your machine
3. Open it in your code editor.
4. In the terminal, run this command to add RARMATEI as an `upstream` remote.
   `git remote add upstream git@github.com:rarmatei/js-exercises.git`
5. Run the command `git remote -v`. You should have two remotes:

- `origin` pointing to your github repo, and
- `upstream` pointing to RARMATEI

6. Run the command `npm install`.

7. Run the command `npm run test`.

This won't do anything in the beginning, but as we work through the exercises you will start seeing some RED messages pop-up which you will have to turn GREEN.

8. Keep this terminal window open, and launch a second terminal.
9. Navigate to the `js-exercises` folder.

During the class (and for homework), we will go through each folder, reading the README and completing the exercises.

For **homework**, we expect you to `add` and `commit` your changes, and `push` them to your own repo (`origin`). You will then need to open a `pull request` so we can review your code.

### Opening a pull request

A pull request is a request to merge one branch into another. In this case you will request to have the `master` branch of your repo, merged into the `master` branch of this (`upstream`) repo.

We won't actually merge your branch, but the pull request will allow us to view and comment on your work.

1. Add each individual file you have changed using `git add [path to file]`
2. Commit your changes using `git commit` (you can add and commit changes multiple times as you complete exercises)
3. Push your changes to your own repo using `git push origin [your branch name]`
4. Go to https://github.com/rarmatei/js-exercises and click the **New pull request** button (this create a request to merge your `origin/master` to our `remote/master`)
5. Give your pull request a title e.g. `Daniel's homework`
6. Click **Create pull request**
