exports.config = {
  seleniumAddress: 'http://10.51.25.113:4444/wd/hub',
  specs: ['demo.js'],
  framework: 'jasmine',
  
  capabilities: {
        'browserName': 'chrome',
        'platform': 'WINDOWS',
        'version': '55'
    }
}