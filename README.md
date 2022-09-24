# Twitch-Chat-Bot

İçerisinde küfür filtresi olan ve küfür eden kullanıcıyı banlayan, geliştirmeye açık bir proje.

## Kurulum

[Twitch Apps](https://twitchapps.com/tmi) sitesinden oauth token alınız.

.env adında bir klasör oluşturup 

```bash
TWITCH_OAUTH_TOKEN = twitchapps sitesinden aldığınz oauth token
TWITCH_USERNAME = twitch kullanıcı adınız
```

olarak doldurun ve kaydedin. 

Terminalde aşağıdaki kod satırını çalıştırın.

```bash
npm install nodemon && npm install && npm start
```
komutunu çalıştırın,


#### Twitch Chat Bot paketinin dökümantasyonunu incelemek için [tıklayın](https://github.com/tmijs/docs/blob/gh-pages/_posts/v1.4.2/2019-03-03-Commands.md)

#### Dil filtresini incelemek için [tıklayın](https://github.com/web-mech/badwords)

### Dil Filtresine Türkçeyi desteklememektedir.

```bash 
var filter = new Filter(); 

filter.addWords('some', 'bad', 'word');

filter.clean("some bad word!") //**** *** ****!

//or use an array using the spread operator

var newBadWords = ['some', 'bad', 'word'];

filter.addWords(...newBadWords);

filter.clean("some bad word!") //**** *** ****!

//or

var filter = new Filter({ list: ['some', 'bad', 'word'] }); 

filter.clean("some bad word!") //**** *** ****!
```

şeklide istediğiniz filtreleri ekleyebilirsiniz.
