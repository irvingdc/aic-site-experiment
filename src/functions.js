let handleFormSubmission = (form) => {
	switch(form){
		case "conquerMarketForm":
			createIframe("https://www.appinchina.co/?conf=2")
		break;
	    case "getStartedForm":
			createIframe("https://www.appinchina.co/?conf=7")
		break;
		case "marketForm":
			createIframe("https://www.appinchina.co/?conf=4")
		break;
		case "servicesForm":
			createIframe("https://www.appinchina.co/?conf=6")
		break;
		case "aiconForm":
			createIframe("https://www.appinchina.co/?conf=5")
		break;
		case "contactForm":
			createIframe("https://www.appinchina.co/?conf=1")
        break;
        default: break;
	}
}

function getURLParameter(name) {
	if(typeof window === "undefined") return;
    return decodeURIComponent(
        (RegExp(`${name}=(.+?)(&|$)`).exec(window.location.search)||[undefined,"error"])[1]
    );
}

let numberWithCommas = (x) => {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}

let checkValidity = (value, rules) => {
	let isValid = true;
	if (!rules) {
		return true;
	}
	if (rules.required) {
		isValid = value.trim() !== '' && isValid;
	}
	if (rules.fileRequired) {
		isValid = value && isValid
	}
	if (rules.minLength) {
		isValid = value.length >= rules.minLength && isValid
	}
	if (rules.maxLength) {
		isValid = value.length <= rules.maxLength && isValid
	}
	if (rules.isEmail) {
		const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
		isValid = pattern.test(value) && isValid
	}
	if (rules.isNumeric) {
		const pattern = /^\d+$/;
		isValid = pattern.test(value) && isValid
	}
	if (rules.matches) {
		isValid = isValid && value === rules.matches
	}
	return isValid;
}

let createIframe = (src) => {
    var i = document.createElement('iframe')
    i.style.display = 'none'
    i.onload = () => { i.parentNode.removeChild(i) }
    i.src = src
    document.body.appendChild(i)
}

let getLocalizedLength = value => {
	let cnChars =
      value && value.match(/[\u3400-\u9FBF]/g)
        ? value.match(/[\u3400-\u9FBF]/g).length
        : 0;
    let enChars = value ? value.length - (cnChars || 0) : 0;
    return cnChars * 2 + enChars;
}

let setReferrerAndSource = () => {
	if(typeof window === "undefined") return;
	var source = ""
    if(getURLParameter("gclid")!=="error") source = "Google Ads"
	else if(getURLParameter("s")==='f') source = "Facebook"
	else if(getURLParameter("s")==='fa') source = "Facebook Ads"
	else if(getURLParameter("s")==='la') source = "Linkedin Ads"
	else if(getURLParameter("s")==='t') source = "Twitter"
	else if(getURLParameter("s")==='l') source = "Linkedin"
	else if(getURLParameter("s")==='q') source = "Quora"
	else if(getURLParameter("s")==='o') source = "Stackoverflow"
	else if(getURLParameter("s")==='r') source = "Reddit"
	else if(getURLParameter("s")==='m') source = "Medium"
	if(source){
		window.localStorage.source = source
	}

	if(document.referrer){
	    if(!!document.referrer && !document.referrer.includes("appinchina.co")){
	        window.localStorage.referrer = document.referrer
	    }
	}
	else{
	    if(!window.localStorage.referrer){
	        window.localStorage.referrer = "No referrer"
	    }
	}
}

export {
	handleFormSubmission,
	setReferrerAndSource,
	checkValidity,
	numberWithCommas,
	getLocalizedLength,
}