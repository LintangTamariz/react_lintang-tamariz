// untuk mengambil semua element dari form tambah data //

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
    // Membuat tabel //
    let table = document.getElementById("body");        
    let newRow = table.insertRow(table.rows.length);
    // Membuat tabel //
    

    if ((productName.length > 25)){
        console.log('harus kurang dari 25 tidak boleh kosong')
        alert ('Last Name must not exceed 25 characters')
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
        if (optionProduct.checked == true && optionProduct1.checked == true && optionProduct2.checked == true){  
            return alert("Please mark only one checkbox either Yes or No");  
        }  
        else if (optionProduct.checked == true || optionProduct1.checked == true || optionProduct2.checked == true){  
            if(optionProduct.checked == true) {
                var y = optionProduct.value;
            } else if (optionProduct1.checked == true) {
                var y = optionProduct1.value;
            } else if (optionProduct2.checked == true){
                var y = optionProduct2.value;
            }
            newRow.insertCell(0).innerHTML = productName;
            newRow.insertCell(1).innerHTML = productCategori;
            newRow.insertCell(2).innerHTML = image;
            newRow.insertCell(3).innerHTML = y;
            newRow.insertCell(4).innerHTML = description;
            newRow.insertCell(5).innerHTML = productPrice;
            newRow.insertCell(6).innerHTML = "<button>Remove</button>";  
        }  else{
            var y = optionProduct.value;  
            newRow.insertCell(0).innerHTML = productName;
            newRow.insertCell(1).innerHTML = productCategori;
            newRow.insertCell(2).innerHTML = image;
            newRow.insertCell(3).innerHTML = '';
            newRow.insertCell(4).innerHTML = description;
            newRow.insertCell(5).innerHTML = productPrice;
            newRow.insertCell(6).innerHTML = "<button>Remove</button>";  
        }        
    }
})



document.querySelector('table').addEventListener('click', function(e){
    if (e.target.tagName == "BUTTON") {
      const tr = e.target.closest('tr');
      tr.remove();
      
    }
});