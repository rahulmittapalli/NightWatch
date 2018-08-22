module.exports={
  'Login page':function(browser){
  browser
  .url('https://dev-pim.dermalogica.com')
  .waitForElementVisible('input[type=text]', 5000)
  .setValue('input[type=text]','mittapalli.rahul@gmail.com')
  .setValue('input[type=password]','1234568')
  .click('button[type=submit]')
  .waitForElementVisible('div[name="SimpleTable"]', 5000)
  .assert.visible('div[name="SimpleTable"]')
//.pause(2000)
   .assert.containsText('.navbar-nav.ml-auto', 'Logout')
  .end();
}
};
