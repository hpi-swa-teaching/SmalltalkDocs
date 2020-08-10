# API Routes

All currently implimented API endpoints are definied within this document - each with an example illustrating the inputs and outputs.

## Help Page System

This group includes several routes to read the help pages.

### GET `/help/<HelpClass>`

Returns the book's name and its priority.

**Example:**

```
/help/HelpOnHelp

{
  "bookName": "Help on Help",
  "priority": 9999
}
```

### GET `/help/<HelpClass>/pages`

Returns all pagenames associated with the given book.  
Not all pages must be defined within the book itself, but may also be references to other books - this is specified with `isGivenByClass`.

**Example:**

```
/help/HelpOnHelp/pages

{
  "pages": [
    {
      "pageName": "introduction",
      "isGivenByClass": true
    },
    {
      "pageName": "HelpHowToHelpTopics",
      "isGivenByClass": false
    },
    {
      "pageName": "HelpAPIDocumentation",
      "isGivenByClass": false
    }
  ]
}
```

### GET `/help/<HelpClass>/pages/<page_name>`

Returns a page's name, its topic and content.

**Example:**

```
/help/HelpOnHelp/pages/introduction

{
  "content": "WELCOME TO THE HELP SYSTEM\r\rThe help system is a simple user interface to display help contents to the user. It can be accessed from the world menu using \"Tools\" -> \"Help Browser\" or by evaluating 'HelpBrowser open' in a workspace.\r\rThere is a predefined mechanism allowing you to have help contents stored as source code using methods in specific help provider classes. This allows you to manage the help texts using the standard development tools. But this is only one possible representation.\r",
  "pageName": "introduction",
  "title": "Introduction"
}
```

## Environment

This group of routes delivers information about the current Squeak enviroment.

### GET `/env/classes`

Returns the total count and a list of all classes.

**Example:**

```
/env/classes

{
  "classes": [
    "RPTestClass",
    "X509TBSCertificate",
    ...,
    "MetacelloAllowProjectUpgrade"
  ],
  "count": 4900
}
```

### GET `/env/classes/<ClassName>`

Returns information on a class (name, class comment, categorie) including wether it is a help book.

**Example:**

```
/env/classes/HelpOnHelp

{
  "classComment": "HelpOnHelp is documentation for the help system",
  "hasClassComment": true,
  "category": "HelpSystem-Core-Help",
  "isHelpBook": true
}
```

### GET `/env/classes/<ClassName>/methods`

Returns the total count of methods within a class and list of these on both sides.

**Example:**

```
/env/classes/Json/methods

{
  "classMethods": [
    "renderInstanceVariables:of:on:",
    "readFrom:",
    ...,
    "mimeType"
  ],
  "count": {
    "classMethods": 9,
    "total": 28,
    "instanceMethods": 19
  },
  "instanceMethods": [
    "ctorMap:",
    "readDictionary",
    ...,
    "interpretStringEscape"
  ]
}
```

### GET `/env/classes/<ClassName>/methods/<instance|class>/<methodName>`

Returns information on a method. `hasPrecodeComment` thereby specifies, wether a method comment was specified _(default is `null`)_.

**Example:**

```
/env/classes/Json/methods/instance/readAny

{
  "hasPrecodeComment": true,
  "precodeComment": "This is the main entry point for the JSON parser. See also readFrom: on the class side."
}
```

### GET `/env/classes/<ClassName>/methods/<instance|class>/<methodName>/text`

Returns the source code of the designated method as `text/plain`. _(methodName may include a `:`)_

**Example:**

```
/env/classes/Json/methods/class/readFrom:/text

readFrom: aStream
	^ self new readFrom: aStream.
```

### GET `/env/categories`

Returns a list of all categories.

**Example:**

```
/env/categories

{
  "categories": [
    "Compiler",
    "MorphicExtrasTests",
    ...,
    "Monticello"
  ],
  "count": 223
}
```

### GET `/env/categories/<category>`

Returns a list of all classes within a given category.

**Example:**

```
/env/categories/Sound
{
  "classes": [
    "ADPCMCodec",
    "AIFFFileReader",
    ...,
    "WaveletCodec"
  ],
  "count": 50
}
```

### GET `/env/search/<method|class>/<searchString>`

Returns a list of all classes or methods which correspond to the given search string.

Such a search string may include a wildcard `%` to indicate that the string may include arbitrary sequence of letters at this position. If no wildcard is specified, the query string is interpreted as `%<searchString>%`. _(case-sensitive)_

**Example:**

```
/env/search/class/Help%

{
  "classes": [
    "HelpAPIDocumentation",
    "HelpBrowser",
    ...,
    "HelpTopicTest"
  ]
}
```

```
/env/search/method/allSatisf%

{
  "methods": [
    {
      "className": "Collection",
      "methodName": "allSatisfy:",
      "side": "instance"
    },
    {
      "className": "UiItemModelFinder",
      "methodName": "allSatisfy:",
      "side": "instance"
    },
    {
      "className": "UiItemModelFinder",
      "methodName": "allSatisfy:startingAt:",
      "side": "instance"
    },
    {
      "className": "UiListWidget",
      "methodName": "allSatisfy:",
      "side": "instance"
    },
    {
      "className": "GitSetWrapper",
      "methodName": "allSatisfy:",
      "side": "instance"
    }
  ]
}
```

## Statistics

This group of endpoints provides several statics on the current Squeak image.

### GET `/statistics/undocumented/classes`

Returns the total amount of classes without a class comment and their complete list.

**Example:**

```
{
  "classes": [
    "UiPropertyItemNodeTests",
    "MCMockASubclass",
    ...,
    "MetacelloAllowProjectUpgrade"
  ],
  "count": 2579
}
```

### GET `/statistics/undocumented/methods/<className>`

Returns the total amount of methods without a precode comment and their complete list seperated by side.

**Example:**

```
/statistics/undocumented/methods/Class

{
  "classMethods": [
    "fromSton:"
  ],
  "count": {
    "classMethods": 1,
    "total": 24,
    "instanceMethods": 23
  },
  "instanceMethods": [
    "addInstVarNames:",
    "asClassDefinition",
    "asHelpTopic",
    ...,
    "withClassVersion:"
  ]
}
```
