JSX
merupakan eksetensi syntax react, menghasilkan react elemen. Penggunaan JSX lebih memudahkan pembaca karena hampir sama dengan HTMl.
Penamaan elemen react:
- Kapitalisasi untuk komponen reactnya
- Huruf kecil untuk komponen bawaan (h1, div, span, dll)
 Menentukan atribut dengan JSX, penamaan menggunakan camelCase


React, library javascript untuk membuat UI yang interaktif dan cepat.
React dominan dibagian View saja. 

node modules jgn diangkat ke repository, caranya di git ignore masukin node_modules


props, singkatan dari properti. Dapat membuat sebuah komponen lebih dinamis bisa diisi apa saja.
Kalau membuat file didalam folder src.
Rooting ada 2 cara, hooks dan component. 
rooting menggunakan react-rooter-dom
install npm install react-rooter-dom
Apabila melakukan router menggunakan navigate dan locationn
navigate: kirim
location: nangkap


Beberapa method lifecycle,
- render, melakukan required di classc omponent
- componentDidMount, dipanggil ketika componentnya sudah di render
- componenetDidUpdate, dipanggil ketika component sudah diupdate atau perubahan data
- componentWillUnmount, dipanggil ketika component akan dihancurkan