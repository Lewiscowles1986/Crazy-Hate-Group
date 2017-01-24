walk(document.body);

(function (element) {
    element.observer = new MutationObserver(function() { // Really expensive to do this!
        walk(element);
    });
    var config = { attributes: false, childList: true, characterData: true, subtree: true};
    element.observer.observe(element, config); //starts the actual observing of the element.

})(document.body);

function walk(node)
{

	var child, next;

	switch ( node.nodeType )
	{
		case Node.ELEMENT_NODE:
		case Node.DOCUMENT_NODE:
		case Node.DOCUMENT_FRAGMENT_NODE:
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case Node.TEXT_NODE:
			handleText(node);
			break;
	}
}

function handleText(textNode)
{
	var v = textNode.nodeValue;

	v = v.replace(/\bIslamic State\b/gi, "Crazy Hate Group");
	v = v.replace(/\bISIS\b/gi, "CRAZY HATE GROUP");

	textNode.nodeValue = v;
}
