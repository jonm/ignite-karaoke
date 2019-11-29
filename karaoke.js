/* Copyright (C) 2018-2019 Jon Moore
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

var slides_per_show = 5;
var secs_per_slide = 5;

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
        "  <p class='lead'>An <a href=\"http://www.ignitetalks.io/\">Ignite "+
        "    talk</a> is a 5-minute talk format "+
        "    consisting of 20 slides that <em>auto-advance</em> every "+
        "    15 seconds. Can you give a one minute talk <b>to 5 "+
        "    slides you haven't seen before?</b>" +
        "  </p>" +
        "  <p><a class='btn btn-lg btn-success' href='#' role='button' onClick='launchIgnite();'>Go!</a></p>" +
        "</div></div>" +
        "<div class='ignitelogo'></div>");
};

function showSlide(urls) {
    if (urls.length == 0) {
        showSplash();
        return;
    }
    var url = urls.pop();
    $("#content").html("<div class='slide'><img src='" + url + "'/></div>");
    var imgWidth = $(".slide img").width();
    var imgHeight = $(".slide img").height();
    var slideWidth = $(window).width();
    var slideHeight = $(window).height();
    if (imgHeight >= imgWidth) {
        if (slideHeight / imgHeight * imgWidth >= slideWidth) {
            $(".slide img").addClass("landscape");
            $(".slide img").width(slideWidth);
        } else {
            $(".slide img").addClass("portrait");
            $(".slide img").height(slideHeight);
        }
    } else {
        if (slideWidth / imgWidth * imgHeight >= slideHeight) {
            $(".slide img").addClass("portrait");
            $(".slide img").height(slideHeight);
        } else {
            $(".slide img").addClass("landscape");
            $(".slide img").width(slideWidth);
        }
    }

    setTimeout(function() { showSlide(urls); }, secs_per_slide * 1000);
}

var shuffled = [];

function launchIgnite() {
    if (shuffled.length < slides_per_show) {
        shuffled = shuffle(local_images);
    }
    var slides = [];
    for(var i=0; i<slides_per_show; i++) {
        slides.push(shuffled.pop());
    }
    showSlide(slides);
}

function brokenImage(elt) {
    console.log("Pruning " + elt.src);
    local_images = local_images.filter(function (value, index, arr) {
        return value != elt.src;
    });
}

function preloadImage(url) {
    $("#image_preload").append("<img src=\"" + url + "\"/ onError=\"brokenImage(this);\">");
}

function checkImages() {
    for(var i=0; i<local_images.length; i++) {
        preloadImage(local_images[i]);
    }
}

checkImages();
showSplash();

