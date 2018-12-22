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

var slides_per_show = 5;
var secs_per_slide = 15;
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
    "./imgs/calisthenics.jpg",
    "https://i.ytimg.com/vi/daoTiDaCLg8/maxresdefault.jpg",
    "https://static1.squarespace.com/static/57b31fb45016e16882ac0fc9/57d932fff7e0ab1129481fe3/5b92b7dd0ebbe83ee1a1c97e/1540902265645/TonyMarrese.jpg?format=2500w",
    "https://pbs.twimg.com/profile_images/821849411991044096/lQFa_Vly_400x400.jpg",
    "https://imgnooz.com/sites/default/files/wallpaper/animals/55900/funny-dog-wallpapers-55900-4496266.jpg",
    "https://www.nationalgeographic.com/content/dam/animals/2018/09/comedy-wildlife-awards-photos/comedy-wildlife-awards-squirel-stop.ngsversion.1537203605960.adapt.1900.1.jpg",
    "https://kids.nationalgeographic.com/content/dam/kids/photos/articles/Other%20Explore%20Photos/R-Z/Wacky%20Weekend/Funny%20Animal%20Faces/ww-funny-animal-faces-goat.adapt.945.1.jpg",
    "https://worldwideinterweb.com/wp-content/uploads/2017/10/most-ridiculous-photo-ever-taken.jpg",
    "https://hairstyleonpoint.com/wp-content/uploads/2017/03/horse-hair-ridiculous-haircuts.jpg",
    "https://worldwideinterweb.com/wp-content/uploads/2017/10/ridiculous-photo-ever.jpg",
    "https://rabbitroom.com/wp-content/uploads/2018/02/3044182-poster-p-1-ridiculous-by-design-where-designs-craziest-inventor-gets-his-ideas.gif.jpeg",
    "https://assets.classicfm.com/2013/33/king-chicken-opera-1377248295.jpeg",
    "https://bobcat.grahamdigital.com/83b806ce781a4c14f92a666000ecacf2f2fd99cd/crop-640x360-000.jpg",
    "http://games.snimai.com/images/photos/top-10-most-ridiculous-and-dummy-photos-of-animals/thumbs/top-10-most-ridiculous-and-dummy-photos-of-animals-2.jpg",
    "http://visionad.artefactdesign.com/wp-content/uploads/2017/07/The-Good-the-Bad-and-the-Ridiculous-Stock-Photos.jpg",
    "https://yumnatarian.files.wordpress.com/2014/03/ridiculous-fashion-balloon.jpg",
    "http://www.comediva.com/wp-content/uploads/2014/12/15-Ridiculous-Skymall-Products-What-on-Earth-Beard-Hat.png",
    "https://www.dailydot.com/wp-content/uploads/2016/10/funny-ridiculous-halloween-costumes-centaur-280x400.png",
    "https://i.ytimg.com/vi/aGSlt0CnFr4/hqdefault.jpg",
    "https://66.media.tumblr.com/504abb90a59f169000fa21615c725f87/tumblr_inline_mfo94hDH2A1qiv1zz.jpg",
    "https://i.pinimg.com/originals/0d/04/7a/0d047a0904ac5d7835b1899fd1bfa1e8.jpg",
    "https://static.boredpanda.com/blog/wp-content/uploads/2018/03/ugly-medieval-cats-art-115-5aafbd8c8ffe9__700.jpg",
    "https://waitbutwhy.com/wp-content/uploads/2013/07/FEATURE-2.png",
    "https://memegenerator.net/img/images/2729805/willy-wonka.jpg",
    "https://memegenerator.net/img/images/2485/the-most-interesting-man-in-the-world.jpg",
    "https://memegenerator.net/img/images/84688/futurama-fry.jpg",
    "https://memegenerator.net/img/images/1031/success-kid.jpg",
    "https://memegenerator.net/img/images/6541210/grumpy-cat.jpg",
    "https://memegenerator.net/img/images/42/joseph-ducreux.jpg",
    "https://memegenerator.net/img/images/1232401/disaster-girl.jpg",
    "https://memegenerator.net/img/images/2475876/koala-cant-believe-it.jpg",
    "https://memegenerator.net/img/images/4290013/sudden-realization-ralph.jpg",
    "https://memegenerator.net/img/images/627067/ancient-aliens.jpg",
    "https://memegenerator.net/img/images/1119726/chemistry-cat.jpg",
    "https://memegenerator.net/img/images/2606719/1889-10-guy.jpg",
    "https://memegenerator.net/img/images/6881887/evil-toddler-kid2.jpg",
    "https://memegenerator.net/img/images/1236/angry-arnold.jpg",
    "https://cdn-images-1.medium.com/max/2000/1*kZ5haMH3Au_Y9xoSZScZjw.png",
    "https://bfmbrainfall.files.wordpress.com/2016/04/how_silly_are_you_pomelo_cat.jpg?w=376",
    "https://www.awesomeinventions.com/wp-content/uploads/2018/04/photoshop-man-riding-chicken-silly-things-bored-people-do.jpg",
    "https://ministryofhappiness.files.wordpress.com/2014/06/19.jpg",
    "https://i.imgur.com/EbJMP.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO2qc0lmuwkmxap4AOCsjSJwg4EQKA1mFfvxlgPWVax18RR8Db",
    "http://www.mykidsite.com/wp-content/uploads/2013/03/Silly-Baby.jpg",
    "https://si.wsj.net/public/resources/images/BN-QC226_bonds1_H_20161003175622.jpg",
    "https://www.maxpixel.net/static/photo/1x/Love-Frog-Animal-Nature-Heart-Sculpture-Silly-3363217.jpg",
    "https://sadanduseless.b-cdn.net/wp-content/uploads/2014/10/silly-dog-hat1.jpg",
    "https://cdn0.wideopencountry.com/wp-content/uploads/2015/09/cow1-FEATURED-793x516.jpg",
    "https://memestatic.fjcdn.com/pictures/Silly+animal+pictures_6bbd26_6229985.jpg",
    "https://static.jeffbullas.com/wp-content/uploads/2015/04/How-to-Grow-an-Email-List-3-Case-Studies-on-How-Silly-Online-Quizzes-Produce-Serious-Business-Leads1.jpg",
    "https://www.thoughtco.com/thmb/jOkozEy57aMiecuw3dPrPALFQPQ=/798x734/filters:no_upscale():max_bytes(150000):strip_icc()/norman-58b8aa3b5f9b58af5c51f5ee.jpg",
    "https://i.ytimg.com/vi/GHhFtkGfaWU/hqdefault.jpg",
    "https://i.pinimg.com/originals/85/03/0d/85030dacda1b1f91b92ff77056b17648.jpg",
    "https://www.thoughtco.com/thmb/NVdH2OxJFm83YXLAF0WS_FEaMxA=/767x640/filters:no_upscale():max_bytes(150000):strip_icc()/roughday-58b8aa1c5f9b58af5c51c9b0.png",
    "http://www.dumpaday.com/wp-content/uploads/2013/01/funny-pretty-animals.jpg",
    "https://vignette.wikia.nocookie.net/animaljam/images/3/30/Omg-funny-animals-dog-1.jpg/revision/latest?cb=20140719215428",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFLLegjy_vW6CooP-6wHiXAaKXGQOmFEchgI4CeRyki60NInb4Tg",
    "http://cdn.icepop.com/wp-content/uploads/2018/02/pawsome-topix-com-7-Funny-animals.jpg",
    "https://amazinganimalphotos.com/wp-content/uploads/2014/11/artist-animals-funny-memes.jpg",
    "https://2.bp.blogspot.com/-Oz9tTxpw6Qk/WqLPVFXfLfI/AAAAAAAB41Q/Y2jyYo1QuhUstXG2Z3TZ06LOqRmys_sKwCLcBGAs/s1600/funny-animals-307-01.jpg",
    "https://mmehappy.com/wp-content/uploads/2017/11/top-30-funny-animal-memes-and-quotes-hilarious.jpg"
];

function pick5() {
    var num_images = local_images.length;
    var indices = [];
    var urls = [];
    for(var i=0; i<slides_per_show; i++) {
        var idx = Math.floor(Math.random() * num_images);
        while(indices.includes(idx) || idx >= num_images) {
            idx = Math.floor(Math.random() * num_images);
        };
        indices.push(idx);
    }
    for(var j=0; j<slides_per_show; j++) {
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
        $(".slide img").addClass("portrait");
        $(".slide img").height(slideHeight);
    } else {
        $(".slide img").addClass("landscape");
        $(".slide img").width(slideWidth);
    }

    setTimeout(function() { showSlide(urls); }, secs_per_slide * 1000);
}

function launchIgnite() {
    showSlide(pick5());
}

showSplash();

