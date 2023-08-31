    const tambahData = document.getElementById('tambahdata');
    tambahData.addEventListener("submit", (e) => {
        e.preventDefault();
        let productName = document.getElementById('productname').value;
        let productCategori = document.getElementById('produkkategori').value;
        let image = document.getElementById('inputimage').value;
        let optionProduct = document.getElementById('optionproduct').value;
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
            for (var i = 0, row; row = table.rows[i]; i++) {
                //iterate through cells
                //cells would be accessed using the "cell" variable assigned in the for loop
                newRow.insertCell(0).innerHTML = i;
            }
            newRow.insertCell(1).innerHTML = productName;
            newRow.insertCell(2).innerHTML = productCategori;
            newRow.insertCell(3).innerHTML = image;
            newRow.insertCell(4).innerHTML = optionProduct;
            newRow.insertCell(5).innerHTML = description;
            newRow.insertCell(6).innerHTML = productPrice;


                
        }

        

        
        

    }
    )
