/*链式调用*/
$("div").next().addClass()...
$.fn.myPlugin = function(){
	return this.each(function(){
		//do sth
	});
};
代码说明：
	－return 返回当前对象 来维护插件的链式调用
	－each 循环实现每个元素的访问

/*单例模式*/
$.fn.MyPlugin = function(){
	var me = $(this),
		instance = me.data("myPlugin");
	if(!instance){
		me.data("myPlugin",(instance = new myPlugin()));
	}
};
代码说明：
	－如果实例存在则不再重新创建实例
	－利用data()来存放插件对象的实例