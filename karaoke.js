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
var slides = [];
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
    "https://mmehappy.com/wp-content/uploads/2017/11/top-30-funny-animal-memes-and-quotes-hilarious.jpg",
    "http://cdn.lifebuzz.com/images/86202/lifebuzz-8d2b1f29b2f91cf20b96db36e1f6f4fd-limit_2000.jpg",
    "http://www.bunnyslippers.com/blog/wp-content/uploads/2014/03/funiest-dog.jpg",
    "http://www.gyanibaba.in/wp-content/uploads/2015/09/lifebuzz-8fcbae170ed3616e7368c71e21320830-limit_2000.jpg",
    "https://i.pinimg.com/originals/9d/de/28/9dde2866468e530e2b74a8ba132d3d43.jpg",
    "http://wroops.com/wp-content/uploads/2017/10/3-25.jpg",
    "https://i.imgur.com/zwph7mu.jpg",
    "https://i.imgur.com/lRRvTg8.jpg",
    "http://baddogneedsrottenhome.com/images/emails/536cc6d50764a.jpg",
    "https://technabob.com/blog/wp-content/uploads/2010/06/stormtrooper_situations_3.jpg",
    "https://technabob.com/blog/wp-content/uploads/2010/06/stormtrooper_situations_4.jpg",
    "https://i.ytimg.com/vi/CJQC9GLyvYY/hqdefault.jpg",
    "http://cdn.ebaumsworld.com/mediaFiles/picture/428737/1056255.jpg",
    "https://oddstuffmagazine.com/wp-content/uploads/2018/01/robber-search-650x423.jpg",
    "https://img.timesnownews.com/story/1540563742-funniest_halloween_costumes_2018.jpg?d=600x450",
    "https://pbs.twimg.com/media/DqKHB36X0AAi56G.jpg",
    "https://pbs.twimg.com/media/Dvk5DZBVsAA4AmI.jpg:large",
    "https://pbs.twimg.com/media/DvadERmW0AAdp6U.jpg:large",
    "https://pbs.twimg.com/media/DvZ2rMAUUAAWHMB.jpg:large",
    "https://pbs.twimg.com/media/Dvh-XUFW0AErhWW.jpg:large",
    "https://pbs.twimg.com/media/DvkjfBcV4AAm-sG.jpg:large",
    "http://funnycomedianquotes.com/uploads/images/comedian/medium/will-ferrell.jpg",
    "https://media.gq.com/photos/5582cc911177d66d68d593ae/master/w_800/entertainment-2013-06-50-funniest-things-the-web-ever-did-part-1-will-ferrell-hero-of-the-webs.jpg",
    "https://ebonytamu.files.wordpress.com/2008/10/will-ferrell_l1.jpg?w=500",
    "http://www.freakingnews.com/pictures/96000/Will-Ferrell-as-Julia-Child--96158.jpg",
    "https://i1.wp.com/www.metdaan.com/wp-content/uploads/2018/01/Screenshot_12-5.png?fit=372%2C441",
    "https://cdn.mos.cms.futurecdn.net/ba56d98fbf3a58abdea81d207b63a2e9.jpg",
    "https://i2.wp.com/www.audienceseverywhere.net/wp-content/uploads/2015/12/Zoolander.jpg",
    "https://cdn.pixabay.com/photo/2017/04/18/23/35/frog-2240764_1280.jpg",
    "https://cdn.pixabay.com/photo/2014/11/23/10/49/rabbit-542554_1280.jpg",
    "https://cdn.pixabay.com/photo/2014/08/08/20/54/laundry-413688_1280.jpg",
    "https://images.unsplash.com/photo-1433162653888-a571db5ccccf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1534375971785-5c1826f739d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&auto=format&fit=crop&w=2009&q=80",
    "https://images.unsplash.com/photo-1542712880-f6abcf9be339?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2394&q=80",
    "https://images.unsplash.com/photo-1487744019449-309d7c78014f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80",
    "https://cdn.pixabay.com/photo/2014/09/11/18/36/witch-prohibition-441868_1280.jpg",
    "https://c.pxhere.com/photos/89/e7/hammock_height_courageous_courage_crazy_no_fear_of_heights_big_city_skyscrapers-1191440.jpg!d",
    "https://upload.wikimedia.org/wikipedia/commons/a/a5/Funny_Faces_Helsinki_%28230100743%29.jpeg"
];

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

function launchIgnite() {
    if (shuffled.length < slides_per_show) {
        shuffled = shuffle(local_images);
    }
    for(var i=0; i<slides_per_show; i++) {
        slides.push(shuffled.pop());
    }
    showSlide(slides);
}

showSplash();
setKeyDownEvent();
