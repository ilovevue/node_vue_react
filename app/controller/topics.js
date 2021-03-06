'use strict';
const _ = require("underscore");

module.exports = app =>{
	class TopicController extends app.Controller {
		* list(ctx){
		 	const result = yield ctx.service.topics.list();
		 	ctx.body =	 result;
		}
		* topic(ctx){
		 	const list = yield ctx.service.topics.topic(ctx.params.id);
		 	ctx.body = list || [];
		}		
		* detail(ctx){
			ctx.body = yield ctx.service.topics.detail(ctx.params.id);
		}
		* create(ctx){
			const body = ctx.request.body;
			const topic = body.topic || {};
			const to ={
				loginUser: ctx.user._id,
				tab:topic.tab || "",
				content:topic.content||"",
				title:topic.title ||""
			}
			console.log(to);
			const result = yield ctx.service.topics.create(to);
			ctx.body = {code:0,msg:"success"};
		}
		* update(ctx){
			const body = ctx.request.body;
			const result = yield ctx.service.topics.update(body);
			ctx.body = {code:0,msg:"success"};
		}
		* delete(ctx){
			const result = yield ctx.service.topics.delete(ctx.params.id);
			ctx.body = {code:0,msg:"success"};
		}
		* more(ctx){
			const list = yield ctx.service.topics.more(ctx);
		 	ctx.body = list || [];
		}
	};
	return TopicController;
}