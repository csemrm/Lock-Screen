var win = Titanium.UI.createWindow({
	title : 'My app',
	backgroundColor : '#fff',
	//navBarHidden : true,
	//orientationModes : [Titanium.UI.PORTRAIT]
});
//Titanium.UI.orientation = Titanium.UI.PORTRAIT;

var testButton = Ti.UI.createButton({
	title : 'Test Button',

});

testButton.addEventListener('click', function() {
	alert('\'Test Button\' was clicked!');
});

win.add(testButton);

win.open();
