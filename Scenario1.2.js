describe('User is able to specify age of each child', ()=> {

let urlLocator = 'https://www.booking.com/';
let ageLocator = '//select[@name="age"]';
let strangersLocator = '//label[@id="xp__guests__toggle"]';
let childLocator = '(//button[@class="bui-button bui-button--secondary bui-stepper__add-button"])[2]';

let NumChild=5; // N number of children between [1;10]

	it('1.open menu for selecting strangers number', ()=> {
	        browser.url(urlLocator);
		browser.click(strangersLocator);
	});
	
	it('2.specify N number of children (N > 1)', ()=> {
		for (let i=0; i < NumChild; i++) {
			browser.click(childLocator);		
		}
	});
	
	it('Ex.:the number of age inputs is equal to N', ()=> {
		//number of elements found
		let countElem = browser.elements(ageLocator);
		//NumChild == countElem.value.length;
		expect(NumChild).to.equal(countElem.value.length);
		//we will check every element of entering the age of children
		for (let i=0; i < countElem.value.length; i++) {
			browser.click(ageLocator+'['+(i+1)+']/option['+(i+3)+']');
		}
	});

});