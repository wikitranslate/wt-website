const chai = require('chai');
const server = require('../server');

chai.use(require('chai-http'));

const expect = chai.expect;

describe('Website', function () {
  // Wikipedia API is sometimes a bit picky.
  this.timeout(5000);

  it('gives access to the API', () => {
    return chai.request(server)
    .get('/api/fr/en/Potentiel électrique')
    .then((res) => {
      expect(res).to.have.status(200);

      expect(res.body).to.be.an('object');
      expect(res.body).to.contain.keys('wikipedia');
      expect(res.body.wikipedia).to.be.an('array');
      expect(res.body.wikipedia[0]).to.equal('Electric potential');
    });
  });

  it('gives access to the client', () => {
    return chai.request(server)
    .get('/')
    .then((res) => {
      expect(res).to.have.status(200);

      expect(res.text).to.contain('<!doctype html>');
    });
  });

  it('has compiled the client', () => {
    return chai.request(server)
    .get('/bundle.js')
    .then((res) => {
      expect(res).to.have.status(200);

      expect(res).to.have.property('type', 'application/javascript');
    });
  });
});
