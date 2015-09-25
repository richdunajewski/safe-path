var safePath = require('./index');

var samples = [
    'AC/DC - AC/DC Compilation CD',
    'Bob\'s Music Cafe - D4 Noise & FX',
    'Various Artists - Now That\'s What I Call Music! Vol. 15',
    '葉月ゆら - 東方来夢来人'
];

for (var i = 0; i < samples.length; i++) {
    console.log(samples[i], '   =>   ', safePath.format(samples[i].split(' - ')[0]) + '/' + safePath.format(samples[i].split(' - ')[1]));
}