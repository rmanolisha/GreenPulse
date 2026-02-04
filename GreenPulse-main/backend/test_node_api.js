const http = require('http');

const PORT = 5000;

const testEndpoint = (path, method = 'GET', data = null) => {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'localhost',
      port: PORT,
      path,
      method,
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const req = http.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        console.log(`\nTesting ${method} ${path}`);
        console.log(`Status: ${res.statusCode}`);
        try {
          const json = JSON.parse(body);
          console.log(`Response: ${JSON.stringify(json).substring(0, 100)}...`);
          resolve(json);
        } catch (e) {
          console.log(`Response: ${body}`);
          resolve(body);
        }
      });
    });

    req.on('error', (e) => {
      console.error(`Problem with request: ${e.message}`);
      reject(e);
    });

    if (data) {
      req.write(JSON.stringify(data));
    }
    req.end();
  });
};

async function runTests() {
  try {
    console.log('Starting API verification...');
    
    await testEndpoint('/api/policies');
    await testEndpoint('/api/policies/1');
    await testEndpoint('/api/datasets');
    await testEndpoint('/api/dashboard/citizen');
    await testEndpoint('/api/dashboard/government');
    
    await testEndpoint('/api/applications', 'POST', {
      userDetails: { name: 'Node Tester', email: 'node@test.com' },
      selectedScheme: 'FAME India (EV)',
      documents: ['id.pdf']
    });
    
    await testEndpoint('/api/applications');
    
    console.log('\nVerification complete!');
    process.exit(0);
  } catch (e) {
    console.error('Test failed', e);
    process.exit(1);
  }
}

runTests();
