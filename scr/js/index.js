// obrigado: https://dev.to/sbodi10/download-images-using-javascript-51a9
// obrigado: https://image-charts.com/

const gerar = document.getElementById("gerar");
let qrCode = document.getElementById("qr");
const baixarQR = document.getElementById("baixar");
const ligarAleatorio = document.getElementById("aleatoriOFF");
const desligarAleatorio = document.getElementById("aleatoriON");
let aleatorio = false;
let nomeURL = "";


//O texto personalizado entra nessa lista. É possível?

const sites = [
    "google.com", "youtube.com", "facebook.com", "yahoo.com", "wikipedia.org",
    "amazon.com", "twitter.com", "instagram.com", "linkedin.com", "reddit.com",
    "pinterest.com", "netflix.com", "ebay.com", "wordpress.com", "craigslist.org",
    "bbc.co.uk", "theguardian.com", "independent.co.uk", "dailymail.co.uk", "telegraph.co.uk",
    "lemonde.fr", "lefigaro.fr", "liberation.fr", "20minutes.fr", "mediapart.fr",
    "spiegel.de", "bild.de", "zeit.de", "welt.de", "sueddeutsche.de",
    "xinhuanet.com", "sina.com.cn", "qq.com", "baidu.com", "taobao.com",
    "indiatimes.com", "ndtv.com", "thehindu.com", "timesofindia.indiatimes.com", "rediff.com",
    "aol.com", "nytimes.com", "cnn.com", "huffingtonpost.com", "washingtonpost.com",
    "cbc.ca", "ctvnews.ca", "globalnews.ca", "theglobeandmail.com", "nationalpost.com",
    "rbc.ru", "lenta.ru", "mail.ru", "yandex.ru", "tass.com",
    "alibaba.com", "jd.com", "sohu.com", "tencent.com", "douban.com",
    "atlasobscura.com", "vice.com", "buzzfeed.com", "medium.com", "mashable.com",
    "ign.com", "kotaku.com", "polygon.com", "gamespot.com", "eurogamer.net",
    "booking.com", "airbnb.com", "expedia.com", "tripadvisor.com", "hotels.com",
    "bbcgoodfood.com", "allrecipes.com", "epicurious.com", "cookpad.com", "foodnetwork.com",
    "spotify.com", "soundcloud.com", "pandora.com", "tidal.com", "deezer.com",
    "apple.com", "samsung.com", "huawei.com", "sony.com", "lg.com",
    "nike.com", "adidas.com", "puma.com", "reebok.com", "asics.com",
    "pexels.com", "unsplash.com", "pixabay.com", "burst.shopify.com", "gratisography.com",
    "freepik.com", "vecteezy.com", "flaticon.com", "shutterstock.com", "istockphoto.com",
    "webmd.com", "mayoclinic.org", "medlineplus.gov", "cdc.gov", "nih.gov",
    "booking.com", "hotels.com", "expedia.com", "airbnb.com", "vrbo.com",
    "imdb.com", "rottentomatoes.com", "metacritic.com", "boxofficemojo.com", "letterboxd.com",
    "opentable.com", "yelp.com", "tripadvisor.com", "zomato.com", "grubhub.com",
    "groupon.com", "livingsocial.com", "slickdeals.net", "retailmenot.com", "coupons.com",
    "meduza.io", "rt.com", "sputniknews.com", "vesti.ru", "ria.ru",
    "blog.google", "microsoft.com/en-us/blog/", "developer.apple.com/news/", "aws.amazon.com/blogs/aws/", "engineering.linkedin.com/blog",
    "brainpickings.org", "aeon.co", "ted.com", "bigthink.com", "nautil.us",
    "thekitchn.com", "smittenkitchen.com", "cookinglight.com", "foodandwine.com", "seriouseats.com",
    "goodreads.com", "bookriot.com", "bookpage.com", "kirkusreviews.com", "booklistonline.com",
    "bfi.org.uk", "filmcomment.com", "sightandsoundmagazine.com", "hollywoodreporter.com", "variety.com",
    "theguardian.com/sport", "espn.com", "sports.yahoo.com", "nba.com", "mlb.com",
    "bbc.com", "cnn.com", "nytimes.com", "washingtonpost.com", "theguardian.com",
    "forbes.com", "bloomberg.com", "economist.com", "ft.com", "wsj.com",
    "merriam-webster.com", "dictionary.com", "oxfordlearnersdictionaries.com", "longmandictionary.com", "cambridge.org/dictionaries",
    "spotify.com", "apple.com/apple-music/", "tidal.com", "soundcloud.com", "pandora.com",
    "twitch.tv", "mixer.com", "facebook.com/gaming", "youtube.com/gaming", "steam.tv",
    "etsy.com", "ebay.com", "amazon.com", "alibaba.com", "walmart.com",
    "behance.net", "dribbble.com", "99designs.com", "designcrowd.com", "upwork.com",
    "stackoverflow.com", "github.com", "gitlab.com", "bitbucket.org", "codepen.io",
    "reddit.com", "quora.com", "stackexchange.com", "medium.com", "dev.to",
    "kickstarter.com", "indiegogo.com", "gofundme.com", "patreon.com", "donorschoose.org",
    "baidu.com", "qq.com", "sina.com.cn", "weibo.com", "douban.com",
    "airtable.com", "notion.so", "trello.com", "asana.com", "clickup.com",
    "udemy.com", "coursera.org", "edx.org", "khanacademy.org", "codecademy.com",
    "grammarly.com", "hemingwayapp.com", "scrivener.com", "prowritingaid.com", "evernote.com",
    "imdb.com", "boxofficemojo.com", "rottentomatoes.com", "metacritic.com", "letterboxd.com",
    "urbanoutfitters.com", "zara.com", "asos.com", "hm.com", "nordstrom.com",
    "instagram.com", "tiktok.com", "snapchat.com", "facebook.com", "twitter.com",
    "slideshare.net", "prezi.com", "slides.com", "canva.com", "keynote.com",
    "reuters.com", "apnews.com", "npr.org", "usatoday.com", "huffpost.com",
    "fiverr.com", "freelancer.com", "guru.com", "peopleperhour.com", "upwork.com",
    "theguardian.com/books", "nytimes.com/books", "bookpage.com", "booklistonline.com", "goodreads.com",
    "adobe.com", "sketch.com", "figma.com", "invisionapp.com", "photoshop.com",
    "nationalgeographic.com", "smithsonianmag.com", "travelandleisure.com", "lonelyplanet.com", "afar.com",
    "rottentomatoes.com/tv", "imdb.com/tv", "tv.avclub.com", "tvline.com", "metacritic.com/tv",
    "thekitchn.com", "foodnetwork.com", "seriouseats.com", "delish.com", "allrecipes.com",
    "archdaily.com", "dezeen.com", "architecturaldigest.com", "dwell.com", "designboom.com",
    "microsoft.com", "apple.com", "google.com", "amazon.com", "ibm.com",
    "ign.com", "gamespot.com", "polygon.com", "rockpapershotgun.com", "pcgamer.com",
    "mozilla.org", "google.com/chrome/", "apple.com/safari/", "microsoft.com/edge/", "opera.com",
    "nike.com", "adidas.com", "underarmour.com", "puma.com", "reebok.com",
    "independent.co.uk", "bbc.co.uk", "thetimes.co.uk", "dailymail.co.uk", "telegraph.co.uk",
    "airbnb.com", "booking.com", "expedia.com", "hotels.com", "tripadvisor.com",
    "spotify.com/browse/podcasts", "apple.com/podcasts/", "stitcher.com", "podcastone.com", "iheart.com",
    "webmd.com", "mayoclinic.org", "healthline.com", "verywellhealth.com", "medlineplus.gov",
    "nasa.gov", "spacex.com", "esa.int", "jpl.nasa.gov", "iss.nasa.gov",
    "scientificamerican.com", "newscientist.com", "discovermagazine.com", "natgeo.com/science/", "popsci.com",
    "behance.net/search/projects/?search=branding", "dribbble.com/search/branding", "99designs.com/categories/brand-identity-pack", "logopond.com", "brandcrowd.com/logo-designs",
    "linkedin.com", "indeed.com", "glassdoor.com", "monster.com", "careerbuilder.com",
    "pexels.com", "unsplash.com", "pixabay.com", "stocksnap.io", "burst.shopify.com",
    "medium.com", "theguardian.com/commentisfree", "huffpost.com/topic/opinion", "theatlantic.com/category/opinion", "vox.com/opinions",
    "genius.com", "songlyrics.com", "lyrics.com", "musixmatch.com", "azlyrics.com",
    "airtable.com", "notion.so", "trello.com", "todoist.com", "asana.com",
    "ted.com", "bigthink.com", "brainpickings.org", "aeon.co", "nautil.us",
    "imdb.com/list", "letterboxd.com/films", "boxofficemojo.com/chart/top_lifetime_gross", "rottentomatoes.com/top/bestofrt", "metacritic.com",
    "pinterest.com", "etsy.com", "redbubble.com", "society6.com", "zazzle.com",
    "newyorker.com", "wired.com", "theverge.com", "techcrunch.com", "engadget.com",
    "bbcgoodfood.com", "epicurious.com", "food52.com", "myrecipes.com", "bonappetit.com",
    "kickstarter.com", "indiegogo.com", "crowdfunder.com", "gofundme.com", "patreon.com",
    "theknot.com", "weddingwire.com", "brides.com", "marthastewartweddings.com", "theguardian.com/lifeandstyle/weddings",
    "nationaltrust.org.uk", "english-heritage.org.uk", "historicengland.org.uk", "cadw.gov.wales", "visitscotland.com",
    "nytimes.com/section/books/review", "theguardian.com/books/reviews", "bookforum.com/review", "lareviewofbooks.org", "bookriot.com",
    "apartments.com", "zillow.com", "trulia.com", "realtor.com", "redfin.com",
    "quora.com", "stackexchange.com", "stackoverflow.com", "superuser.com", "serverfault.com",
    "imdb.com", "rottentomatoes.com", "metacritic.com", "boxofficemojo.com", "letterboxd.com",
    "spotify.com", "apple.com/music", "tidal.com", "deezer.com", "amazon.com/music",
    "udemy.com", "pluralsight.com", "skillshare.com", "coursera.org", "edx.org",
    "reddit.com", "digg.com", "slashdot.org", "voat.co", "mix.com",
    "expedia.com", "booking.com", "hotels.com", "priceline.com", "kayak.com",
    "healthline.com", "webmd.com", "mayoclinic.org", "medlineplus.gov", "cancer.org",
    "airbnb.com", "booking.com", "vrbo.com", "homestay.com", "couchsurfing.com",
    "investopedia.com", "fool.com", "cnbc.com/investing", "wsj.com/market-data", "bloomberg.com/markets",
    "pcpartpicker.com", "newegg.com", "microcenter.com", "amazon.com", "bestbuy.com",
    "etsy.com", "zazzle.com", "redbubble.com", "society6.com", "threadless.com",
    "foodnetwork.com", "allrecipes.com", "cookinglight.com", "simplyrecipes.com", "epicurious.com",
    "alibaba.com", "dhgate.com", "made-in-china.com", "aliexpress.com", "taobao.com",
    "usatoday.com", "washingtonpost.com", "nytimes.com", "wsj.com", "latimes.com",
    "spotify.com", "soundcloud.com", "pandora.com", "iheart.com", "tunein.com",
    "gutenberg.org", "goodreads.com", "bookbub.com", "bookriot.com", "bookpage.com",
    "behance.net", "dribbble.com", "deviantart.com", "designspiration.com", "coroflot.com",
    "lyft.com", "uber.com", "cabify.com", "bolt.eu", "grab.com",
    "tripadvisor.com", "lonelyplanet.com", "booking.com", "expedia.com", "kayak.com",
    "imdb.com", "letterboxd.com", "boxofficemojo.com", "metacritic.com", "rottentomatoes.com",
    "espn.com", "nba.com", "nfl.com", "mlb.com", "nhl.com",
    "linkedin.com", "indeed.com", "monster.com", "glassdoor.com", "ziprecruiter.com",
    "webmd.com", "mayoclinic.org", "medlineplus.gov", "cancer.org", "cdc.gov",
    "ted.com", "bigthink.com", "brainpickings.org", "popsci.com", "scientificamerican.com",
    "coursera.org", "udacity.com", "edx.org", "khanacademy.org", "skillshare.com",
    "usps.com", "ups.com", "fedex.com", "dhl.com", "postmates.com",
    "britannica.com", "wikipedia.org", "encyclopedia.com", "infoplease.com", "howstuffworks.com",
    "lulus.com", "asos.com", "zara.com", "revolve.com", "nastygal.com",
    "kickstarter.com", "indiegogo.com", "gofundme.com", "patreon.com", "crowdfunder.com",
    "macys.com", "bloomingdales.com", "saksfifthavenue.com", "neimanmarcus.com", "bergdorfgoodman.com",
    "twitch.tv", "youtube.com", "facebook.com/gaming", "mixer.com", "dlive.tv",
    "adidas.com", "nike.com", "puma.com", "underarmour.com", "reebok.com",
    "uol.com.br", "globo.com", "terra.com.br", "ig.com.br", "bol.uol.com.br",
    "mercadolivre.com.br", "americanas.com.br", "magazineluiza.com.br", "submarino.com.br", "extra.com.br",
    "estadao.com.br", "folha.uol.com.br", "gazetadopovo.com.br", "r7.com", "noticias.uol.com.br",
    "bb.com.br", "caixa.gov.br", "bradesco.com.br", "itau.com.br", "santander.com.br",
    "g1.globo.com", "tecmundo.com.br", "olhardigital.com.br", "canaltech.com.br", "terra.com.br/noticias/",
    "netshoes.com.br", "centauro.com.br", "kanui.com.br", "dafiti.com.br", "zattini.com.br",
    "buscape.com.br", "zoom.com.br", "jusbrasil.com.br", "infojobs.com.br", "vagas.com.br",
    "mercadopago.com.br", "pagseguro.uol.com.br", "cielo.com.br", "getnet.com.br", "rede.com.vc",
    "brasil247.com", "conversaafiada.com.br", "jornalggn.com.br", "brasildefato.com.br", "cartacapital.com.br",
    "olx.com.br", "zapimoveis.com.br", "vivareal.com.br", "imovelweb.com.br", "quintoandar.com.br",
    "spotify.com/br", "deezer.com/br/", "tidal.com", "napster.com", "soundcloud.com",
    "petrobras.com.br", "embraer.com.br", "fiocruz.br", "embrapa.br", "inpe.br",
    "ibge.gov.br", "receita.economia.gov.br", "tse.jus.br", "planalto.gov.br", "camara.leg.br",
    "senado.leg.br", "stf.jus.br", "trf4.jus.br", "trt4.jus.br", "mpt.mp.br",
    "usp.br", "unicamp.br", "pucsp.br", "fatec.sp.gov.br", "ifsp.edu.br",
    "ufmg.br", "ufscar.br", "ufpe.br", "ufal.br", "ufba.br",
    "unesp.br", "unb.br", "ufrgs.br", "ufpr.br", "ufsc.br",
    "olimpiada.ic.unicamp.br", "maratona.ime.usp.br", "obi.org.br", "sbc.org.br", "abnt.org.br",
    "lattes.cnpq.br", "scielo.org", "bvsalud.org", "brasil.gov.br", "sebrae.com.br",
    "economia.uol.com.br", "g1.globo.com/economia", "valor.globo.com", "infomoney.com.br", "exame.com",
    "uol.com.br/esporte", "globoesporte.globo.com", "espn.com.br", "lance.com.br", "cbf.com.br",
    "olimpiadas.uol.com.br", "globoesporte.globo.com/olimpiadas", "terra.com.br/esportes", "redbull.com/br-pt", "adidas.com.br",
    "uol.com.br/carros", "carros.uol.com.br", "quatrorodas.abril.com.br", "motor1.uol.com.br", "carros.ig.com.br",
    "receitafederal.gov.br", "correios.com.br", "inss.gov.br", "caixa.gov.br/loterias", "detran.sp.gov.br",
    "bbc.com", "theguardian.com", "reuters.com", "france24.com", "dw.com",
    "nytimes.com", "washingtonpost.com", "cnn.com", "wsj.com", "usatoday.com",
    "economist.com", "ft.com", "bloomberg.com", "cnbc.com", "investopedia.com",
    "aljazeera.com", "rt.com", "dailysabah.com", "timesofindia.indiatimes.com", "japantimes.co.jp",
    "themoscowtimes.com", "iol.co.za", "news.sky.com", "cbc.ca", "theglobeandmail.com",
    "chinadaily.com.cn", "koreatimes.co.kr", "straitstimes.com", "sbs.com.au", "nzherald.co.nz",
    "terra.com.ar", "elcomercio.pe", "lavanguardia.com", "globo.com", "bbc.co.uk/sport",
    "espn.com", "goal.com", "lequipe.fr", "skysports.com", "foxsports.com",
    "nike.com", "adidas.com", "puma.com", "underarmour.com", "newbalance.com",
    "booking.com", "airbnb.com", "expedia.com", "agoda.com", "trivago.com",
    "ebay.com", "amazon.ca", "aliexpress.com", "flipkart.com", "mercado libre.com.ar",
    "youtube.com", "netflix.com", "xbox.com", "github.com", "spotify.com",
    "globo.com", "uol.com.br", "terra.com.br", "estadao.com.br", "folha.uol.com.br",
    "g1.globo.com", "veja.abril.com.br", "r7.com", "noticias.uol.com.br", "correiobraziliense.com.br",
    "correio24horas.com.br", "jornalggn.com.br", "cartacapital.com.br", "diariodepernambuco.com.br", "jconline.ne10.uol.com.br",
    "economia.uol.com.br", "tecmundo.com.br", "techtudo.com.br", "olhardigital.com.br", "brasil247.com",
    "catracalivre.com.br", "cultura.estadao.com.br", "revistaplaneta.com.br", "saude.abril.com.br", "super.abril.com.br",
    "yahoo.com", "bing.com", "duckduckgo.com", "google.com.br", "instagram.com",
    "asahi.com", "yomiuri.co.jp", "mainichi.jp", "nhk.or.jp", "japantimes.co.jp",
    "nikkei.com", "jiji.com", "kyodonews.jp", "japantoday.com", "j-cast.com",
    "japan.travel", "jnto.go.jp", "ana.co.jp", "japanairlines.com", "skyticket.jp",
    "rakuten.co.jp", "amazon.co.jp", "yahoo.co.jp", "docomo.ne.jp", "softbank.jp",
    "goo.ne.jp", "livedoor.com", "fc2.com", "ameblo.jp", "abema.tv",
    "sankei.com", "tbs.co.jp", "ntv.co.jp", "fuji.tv", "tv-asahi.co.jp",
    "nissan.co.jp", "toyota.co.jp", "honda.co.jp", "panasonic.co.jp", "sony.co.jp",
    "sharp.co.jp", "toshiba.co.jp", "hitachi.co.jp", "mazda.co.jp", "mitsubishi-motors.com",
    "sumitomorubber.co.jp", "takeda.com", "tosoh.co.jp", "denso.com", "fujitsu.com",
    "konicaminolta.com", "nec.com", "omron.co.jp", "se.com", "fujifilm.com",
    "canon.com", "casio.co.jp", "ricoh.co.jp", "jvc.net", "olympus.co.jp",
    "toto.co.jp", "jra.go.jp", "jleague.jp", "jnto.go.jp", "jma.go.jp",
    "japanpost.jp", "kantei.go.jp", "meti.go.jp", "mofa.go.jp", "mhlw.go.jp",
    "bbc.com", "theguardian.com", "nytimes.com", "washingtonpost.com", "lemonde.fr",
    "spiegel.de", "reuters.com", "aljazeera.com", "rt.com", "dw.com",
    "cbc.ca", "australiangeographic.com.au", "indiatoday.in", "ndtv.com", "sina.com.cn",
    "chinadaily.com.cn", "rbc.ru", "ansa.it", "france24.com", "zeit.de",
    "elconfidencial.com", "elpais.com", "lavanguardia.com", "tagesschau.de", "ilgiornale.it",
    "chicagotribune.com", "latimes.com", "usatoday.com", "bloomberg.com", "forbes.com",
    "thetimes.co.uk", "independent.co.uk", "cbc.ca", "nzherald.co.nz", "japantoday.com",
    "thestar.com.my", "straitstimes.com", "dailysabah.com", "timesofisrael.com", "egypttoday.com",
    "allafrica.com", "saharareporters.com", "dailytimes.com.pk", "thenews.com.pk", "thedailystar.net",
    "smh.com.au", "zeenews.india.com", "dn.se", "24sata.hr", "tvcnews.tv",
    "thepeninsulaqatar.com", "kyivpost.com", "jpost.com", "euronews.com", "dw.com",
    "ynetnews.com", "nordic.businessinsider.com", "thestar.com", "swissinfo.ch", "berliner-zeitung.de",
    "cbc.ca", "buenosairesherald.com", "lahora.com.ec", "chinadaily.com.cn", "koreaherald.com",
    "thejakartapost.com", "hindustantimes.com", "thepeninsulaqatar.com", "africanews.com", "yenisafak.com",
    "pravda.ru", "jamaicaobserver.com", "dailysabah.com", "timesofisrael.com", "elheraldo.hn",
    "telesurtv.net", "nypost.com", "abcnews.go.com", "dailymail.co.uk", "nationalgeographic.com",
    "history.com", "smithsonianmag.com", "scientificamerican.com", "newscientist.com", "livescience.com",
    "theguardian.com", "bbc.com", "aljazeera.com", "france24.com", "dw.com",
    "dw.com", "theguardian.com", "bbc.com", "nytimes.com", "washingtonpost.com",
    "forbes.com", "bloomberg.com", "reuters.com", "cnn.com", "usatoday.com",
    "foxnews.com", "nbcnews.com", "abcnews.go.com", "independent.co.uk", "telegraph.co.uk",
    "france24.com", "tagesschau.de", "sueddeutsche.de", "spiegel.de", "thetimes.co.uk",
    "rt.com", "themoscowtimes.com", "scmp.com", "japantimes.co.jp", "sina.com.cn",
    "chinadaily.com.cn", "theaustralian.com.au", "zeenews.india.com", "aljazeera.com", "africa.com",
    "dw.com", "dw.com", "dw.com", "dw.com", "dw.com",
    "elpais.com", "elmundo.es", "elpais.com.uy", "estadao.com.br", "globo.com",
    "clarin.com", "lanacion.com.ar", "jornada.com.mx", "eluniverso.com", "emol.com",
    "reforma.com", "elcomercio.pe", "eldeber.com.bo", "laprensa.com.ni", "prensalibre.com",
    "elpais.cr", "lahora.com.gt", "rpp.pe", "latercera.com", "peru21.pe",
    "elpais.com.co", "caracoltv.com", "eltiempo.com", "bbc.com", "theguardian.com",
    "dw.com", "reuters.com", "cnn.com", "nytimes.com", "washingtonpost.com",
    "forbes.com", "bloomberg.com", "usatoday.com", "foxnews.com", "nbcnews.com",
    "abcnews.go.com", "france24.com", "tagesschau.de", "spiegel.de", "thetimes.co.uk",
    "rt.com", "themoscowtimes.com", "scmp.com", "japantimes.co.jp", "sina.com.cn",
    "chinadaily.com.cn", "theaustralian.com.au", "zeenews.india.com", "aljazeera.com", "africa.com",
    "timesofindia.indiatimes.com", "hindustantimes.com", "ndtv.com", "indiatoday.in", "repubblica.it",
    "corriere.it", "lavanguardia.com", "elconfidencial.com", "publico.es", "elperiodico.com",
    "dw.com", "euronews.com", "bfmtv.com", "lemonde.fr", "france24.com",
    "ansa.it", "thelocal.it", "spiegel.de", "theguardian.com", "bbc.com",
    "washingtonpost.com", "nytimes.com", "cnn.com", "forbes.com", "bloomberg.com",
    "reuters.com", "usatoday.com", "foxnews.com", "nbcnews.com", "abcnews.go.com",
    "independent.co.uk", "telegraph.co.uk", "rt.com", "themoscowtimes.com", "scmp.com",
    "japantimes.co.jp", "sina.com.cn", "chinadaily.com.cn", "theaustralian.com.au", "aljazeera.com",
    "africa.com", "www.dw.com", "www.dw.com", "www.dw.com", "www.dw.com",
    "abc.es", "marca.com", "as.com", "elpais.com", "olx.com.ar",
    "clarin.com", "infobae.com", "mercadolibre.com.ar", "globo.com", "uol.com.br",
    "terra.com.br", "estadao.com.br", "folha.uol.com.br", "oglobo.globo.com", "brasil.elpais.com",
    "lemonde.fr", "france24.com", "thelocal.fr", "lalibre.be", "standaard.be",
    "rtbf.be", "elpais.com.co", "eltiempo.com", "caracoltv.com", "noticiasrcn.com",
    "elmundo.cr", "nacion.com", "teletica.com", "repretel.com", "diarioextra.com",
    "herald.co.zw", "newsday.co.zw", "ewn.co.za", "sowetanlive.co.za", "dailymaverick.co.za",
    "enca.com", "iol.co.za", "japantoday.com", "japantimes.co.jp", "nhk.or.jp",
    "mainichi.jp", "chinadaily.com.cn", "scmp.com", "straitstimes.com", "businesstimes.com.sg",
    "jakartapost.com", "thejakartapost.com", "kompas.com", "detik.com", "rappler.com",
    "bangkokpost.com", "nationthailand.com", "straitstimes.com", "taiwannews.com.tw", "taipeitimes.com",
    "timesofisrael.com", "haaretz.com", "jpost.com", "alaraby.co.uk", "aawsat.com",
    "dw.com", "thelocal.de", "thelocal.es", "thelocal.ch", "thelocal.at",
    "swissinfo.ch", "repubblica.it", "corriere.it", "ansa.it", "dw.com",
    "dw.com", "tagesspiegel.de", "spiegel.de", "bild.de", "theguardian.com",
    "dailymail.co.uk", "independent.co.uk", "standard.co.uk", "cityam.com", "thetimes.co.uk",
    "elcomercio.pe", "gestion.pe", "peru21.pe", "rpp.pe", "larepublica.pe",
    "clarin.com", "lanacion.com.ar", "perfil.com", "cronista.com", "eltribuno.com",
    "vz.ru", "vesti.ru", "kp.ru", "lenta.ru", "rbc.ru",
    "lefigaro.fr", "leparisien.fr", "liberation.fr", "20minutes.fr", "ouest-france.fr",
    "luxtimes.lu", "wort.lu", "rtl.lu", "tageblatt.lu", "dn.pt",
    "jornaldenegocios.pt", "publico.pt", "observador.pt", "record.pt", "ojogo.pt",
    "thedailystar.net", "bdnews24.com", "prothomalo.com", "dawn.com", "thenews.com.pk",
    "timesofindia.indiatimes.com", "thehindu.com", "indianexpress.com", "dnaindia.com", "scroll.in",
    "tribuneindia.com", "news24.com", "iol.co.za", "citizen.co.za", "news.co.za",
    "herald.ng", "punchng.com", "vanguardngr.com", "dailypost.ng", "thenationonlineng.net",
    "africanews.com", "gazeta.ru", "kommersant.ru", "mk.ru", "novayagazeta.ru",
    "korrespondent.net", "segodnya.ua", "unian.net", "ukr.net", "interfax.com",
    "elespectador.com", "elpais.com", "elheraldo.co", "eltiempo.com", "larepublica.co",
    "news.abs-cbn.com", "philstar.com", "rappler.com", "inquirer.net", "gmanetwork.com",
    "thestar.com.my", "themalaysianreserve.com", "malaymail.com", "bernama.com", "channelnewsasia.com",
    "straitstimes.com", "theborneopost.com", "bangkokpost.com", "nationthailand.com", "scmp.com",
    "taipeitimes.com", "taiwannews.com.tw", "chinapost.nownews.com", "japantoday.com", "japantimes.co.jp",
    "english.kyodonews.net", "koreatimes.co.kr", "koreaherald.com", "channelnewsasia.com", "asia.nikkei.com",
    "jakartapost.com", "thejakartapost.com", "kompas.com", "antaranews.com", "tempo.co",
    "asiaone.com", "straitstimes.com", "bangkokpost.com", "nationthailand.com", "thestar.com.my",
    "bernama.com", "channelnewsasia.com", "thejakartapost.com", "kompas.com", "vietnamnews.vn",
    "thanhnien.vn", "indonesia-investments.com", "laosnewsonline.com", "scmp.com", "pnompenhpost.com",
    "phnompenhpost.com", "tuoitrenews.vn", "vnexpress.net", "aljazeera.com", "middleeasteye.net",
    "english.alarabiya.net", "thenationalnews.com", "gulfnews.com", "arabnews.com", "jordantimes.com",
    "timesofisrael.com", "jpost.com", "haaretz.com"
];

