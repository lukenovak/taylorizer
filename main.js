// get the document text elements and put them in an array
function getDocumentText() {
  let walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let next, elements = [];
  while(next = walk.nextNode())
    elements.push(next);
  return elements;
}

var text = getDocumentText();
text.forEach(function(node) {
  let text = node.textContent;
  let matchIndex = text.toLowerCase().indexOf("pork roll");
  while (matchIndex !== -1) {
    text = text.slice(0, matchIndex) + "Taylor ham" +
      text.slice(matchIndex + 9);
    matchIndex = text.toLowerCase().indexOf("pork roll");
  }
  node.textContent = text;
  console.log(text);
  return text;
})

