#ipsum
Turn an array into generated text.

##Usage

###.use(array)
Sets the word list array you want to use.

Returns ipsum object, and can be chained with the other
methods below.

###.generateLine()
Returns a single sentence string.

###.generateParagraph(count)
Returns a string that returns multiple sentences (i.e. a paragraph). Number of sentences is set by [count] argument (defaults to 5 if not set).

###.build(length, callback)
Creates multiple paragraphs - the number of which is determined by the length argument. The number of sentences for each paragraph is randomly generated.

The callback is fired for each paragraph, and is passed a new paragraph each time the callback is called.

This allows for wrapping in paragraph in html tags, updating an object/array or other processing.