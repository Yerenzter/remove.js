/*
* @title Remove.js 
* @author Yerenzter
* @description A simple recursion algorithm which enables you to remove all
* - specific or duplicated characters or strings.
* 
* Websites & social links:
* Website: http://wwww.yerenzter.tk
* Email: yerenzter@yandex.com
* GitHub: https://github.com/Yerenzter
*
* Project Info
* Algorithm: String & integer manipulation
* Method: Recusion
*
*/

// Coding proper
// Function name "remove"

/*
* @param funcName(string, search, replace);
*/
function remove(string, search, replace) {
	let result = string;
	
	result = result.replace(search, replace);
	
	if(result.includes(search) == false) {
		// Will return the final output  if the result was satisfied to remove.
		return result;
	} else {
		// If there's remaining call the function itself.
		return (remove(result, search, replace));
	}
}
