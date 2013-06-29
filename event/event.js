Ext.application({
	requires : ['Ext.MessageBox'],
	launch : function(){
		var button1 = Ext.create('Ext.Button',{
			text : '버튼1 비표준방식',
			handler : function(){
				Ext.Msg.alert('메세지', 'handler는 버튼에 특화된 구성옵션');
			}
		});
		var button2 = Ext.create('Ext.Button',{
			text : '버튼2 표준방식',
			listeners : {				// 가장 일반적이고 대표적인 방법
				tap : function(){
					Ext.Msg.alert('메세지2', '표준적인 이벤트 처리방법');
				}
			}
		});
		var button3 = Ext.create('Ext.Button',{
			text : '버튼3 표준방식-리스너를 별도로 기술',
			ui : 'action'
		});
		button3.addListener(			// 2번과 동일한 방법이지만, 이벤트를 별도로 정의하여 사용. 이렇게까지 사용할 필요는 없을 듯.
				'tap',
				function(){
					Ext.Msg.alert('메세지3', '표준적인 이벤트 처리방법:리스너를 별도');
				}
		);
		var button4 = Ext.create('Ext.Button',{
			text : '버튼4 표준방식-기타 구성 옵션',
			ui : 'confirm'
		});
		button4.addListener(
				'tap',
				function(){
					Ext.Msg.alert('메세지4', '표준적인 이벤트 처리방법:기타 구성 옵션');
				},
				this,					// 실질적으로 쓸 일은 없을 듯
				{
					delay : 3000,
					single : true
				}
		)
		var button5 = Ext.create('Ext.Button',{
			text : '버튼5 표준방식-기타 구성옵션',
			ui : 'decline',
			listeners : {
				tap : {					// 2번과 동일하게 일반적으로 사용되는 방법
					fn : function(){
						Ext.Msg.alert('메세지5','표준적.브라우저 차원의 이벤트');
					}
				}
			}
		});
		var rootPanel = new Ext.create('Ext.Panel',{
			layout : {
				type : 'vbox',
				align : 'stretch'
			},
			items : [button1, button2, button3, button4, button5]
		});
		Ext.Viewport.add(rootPanel);
	}
});