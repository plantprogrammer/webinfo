document.addEventListener('DOMContentLoaded', function() {
chrome.tabs.getSelected(null, function(tab) {
	var date;
	chrome.tabs.executeScript(
	{
		code: "date = document.lastModified"
	},getDate);
	}
	)
	function getDate(results)
	{
		document.write("<p>Last updated:</p>" + results);
	}
}
);