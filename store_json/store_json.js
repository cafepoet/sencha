Ext.application({
	launch : function(){
		Ext.define('MyApp.model',{
			extend : 'Ext.data.Model',
			config : {
				fields : ['no','name','age','tel']
			}
		});
		
		/* Store에서 처리할 수도 있음
		var ajaxProxy = Ext.create('Ext.data.proxy.Ajax',{
			url : 'store_json.jsp',
			reader : {
				type : 'json',
				rootProperty : 'data'		// 구조가 하나 더 있을 경우(daum의 경우처럼), channel.item 처럼 명시
			}
		});
		*/
		
		var userStore = Ext.create('Ext.data.Store',{
			//autoLoad : true,							// Proxy로 Data를 연동하고, Store에 저장하였다면, Store의 Data를 가져오기 위해 Load룰 해야 함
			model : 'MyApp.model',
			//proxy : ajaxProxy				// Store에서 Proxy 처리할 경우, 아래 내용으로 처리
			proxy : {
				type : 'ajax',
				url : 'store_json.jsp',
				reader : {
					type : 'json',
					rootProperty : 'data'
				}
			}
		});
		
		var dataList = Ext.create('Ext.dataview.List',{
			flex : 1,
			store : userStore,
			itemTpl : '<div>{no} {name} {age} {tel}</div>'
		});
		
		var titleBar = Ext.create('Ext.TitleBar',{
			docked : 'top',
			title : '직원목록(모두)',
			items : [{
				type : 'button',
				text : '전체보기',
				align : 'right',
				handler : function(){
					userStore.load();
				}
			}]
		});
		
		var rootPanel = Ext.create('Ext.Panel',{
			fullscreen : true,
			layout : 'vbox',
			items : [titleBar,dataList]
		});
		Ext.Viewport.add(rootPanel);
	}
})