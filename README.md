# web-crawler
web crawler that generates an "internal links" report for any website on the internet by crawling each page of the site

## Run project locally

Clone the project

```bash
  git clone https://github.com/mustafa-mun/web-crawler
```

Go to the project directory

```bash
  cd web-crawler
```

Install required packages

```bash
  npm install
```

Start crawler with baseURL


```bash
  npm run start <baseURL>
```


## demo
Run crawler with [boot.dev blog](https://blog.boot.dev)
```bash
npm run start https://wagslane.dev
```
Example output
```
Found 63 internal links to wagslane.dev/ 
Found 62 internal links to wagslane.dev/tags 
Found 62 internal links to wagslane.dev/about 
Found 62 internal links to wagslane.dev/index.xml 
Found 5 internal links to wagslane.dev/posts/leave-scrum-to-rugby 
Found 4 internal links to wagslane.dev/posts/managers-that-cant-code 
Found 4 internal links to wagslane.dev/posts/kanban-vs-scrum 
Found 3 internal links to wagslane.dev/posts/continuous-deployments-arent-continuous-disruptions 
Found 2 internal links to wagslane.dev/posts/dark-patterns 
Found 2 internal links to wagslane.dev/posts/things-i-dont-want-to-do-to-grow-business 
Found 2 internal links to wagslane.dev/posts/zen-of-proverbs 
Found 2 internal links to wagslane.dev/posts/func-y-json-api 
Found 2 internal links to wagslane.dev/posts/keep-your-data-raw-at-rest 
Found 2 internal links to wagslane.dev/posts/optimize-for-simplicit-first 
Found 2 internal links to wagslane.dev/posts/no-one-does-devops 
Found 2 internal links to wagslane.dev/posts/college-a-solution-in-search-of-a-problem 
Found 2 internal links to wagslane.dev/posts/guard-keyword-error-handling-golang 
Found 2 internal links to wagslane.dev/posts/gos-major-version-handling 
Found 2 internal links to wagslane.dev/posts/go-struct-ordering 
Found 2 internal links to wagslane.dev/posts/what-a-crazy-religion 
Found 2 internal links to wagslane.dev/posts/a-case-against-a-case-for-the-book-of-mormon 
Found 2 internal links to wagslane.dev/posts/seo-is-a-scam-job 
Found 2 internal links to wagslane.dev/posts/collapsing-quality-of-devto 
Found 1 internal links to wagslane.dev/tags/business 
Found 1 internal links to wagslane.dev/tags/clean-code 
Found 1 internal links to wagslane.dev/tags/devops 
Found 1 internal links to wagslane.dev/tags/education 
Found 1 internal links to wagslane.dev/tags/golang 
Found 1 internal links to wagslane.dev/tags/management 
Found 1 internal links to wagslane.dev/tags/philosophy 
Found 1 internal links to wagslane.dev/tags/writing 
Found 1 internal links to wagslane.dev/posts/developers-learn-to-say-no 
```