escrevaAlgo.classList.toggle("nada"); texto_usuario.classList.toggle("nada");

async function baixarQR_CODE() {
    const QR_URL = qrCode.src;

    const img = await fetch(QR_URL);
    const imgBlob = await img.blob();

    const objectURL = URL.createObjectURL(imgBlob);

    const link = document.createElement('a');
    link.href = objectURL;
    link.download = ("QR_" + nomeURL + ".png");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(objectURL);
};

desligarAleatorio.addEventListener("click", () => {
    desligarAleatorio.classList.add("hidden");
    aleatorio = true;
    escrevaAlgo.classList.add("hidden"); texto_usuario.classList.add("hidden");
});

ligarAleatorio.addEventListener("click", () => {
    desligarAleatorio.classList.remove("hidden");
    aleatorio = false;
    escrevaAlgo.classList.remove("hidden"); texto_usuario.classList.remove("hidden");
})

gerar.addEventListener("click", () => {
    if (aleatorio === true) {
        const qr_Aleatorio = Math.floor(Math.random() * sites.length);
        const qr_Escolhido = sites[qr_Aleatorio];
        nomeURL = "#".repeat(qr_Escolhido.length - 4);
        qrCode.setAttribute("src", "https://image-charts.com/chart?chs=250x250&cht=qr&chl=" + qr_Escolhido);
        return;
    };
    qr_personalizado();
});

baixarQR.addEventListener("click", () => {
    baixarQR_CODE();
});

function qr_personalizado() {
    let textoUser = document.getElementById("texto_usuario").value;

    if (textoUser != "") {
        qrCode.setAttribute("src", "https://image-charts.com/chart?chs=250x250&cht=qr&chl=" + textoUser);
    } else {
        qrCode.setAttribute("src", "scr/inicio/inicio2.png");
        escrevaAlgo.classList.toggle("nada"); texto_usuario.classList.toggle("nada");
    }
    nomeURL = textoUser;
};