(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 728,
	height: 90,
	fps: 30,
	color: "#000000",
	manifest: [
		{src:"images/Bitmap39.jpg?1507138662927", id:"Bitmap39"},
		{src:"images/burst.png?1507138662927", id:"burst"},
		{src:"images/ctaout.png?1507138662927", id:"ctaout"},
		{src:"images/ctaover.png?1507138662927", id:"ctaover"},
		{src:"images/dates.png?1507138662927", id:"dates"},
		{src:"images/headshot1.jpg?1507138662927", id:"headshot1"},
		{src:"images/headshot2.jpg?1507138662927", id:"headshot2"},
		{src:"images/headshot3.jpg?1507138662927", id:"headshot3"},
		{src:"images/logo1.png?1507138662927", id:"logo1"},
		{src:"images/logo2.png?1507138662927", id:"logo2"},
		{src:"images/logo2_1.png?1507138662927", id:"logo2_1"},
		{src:"images/logo.png?1507138662927", id:"logo"},
		{src:"images/name1.png?1507138662927", id:"name1"},
		{src:"images/name2.png?1507138662927", id:"name2"},
		{src:"images/name3.png?1507138662927", id:"name3"},
		{src:"images/newtext.png?1507138662927", id:"newtext"},
		{src:"images/text1.png?1507138662927", id:"text1"},
		{src:"images/text2.png?1507138662927", id:"text2"}
	]
};



// symbols:



