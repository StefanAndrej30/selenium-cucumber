const { Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const supertest = require('supertest');

const request = supertest('https://reqres.in');




// app.get('/user', function(req, res) {
//     res.status(200).json({ name: 'john' });
//   });
Then('I post:', async function (docString) {
  
    const postBody = JSON.parse(docString);

    this.setResponse(await request
        .post('/api/users')
        .send(postBody)
        .expect('Content-Type', /json/)
        );
        //console.log(this.response.statusCode);
});

Then('I delete', async function () {
   this.setResponse(await request
    .delete('/api/users/2')
    );
});


Then('I patch:', async function (docString) {

    const postBody = JSON.parse(docString);

     this.setResponse(await request
    .patch('/api/users/2')
    .send(postBody)
    );
    expect(this.response.body.job).to.equal('qa');
});


Then('I expect status code to be {int}', async function (statusCode) {
    expect(this.response.statusCode).to.equal(statusCode);
});