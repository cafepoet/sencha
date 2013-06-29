Ext.application({
	launch : function(){
		var rootPanel = new Ext.create('Ext.Panel',{
			fullscreen : true,
			items : [{
				xtype : 'toolbar',
				docked : 'top',
				title : 'My Toolbar',
				
				items : [{
					xtype : 'button',
					ui : 'decline',
					text : 'decline'					
				},{
					xtype : 'spacer'
				},{
					xtype : 'button',
					ui : 'decline-round',
					text : 'decline-round'							
				}]
			}]
		});
	}
});