require('@danzen/createjs');
const makeZIM = require('zimjs');
const zim = makeZIM(); // pass in true to use zim namespace **
const [zog] = zim.getGlobals();

const scaling = "holder"; // this will resize to fit inside the screen dimensions
// const width = 1000;
// const height = 500;
// const color = white; // ZIM colors like green, blue, pink, faint, clear, etc.
// const outerColor = dark; // any HTML colors like "violet", "#333", etc. are fine to use
const assets = ["https://i.postimg.cc/SK7wfJLH/sletter.png","https://i.postimg.cc/FHct1PYr/hletter.png","https://i.postimg.cc/sDbdjFDH/aletter.png","https://i.postimg.cc/pdtwjDjD/nletter.png"];


const frame = new Frame(scaling, null, null, null, null, assets);
frame.on("ready", () => { // ES6 Arrow Function - like function(){}
    zog("ready from ZIM Frame"); // logs in console (F12 - choose console)

    const stage = frame.stage;
    let stageW = frame.width;
    let stageH = frame.height;
    frame.color = white; 
    zog("hi",stageW, stageH);

      // Create letter bubbles wiggling
      const shan = new Container(stageW, stageH).center();
      const size = 60;
      loop(4, function (i) {
          //let num =i%2; 
        const container = new Container(size*.7, size*.7).addTo(shan).centerReg().pos(40 + i * size, frame.height*.52).drag({ all: true });//as long as I delete the outline here, console will show can't define my hitTest down at 92 & 100
        const blob = new Blob({
          radius: size*.3,
          color: "rgba(20,20,20,0)",
          showControls: false,
          lockControls: true,
          allowToggle: false,
          move: false
        }).addTo(container).center(container);
        const letter = frame.asset(assets[i]).centerReg(blob).loc(blob).sca(.07);
        blob.wiggle({
          property: "y",
          baseAmount: container.y - frame.height*.5,
          minAmount: -2,
          maxAmount: 8
        });
        blob.wiggle({
          property: "x",
          baseAmount: container.x - (40 + i * size),
          minAmount: -3,
          maxAmount: 4
        });
      });
      // create hit test when moving bubbles
      Ticker.add(function () {
        shan.loop(function (blob) {
          shan.loop(function (blob2) {
            if (blob.hitTestCircle(blob2) && blob !== blob2) {
              blob.x += (blob.x - blob2.x) / 8;
              blob.y += (blob.y - blob2.y) / 8;
              blob2.x -= (blob.x - blob2.x) / 18;
              blob2.y -= (blob.y - blob2.y) / 18;
              stage.update();
            };
          });
        });
      });

      stage.update();

    }); // end of ready