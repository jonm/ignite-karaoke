/* Copyright (C) 2018 Jon Moore
 * 
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use, copy,
 * modify, merge, publish, distribute, sublicense, and/or sell copies
 * of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
 * BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

var keys_to_begin = [13, 27, 33, 34]; // Keys: Keyboard Return, Clicker Play, Clicker Left, Clicker Right
var topics = ['random', 'jayz', 'cats'];
var slides = [];
var slides_per_show = 5;
var secs_per_slide = 15;

var local_images = window["jayz_images"];


function setKeyDownEvent() {
	document.onkeydown = function(e) {
		if( keys_to_begin.includes(e.keyCode) && slides.length == 0 ) {
			launchIgnite();
		}
	}
};

function shuffle(a) {
    /* see https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm */
    var out = a.slice(), i, j, tmp;
    for(i = a.length - 1; i>=1; i--) {
        j = Math.floor(Math.random() * (i+1));
        tmp = out[i];
        out[i] = out[j];
        out[j] = tmp;
    }
    return out;
}

function showSplash() {
    $("#content").html("<div class='container'>" +
        "<div class='jumbotron'>" +
        "  <h1>Ignite Karaoke</h1>" +
        "  <p class='lead'>An Ignite talk is a 5-minute talk format "+
        "    consisting of 20 slides that <em>auto-advance</em> every "+
        "    15 seconds. Can you give a 5-slide Ignite talk <b>when you "+
        "    haven't seen the slides before?</b>" +
        "  </p>" +
        "  <p><a class='btn btn-lg btn-success' href='#' role='button' onClick='launchIgnite(\"random\");'>Go!</a></p>" +
        "  <p><a class='btn btn-lg btn-success' href='#' role='button' onClick='launchIgnite(\"jayz\");'>Jay-Z</a></p>" +
        "  <p><a class='btn btn-lg btn-success' href='#' role='button' onClick='launchIgnite(\"cats\");'>Cats!</a></p>" +
        "  <p><a class='btn btn-lg btn-success' href='#' role='button' onClick='launchIgnite(\"baseball\");'>Baseball!</a></p>" +
        "</div></div>" +
        "<div class='ignitelogo'></div>");
};

function showSlide(urls) {
    if (urls.length == 0) {
        showSplash();
        return;
    }
    var url = urls.pop();
    $("#content").html("<div class='slide'><img src='" + url + "'/></div>" +
		"<div class='ignitelogo'></div>");
    var imgWidth = $(".slide img").width();
    var imgHeight = $(".slide img").height();
    var slideWidth = $(window).width();
    var slideHeight = $(window).height();
    if (imgHeight >= imgWidth) {
        $(".slide img").addClass("portrait");
        $(".slide img").height(slideHeight);
    } else {
        $(".slide img").addClass("landscape");
        $(".slide img").width(slideWidth);
    }

    setTimeout(function() { showSlide(urls); }, secs_per_slide * 1000);
}

var shuffled = [];

function launchIgnite(theme) {
    if (shuffled.length < slides_per_show) {
        shuffled = shuffle(window[theme + "_images"]);
    }
    for(var i=0; i<slides_per_show; i++) {
        slides.push(shuffled.pop());
    }
    showSlide(slides);
}

showSplash();
setKeyDownEvent();
