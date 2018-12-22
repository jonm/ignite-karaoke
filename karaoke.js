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

var local_images = [
    "./imgs/contortionist.jpg",
    "./imgs/stormtroopers.jpg",
    "./imgs/possum.jpg",
    "./imgs/biceps.jpg",
    "./imgs/skeleton.jpg",
    "./imgs/giraffe.jpg",
    "./imgs/pirate-mice.jpg",
    "./imgs/spout.jpg",
    "./imgs/bubblehead.jpg",
    "./imgs/calisthenics.jpg"
];

function pick5() {
    var num_images = local_images.length;
    var indices = [];
    var urls = [];
    for(var i=0; i<5; i++) {
        var idx = Math.floor(Math.random() * num_images);
        while(indices.includes(idx) || idx >= num_images) {
            idx = Math.floor(Math.random() * num_images);
        };
        indices.push(idx);
    }
    for(var j=0; j<5; j++) {
        urls.push(local_images[indices[j]]);
    }
    return urls;
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
        "  <p><a class='btn btn-lg btn-success' href='#' role='button' onClick='launchIgnite();'>Go!</a></p>" +
        "</div></div>");
};

function showSlide(urls) {
    if (urls.length == 0) {
        location.reload();
        return;
    }
    var url = urls.pop();
    $("#content").html("<div class='slide'><img src='" + url + "'/></div>");
    var imgWidth = $(".slide img").width();
    var imgHeight = $(".slide img").height();
    var slideWidth = $(".slide").width();
    var slideHeight = $(".slide").height();
    if (imgHeight >= imgWidth) {
        $(".slide img").addClass("portrait");
        $(".slide img").height(slideHeight);
    } else {
        $(".slide img").addClass("landscape");
        $(".slide img").width(slideWidth);
    }

    setTimeout(function() { showSlide(urls); }, 2000);
}

function launchIgnite() {
    showSlide(pick5());
}

showSplash();

