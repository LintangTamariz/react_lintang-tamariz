const tambahData = document.getElementById('tambahdata');
tambahData.addEventListener("submit", (e) => {
    e.preventDefault();
    let productName = document.getElementById('productname').value;
    let productCategori = document.getElementById('produkkategori').value;
    let image = document.getElementById('inputimage').value;
    let optionProduct = document.getElementById('optionproduct');
    let optionProduct1 = document.getElementById('optionproduct1');
    let optionProduct2 = document.getElementById('optionproduct2');
    let description = document.getElementById('textarea').value;
    let productPrice = document.getElementById('productprice').value;

    let table = document.getElementById("outputTable");
    let newRow = table.insertRow(table.rows.length);
    
    

    if ((productName.length > 25)){
        console.log('harus kurang dari 25 tidak boleh kosong')
        alert ('Last Name must not exceed 25 characters'+ '\n' + 'Please enter a valid Prouct name')
        document.getElementById('productname').style.borderColor = "red";
        return ;
    }
    if (/[#@{}]/.test(productName)) {
        alert("Name must not contain symbols.");
        document.getElementById('productname').style.borderColor = "red";
        return false;
    }

    if (productName == null || productName == ""){
        alert ('Please enter a valid Prouct name')
        document.getElementById('productname').style.borderColor = "red";
        return;
    }

    else {
        // for (var i = 1, row; row = table.rows[i]; i++) {
        //     console.log(i)
        //     newRow.insertCell(0).innerHTML = i;
            
        // }
        newRow.insertCell(0).innerHTML = productName;
        newRow.insertCell(1).innerHTML = productCategori;
        newRow.insertCell(2).innerHTML = image;
        if (optionProduct1.checked == true && optionProduct2.checked == true){  
            return alert("Please mark only one checkbox either Yes or No");  
          }  
          else if (optionProduct.checked == true){  
            var y = optionProduct.value;  
            newRow.insertCell(3).innerHTML = y;
            newRow.insertCell(4).innerHTML = description;
            newRow.insertCell(5).innerHTML = productPrice;
            ;   
          }   
          else if (optionProduct1.checked == true){  
            var y = optionProduct1.value;  
            newRow.insertCell(3).innerHTML = y;
            newRow.insertCell(4).innerHTML = description;
            newRow.insertCell(5).innerHTML = productPrice;
            ;   
          }   
          else if (optionProduct2.checked == true){  
            var y = optionProduct2.value;  
            newRow.insertCell(3).innerHTML = y;
            newRow.insertCell(4).innerHTML = description;
            newRow.insertCell(5).innerHTML = productPrice;
            
            ;   
        
          }   
        



            
    }

    

    
    

}
)
