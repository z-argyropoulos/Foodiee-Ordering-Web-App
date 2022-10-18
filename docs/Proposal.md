# Proposal

| Contents                           |
| ---------------------------------- |
| 1. Introduction                    |
| 2. Technologies and benefits       |
| 3. Project management and timeline |
| 4. Conventions                     |
| 5. References                      |

## 1. Introduction

The main focus of this final project will be to optimize and transform a previously developed React web application. Foodiee, as it is called, is a food ordering web application, in which the users can order food from multiple restaurants and get it delivered at their location at the same time. The users can additionally search restaurants by their location, filter the returned results, explore their menu, add items to their cart and finally checkout among other features. The main goal of this final project would be to further investigate and explore state of the art technologies and frameworks as well as refactoring existing code. This transformation should eventually lead to a better performance and SEO (search engine optimization) for most cases and as a result to a better user experience.

## 2. Technologies and benefits

To accomplish the previously mentioned targets , three main technologies, tools and frameworks will be utilized. Next.js will be the main React framework used, Typescript will be used over Javascript for the new components and logic as well as GraphQL for the data queries.

**Typescript**, as stated in their official documentation, is a strongly typed programming language that builds on JavaScript, which gives you better tooling at any scale. Therefore, we can define types on our data and components, which catches many errors and mistakes in development and gives us better autocompletion in the editor.

**Next.js** is a framework that allows us to write React components as usual that run on the server which ultimately gives us more rendering capabilities than the typical client side rendering. Additionally, here we can specify which rendering/generation method of the following will be used on each page of our application;

- **Static site generation (SSG)**: The page gets generated at build time and then it gets cached and served from CDNs. Next will fetch at build time the data needed and generate the HTML along with some minimal javascript code to run on the client. This method is the fastest of all in terms of TTFB(time to first byte) but the data might be stalled as they are fetched only when the project builds.

- **Server side rendering (SSR)**: The page gets generated at runtime after every request to that page/resource. Here the TTFB is higher but data is guaranteed to be the latest available.

- **Incremental Static Regeneration (ISR)**: This method is a mix of SSG and SSR as it gives you the option to regenerate pages after the build stage. The exported page still can get cached but it has an expiration date. After the specified duration has passed, the page will get regenerated and so on.

- **Client side rendering (CSR)**: When the data on the page needs to get updated frequently then CSR is the way to go. While the data is the latest available, it has a negative impact on SEO. For this option Next also provides useful hooks for data fetching like SWR.

**GraphQL** will work as a middleware in the existing Node.js application and will reside besides the already defined REST APIs. With GraphQL the client can query exactly the data that it needs, which reduces over fetching data (when some properties in the response body won't be used at all) and under fetching data (having to make multiple separate API calls to get the final desired structured data).

### Technology stack overview

- Next.js - React
- Typescript
- MUI (Material UI)
- Node.js
- Express.js
- MongoDB
- GraphQL
- Docker

## 3. Project management and timeline

### Project timeline

In order to keep track of the deadlines and tasks that need to be fulfilled for this project, an initial top level timeline has been created as show below;

### Project management

Additionally for the tasks and the project management Github's Project feature will be used. All tasks (features, fixes, ci/cds, deployments etc) that need to be completed for this project will be created here while specifying more details for this task for example the status, milestones, topic, linked PRs etc. This will also automatically create an issue with all these details.

## 4. Conventions

### Issues

For the naming of the issues the following format should be used;

_**[{type\_of\_issue}] {issue_title}**_

The type of issue can be one of 'build', 'chore', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test'.

The issue title should begin with an uppercase letter.

Example; _[feat] Setup Express GraphQL server_

### Branches

For the naming of the branch the following format should be used;

_ **FD{issue_number}** _

After an issue has been created a unique number will be assigned to this issue, which will be used to checkout to this branch and initiate the implementation.

Example; _FD32_

### Commit messages

For the messages of the individual commits in a branch, the following format should be used;

_**{branch_name} | {type_of_issue}({scope?}): {commit_description}**_

The type of issue can be one of 'build', 'chore', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test'.

The scope is optional and can be left out of the commit message.

The commit description should be short, in present tense and begin with a lowercase letter.

For example; _FD32 | feat(profile-page): add avatar in user information_

### Pull requests

For the naming of the PR the following syntax should be followed;

_ **{branch_name} - {issue_title}** _

When the task is completed a pull request(PR) should be created linking to the issue and the relevant branch.

The pull request should also include a detailed description of what changes in the codebase.

For example; _FD32 - Update packages and yarn monorepo_

## 5. References

[https://www.typescriptlang.org/](https://www.typescriptlang.org/)

[https://nextjs.org/](https://nextjs.org/)

[https://graphql.org/](https://graphql.org/)

[https://theodorusclarence.com/blog/nextjs-fetch-usecase](https://theodorusclarence.com/blog/nextjs-fetch-usecase)

[https://www.conventionalcommits.org/en/v1.0.0-beta.2/#summary](https://www.conventionalcommits.org/en/v1.0.0-beta.2/#summary)

[https://leanpub.com/mongodbschemadesign/read](https://leanpub.com/mongodbschemadesign/read)
