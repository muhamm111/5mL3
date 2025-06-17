// let str = 'nega bugun kopchilik kelmadi'
// console.log(str.length);
// console.log(str.includes('nega'));
// console.log(str.indexOf('k'));
// console.log(str.trim);
// console.log(str.replace('oquvchilar', 'tentaklar'));

// // console.log(str.replace('perestavlyaet mestami'));


// // console.log(str.trim('ubiraet probeli'));

// // console.log(str.indexOf('zdes on schitaet kakoy on po schetu'));

// // console.log(str.includes('on sdes ishet slova v predlojenii') );

// // js, pithon 1 dan emas 0 dan sanaydi!!!!
// // metod bu nima?
// // function
// // metod bu object ichida achilgan function 





let name = prompt('ismingizni kiriting')

if(name){
    let numName = prompt('1)ismingizni katta da ' + name.toUpperCase() + '\n' + '2) yoki kichkinada ' + name.toLowerCase() )
    
    if (numName = 1){
        alert(name.toUpperCase())
    }else if (numName == 2){
        alert (name.toLowerCase())
    }else {
        alert('siz 1 yoki 2 tanlamadizku🤦‍♂️')
    }
}
else{ 
    alert('isim kiritmagangizni kuzatib turiman axir😉😑')
}