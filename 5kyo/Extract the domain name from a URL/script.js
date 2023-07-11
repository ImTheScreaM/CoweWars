function domainName(urls){
	let url_split = urls.replace('https://','').replace('http://','').replace('www.','').split(/[/?#]/)[0].split('.')[0]
	return url_split
}


console.log(domainName("http://google.com"));
console.log(domainName("http://www.zombie-bites.com"));
console.log(domainName("www.xakep.ru"));