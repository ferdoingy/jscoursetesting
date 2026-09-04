var xhr = new XMLHttpRequest();
var url = "./news_article.json";

xhr.open("GET", url, true);
xhr.responseType = "json";

xhr.onload = function ()
{
    var articles = xhr.response.articles;
    var articlesDiv = document.getElementById('articles');

    
}
