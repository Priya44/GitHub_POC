describe('angularjs homepage todo list', function() {
  it('Launch Application', function() {
    browser.get('https://angularjs.org');
	
	element(by.model('yourName')).sendKeys('Umang');
	
    element(by.binding('yourName')).getText().then(function(text){
		console.log("val: "+text);
	})
	browser.sleep(5000);
   
  });
  
 
  
});