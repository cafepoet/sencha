Ext.application({
	launch : function(){
		var date = new Date();
		Ext.Date.monthNames = ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'];
		Ext.define('genderModel',{
			extend : 'Ext.data.Model',
			config : {
				fields : [{
					name : 'indexNumber',
					type : 'string'
				},{
					name : 'text',
					type : 'string'
				}]
			}
		})
		var genderStore = new Ext.create('Ext.data.Store',{
			model : 'genderModel',
			data : [{
				indexNumber : '1', 
				text : '남'
			},{
				indexNumber : '2',
				text : '여'
			}]
		});
		
		var formPanel = new Ext.create('Ext.form.FormPanel',{
			fullscreen : true,
			items : [{
				xtype : 'fieldset',
				title : '입사지원서',
				defaults : {
					required : true,
					labelAlign : 'left'
				},
				items : [{
					xtype : 'textfield',
					name : 'name',
					label : '이름',
					clearIcon : true
				},{
					xtype : 'datepickerfield',
					name : 'birthday',
					label : '생년월일',
					value : date,
					dateFormat : 'Y/m/d',
					picker : {
						useTitles : true,
						dayText : '일',
						monthText : '월',
						yearText : '년',
						slotOrder : ['year','month','day']
					}
				},{
					xtype : 'checkboxfield',
					name : 'mili',
					label : '군필여부',
					checked : true
				},{
					xtype : 'spinnerfield',
					name : 'career',
					minValue : 0,
					maxValue : 100,
					increment : 1,
					value : 10
				},{
					layout : {
						type : 'hbox'
					},
					items : [{
						flex : 1,
						xtype : 'selectfield',
						name : 'gender',
						label : '성별',
						store : genderStore
					},{
						xtype : 'numberfield',
						name : 'age',
						label : '나이',
						value : 22
					}]
				},{
					xtype : 'emailfield',
					name : 'email',
					label : '이메일',
					placeHolder : 'test@test.com',
					clearIcon : true
				},{
					xtype : 'urlfield',
					name : 'url',
					label : '홈페이지',
					placeHolder : 'www.test.com',
					clearIcon : true
				},{
					layout : {
						type : 'hbox'
					},
					items :[{
						xtype : 'sliderfield',
						name : 'pay',
						label : '희망연봉',
						value : 50,
						max : 100,
						width : '90%',
						listeners : {
							change: function(slider){
								var value = slider.getValue();
								Ext.getCmp('pay').setValue(value);
							}
						}
					},{
						xtype : 'textfield',
						id : 'pay',
						value : 50
					}]
				},{
					layout : {
						type : 'hbox',
						pack : 'center'
					},
					items : [{
						xtype : 'button',
						width : 100,
						align : 'center',
						text : '등록',
						handler : function(){
							var loadValues = formPanel.getValues();
							var name = loadValues.name;
						}
					},{
						xtype : 'spacer',
						width : 10
					},{
						xtype : 'button',
						width : 100,
						align : 'center',
						text : '취소',
						handler : function(){
							formPanel.reset();
						}
					}]
				}]//end fieldset items
			}]
		});
	}
});