	function display(res){
		listPanel.removeAll(true);
		
		var query = Ext.create('Ext.dom.Query');		//xmlDom문서 검색용 클래스
		var jikwonArray = query.select('jikwon', res);
		
		for(var i=0; i<jikwonArray.length; i++){
			var jikwon = jikwonArray[i];			//jikwon element 얻기
			var jno = jikwon.getAtrribute('jno');	//속성 값 얻기
			var jname = query.selectNode('jname',jikwon).childNodes[0].nodeValue;	//element깂(text) 얻기
			var jimage = query.selectNode('jimage',jikwon).childNodes[0].nodeValue;
			
			var item = {
					xtype:'panel',
					html:['<table><tr><td>' + jno + '</td>',
						'<td>' + jname + '</td>',
						'<td><image src="../images/' + jimage,
						'" width=150"/></td></tr></table>'].join('')
			};
			
			listPanel.add(item);
		}
	}