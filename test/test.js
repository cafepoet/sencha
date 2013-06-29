//Ext.require('Ext.MessageBox');
Ext.application({
	requires : ['Ext.MessageBox'], // 가장 선호 (컴포넌트 추가 방법)
	launch : function(){
		var button = Ext.create('Ext.Button',{
			text : '버튼',
			handler : function(){
				Ext.Msg.alert('메시지','옵션');
			}
		});
		var panel = new Ext.create('Ext.Panel',{
			fullscreen : true,
			html : 'sencha test',
			items : [button]
		});
		Ext.Viewport.add(panel);
	}
});