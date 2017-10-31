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

All variables should be named in camelCase. Some words and phrases may have ambiguous camelCasing, such as "HTTP Request"? Is it `httpRequest`, or `HTTPRequest`?

In such cases, [Google has a good, nearly deterministic scheme for camelCasing](https://google.github.io/styleguide/jsguide.html#naming-camel-case-defined). To answer the above question using this scheme, it should be `httpRequest`. Any names that remain ambiguous with the scheme should be discussed with the team.

##### Naming Files

In general, PascalCase should be used only for classes, constructors, and function libraries. Everything else should be written in camelCase.

File names and export names should match exactly.

React files should be given the extension `.jsx` to make it clear that they are react components.

### Promises

Complex promise chains should be broken out into their own functions as such:

```
function doThis(result) {
  // A lot of code
}
function doThat(result) {
  // Even more code!
}
function handleError(error) {
  // Lot of error code.
}

return doSomething(foo)
  .then(doThis)
  .then(doThat)
  .catch(handleError); // end chain w/ semicolon
```

Simple promise logic can be done in-line, but indented. As a rule of thumb, in-line promise code shouldn't be more than three or four lines.

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

Although not mentioned in Airbnb's style guide, they take an implicit stance on it by disallowing more than one space before or after equal signs. Google's style guide is more explicit about it, quoted below, as such we also discourage it.

>Alignment can aid readability, but it creates problems for future maintenance. Consider a future change that needs to touch just one line. This change may leave the formerly-pleasing formatting mangled, and that is allowed. More often it prompts the coder (perhaps you) to adjust whitespace on nearby lines as well, possibly triggering a cascading series of reformattings. That one-line change now has a "blast radius". This can at worst result in pointless busywork, but at best it still corrupts version history information, slows down reviewers and exacerbates merge conflicts.
