$(function() {
  var $body = $('body');
  var $header = $('h1');
  var $title = $('<img src="ref/title_2.png" id="title">');
  var $toolbarDiv = $('<div id="toolbarDiv"></div>');
  var $drawAreaDiv = $('<div id="drawAreaDiv"></div>');

  var $canvasForm = $('<form>');
  var $width = $('<input name="width">').attr('placeholder','width (unit)');
  var $height = $('<input name="height">').attr('placeholder','height (unit)');
  var $gridSize = $('<input name="gridSize">').attr('placeholder','grid size (px)');
  var $createCanvas = $('<button  type="submit">submit</button>').attr('type', 'submit').text('Create New Canvas');

  var $border = $('<img src="ref/pixel-rainbow_2.png" id="border">');

  var $paletteForm = $('<form id="paletteForm">');
  var $colorSubtext = $('<p>Choose a Color!</p>');
  var $color = $('<input type="color">');
  var $erase = $('<button type="button" id="erase" onclick="erasing();">erase</button>');
  //var $erase = $('<button  type="submit">submit</button>').attr('type', 'submit').text('erase');
  var $clear = $('<button type="button" onclick="clearing();">clear</button>');

  $canvasForm.append($width, $height, $gridSize, $createCanvas);
  $paletteForm.append($colorSubtext, $color, $erase, $clear);
  $body.append($toolbarDiv, $drawAreaDiv, $border);
   //$drawAreaDiv.append($border);
  $toolbarDiv.append($title, $canvasForm, $paletteForm);

  var widthVal = $width.val();
  var heightVal = $height.val();
  var gridVal = $gridSize.val();
  var colorVal = $color.val();

  $canvasForm.on('submit', function(event){
    event.preventDefault();
    console.log('create canvas');
    $('#pp-canvas').remove();
    pixelPainter($width.val(), $height.val(), $gridSize.val());
    this.reset();
  });

  function pixelPainter(width, height, gridSize){

    console.log('pixelPainter', width, height, gridSize);
    var $canvasDiv = $('<div id="pp-canvas"></div>');
    $canvasDiv.css("width", width*gridSize);
    $canvasDiv.css("height", height*gridSize);
    $drawAreaDiv.append($canvasDiv);

    //duplicate row
    for(var k=0; k < height; k++){
      //make row
      for(var i=0; i < width; i++){
        var $squareDiv = $('<div class="square"></div>');
        $squareDiv.css({
                    "width": gridSize,
                    "height": gridSize
                      });
        $canvasDiv.append($squareDiv);
      }
    }
  }

  function draw(){
    console.log('drawing');
    $(this).css("background-color", $color.val());
  }

  $("body").on('click', ".square", draw);

  function _erasing(){
    $color.val("#FFFFFF");
  }


  erasing = _erasing;
  //$("#erase").click(erasing());

  function _clearing(){
    $('.square').css("background-color", "white");
  }
  clearing = _clearing;
  console.log(colorVal);
});

var erasing;
var clearing;