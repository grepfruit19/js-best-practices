# Coding Standards

## Adhere to the style guide.

We are currently using the [Airbnb style guide](https://github.com/airbnb/javascript). This can be added on a project by project basis, or if you'd like, you can create a global config file which will lint all of your JavaScript files.

We are also using their [React style guide](https://github.com/airbnb/javascript/tree/master/react).

[This site has information on how to set up a global config file in webstorm.](https://www.themarketingtechnologist.co/eslint-with-airbnb-javascript-style-guide-in-webstorm/)

Atom has [a package for eslint as well.](https://github.com/AtomLinter/linter-eslint)

*Any rules people don't like?*

## Misc Rules and Other Standards

Airbnb has no opinion on some things, or we felt the need to be particularly explicit on some things, which will be described below.

### Naming

Ideally, naming conventions for project-specific words and terminology should be determined early on in the project and be posted somewhere visible (perhaps pinned in the project Slack channel).

All variables should be named in camelCase. Some words and phrases may have ambiguous camelCasing, such as "make an HTTP request". Is it makeHttpRequest, or makeHTTPRequest?

In such cases, [Google has a good, nearly deterministic scheme for camelCasing](https://google.github.io/styleguide/jsguide.html#naming-camel-case-defined). Any names that remain ambiguous with the scheme should be discussed with the team.

##### PascalCase vs camelCase

When to use? tbd

### Promises

Complex promise chains should be broken out into their own functions as such:

```
function doThis(result) {
  // ...
}
function doThat(result) {
  // ...
}
function handleError(error) {
  // ...
}
function done() {
  // ...
}

return doSomething(foo)
  .then(doThis)
  .then(doThat)
  .catch(handleError)
  .finally(done);
```

Simple promise logic can be done in-line, but indented.

```
new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 1000);
})
  .then((result) => {
    alert(result);
    return result * 2;
  })
  .then((result) => {
    alert(result);
    return result * 2;
  });
```

### Horizontal Alignment

Horizontal alignment is adding spaces so that things line up horizontally, for example:

```
// Unaligned
{
  tiny: 42,
  longer: 435,
};

// Aligned
{
  tiny:   42,
  longer: 435,
};

// Another flavor of alignment
{
  tiny   : 42,
  longer : 435,
};
```

Although not mentioned in Airbnb's style guide, Google's style guide suggests avoiding it, quoted below, as such we also discourage it.

>Alignment can aid readability, but it creates problems for future maintenance. Consider a future change that needs to touch just one line. This change may leave the formerly-pleasing formatting mangled, and that is allowed. More often it prompts the coder (perhaps you) to adjust whitespace on nearby lines as well, possibly triggering a cascading series of reformattings. That one-line change now has a "blast radius". This can at worst result in pointless busywork, but at best it still corrupts version history information, slows down reviewers and exacerbates merge conflicts.
