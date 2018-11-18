const expect = require("chai").expect;
const nock = require("nock");
const githubUserController = require("../controllers/githubUserController");
const githubApiSuccess = require('./response').githubApiSuccess;
const githubApiFailure = require('./response').githubApiFailure;

describe('Github tests', function () {
  beforeEach(() => {
    nock('https://api.github.com')
      .get('/users/mocha')
      .reply(200, githubApiSuccess);

    nock('https://api.github.com')
      .get('/users/chennaop12')
      .reply(404, githubApiFailure);
  });

  describe('Get User tests', function () {
    it('Valid user', function (done) {
      githubUserController.getUser("mocha").then(response => {
        //expect an object back
        expect(typeof response).to.equal('object');

        //Test result of name, company and location for the response
        expect(response.name).to.equal('Patrick Deuley');
        done();
      })
    });
    it('InValid user', function (done) {
      githubUserController.getUser("chennaop12").then(response => {
        //expect an object back
        expect(typeof response).to.equal('object');
        expect(response.message).to.equal('Error while making api call');
        done();
      })
    });
  });
});
