from pprint import pprint as pp
from django.test import TestCase
from django.core.urlresolvers import reverse
from django_webtest import WebTest

class MainViewsTest(TestCase):

    def test_index_response(self):
            # url = reverse("chessao.main.views.index")
            resp = self.client.get('/')
            self.assertEqual(resp.status_code, 200)
            # self.assertIn(w.title, resp.content)

    def test_404(self):
            resp = self.client.get('/madeup')
            self.assertEqual(resp.status_code, 404)


class MyTestCase(WebTest):

    # optional: we want some initial data to be able to login
    # fixtures = ['users', 'blog_posts']

    # optional: default extra_environ for this TestCase
    # extra_environ = {'HTTP_ACCEPT_LANGUAGE': 'ru'}

    def testBlog(self):
        # pretend to be logged in as user `kmike` and go to the index page
        index = self.app.get('/') #, user='kmike')

        # All the webtest API is available. For example, we click
        # on a <a href='/tech-blog/'>Blog</a> link, check that it
        # works (result page doesn't raise exceptions and returns 200 http
        # code) and test if result page have 'My Article' text in
        # its body.
        res = index.clickbutton(buttonid='testButton', verbose=1)
        pp('done', res)
