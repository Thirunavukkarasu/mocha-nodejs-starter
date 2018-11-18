const expect = require("chai").expect;
const nock = require("nock");
const weatherController = require("../controllers/weatherController");
const weatherApiSuccess = require('./response').weatherApiSuccess;
const weatherApiFailure = require('./response').weatherApiFailure;

describe('Weather tests', function () {
  beforeEach(() => {
    nock('https://api.openweathermap.org')
      .get('/data/2.5/weather')
      .query({
        q: "chennai",
        appId: '7eea681a996fbd4b9717240f430dab26'
      })
      .reply(200, weatherApiSuccess);

    nock('https://api.openweathermap.org')
      .get('/data/2.5/weather')
      .query({
        q: "chennai1",
        appId: '7eea681a996fbd4b9717240f430dab26'
      })
      .reply(404, weatherApiFailure);
  });

  describe('Get By City tests', function () {
    it('Valid city', function (done) {
      weatherController.checkWhetherForCity("chennai").then(response => {
        //expect an object back
        expect(typeof response).to.equal('object');

        //Test result of name, company and location for the response
        expect(response.name).to.equal('chennai');
        done();
      })
    });
    it('InValid city', function (done) {
      weatherController.checkWhetherForCity("chennai1").then(response => {
        //expect an object back
        expect(typeof response).to.equal('object');
        expect(response.message).to.equal('Error while making api call');
        done();
      })
    });
  });
});
