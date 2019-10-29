# Ignite Karaoke

To get started, just clone this repository and then open `karaoke.html`
in your browser. Have fun! Also being served at https://karaoke.jonm.dev/ !

If you want to add photos, just add their URLs to the `images.js` file!

## What is it?

Ignite talks are a special talk format: 5 minute talks consisting of
20 slides which _auto advance_ every 15 seconds. It's a really neat talk
format.

In Ignite Karaoke, the slides auto advance, but there are only 5
slides per talk, except you have no idea what your slides will look
like! It leads to some pretty funny improv.

I first saw Ignite Karaoke at a Velocity conference. For an example, see:
https://www.youtube.com/watch?v=6rnVqMa61hw

## Developing

This is a pretty plain-vanilla static site (HTML, CSS, JS).

If you want to run the tests that check for broken links, you'll need
Python 3 and `virtualenv`.

```
$ virtualenv -p python3 venv
$ source venv/bin/activate
$ pip install -r requirements.txt
$ python -m pytest
```
