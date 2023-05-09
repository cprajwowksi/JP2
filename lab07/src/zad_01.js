const { lp3 } = require('./toplist');
const _ = require('lodash');

const podpunktA = _.filter(lp3, x => x.author==="Queen");
const podpunktB = _.filter(lp3, x => x.change>9);
const podpunktC = _.dropRight(_.sortBy(lp3, a => a.change), 2); // automatycznie jest 1
const podpunktD = _.reduce(_.filter(lp3, x => x.place===1),((acc, curr) => [...acc, {author: curr.author, song: curr.song}]), []);

const liczby = [1, 2, 3, 4, 5, 6, 7];
// E
const tablicaNumerami = (arr) => {
    return _.reduce(lp3, ((acc, curr) => _.every(arr, x => typeof x === "number") ?
                                            (_.some(arr, x => x===curr.place) ? [...acc, curr] : [...acc] ) : undefined), []);
};
// E


// const skrypt = (n, min, max) => {
//     const licznik = _.times(n, () => _.random(min, max));
//     console.log(licznik);
//     return _.reduce(lp3, ((acc, curr) =>
//         _.some(_.times(n, () => _.random(min, max)), x => x===curr.place) ? [...acc, curr] : [...acc] ), []);

// };
const skrypt = (n, min, max) => {
    const licznik = _.times(n, () => _.random(min, max));
    return _.reduce(lp3, ((acc, curr) =>
        _.some(licznik, x => x===curr.place) ? [...acc, curr] : [...acc] ), []);

};

//masz siodmy ztobic

const podpunkt8 = _.filter(lp3, x => x.change<0);

const podpunkt9 = _.reduce(lp3, ((acc, curr) => [...acc, { [curr.song]: curr}]), []);

// const podpunkt10 = _.reduce(_.groupBy(lp3, x => x.author), ((acc, curr) =>
//                     [...acc, _.reduce(curr, ((acc3, curr3)=> curr3.author),""),
//                      _.reduce(curr, ((acc2, curr2) => [...acc2, {song: curr2.song, place: curr2.place}]), [])]), [])
// const podpunkt10 = _.mapValues(_.groupBy(lp3, x => x.author), ((a) => _.map(a, x => _.pick(x, ['song', 'place']))))
// console.log(podpunkt10);
const podpunkt10 = _.mapValues(_.groupBy(lp3, x => x.author), ((a) => _.map(a, x => ({ song: x.song, place: x.place }))))
const podpunkt11 = _.countBy(lp3, x => x.author);
const podpunkt12 = _.maxBy(lp3, x => x.change)

console.log(podpunkt12);