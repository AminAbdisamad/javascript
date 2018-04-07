function HTTP(){
    this.http = new XMLHttpRequest()
}

// HTTP GET request
HTTP.prototype.getURL = function(url){
    this.http.open('GET',url,true);
    let self = this.http;
    this.http.onload = function(){
        if(self.status == 200){
            console.log(self.responseText);
            /* if we run using this.http we get this error
            undefined is not an object (evaluating 'this.http.status') 
            so to fix it we can either use arrow function like this 
            this.http.onload = () =>{} or we can assign this.http into a variable and 
            use that variable to call status*/
        } 
    }
    this.http.send();
}
// HTTP POST request
// HTTP UPDATE request
// HTTP DELETE request