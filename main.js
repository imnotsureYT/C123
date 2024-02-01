function preload()
{

}

function setup()
{
    canvas = createCanvas(350,350);
    // video = createCapture(VIDEO);
    let constraints = {
        video: {
            mandatory: {
                minWidth: 350,
                minHeight: 350,
                maxWidth: 350,
                maxHeight: 350
            },
            optional: [{maxFrameRate:32}]
        },
        audio: false
    }
    video = createCapture(constraints);
    // canvas.position(560, 350);
    // video.position(56,350);
}

function draw()
{
    // canvas.center()
}