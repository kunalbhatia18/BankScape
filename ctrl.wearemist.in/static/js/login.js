function validate(){
    var username = document.getElementById("TextField6").value;
    var password = document.getElementById("TextField9").value;
    if ( username == "admin@wearemist.in" && password == "thispassworddoesnotexist"){
    alert ("Logined successfully");
    console.log('token Id = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiYWRtaW5Ad2VhcmVtaXN0LmluIn0sImlhdCI6MTYwNDY4OTk0MSwiZXhwIjoxNjA1MDQ5OTQxfQ.vv61JpA7yikSN0L6Sj1x0ScNwnjPpAc10J5EbAVeuAg"');
    return false;
    }
    else{
        alert("wrong Email or password");
    }
}
fetch('https://api.ipify.org/?format=json')
	.then(results => results.json())
	.then(data => {
        var ip=data.ip;
        console.log('IP Address = = ');
		console.log(ip);
	});
navigator.sayswho= (function(){
        var ua= navigator.userAgent, tem, 
        M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if(/trident/i.test(M[1])){
            tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
            return 'IE '+(tem[1] || '');
        }
        if(M[1]=== 'Chrome'){
            tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
            if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
        }
        M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
        if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
        return M.join(' ');
    })();
    var useragent=navigator.sayswho;
    console.log("USER AGENT = = ");
    console.log(useragent);