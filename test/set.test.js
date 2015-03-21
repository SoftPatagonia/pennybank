var expect = require('chai').expect;
var crypto = require('crypto');
var libset = require('../set.js');

describe('set', function(){

  it('should export an object', function(){
    expect(libset).to.be.an('object');
  });

  it('should export a function', function(){
    expect(libset.generate).to.be.a('function');
  });

  it('should generate a set', function(){
    var set = libset.generate(10);
    expect(set).to.be.an('object');

    expect(set.pence).to.be.an('object');
    expect(Object.keys(set.pence).length).to.be.equal(100);

    // check one pence
    var ID = Object.keys(set.pence)[0];
    expect(ID).to.be.a('string');
    expect(ID.length).to.be.equal(40);
    expect(set.pence[ID]).to.be.a('string');
    expect(set.pence[ID].length).to.be.equal(64);

  });




});
