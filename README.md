This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install dependencies:
```bash
yarn install
```

Then, create a .env.local file at project root and add your api key:

```
NEXT_PUBLIC_API_KEY=${YOUR_SECRET_HERE}
```

Then, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Running prod build locally

```bash
yarn build && yarn start
```

## Running Cypress E2E tests

via the Cypress App
```bash
yarn test:e2e:open
```

headlessly in CLI:
```bash
yarn test:e2e:run
```
## Running Storybook
I used storybook to prototype the primitives that make up the `<EventCard />` component. It includes all the variants that represent the different states of an event.

Start storybook:
```bash
yarn storybook
```

## Project folder structure
I've found that template structure found at https://unlyed.github.io/next-right-now/reference/folder-structure is a nice way of organizing your files, particularly for larger projects.
It was probably a bit of an overkill for the exercise, but I wanted to show (roughly) how I would organize larger projects.

## Design Decisions

### UI
- All the parts that make up the `<EventCard />` were built presentationally, and as dumb as possible with little to no business logic except for internal UI states.
- Fetching and managing of data is generally done at the page level.
- Some display formatting can be done below the page level if it makes sense for that particular section of a component.
- I made use of the optimizations that came with next/image. This has built-in lazy-loading and image shimmer/blur placeholder to minimize layout shifts.
- I'm not entirely pleased with the slight flickering when changing between landscape/square dimensions for the image when the info disclosure is toggled. A potentially better way to do this would be to add a transition that scales the height of the image instead.
- I considered adding an infinite load on scroll using an intersection observer instead of the load more button, which I felt could be a nicer UX, but decided against it to stick with the requirements proposed for the exercise.
- I did manage to implement a small audio player that toggles between the event tracks. Might be nice to add additional controls to navigate through the tracks, and displays to show currently playing artist/track.
- The list implementation could be improved. It doesn't seem overly boggled down by performance issues right now, but if we load more items (>1000), it could slow things down. I would consider doing a performance test with a lot of items loaded on the page, and the consider list virtualization/windowing to only render a visible range of list items.
- Responsiveness is handled via a simple multi-column configuration. I did decide to add an additional column (4) for larger screens to maximize usage of the space available.

### Data
- Much of the fetching logic/caching is handled by [react-query](https://tanstack.com/query/v4/?from=reactQueryV3&original=https://react-query-v3.tanstack.com/). It is a convenient way to access cached data by key and handle retries, errors, statuses, deduplicating, and many other tedious things that you'd have to implement yourself without it.
- I opted for client-side-fetching as the events data are mostly dynamic and couldn't be statically generated at build-time.
- I could've perhaps experimented with SSR for prefetching on initial load, but don't think the overhead was worth it given the great lighthouse scores that I managed to get for critical rendering paths.

### Testing
- This was a bit of headache, mainly with the setup/config.
- Integration tests are written via [Cypress](https://www.cypress.io/). I feel this is adequate and covers most of the critical cases. This also most closely mimicks how a user would use the app.
- I don't like going too granular for primitive components unless I'm implementing my own component library and need to validate its public API.
- Network requests are intercepted via [MSW](https://mswjs.io/). This is a nice way to also intercept requests in Storybook (given more time), so that all page components can also be documented visually.
- Given more time, it would be nice to write some simple interaction tests in [Jest](https://jestjs.io/) for the play/pause button toggle functionality across multiple event list items.