(lib.Bitmap39 = function() {
	this.initialize(img.Bitmap39);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,200);


(lib.burst = function() {
	this.initialize(img.burst);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,267,138);


(lib.ctaout = function() {
	this.initialize(img.ctaout);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,189,28);


(lib.ctaover = function() {
	this.initialize(img.ctaover);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,189,28);


(lib.dates = function() {
	this.initialize(img.dates);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.headshot1 = function() {
	this.initialize(img.headshot1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,88,90);


(lib.headshot2 = function() {
	this.initialize(img.headshot2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,85,90);


(lib.headshot3 = function() {
	this.initialize(img.headshot3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,85,90);


(lib.logo1 = function() {
	this.initialize(img.logo1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,53,39);


(lib.logo2 = function() {
	this.initialize(img.logo2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,135,78);


(lib.logo2_1 = function() {
	this.initialize(img.logo2_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,36,37);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,225,82);


(lib.name1 = function() {
	this.initialize(img.name1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,103,27);


(lib.name2 = function() {
	this.initialize(img.name2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,27);


(lib.name3 = function() {
	this.initialize(img.name3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,27);


(lib.newtext = function() {
	this.initialize(img.newtext);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.text1 = function() {
	this.initialize(img.text1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.text2 = function() {
	this.initialize(img.text2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.text4c = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A2fByIAAjjMAs+AAAIAADjg");
	mask.setTransform(316,71.5);

	// Layer 1
	this.instance = new lib.newtext();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(172,60,288,23);


(lib.text4b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgnCAB9IAAj4MBOFAAAIAAD4g");
	mask.setTransform(362.9,47.5);

	// Layer 1
	this.instance = new lib.newtext();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(112.9,35,500,25);


(lib.text4a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Egk7ADwIAAneMBJ3AAAIAAHeg");
	mask.setTransform(359.5,11);

	// Layer 1
	this.instance = new lib.newtext();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(123.1,0,473,35);


(lib.text3c = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AxBHGIAAk/MAmaAAAIAAE/g");
	mask.setTransform(137,45.5);

	// Layer 1
	this.instance = new lib.text2();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(28,59,246,31);


(lib.text3b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzNCBIAAkCMAmaAAAIAAECg");
	mask.setTransform(151,44);

	// Layer 1
	this.instance = new lib.text2();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(28,31,246,26);


(lib.text3a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzNCgIAAk/MAmaAAAIAAE/g");
	mask.setTransform(151,16);

	// Layer 1
	this.instance = new lib.text2();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(28,0,246,32);


(lib.text2a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.text1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.text1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,225,82);


(lib.name3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.name3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,75,27);


(lib.name2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.name2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,75,27);


(lib.name1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.name1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,103,27);


(lib.logo4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,135,78);


(lib.logo2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo2_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,36,37);


(lib.logo1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53,39);


(lib.headshot3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.headshot3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,85,90);


(lib.headshot2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.headshot2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,85,90);


(lib.headshot1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.headshot1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,88,90);


(lib.groupPeople = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Bitmap39();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,728,200);


(lib.gradient = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#4E878F","#003F52"],[0,1],0,-125,0,125).s().p("AnzTiMAAAgnDIPmAAMAAAAnDg");
	this.shape.setTransform(81.3,189,1.627,1.512);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,162.7,378);


(lib.g_bkg_white = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.endFrame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F3D2AC").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape.setTransform(377.7,-49.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F3D2AC").s().p("AgTAbIAAg2IAnAAIAAAJIgdAAIAAAPIAZAAIAAAHIgZAAIAAAOIAdAAIAAAJg");
	this.shape_1.setTransform(373.6,-51.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F3D2AC").s().p("AgDAcIgXg3IALAAIAPApIAQgpIALAAIgXA3g");
	this.shape_2.setTransform(367.3,-51.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F3D2AC").s().p("AgDAbIAAg2IAHAAIAAA2g");
	this.shape_3.setTransform(362.6,-51.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F3D2AC").s().p("AgDAbIgGgBIgGgCIgFgFIAGgGIAIAEIAEACIADAAIAEAAIAEgCIACgCIAAgCIAAgEIgCgCIgEgBIgFgCIgHgDIgGgBQgDgCgBgCQgBgDAAgEQAAgEABgDIAEgFIAGgDQAEgBADgBIAFABIAFABQAEABAFAFIgFAHIgHgEIgHgCIgDABIgDABQgCACAAADIAAADIACACIAEACIAFACIAIACIAGACIADAFQABACAAAEQAAADgBADIgFAGIgGADIgIABIgEgBg");
	this.shape_4.setTransform(358.2,-51.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F3D2AC").s().p("AgJAbIgEgCIgDgEIgDgDIgCgEIgBgFIAAgGIAAgeIAJAAIAAAeIABAHIADAEIAFAEQACABACAAIAFgBQADgBABgCIAEgFIABgHIAAgeIAKAAIAAAdIgBAHIgBAFIgCAEIgEADIgDAEIgEACIgJABIgJgBg");
	this.shape_5.setTransform(352.2,-51.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F3D2AC").s().p("AgSAbIAAg2IAKAAIAAAtIAbAAIAAAJg");
	this.shape_6.setTransform(346.6,-51.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F3D2AC").s().p("AgBAcIgGgCIgFgCIgEgEIgDgEIgDgFIgBgFIgBgGIABgEIABgGIADgFIADgEIAEgDIAFgDIAGgCIAEgBIAHABIAGACQADACAGAEIgHAIQgDgEgEgCIgEgBIgEgBQgDABgDABIgFAFIgEAFIgCAHQAAAEACADQABAEADADIAFAEQADABADAAIAEAAIAFgCIAHgFIAGAGIgEAFIgFADIgGACIgIAAIgDAAg");
	this.shape_7.setTransform(340.5,-51.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F3D2AC").s().p("AAQAbIgdglIAAAlIgKAAIAAg2IAKAAIAbAlIAAglIAKAAIAAA2g");
	this.shape_8.setTransform(333.9,-51.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F3D2AC").s().p("AgDAbIAAg2IAHAAIAAA2g");
	this.shape_9.setTransform(329,-51.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F3D2AC").s().p("AAOAbIgOgVIgNAVIgMAAIAUgbIgTgbIAMAAIAMAVIAOgVIALAAIgUAbIAVAbg");
	this.shape_10.setTransform(321.4,-51.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F3D2AC").s().p("AASAcIgGgOIgYAAIgGAOIgKAAIAZg3IAHAAIAZA3gAAJAGIgJgVIgIAVIARAAg");
	this.shape_11.setTransform(315,-51.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F3D2AC").s().p("AgDAbIAAgtIgSAAIAAgJIArAAIAAAJIgRAAIAAAtg");
	this.shape_12.setTransform(309.4,-51.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F3D2AC").s().p("AgFAHQAEgBABgCQAAgCAAgCIgCAAIAAgKIAIAAIAAAKIAAADIgDAEIgDADIgEABg");
	this.shape_13.setTransform(412.5,-57.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F3D2AC").s().p("AgDAbIAAgtIgSAAIAAgJIArAAIAAAJIgRAAIAAAtg");
	this.shape_14.setTransform(409.3,-60.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F3D2AC").s().p("AANAbIAAgXIgZAAIAAAXIgKAAIAAg2IAKAAIAAAYIAZAAIAAgYIAKAAIAAA2g");
	this.shape_15.setTransform(403.2,-60.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F3D2AC").s().p("AgCAcIgFgCIgFgCIgFgEIgDgEIgCgFIgCgFIgBgGIABgEIACgGIACgFIAEgEIAEgDIAFgDIAFgCIAEgBIAHABIAGABIAJAGIgGAIIgHgFIgJgCIgFACQgEABgCAEIgEAFIgBAHQAAAEABADQABAEADADIAGAEQADABADAAIAHgBIAGgDIAAgKIgOAAIAAgHIAYAAIAAAVQgGAGgEABIgGACIgHAAIgFAAg");
	this.shape_16.setTransform(396.5,-60.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F3D2AC").s().p("AgDAbIAAg2IAHAAIAAA2g");
	this.shape_17.setTransform(391.7,-60.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F3D2AC").s().p("AAQAbIgdglIAAAlIgKAAIAAg2IAKAAIAcAlIAAglIAJAAIAAA2g");
	this.shape_18.setTransform(386.8,-60.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F3D2AC").s().p("AALAbIgLgTIgNAAIAAATIgKAAIAAg2IAXAAIAKACIAHAEIADAFIABAHIAAAAIgBAHIgCACIgEAEIgGACIAQAVgAgNAAIANAAIAFAAIADgBIACgDIABgEIAAgBIgBgDIgCgDIgDgCIgFgBIgNAAg");
	this.shape_19.setTransform(377.6,-60.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F3D2AC").s().p("AgUAbIAAg2IAoAAIAAAJIgeAAIAAAPIAbAAIAAAHIgbAAIAAAOIAfAAIAAAJg");
	this.shape_20.setTransform(371.4,-60.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F3D2AC").s().p("AgUAbIAAg2IAUAAQAFABAEABQAEABADADIAEAFQABAEAAAEIAAAAIAAAFIgBADIgFAFIgHADIgIABIgKAAIAAASgAgKAAIAKAAIAEAAIAEAAIACgDIABgFIgBgEIgCgDIgEgCIgEgBIgKAAg");
	this.shape_21.setTransform(365.7,-60.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F3D2AC").s().p("AgFAHQAEgBABgCQAAgCAAgCIgCAAIAAgKIAIAAIAAAKIAAADIgDAEIgDADIgEABg");
	this.shape_22.setTransform(358.2,-57.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F3D2AC").s().p("AgDAbIAAgtIgSAAIAAgJIArAAIAAAJIgRAAIAAAtg");
	this.shape_23.setTransform(355,-60.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F3D2AC").s().p("AgSAbIAAg2IAKAAIAAAtIAbAAIAAAJg");
	this.shape_24.setTransform(350.4,-60.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F3D2AC").s().p("AgIAbIgFgCIgDgEIgDgDIgCgEIgBgFIgBgGIAAgeIAKAAIAAAeIABAHIADAEIAEAEQADABACAAIAFgBQADgBABgCIADgFIACgHIAAgeIAKAAIAAAdIgBAHIgCAFIgCAEIgCADIgEAEIgEACIgJABIgIgBg");
	this.shape_25.setTransform(344.3,-60.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F3D2AC").s().p("AgYAbIAAg2IAVAAIAEABIAGABIAFADIAEADIAEAEIADAFIABAGIABAEIgBAFIgBAFIgDAFIgEAEIgEAEIgFACIgGACIgEAAgAgOASIALAAQADAAADgBQADgBADgDQADgCABgEQABgDABgEQgBgDgBgDQgBgEgDgCIgGgEQgDgBgDgBIgLAAg");
	this.shape_26.setTransform(337.7,-60.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F3D2AC").s().p("AASAcIgGgOIgYAAIgGAOIgKAAIAZg3IAHAAIAZA3gAAJAGIgJgVIgIAVIARAAg");
	this.shape_27.setTransform(330.8,-60.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F3D2AC").s().p("AAMAbIgMgTIgMAAIAAATIgKAAIAAg2IAWAAIAKACIAHAEIAEAFIABAHIAAAAIgBAHIgEACIgDAEIgGACIAPAVgAgMAAIAMAAIAFAAIADgBIADgDIABgEIAAgBIgBgDIgDgDIgDgCIgFgBIgMAAg");
	this.shape_28.setTransform(321.6,-60.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F3D2AC").s().p("AgTAbIAAg2IAnAAIAAAJIgdAAIAAAPIAaAAIAAAHIgaAAIAAAOIAdAAIAAAJg");
	this.shape_29.setTransform(315.5,-60.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F3D2AC").s().p("AgUAbIAAg2IAUAAQAFABAEABQAEABADADIAEAFQABAEAAAEIAAAAIAAAFIgBADIgFAFIgHADIgIABIgKAAIAAASgAgKAAIAKAAIAEAAIAEAAIACgDIABgFIgBgEIgCgDIgEgCIgEgBIgKAAg");
	this.shape_30.setTransform(309.7,-60.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F3D2AC").s().p("AgJBzIAAgcQgSgCgRgGQgQgHgNgKIAVgfQAMAJAKAFQAKAGAMACIAAgrQgPgEgLgEQgKgEgIgHQgHgGgEgJQgDgJAAgMIAAgBQAAgLAEgJQAEgJAHgHQAIgGAKgFQALgEANgCIAAgPIAZAAIAAAQQAOACANAFQAMAFAMAIIgSAfQgWgMgLgEIAAAqQAPAEALAFQALAGAHAGQAHAFADAJQAEAJAAALIAAABQAAALgEAKQgFAJgHAGQgHAHgLAFQgLAEgNABIAAAbgAAQA3QAJgCAFgEQAEgEAAgIIAAAAQAAgHgDgFQgFgEgKgFgAgWg7QgFAEAAAHIAAAAQABAIADADQAEAFALAEIAAglQgKACgEAEg");
	this.shape_31.setTransform(214.4,-56.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F3D2AC").s().p("AghCVQgQgCgNgHQgOgFgNgIQgMgJgLgLIAogwQASARARAIQASAJATAAQAJgBAJgCQAKgDAHgFQAGgGAEgIQADgHAAgLIAAAAQAAgJgEgJQgDgHgIgFQgHgFgJgDQgLgDgKAAQgNAAgNAEIgXAIIgngYIAIiVIC4AAIAAA7Ih+AAIgEA0QAVgGARAAQAWABATAFQATAGAOALQAPAMAIAQQAIATAAAZIAAABQAAAXgIAUQgIATgPANQgPAOgVAIQgVAGgZAAQgRAAgQgDg");
	this.shape_32.setTransform(287,-48.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F3D2AC").s().p("AgtCUQgVgGgPgLQgRgMgIgQQgJgQAAgTIAAgBQAAgOAEgLQACgLAHgJQAGgIAJgHQAJgHAMgEQgSgLgKgPQgFgIgCgKQgDgKgBgMIAAgBQAAgRAIgPQAHgPAPgLQAOgLATgHQAUgGAWAAQAXAAAUAGQATAGAPAMQANALAHAPQAIAPAAARIAAABQAAAMgCAKQgDAKgFAIQgJAPgTALIAUALQAJAHAHAIQAGAJADAKQADALAAANIAAABQABAUgKARQgHARgRALQgPAMgWAGQgUAFgZAAQgYAAgVgGgAgTAbQgKADgHAFQgHAEgDAHQgEAHgBAJIAAAAQAAAQAOALQAHAFAKADQAKADAKAAQALAAALgDQAJgDAGgFQAIgFADgHQADgHAAgIIAAAAQAAgJgDgHQgFgHgGgEQgHgFgKgDQgJgCgLAAQgKAAgJACgAgehYQgMAKAAAOIAAABQAAAQAMALQAMAKASAAQATAAAMgKQAMgKgBgQIAAgBQABgPgMgKQgFgFgJgDQgHgCgKAAQgSAAgMAKg");
	this.shape_33.setTransform(262.1,-48.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F3D2AC").s().p("AhuCYIAAg0IBkhSQAcgXALgOQAFgIAEgIQACgIAAgKQAAgSgLgLQgLgKgSAAQgPAAgOAKQgNAJgRAWIgvgmQALgQALgLQANgMAMgHQAOgIAPgEQAQgEASAAQAXAAAUAGQASAHAPAMQANANAIARQAHARAAAVIAAABQAAASgFAPQgFAPgJALQgKANgPAOIgjAcIgwAmICCAAIAAA5g");
	this.shape_34.setTransform(236.9,-49.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F3D2AC").s().p("AAUAfIAAgrIgUAbIAAAAIgTgbIAAArIgLAAIAAg9IANAAIARAeIATgeIALAAIAAA9g");
	this.shape_35.setTransform(195.9,-49.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F3D2AC").s().p("AgGAfIgGgBIgGgDIgEgFIgEgEIgDgGIgCgGIAAgGIAAgFIACgGIADgFIAEgGIAFgDIAFgEIAHgCIAFAAIAHAAIAGACIAFAEIAFADIAEAGIADAFIACAGIAAAFIAAAGIgCAGIgDAGIgEAEIgFAFIgFADIgHABIgGABIgGgBgAgHgTQgEACgDADQgDACgBAFIgCAHQAAAEACAEQABAEADADQADAEAEABQAEACADAAQAEAAAEgCQAEgBADgEQADgDABgDIACgJQAAgDgCgEQgBgEgDgDQgDgDgEgCQgEgCgEAAQgDAAgEACg");
	this.shape_36.setTransform(188.2,-49.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F3D2AC").s().p("AANAfIgNgWIgOAAIAAAWIgLAAIAAg9IAaAAIAKABQAFADADADQADACABADQABAEAAAEIgBAHIgDAEIgFADIgGADIARAYgAgOAAIAOAAIAFAAIAFgCIACgDIABgFIgBgEIgCgDIgEgDIgGAAIgOAAg");
	this.shape_37.setTransform(181.3,-49.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F3D2AC").s().p("AgWAfIAAg9IAtAAIAAAKIgiAAIAAARIAeAAIAAAIIgeAAIAAAag");
	this.shape_38.setTransform(175.1,-49.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F3D2AC").s().p("AgCAfIgHgBIgFgEIgFgDIgEgFIgDgFIgBgHIgBgGIABgFIABgGIADgGIAEgEIAFgFIAFgDIAHgBIAFgBIAHABIAGABQAEABAHAGIgHAIIgIgFQgGgCgEAAQgCAAgEACQgEABgCAEQgDACgCAEIgBAIQAAAFABADQACAFADACQACADAEADQAEABADAAIAIgBQAEgBADgDIAAgMIgQAAIAAgHIAbAAIAAAYQgHAFgEACIgHACIgIABIgFgBg");
	this.shape_39.setTransform(196.2,-59.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F3D2AC").s().p("AARAfIgggrIAAArIgLAAIAAg9IAKAAIAgAqIAAgqIALAAIAAA9g");
	this.shape_40.setTransform(189.2,-59.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F3D2AC").s().p("AgEAfIAAg9IAJAAIAAA9g");
	this.shape_41.setTransform(184.2,-59.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F3D2AC").s().p("AgEAfIAAgzIgUAAIAAgKIAxAAIAAAKIgTAAIAAAzg");
	this.shape_42.setTransform(179.9,-59.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F3D2AC").s().p("AANAfIgNgWIgOAAIAAAWIgLAAIAAg9IAaAAIAKABQAFACADAEQADACABADQABAEAAAEIgBAHIgDAEIgFADIgGADIARAYgAgOAAIAOAAIAFAAIAFgCIACgDIABgFIgBgEIgCgDIgEgDIgGAAIgOAAg");
	this.shape_43.setTransform(174,-59.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F3D2AC").s().p("AAVAfIgHgPIgbAAIgHAPIgLAAIAbg9IAIAAIAcA9gAALAGIgLgXIgKAXIAVAAg");
	this.shape_44.setTransform(167,-59.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F3D2AC").s().p("AgEAfIAAgzIgUAAIAAgKIAxAAIAAAKIgUAAIAAAzg");
	this.shape_45.setTransform(161.4,-59.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F3D2AC").s().p("AgEAfIgHgBIgGgEIgGgEIAHgIIAJAGIAFACIAEAAIAEAAIAEgCIACgDIABgDIgBgDIgCgDIgEgCIgGgCIgIgCIgHgCQgDgCgBgDQgBgDAAgEQAAgEABgEQACgEADgCQADgCADgCQAEgBAEAAIAGABIAGABIAKAGIgGAJIgIgGIgIgBIgDAAIgEACQgCACAAAEIAAADIADACIAEADIAGACIAJACIAGACIAEAFIABAHQAAAFgCADQgBAEgDACQgDACgFACQgEABgFAAIgFgBg");
	this.shape_46.setTransform(155.7,-59.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F3D2AC").s().p("AhBBXIAAitICCAAIAAAiIhcAAIAAAkIBQAAIAAAgIhQAAIAAAkIBdAAIAAAjg");
	this.shape_47.setTransform(389.1,-78);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F3D2AC").s().p("AgKBYQgJgCgIgDQgJgDgHgFQgHgEgGgGQgHgHgEgHQgFgHgDgIQgEgIgBgJIgCgTIAAAAIACgRQABgIAEgJQADgHAFgIQAFgHAGgHIANgLQAIgEAIgEQAJgEAJgBQAJgCAIAAQALAAAKABQAKACAIADQALAFASANIgYAdQgLgJgJgEQgLgEgOgBQgJABgJAEQgJAEgHAHQgHAIgEAKQgEAKAAAKIAAAAQAAALAEALQAEAKAHAIQAHAHAKAEQAKAEAJAAQALAAAJgDQAJgCAHgGIAAgYIgmAAIAAgfIBMAAIAABJQgUAPgMAFQgKAEgKACQgLACgMAAQgIAAgKgCg");
	this.shape_48.setTransform(370.4,-78);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F3D2AC").s().p("AA0BYIgQgoIhIAAIgQAoIgnAAIBLivIAhAAIBLCvgAAWAPIgWg3IgWA3IAsAAg");
	this.shape_49.setTransform(352,-78.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F3D2AC").s().p("AAhBXIg1hKIgUAUIAAA2IgmAAIAAitIAmAAIAABMIBFhMIAvAAIhIBLIBLBig");
	this.shape_50.setTransform(334.5,-78);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F3D2AC").s().p("AgIBYQgJgCgIgDQgJgDgHgFIgNgLIgLgOQgEgHgEgIQgDgIgCgJQgBgIAAgKIAAAAQAAgIABgJQACgIADgJQADgHAFgIQAFgHAGgHIANgLQAIgEAIgEQAIgEAJgBQAIgCAKAAQAMAAAKACQAKACAJADQALAFARAPIgZAcQgKgJgLgFQgLgFgNgBQgJABgJAEQgJAEgHAHQgHAIgDAKQgEAKAAAKIAAAAQAAAKAEALQADAJAHAJQAHAHAJAEQAJAFAJgBQALABAPgGQAJgFAMgKIAYAZQgHAIgHAEQgIAHgIADQgJAFgKACQgKACgNAAQgIAAgIgCg");
	this.shape_51.setTransform(315.4,-78);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F3D2AC").s().p("AA0BYIgQgoIhIAAIgQAoIgnAAIBLivIAhAAIBLCvgAAWAPIgWg3IgWA3IAsAAg");
	this.shape_52.setTransform(297.2,-78.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F3D2AC").s().p("AhEBXIAAitIBGAAQAPAAANAEQAMAEAJAJQAJAIAEALQAFALAAANIAAABQAAAHgCAHIgEALQgFALgKAIQgJAHgNAFQgNADgNAAIgdAAIAAA1gAgdAAIAdAAQAGAAAGAAQAGgCAEgDQAEgEACgFQACgEAAgHIAAAAQAAgGgCgFQgDgFgEgEQgEgDgFgBQgGgCgGgBIgdAAg");
	this.shape_53.setTransform(281.4,-78);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F3D2AC").s().p("AAtBXIhThtIAABtIgmAAIAAitIAjAAIBQBqIAAhqIAmAAIAACtg");
	this.shape_54.setTransform(255,-78);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#F3D2AC").s().p("AgSBYQgJgCgJgDQgIgDgIgFQgHgFgGgHQgHgFgEgIQgFgHgEgIQgDgIgCgJIgBgSIAAAAIABgRQACgIAEgJQADgHAFgIQAFgHAGgHIANgLIAQgIQAJgEAJgBQAKgCAIAAQAKAAAJACQAKABAIAEQAIAEAIAEQAHAFAGAGQAHAHAEAHQAFAHAEAIIAFARQABAIAAAJIAAAAQAAAJgBAIIgFARQgEAJgFAHIgLANIgOAMQgHAFgIADQgJADgJACQgKACgJAAQgJAAgJgCgAgUgxQgKAEgHAHQgHAIgDAKQgEAKAAAKIAAAAQAAAKAEALQAEAJAHAJQAHAHAJAEQAKAFAKgBQALAAAKgEQAJgEAIgHQAHgIADgKQAEgKAAgLIAAAAQAAgJgEgLQgEgJgHgIQgHgIgJgEQgKgEgLgBQgKABgKAEg");
	this.shape_55.setTransform(234.5,-78);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#F3D2AC").s().p("AgSBXIAAitIAlAAIAACtg");
	this.shape_56.setTransform(219.7,-78);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#F3D2AC").s().p("AgSBXIAAiJIg1AAIAAgkICPAAIAAAkIg1AAIAACJg");
	this.shape_57.setTransform(207.4,-78);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#F3D2AC").s().p("AA0BYIgQgoIhIAAIgQAoIgnAAIBLivIAhAAIBLCvgAAWAPIgWg3IgWA3IAsAAg");
	this.shape_58.setTransform(191.7,-78.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#F3D2AC").s().p("AgIBYQgJgCgIgDQgJgDgHgFIgNgLIgLgOQgEgHgEgIQgDgIgCgJQgBgIAAgKIAAAAQAAgIABgJQACgIADgJQADgHAFgIQAFgHAGgHIANgLQAIgEAIgEQAIgEAJgBQAIgCAKAAQAMAAAKACQAKACAJADQALAFARAPIgZAcQgKgJgLgFQgLgFgNgBQgJABgJAEQgJAEgHAHQgHAIgDAKQgEAKAAAKIAAAAQAAAKAEALQADAJAHAJQAHAHAJAEQAJAFAJgBQALABAPgGQAJgFAMgKIAYAZQgHAIgHAEQgIAHgIADQgJAFgKACQgKACgNAAQgIAAgIgCg");
	this.shape_59.setTransform(172.8,-78);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#F3D2AC").s().p("AA0BYIgQgoIhIAAIgQAoIgnAAIBLivIAhAAIBLCvgAAWAPIgWg3IgWA3IAsAAg");
	this.shape_60.setTransform(154.6,-78.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#F3D2AC").s().p("AgPBYIhHivIAqAAIAsB6IAuh6IApAAIhHCvg");
	this.shape_61.setTransform(137.9,-77.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#F3D2AC").s().p("AAeA0Ig4hIIAABIIgSAAIAAhnIARAAIA2BGIAAhGIASAAIAABng");
	this.shape_62.setTransform(302.3,-94.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#F3D2AC").s().p("AgKA0IgLgCIgJgGIgIgGIgHgIIgEgJIgDgLIgBgKIAAAAIABgKIADgJIAFgJQACgFAEgEIAIgHIAJgEIALgEQAGgBAEAAQAGAAAFABIALAEIAJAEIAIAHIAHAIIAEAKIADAJIABAKIAAAAIgBAKIgDALIgFAJQgCAEgEADIgIAHIgJAGIgLACQgGACgFAAQgFAAgFgCgAgNghQgGADgFAFQgFAFgCAHQgDAHAAAGIAAAAQAAAHADAHQACAGAFAGQAFAFAGADQAHACAGAAQAHAAAHgCQAGgDAFgFQAFgFACgHQADgHAAgHIAAAAQAAgGgDgHQgCgGgFgGQgFgFgGgDQgHgDgHAAQgGAAgHADg");
	this.shape_63.setTransform(289.7,-94.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#F3D2AC").s().p("AgIA0IAAhnIARAAIAABng");
	this.shape_64.setTransform(280.7,-94.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#F3D2AC").s().p("AgIA0IAAhWIghAAIAAgRIBTAAIAAARIghAAIAABWg");
	this.shape_65.setTransform(273.3,-94.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#F3D2AC").s().p("AAjA1IgLgaIgwAAIgKAaIgTAAIAuhoIAPAAIAuBogAARALIgRgoIgRAoIAiAAg");
	this.shape_66.setTransform(263.6,-94.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#F3D2AC").s().p("AAWA0IgYglIgXAAIAAAlIgSAAIAAhnIAtAAQAGAAALADQAIACAFAGQAEAEACAGQADAFAAAHIAAAAQAAAGgCAGIgFAHIgIAHIgKAEIAcAogAgZAAIAZAAIAJAAIAHgDQADgDABgEQACgCAAgFIAAAAQAAgEgCgEIgEgEQgDgDgEgBIgJgBIgZAAg");
	this.shape_67.setTransform(252.4,-94.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#F3D2AC").s().p("AgqA0IAAhnIAtAAQAJAAAHADQAHACAEAEQAEAEACAEQABAEAAAFIAAABIgBAIIgDAHQgEAFgHADIAJACIAGAFQADADACAFQABAEAAAFQAAAHgDAFQgCAGgFADQgFAFgIABQgHACgJAAgAgYAjIAdAAIAIgBQAEAAACgCQADgCABgDQACgCAAgEQAAgDgCgDQgBgCgDgDQgCgBgEgBIgKgBIgbAAgAgYgHIAYAAIAHgBIAGgCQADgCABgDQACgDAAgDIAAAAIgBgGIgEgEQgCgCgEgBIgIgBIgYAAg");
	this.shape_68.setTransform(241.3,-94.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#F3D2AC").s().p("AgmA0IAAhnIBMAAIAAAQIg5AAIAAAcIAyAAIAAAOIgyAAIAAAcIA6AAIAAARg");
	this.shape_69.setTransform(230.5,-94.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#F3D2AC").s().p("AgjA0IAAhnIASAAIAABWIA1AAIAAARg");
	this.shape_70.setTransform(220.8,-94.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#F3D2AC").s().p("AgmA0IAAhnIBMAAIAAAQIg5AAIAAAcIAyAAIAAAOIgyAAIAAAcIA6AAIAAARg");
	this.shape_71.setTransform(210.7,-94.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#F3D2AC").s().p("AgEA0IgKgCIgJgGIgIgGIgHgIIgEgJIgEgKIgBgLIAAAAIABgKIAEgJIAEgKIAHgIIAIgHIAJgEIAKgEQAEgBAFAAQAHAAAHABQAGABAFADQAGACALAJIgMAOQgHgGgGgEIgIgCIgJgBQgFAAgGADQgHADgFAFQgEAFgCAHQgEAHAAAGIAAAAQAAAHAEAHQACAGAEAGQAFAFAHADQAGACAFAAIAJgBIAIgCQAGgDAIgHIAMAMIgJAIIgJAGQgGACgGABQgGACgHAAQgFAAgEgCg");
	this.shape_72.setTransform(199.9,-94.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(126.5,-103.5,289.9,80.3);


(lib.disclaimer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgDAYIAAgTIgTgcIAKAAIAMAWIANgWIAKAAIgTAcIAAATg");
	this.shape.setTransform(90.3,5.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgPAYIAAgvIAIAAIAAAnIAXAAIAAAIg");
	this.shape_1.setTransform(86,5.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRAYIAAgvIARAAIAIABIAFADIAEAGIABAGIAAAFIgBACIgEAEIgGADIgHABIgJAAIAAAQgAgJAAIAJAAIAEAAIADAAIACgCIABgFIgBgDIgCgDIgDgCIgEAAIgJAAg");
	this.shape_2.setTransform(80.8,5.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgRAYIAAgvIARAAIAIABIAFADIAEAGIABAGIAAAFIgBACIgEAEIgGADIgHABIgJAAIAAAQgAgJAAIAJAAIAEAAIADAAIACgCIABgFIgBgDIgCgDIgDgCIgEAAIgJAAg");
	this.shape_3.setTransform(75.5,5.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAQAYIgFgMIgVAAIgFAMIgJAAIAWgvIAGAAIAVAvgAAIAFIgIgSIgHASIAPAAg");
	this.shape_4.setTransform(69.5,5.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgDAYIgFgBIgFgCIgEgEIAEgHIAIAFIAEABIACABIAEgBIADgBIABgBIABgDIAAgDIgCgCIgEgBIgEgBIgGgDIgGgBIgDgDIAAgHIAAgGIAEgDIAFgDIAGgCIAEAAIAFACIAIAEIgFAHIgHgEIgFgBIgDAAIgCABQAAABgBAAQAAABgBAAQAAABAAAAQAAABAAABIAAAAIABACIABACIAEACIAEACIAHACIAEAAIAEAFIABAFQgBADgBADQgBADgDACIgFADIgHABIgEgBg");
	this.shape_5.setTransform(61,5.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAOAYIgZghIAAAhIgJAAIAAgvIAIAAIAYAgIAAggIAJAAIAAAvg");
	this.shape_6.setTransform(55.4,5.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgEAZIgFgCIgEgCIgEgEIgDgDIgCgFIgCgEIAAgFIAAgDIACgGIACgDIADgFIAEgCIAEgDIAFgCIAEAAIAFAAIAFACIAEADIAEACIADAFIACADIACAGIAAADIAAAFIgCAEIgCAFIgDADIgEAEIgEACIgFACIgFAAIgEAAgAgFgPQgDACgCACQgDADgBACIgBAGQAAADABADQABAEADACIAFADIAFACQADAAADgCIAFgDQADgDABgDIABgGQAAgCgBgDQgBgDgDgDIgFgEQgDgBgDAAQgCAAgDABg");
	this.shape_7.setTransform(48.9,5.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgDAYIAAgvIAHAAIAAAvg");
	this.shape_8.setTransform(44.2,5.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgDAYIAAgnIgPAAIAAgIIAlAAIAAAIIgPAAIAAAng");
	this.shape_9.setTransform(40.1,5.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgBAZIgFgCIgEgCIgEgEIgDgDIgCgFIgBgEIgBgFIABgDIABgGIACgDIADgFIAEgCIAEgDIAFgCIADAAIAGAAIAGADQADAAAEAFIgFAGIgGgFIgDgBIgFAAQgCAAgCABQgDACgCACIgDAFIgCAGIACAGIADAGIAFADQACACACAAIAFgBIADgBQADgBAEgEIAFAGIgEAEIgEADIgGABIgGABIgDAAg");
	this.shape_10.setTransform(34.7,5.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgDAYIAAgvIAHAAIAAAvg");
	this.shape_11.setTransform(30.2,5.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAKAYIgKgRIgLAAIAAARIgIAAIAAgvIATAAIAJACQADAAADADIADAFIABAFIgBAGIgDACIgDAEIgFACIANASgAgLAAIALAAIAEAAIADgBIACgCIABgEIgBgDIgCgDIgDgCIgEAAIgLAAg");
	this.shape_12.setTransform(26.1,5.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgDAYIAAgnIgPAAIAAgIIAlAAIAAAIIgPAAIAAAng");
	this.shape_13.setTransform(20.4,5.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgCAYIgGgBIgFgCIgEgEIAEgHIAIAFIAEABIACABIAEgBIADgBIABgBIABgDIgBgDIgBgCIgDgBIgFgBIgGgDIgFgBIgEgDIgBgHIABgGIAEgDIAFgDIAGgCIAFAAIAEACIAIAEIgFAHIgGgEIgGgBIgCAAIgDABQAAABgBAAQAAABAAAAQgBABAAAAQAAABAAABIAAAAIAAACIACACIAEACIAEACIAGACIAGAAIADAFIAAAFQABADgCADQgBADgCACIgGADIgHABIgDgBg");
	this.shape_14.setTransform(15.3,5.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgRAYIAAgvIAiAAIAAAHIgZAAIAAAOIAWAAIAAAFIgWAAIAAANIAaAAIAAAIg");
	this.shape_15.setTransform(10.2,5.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAKAYIgKgRIgLAAIAAARIgIAAIAAgvIATAAIAJACQADAAADADIADAFIABAFIgBAGIgDACIgDAEIgFACIANASgAgLAAIALAAIAEAAIADgBIACgCIABgEIgBgDIgCgDIgDgCIgEAAIgLAAg");
	this.shape_16.setTransform(4.7,5.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,95.7,11);


(lib.dates_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.dates();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ctaout();

	this.instance_1 = new lib.ctaover();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AuwCLIAAkWIdhAAIAAEWg");
	this.shape.setTransform(94.5,14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,189,28);


(lib.burst_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.burst();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A30T2MAAAgnrMAvoAAAMAAAAnrg");
	this.shape.setTransform(133,86);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.5,-41,305,254);


(lib.headshot3animation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39).wait(24));

	// gradient
	this.instance = new lib.gradient();
	this.instance.setTransform(26.2,29.8,0.522,0.238,0,0,0,50.1,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},21,cjs.Ease.get(1)).to({_off:true},19).wait(23));

	// headshot-3
	this.instance_1 = new lib.headshot3_1();
	this.instance_1.setTransform(50,125,1,1,0,0,0,50,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(21).to({_off:true},19).wait(23));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,85,90);


(lib.headshot2animation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39).wait(21));

	// gradient
	this.instance = new lib.gradient();
	this.instance.setTransform(26.1,29.8,0.522,0.238,0,0,0,50,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:50.1,x:26.2,alpha:0},21,cjs.Ease.get(1)).to({_off:true},19).wait(20));

	// headshot-2
	this.instance_1 = new lib.headshot2_1();
	this.instance_1.setTransform(50,125,1,1,0,0,0,50,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(21).to({_off:true},19).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,85,90);


(lib.headshot1animation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39).wait(1));

	// gradient
	this.instance = new lib.gradient();
	this.instance.setTransform(27.1,29.8,0.541,0.238,0,0,0,50,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},21,cjs.Ease.get(1)).wait(19));

	// headshot-1
	this.instance_1 = new lib.headshot1_1();
	this.instance_1.setTransform(50,125,1,1,0,0,0,50,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,88,90);


(lib.groupPeopleAnimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_82 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(82).call(this.frame_82).wait(1));

	// gradient
	this.instance = new lib.gradient();
	this.instance.setTransform(223.7,29.8,4.474,0.238,0,0,0,50,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:4.47,alpha:0},39).wait(44));

	// groupPeople
	this.instance_1 = new lib.groupPeople();
	this.instance_1.setTransform(250.5,92,1,1,0,0,0,250.5,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:250.2,x:250.2,y:200},64,cjs.Ease.get(1)).wait(19));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-108,728,200);


(lib.clickThru = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.g_bkg_white("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


// stage content:



(lib._728x90_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var root = this;
		var cta = this.cta;
		
		stage.enableMouseOver();
		
		this.clickThru.cursor = "pointer";
		this.cta.cursor = "pointer";
		
		this.clickThru.addEventListener("click", clickThruClick);
		this.cta.addEventListener("click", ctaClick);
		
		function clickThruClick() {
			window.open(clickTag1, "_blank");
		}
		
		function ctaClick() {
			window.open(clickTag2, "_blank");
		}
	}
	this.frame_738 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(738).call(this.frame_738).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,2,0,1).p("Eg4ygG8MBxlAAAIAAN5MhxlAAAg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(739));

	// cta
	this.cta = new lib.cta();
	this.cta.setTransform(663.2,97.1,0.54,0.54,0,0,0,94.6,13.9);
	this.cta.alpha = 0;
	this.cta._off = true;
	new cjs.ButtonHelper(this.cta, 0, 1, 2, false, new lib.cta(), 3);

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(685).to({_off:false},0).to({regY:14,y:41.6,alpha:1},14,cjs.Ease.get(1)).wait(40));

	// clickThru
	this.clickThru = new lib.clickThru();
	this.clickThru.setTransform(0,0,2.427,0.36);
	new cjs.ButtonHelper(this.clickThru, 0, 1, 2, false, new lib.clickThru(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickThru).wait(739));

	// Layer 10
	this.instance = new lib.logo4();
	this.instance.setTransform(82.5,44,1,1,0,0,0,67.5,39);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(648).to({_off:false},0).to({alpha:1},17).wait(74));

	// blast
	this.instance_1 = new lib.burst_1();
	this.instance_1.setTransform(83.6,51.1,0.529,0.529,0,0,0,133,86);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(648).to({_off:false},0).to({alpha:1},17).wait(74));

	// text4c
	this.instance_2 = new lib.text4c();
	this.instance_2.setTransform(170,123,1,1,0,0,0,150,125);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(551).to({_off:false},0).to({x:150,alpha:1},23,cjs.Ease.get(1)).wait(56).to({alpha:0},18).to({_off:true},1).wait(90));

	// text4b
	this.instance_3 = new lib.text4b();
	this.instance_3.setTransform(170,123,1,1,0,0,0,150,125);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(545).to({_off:false},0).to({x:150,alpha:1},23,cjs.Ease.get(1)).wait(62).to({alpha:0},18).to({_off:true},1).wait(90));

	// text4a
	this.instance_4 = new lib.text4a();
	this.instance_4.setTransform(170,123,1,1,0,0,0,150,125);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(539).to({_off:false},0).to({x:150,alpha:1},23,cjs.Ease.get(1)).wait(68).to({alpha:0},18).to({_off:true},1).wait(90));

	// endFrame
	this.instance_5 = new lib.endFrame();
	this.instance_5.setTransform(150,152.8,1,1,0,0,0,112.3,39.9);
	this.instance_5.alpha = 0;
	this.instance_5.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,4);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(652).to({_off:false},0).to({alpha:1},17,cjs.Ease.get(1)).wait(70));

	// disclaimer
	this.instance_6 = new lib.disclaimer();
	this.instance_6.setTransform(652.2,57,1,1,0,0,0,37.2,5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(685).to({_off:false},0).to({alpha:1},14).wait(40));

	// logo-2
	this.instance_7 = new lib.logo2_2();
	this.instance_7.setTransform(564.5,82,1,1,0,0,0,24.5,25.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(659).to({_off:false},0).to({y:51,alpha:1},20,cjs.Ease.get(1)).wait(60));

	// logo-1
	this.instance_8 = new lib.logo1_1();
	this.instance_8.setTransform(523,80,1,1,0,0,0,44,32);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(652).to({_off:false},0).to({y:55.5,alpha:1},20,cjs.Ease.get(1)).wait(67));

	// headshot-3
	this.instance_9 = new lib.headshot3animation();
	this.instance_9.setTransform(930.4,0,1,1,0,0,0,294.9,0);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(456).to({_off:false},0).to({x:834.4,alpha:1},22,cjs.Ease.get(1)).wait(47).to({alpha:0},26).to({_off:true},1).wait(187));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_456 = new cjs.Graphics().p("EAt8AFqIAAozIUoAAIAAIzg");
	var mask_graphics_457 = new cjs.Graphics().p("EAtRAFqIAAozIUoAAIAAIzg");
	var mask_graphics_458 = new cjs.Graphics().p("EAsoAFqIAAozIUoAAIAAIzg");
	var mask_graphics_459 = new cjs.Graphics().p("EAsAAFqIAAozIUpAAIAAIzg");
	var mask_graphics_460 = new cjs.Graphics().p("EArbAFqIAAozIUpAAIAAIzg");
	var mask_graphics_461 = new cjs.Graphics().p("EAq4AFqIAAozIUpAAIAAIzg");
	var mask_graphics_462 = new cjs.Graphics().p("EAqXAFqIAAozIUpAAIAAIzg");
	var mask_graphics_463 = new cjs.Graphics().p("EAp4AFqIAAozIUpAAIAAIzg");
	var mask_graphics_464 = new cjs.Graphics().p("EApbAFqIAAozIUpAAIAAIzg");
	var mask_graphics_465 = new cjs.Graphics().p("EApAAFqIAAozIUpAAIAAIzg");
	var mask_graphics_466 = new cjs.Graphics().p("EAonAFqIAAozIUpAAIAAIzg");
	var mask_graphics_467 = new cjs.Graphics().p("EAoQAFqIAAozIUoAAIAAIzg");
	var mask_graphics_468 = new cjs.Graphics().p("EAn7AFqIAAozIUoAAIAAIzg");
	var mask_graphics_469 = new cjs.Graphics().p("EAnoAFqIAAozIUoAAIAAIzg");
	var mask_graphics_470 = new cjs.Graphics().p("EAnXAFqIAAozIUoAAIAAIzg");
	var mask_graphics_471 = new cjs.Graphics().p("EAnIAFqIAAozIUoAAIAAIzg");
	var mask_graphics_472 = new cjs.Graphics().p("EAm7AFqIAAozIUoAAIAAIzg");
	var mask_graphics_473 = new cjs.Graphics().p("EAmwAFqIAAozIUoAAIAAIzg");
	var mask_graphics_474 = new cjs.Graphics().p("EAmnAFqIAAozIUoAAIAAIzg");
	var mask_graphics_475 = new cjs.Graphics().p("EAmgAFqIAAozIUoAAIAAIzg");
	var mask_graphics_476 = new cjs.Graphics().p("EAmbAFqIAAozIUoAAIAAIzg");
	var mask_graphics_477 = new cjs.Graphics().p("EAmYAFqIAAozIUoAAIAAIzg");
	var mask_graphics_478 = new cjs.Graphics().p("EAmXAFqIAAozIUoAAIAAIzg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(456).to({graphics:mask_graphics_456,x:426.1,y:36.3}).wait(1).to({graphics:mask_graphics_457,x:421.8,y:36.3}).wait(1).to({graphics:mask_graphics_458,x:417.7,y:36.3}).wait(1).to({graphics:mask_graphics_459,x:413.7,y:36.3}).wait(1).to({graphics:mask_graphics_460,x:410,y:36.3}).wait(1).to({graphics:mask_graphics_461,x:406.5,y:36.3}).wait(1).to({graphics:mask_graphics_462,x:403.2,y:36.3}).wait(1).to({graphics:mask_graphics_463,x:400.1,y:36.3}).wait(1).to({graphics:mask_graphics_464,x:397.2,y:36.3}).wait(1).to({graphics:mask_graphics_465,x:394.5,y:36.3}).wait(1).to({graphics:mask_graphics_466,x:392,y:36.3}).wait(1).to({graphics:mask_graphics_467,x:389.7,y:36.3}).wait(1).to({graphics:mask_graphics_468,x:387.6,y:36.3}).wait(1).to({graphics:mask_graphics_469,x:385.7,y:36.3}).wait(1).to({graphics:mask_graphics_470,x:384,y:36.3}).wait(1).to({graphics:mask_graphics_471,x:382.5,y:36.3}).wait(1).to({graphics:mask_graphics_472,x:381.2,y:36.3}).wait(1).to({graphics:mask_graphics_473,x:380.1,y:36.3}).wait(1).to({graphics:mask_graphics_474,x:379.2,y:36.3}).wait(1).to({graphics:mask_graphics_475,x:378.5,y:36.3}).wait(1).to({graphics:mask_graphics_476,x:378,y:36.3}).wait(1).to({graphics:mask_graphics_477,x:377.7,y:36.3}).wait(1).to({graphics:mask_graphics_478,x:377.6,y:36.3}).wait(74).to({graphics:null,x:0,y:0}).wait(187));

	// name-3
	this.instance_10 = new lib.name3_1();
	this.instance_10.setTransform(666.9,42.5,1,1,0,0,0,37.5,13.5);
	this.instance_10._off = true;

	this.instance_10.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(456).to({_off:false},0).wait(69).to({alpha:0},26).to({_off:true},1).wait(187));

	// headshot-2
	this.instance_11 = new lib.headshot2animation();
	this.instance_11.setTransform(858,0,1,1,0,0,0,307.5,0);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(421).to({_off:false},0).to({x:762,alpha:1},22,cjs.Ease.get(1)).wait(82).to({alpha:0},26).to({_off:true},1).wait(187));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_421 = new cjs.Graphics().p("EAnTAFqIAAozIUoAAIAAIzg");
	var mask_1_graphics_422 = new cjs.Graphics().p("EAmoAFqIAAozIUpAAIAAIzg");
	var mask_1_graphics_423 = new cjs.Graphics().p("EAl/AFqIAAozIUpAAIAAIzg");
	var mask_1_graphics_424 = new cjs.Graphics().p("EAlZAFqIAAozIUoAAIAAIzg");
	var mask_1_graphics_425 = new cjs.Graphics().p("EAk0AFqIAAozIUpAAIAAIzg");
	var mask_1_graphics_426 = new cjs.Graphics().p("EAkRAFqIAAozIUpAAIAAIzg");
	var mask_1_graphics_427 = new cjs.Graphics().p("EAjxAFqIAAozIUoAAIAAIzg");
	var mask_1_graphics_428 = new cjs.Graphics().p("EAjSAFqIAAozIUoAAIAAIzg");
	var mask_1_graphics_429 = new cjs.Graphics().p("EAi1AFqIAAozIUpAAIAAIzg");
	var mask_1_graphics_430 = new cjs.Graphics().p("EAiaAFqIAAozIUpAAIAAIzg");
	var mask_1_graphics_431 = new cjs.Graphics().p("EAiCAFqIAAozIUoAAIAAIzg");
	var mask_1_graphics_432 = new cjs.Graphics().p("EAhrAFqIAAozIUoAAIAAIzg");
	var mask_1_graphics_433 = new cjs.Graphics().p("EAhWAFqIAAozIUoAAIAAIzg");
	var mask_1_graphics_434 = new cjs.Graphics().p("EAhDAFqIAAozIUpAAIAAIzg");
	var mask_1_graphics_435 = new cjs.Graphics().p("EAgyAFqIAAozIUpAAIAAIzg");
	var mask_1_graphics_436 = new cjs.Graphics().p("EAgjAFqIAAozIUpAAIAAIzg");
	var mask_1_graphics_437 = new cjs.Graphics().p("EAgWAFqIAAozIUpAAIAAIzg");
	var mask_1_graphics_438 = new cjs.Graphics().p("EAgMAFqIAAozIUoAAIAAIzg");
	var mask_1_graphics_439 = new cjs.Graphics().p("EAgDAFqIAAozIUoAAIAAIzg");
	var mask_1_graphics_440 = new cjs.Graphics().p("Af8FqIAAozIUoAAIAAIzg");
	var mask_1_graphics_441 = new cjs.Graphics().p("Af3FqIAAozIUoAAIAAIzg");
	var mask_1_graphics_442 = new cjs.Graphics().p("Af0FqIAAozIUoAAIAAIzg");
	var mask_1_graphics_443 = new cjs.Graphics().p("AfzFqIAAozIUoAAIAAIzg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(421).to({graphics:mask_1_graphics_421,x:383.6,y:36.3}).wait(1).to({graphics:mask_1_graphics_422,x:379.3,y:36.3}).wait(1).to({graphics:mask_1_graphics_423,x:375.2,y:36.3}).wait(1).to({graphics:mask_1_graphics_424,x:371.4,y:36.3}).wait(1).to({graphics:mask_1_graphics_425,x:367.7,y:36.3}).wait(1).to({graphics:mask_1_graphics_426,x:364.2,y:36.3}).wait(1).to({graphics:mask_1_graphics_427,x:361,y:36.3}).wait(1).to({graphics:mask_1_graphics_428,x:357.9,y:36.3}).wait(1).to({graphics:mask_1_graphics_429,x:355,y:36.3}).wait(1).to({graphics:mask_1_graphics_430,x:352.3,y:36.3}).wait(1).to({graphics:mask_1_graphics_431,x:349.9,y:36.3}).wait(1).to({graphics:mask_1_graphics_432,x:347.6,y:36.3}).wait(1).to({graphics:mask_1_graphics_433,x:345.5,y:36.3}).wait(1).to({graphics:mask_1_graphics_434,x:343.6,y:36.3}).wait(1).to({graphics:mask_1_graphics_435,x:341.9,y:36.3}).wait(1).to({graphics:mask_1_graphics_436,x:340.4,y:36.3}).wait(1).to({graphics:mask_1_graphics_437,x:339.1,y:36.3}).wait(1).to({graphics:mask_1_graphics_438,x:338.1,y:36.3}).wait(1).to({graphics:mask_1_graphics_439,x:337.2,y:36.3}).wait(1).to({graphics:mask_1_graphics_440,x:336.5,y:36.3}).wait(1).to({graphics:mask_1_graphics_441,x:336,y:36.3}).wait(1).to({graphics:mask_1_graphics_442,x:335.7,y:36.3}).wait(1).to({graphics:mask_1_graphics_443,x:335.6,y:36.3}).wait(109).to({graphics:null,x:0,y:0}).wait(187));

	// name-2
	this.instance_12 = new lib.name2_1();
	this.instance_12.setTransform(581.9,42.5,1,1,0,0,0,37.5,13.5);
	this.instance_12._off = true;

	this.instance_12.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(421).to({_off:false},0).wait(104).to({alpha:0},26).to({_off:true},1).wait(187));

	// headshot-1
	this.instance_13 = new lib.headshot1animation();
	this.instance_13.setTransform(476.2,-0.2,1,1,0,0,0,0.7,-0.2);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(388).to({_off:false},0).to({x:367.2,alpha:1},20,cjs.Ease.get(1)).wait(117).to({alpha:0},26).to({_off:true},1).wait(187));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_388 = new cjs.Graphics().p("EAhtAFqIAAozIUpAAIAAIzg");
	var mask_2_graphics_389 = new cjs.Graphics().p("EAg4AFqIAAozIUpAAIAAIzg");
	var mask_2_graphics_390 = new cjs.Graphics().p("EAgGAFqIAAozIUoAAIAAIzg");
	var mask_2_graphics_391 = new cjs.Graphics().p("AfWFqIAAozIUpAAIAAIzg");
	var mask_2_graphics_392 = new cjs.Graphics().p("AepFqIAAozIUpAAIAAIzg");
	var mask_2_graphics_393 = new cjs.Graphics().p("Ad/FqIAAozIUoAAIAAIzg");
	var mask_2_graphics_394 = new cjs.Graphics().p("AdXFqIAAozIUpAAIAAIzg");
	var mask_2_graphics_395 = new cjs.Graphics().p("AczFqIAAozIUoAAIAAIzg");
	var mask_2_graphics_396 = new cjs.Graphics().p("AcQFqIAAozIUpAAIAAIzg");
	var mask_2_graphics_397 = new cjs.Graphics().p("AbxFqIAAozIUpAAIAAIzg");
	var mask_2_graphics_398 = new cjs.Graphics().p("AbVFqIAAozIUoAAIAAIzg");
	var mask_2_graphics_399 = new cjs.Graphics().p("Aa7FqIAAozIUoAAIAAIzg");
	var mask_2_graphics_400 = new cjs.Graphics().p("AajFqIAAozIUpAAIAAIzg");
	var mask_2_graphics_401 = new cjs.Graphics().p("AaPFqIAAozIUpAAIAAIzg");
	var mask_2_graphics_402 = new cjs.Graphics().p("AZ9FqIAAozIUpAAIAAIzg");
	var mask_2_graphics_403 = new cjs.Graphics().p("AZuFqIAAozIUpAAIAAIzg");
	var mask_2_graphics_404 = new cjs.Graphics().p("AZiFqIAAozIUpAAIAAIzg");
	var mask_2_graphics_405 = new cjs.Graphics().p("AZZFqIAAozIUoAAIAAIzg");
	var mask_2_graphics_406 = new cjs.Graphics().p("AZSFqIAAozIUoAAIAAIzg");
	var mask_2_graphics_407 = new cjs.Graphics().p("AZOFqIAAozIUoAAIAAIzg");
	var mask_2_graphics_408 = new cjs.Graphics().p("AZMFqIAAozIUpAAIAAIzg");
	var mask_2_graphics_429 = new cjs.Graphics().p("AZMFqIAAozIUpAAIAAIzg");
	var mask_2_graphics_430 = new cjs.Graphics().p("AYkFqIAAozIUpAAIAAIzg");
	var mask_2_graphics_431 = new cjs.Graphics().p("AYAFqIAAozIUoAAIAAIzg");
	var mask_2_graphics_432 = new cjs.Graphics().p("AXfFqIAAozIUoAAIAAIzg");
	var mask_2_graphics_433 = new cjs.Graphics().p("AXBFqIAAozIUpAAIAAIzg");
	var mask_2_graphics_434 = new cjs.Graphics().p("AWnFqIAAozIUpAAIAAIzg");
	var mask_2_graphics_435 = new cjs.Graphics().p("AWRFqIAAozIUoAAIAAIzg");
	var mask_2_graphics_436 = new cjs.Graphics().p("AV+FqIAAozIUoAAIAAIzg");
	var mask_2_graphics_437 = new cjs.Graphics().p("AVuFqIAAozIUpAAIAAIzg");
	var mask_2_graphics_438 = new cjs.Graphics().p("AViFqIAAozIUoAAIAAIzg");
	var mask_2_graphics_439 = new cjs.Graphics().p("AVZFqIAAozIUpAAIAAIzg");
	var mask_2_graphics_440 = new cjs.Graphics().p("AVUFqIAAozIUoAAIAAIzg");
	var mask_2_graphics_441 = new cjs.Graphics().p("AVSFqIAAozIUpAAIAAIzg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(388).to({graphics:mask_2_graphics_388,x:347.8,y:36.3}).wait(1).to({graphics:mask_2_graphics_389,x:342.5,y:36.3}).wait(1).to({graphics:mask_2_graphics_390,x:337.5,y:36.3}).wait(1).to({graphics:mask_2_graphics_391,x:332.7,y:36.3}).wait(1).to({graphics:mask_2_graphics_392,x:328.2,y:36.3}).wait(1).to({graphics:mask_2_graphics_393,x:324,y:36.3}).wait(1).to({graphics:mask_2_graphics_394,x:320,y:36.3}).wait(1).to({graphics:mask_2_graphics_395,x:316.4,y:36.3}).wait(1).to({graphics:mask_2_graphics_396,x:312.9,y:36.3}).wait(1).to({graphics:mask_2_graphics_397,x:309.8,y:36.3}).wait(1).to({graphics:mask_2_graphics_398,x:307,y:36.3}).wait(1).to({graphics:mask_2_graphics_399,x:304.4,y:36.3}).wait(1).to({graphics:mask_2_graphics_400,x:302,y:36.3}).wait(1).to({graphics:mask_2_graphics_401,x:300,y:36.3}).wait(1).to({graphics:mask_2_graphics_402,x:298.2,y:36.3}).wait(1).to({graphics:mask_2_graphics_403,x:296.7,y:36.3}).wait(1).to({graphics:mask_2_graphics_404,x:295.5,y:36.3}).wait(1).to({graphics:mask_2_graphics_405,x:294.6,y:36.3}).wait(1).to({graphics:mask_2_graphics_406,x:293.9,y:36.3}).wait(1).to({graphics:mask_2_graphics_407,x:293.5,y:36.3}).wait(1).to({graphics:mask_2_graphics_408,x:293.3,y:36.3}).wait(21).to({graphics:mask_2_graphics_429,x:293.3,y:36.3}).wait(1).to({graphics:mask_2_graphics_430,x:289.3,y:36.3}).wait(1).to({graphics:mask_2_graphics_431,x:285.7,y:36.3}).wait(1).to({graphics:mask_2_graphics_432,x:282.4,y:36.3}).wait(1).to({graphics:mask_2_graphics_433,x:279.4,y:36.3}).wait(1).to({graphics:mask_2_graphics_434,x:276.8,y:36.3}).wait(1).to({graphics:mask_2_graphics_435,x:274.6,y:36.3}).wait(1).to({graphics:mask_2_graphics_436,x:272.7,y:36.3}).wait(1).to({graphics:mask_2_graphics_437,x:271.1,y:36.3}).wait(1).to({graphics:mask_2_graphics_438,x:269.9,y:36.3}).wait(1).to({graphics:mask_2_graphics_439,x:269,y:36.3}).wait(1).to({graphics:mask_2_graphics_440,x:268.5,y:36.3}).wait(1).to({graphics:mask_2_graphics_441,x:268.3,y:36.3}).wait(111).to({graphics:null,x:0,y:0}).wait(187));

	// name-1
	this.instance_14 = new lib.name1_1();
	this.instance_14.setTransform(510.6,42.5,1,1,0,0,0,51.5,13.5);
	this.instance_14._off = true;

	this.instance_14.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(388).to({_off:false},0).wait(137).to({alpha:0},26).to({_off:true},1).wait(187));

	// text3c
	this.instance_15 = new lib.text3c();
	this.instance_15.setTransform(200,125,1,1,0,0,0,150,125);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(349).to({_off:false},0).to({x:150,alpha:1},25,cjs.Ease.get(1)).wait(151).to({alpha:0},26).to({_off:true},1).wait(187));

	// text3b
	this.instance_16 = new lib.text3b();
	this.instance_16.setTransform(200,125,1,1,0,0,0,150,125);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(341).to({_off:false},0).to({x:150},26,cjs.Ease.get(1)).wait(158).to({alpha:0},26).to({_off:true},1).wait(187));

	// text3a
	this.instance_17 = new lib.text3a();
	this.instance_17.setTransform(200,125,1,1,0,0,0,150,125);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(333).to({_off:false},0).to({x:150,alpha:1},26,cjs.Ease.get(1)).wait(166).to({alpha:0},26).to({_off:true},1).wait(187));

	// mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_231 = new cjs.Graphics().p("Eg43AHCIAAuDMBxvAAAIAAODg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(231).to({graphics:mask_3_graphics_231,x:364,y:45}).wait(112).to({graphics:null,x:0,y:0}).wait(396));

	// group-people-animation
	this.instance_18 = new lib.groupPeopleAnimation();
	this.instance_18.setTransform(93.5,-5,1,1,0,0,0,93.5,-5);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.instance_18.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(231).to({_off:false},0).to({alpha:1},18).wait(62).to({alpha:0},31).to({_off:true},1).wait(396));

	// text-2a
	this.instance_19 = new lib.text2a();
	this.instance_19.setTransform(200,125,1,1,0,0,0,150,125);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(128).to({_off:false},0).to({x:150,alpha:1},22,cjs.Ease.get(1)).wait(99).to({_off:true},1).wait(489));

	// dates
	this.instance_20 = new lib.dates_1();
	this.instance_20.setTransform(364,45,1,1,0,0,0,364,45);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(30).to({_off:false},0).to({alpha:1},15).wait(50).to({alpha:0},41,cjs.Ease.get(-1)).to({_off:true},1).wait(602));

	// text-1
	this.instance_21 = new lib.text1_1();
	this.instance_21.setTransform(366.2,78.9,0.444,0.444,0,0,0,149.2,125.8);
	this.instance_21.alpha = 0;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(11).to({_off:false},0).to({regX:149.9,regY:125.7,scaleX:1,scaleY:1,x:391.9,y:133.7,alpha:1},15,cjs.Ease.get(1)).wait(69).to({alpha:0},41,cjs.Ease.get(-1)).to({_off:true},1).wait(602));

	// burst
	this.instance_22 = new lib.burst_1();
	this.instance_22.setTransform(351.3,44.8,0.183,0.183,0,0,0,130.1,69.5);
	this.instance_22.alpha = 0;
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(4).to({_off:false},0).to({regX:132.6,regY:69.3,scaleX:1,scaleY:1,x:353.1,y:46,alpha:1},13,cjs.Ease.get(-1)).wait(78).to({alpha:0},41,cjs.Ease.get(-1)).to({_off:true},1).wait(602));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_1.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(739));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(363.5,44.5,729,91);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;