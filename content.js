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

	v = v.replace(/\bIslamic State\b/g, "Crazy Hate Group");
	v = v.replace(/\bislamic state\b/g, "crazy hate group");
	v = v.replace(/\bISIS\b/g, "CRAZY HATE GROUP");
	v = v.replace(/\breligious\b/g, "non religious");
	v = v.replace(/\bIslam\b/g, "non islamic");
	v = v.replace(/\bislam\b/g, "non islamic");

	textNode.nodeValue = v;
}
