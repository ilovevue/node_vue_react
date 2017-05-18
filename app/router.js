'use strict';

module.exports = app => {
  //view
  app.get('/','index.index');
  app.get('/view/index','index.index');
  app.get('/view/login','index.login');
  app.get('/view/register','index.register');
  app.get('/view/topics','index.topics');
  app.get('/view/topic/:id','index.topic');
  app.get('/view/album','index.album');
   app.get('/view/profile','index.profile');
  //user api
  app.post('/api/login','user.login');
  app.post('/api/logout','user.logout');
  app.post('/api/register','user.register');
  app.post('/api/user/update','user.update');
  // event api
  app.get('/api/events','event.list');
  app.get('/api/events/userEventList','event.userEventList');
  app.get('/api/events/:id','event.detail');
  app.post('/api/events/create','event.create');
  app.put('/api/events/update/:id','event.update');
  app.delete('/api/events/delete/:id','event.delete');
  // topic api
  app.get("/api/topics","topics.list");
  app.get("/api/topics/:id","topics.topic");
  app.post("/api/topics/create","topics.create"); 
  app.put("/api/topics/update/:id","topics.update");
  app.delete("/api/topics/:id","topics.delete");
  app.get("/api/topics/more","topics.more");
  //news
  app.get("/api/news/articles","news.articles");
  app.get("/api/news/news/article/:id","news.newsList");
  app.get("/api/news/:id","news.detail");

  //albums
  app.get("/api/albums","albums.albums");//获取所有相册
  app.get("/api/albums/:id","albums.album");//获取单个相册
  app.put("/api/albums/:id","albums.updateAlbum");//更新相册内容
  app.delete("/api/albums/:id","albums.deleteAlbum");//删除相册
  app.post("/api/albums/album/create","albums.createAlbum");//新增相册
  app.post("/api/albums/:id/photos","albums.uploadPhotos");//添加图片
  app.delete("/api/albums/:id/photo","albums","deletePhotos"); //删除图片
};
