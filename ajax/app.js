document.getElementById('customer-btn').addEventListener('click',function(e){
    const xhr = new XMLHttpRequest();
    xhr.open('GET','customer.json',true);
    xhr.onload = function(){
        if(this.status === 200){
            const customer = JSON.parse(this.responseText);
            const output = `
                            ID : ${customer.id} <br>
                            Name: ${customer.name}  <br>
                            Telephone: ${customer.Telephone}<br>
                            Degree : ${customer.University}`;
            document.getElementById('customer').innerHTML = output;
        }
    }
    xhr.send();
})

//load customers 
document.getElementById('customersBtn').addEventListener('click',function(e){
    const xhr = new XMLHttpRequest();
    xhr.open('GET','customers.json',true);
    xhr.onload = function(){
        if(this.status === 200){
            const customers = JSON.parse(this.responseText);
            let output = '';
            customers.forEach(customer => {
                 output += `<ul class"collections">
                          <li>  ID : ${customer.id} </li>
                           <li> Name: ${customer.name}  </li>
                           <li> Telephone: ${customer.Telephone}</li>
                           <li> Degree : ${customer.University}</li>
                           </ul>`;
            });
            document.getElementById('customers').innerHTML = output;
            
        }
    }
    xhr.send();
})