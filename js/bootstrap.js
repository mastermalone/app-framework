require.config({
    paths: {
        'tout': 'path/to/tout/index'
    }
});


reqire([], function () {
    console.log('loading main page');
});
