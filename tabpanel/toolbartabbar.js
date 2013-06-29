Ext.application({
	launch : function(){
		var tabPanel = new Ext.create('Ext.TabPanel',{
			fullscreen : true,
			tabBar : {
				docked : 'bottom',
				layout : {
					pack : 'center'
				}
			},
			items : [{
				iconCls : 'info',
				title : 'About'
			},{
				iconCls : 'favorites',
				title : 'Favorites',
				badgeText : '2'
			}],
			dockedItems : [{
				xtype : 'toolbar',
				docked : 'top',
				title : 'My Toolbar',
				
				items :[{
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