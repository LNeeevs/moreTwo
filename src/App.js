// import
// import { concat } from 'ramda';
const fetch = require('node-fetch');
const R = require('ramda');

const arr1 = ['Hello'];
const arr2 = ['World'];

const arr3 = R.concat(arr1, arr2);
const arr31 = R.concat(arr1, arr2).join(' ');

console.log(arr3, ' - ', arr31);

// rest
const restando = (m, ...values) => values.map(v => v * m);
console.log(restando(100, 1, 2, 3, 4, 5));

// class + extends
class Marcela {
  constructor(hair) {
    this.hair = hair;
  }

  shows() {
    console.log(`This ${this.hair} is amazing!`);
  }

  getThis() {
    return this.hair;
  }
}

class Ella extends Marcela {
  constructor(hair, name) {
    super(hair);
    this.name = name;
  }

  showAll() {
    console.log(`We are talking about ${this.hair}, but this is part of the ${this.name}`);
  }
}

const marcela = new Marcela('Blonded');
const marcelaEla = new Ella(marcela.getThis(), 'Marcela');

marcela.shows();
marcelaEla.showAll();

// promise
const prometendo = new Promise((resolve, reject) => ((false) ? resolve('S') : reject('N')));
prometendo
  .then(data => console.log(data))
  .catch(err => console.error(err));

// try e catch
const tryd = async () => {
  try {
    const a = await fetch('https://willianjusten.com.br/search.json');
    const b = await a.json();
    const c = await b.map(content => content.title);
    console.log(c);
  } catch (erro) {
    console.error(erro);
  }
};

tryd();

async function tryando() {
  try {
    const gow = await fetch('https://willianjusten.com.br/search.json');
    const go1 = await gow.json();
    const go2 = await go1.map(g => g.title);
    console.log(go2);
  } catch (err) {
    console.error(err);
  }
}

tryando();
