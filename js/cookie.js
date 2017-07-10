            //设置cookie
            function setCookie(name,value,expires){
            	//设置当前时间
            	var dates=new Date();
            	//转换成月份某一天
            	var day=dates.getDate();
            	//设置过期时间
            	dates.setDate(day+expires);
            	
            document.cookie=name+"="+value+";expires="+dates;
            }
            
            //获取
			function getCookie(name){
				var str=document.cookie;	
				
				var arr=str.split("; ");
				for(var i=0;i<arr.length;i++){
					var arr2=arr[i].split("=");
					if(arr2[0]==name){
						return arr2[1];
					}
				}
			}
			
            //删除
			function removeCookie(name){
				setCookie(name,null,-1);
			}
			removeCookie("users");