<h1>Github Pages Setup</h1>

<a href="https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site">Instructions</a> can be found here and outlined below.
1. Create a Github Account
2. Create new Repository
3. The Repo must be named `<user>.github.io` or `<organization>.github.io` with your username or organization spelled correctly so Github knows to create your Pages site.
4. Create an `index.html` file in the main repository.
5. Commit changes and push to main branch.
6. Go to `<user>.github.io` or `<organization>.github.io` to see your new website.

<h1>Setup Local Development</h1>

## Jekyll

Go to <a href="https://jekyllrb.com/docs/installation/">Jekyll</a>'s website to see detailed installation instructions for your operating system.

Following their steps will also install <a href="https://www.ruby-lang.org/en/">Ruby</a> which is needed.

You can make your site a Jekyll website by going to <a href="https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/creating-a-github-pages-site-with-jekyll#:~:text=To-,create%20a%20new,-Jekyll%20site%2C%20use">step 7</a> to run the following commands.

```sh
jekyll new --skip-bundle .
```
If there is an issue you can try the below command instead.

```sh
jekyll new --skip-bundle --force .
```
## Bundler

Next you must<a href="https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll">install</a> Bundler by running the following command.

```sh
bundle install
```
To start the local webserver run the command below in the directory of the site.

```sh
bundle exec jekyll serve
```
You can see your locally hosted site here:<br>
<a href="https://localhost:4000">localhost:4000</a>

## Troubleshooting

If you get a `webrick` error try the below command before trying to start the webserver again.

```sh
bundle add webrick
```

## Bootstrap

You can learn how to setup Bootstrap <a href="https://getbootstrap.com/docs/5.2/getting-started/introduction/">here</a> if you want to streamline your CSS/SASS development.
