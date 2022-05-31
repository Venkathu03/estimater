var select=document.getElementById('select')
var button=document.getElementById('btn')
button.addEventListener('click',tables)
function add(params) {
    var x=select.value
    console.log(x);
    
}
function tables() {
    var createtable='<table>'+
    '<tr>'+
    '<th>Accessories</th>'+
    '<th>Unit price</th>'+
    '<th>Qty</th>'+
    '<th>Price</th>'+
    '<th>Action</th>'+
    '</tr>'+
    '<tr>'+
    '<th>frame</th>'+
    '<th><input type="number"id="qty"</th>'+
    '<th><input type="number"id="price"</th>'+
    '<th><input type="number"id="total"</th>'+
    '<th><button id=btn1>x</button></th>'+
    
    '</tr>'+
    '<tr>'+
    '<th>door</th>'+
    '<th><input type="number"id="qty2"</th>'+
    '<th><input type="number"id="price2"</th>'+
    '<th><input type="number"id="total2"</th>'+
    '<th><button id=btn2>x</button></th>'+
    '</tr>'+
    '<tr>'+
    '<th>screw</th>'+
    '<th><input type="number"id="qty3"</th>'+
    '<th><input type="number"id="price3"</th>'+
    '<th><input type="number"id="total3"</th>'+
    '<th><button id=btn3>x</button></th>'+
    '</tr>'+
    '<tr>'+
    '<th>stopper</th>'+
    '<th><input type="number"id="qty4"</th>'+
    '<th><input type="number"id="price4"</th>'+
    '<th><input type="number"id="total4"</th>'+
    '<th><button id=btn4>x</button><button id=addbtn>+</button></th>'+
    '</tr>'+
    '<tr>'+
    '<td colspan=2>Total<td>'+
    '<td><input type="number" id="maintotal"</td>'+
    '</tr>'+
    ' </table>'
    document.getElementById('table').innerHTML=createtable


var total=document.getElementById('total')
total.addEventListener('mouseenter',firstrow)

function firstrow() {

    var qty=document.getElementById('qty').value
var price=document.getElementById('price').value
var qtyp= (qty)*(price)
total.value=qtyp
}
var total2=document.getElementById('total2')
total2.addEventListener('mouseenter',secondrow)
function secondrow() {
    
var qty2=document.getElementById('qty2').value
var price2=document.getElementById('price2').value
var x=(qty2)*(price2)
total2.value=x
}
var total3=document.getElementById('total3')
total3.addEventListener('mouseenter',thirdrow)
function thirdrow() {
    var qty3=document.getElementById('qty3').value
    var price3=document.getElementById('price3').value
    var x1=(qty3)*(price3)
    total3.value=x1
    
}
var total4=document.getElementById('total4')
total4.addEventListener("mouseenter",fourthrow)
function fourthrow() {
    var qty4=document.getElementById('qty4').value
    var price4=document.getElementById('price4').value
    var x2=(qty4)*(price4)
    total4.value=x2

    
}

//clearbtn

var btn1=document.getElementById('btn1')
btn1.addEventListener('click',clear)
function clear() {
    var qty=document.getElementById('qty')
    var price=document.getElementById('price')
qty.value=null;
price.value=null;
    
}
var btn2=document.getElementById('btn2')
btn2.addEventListener('click',clear2)
function clear2() {
    var qty2=document.getElementById('qty2')
    var price2=document.getElementById('price2')
qty2.value=null;
price2.value=null;
    
}
var btn3=document.getElementById('btn3')
btn3.addEventListener('click',clear3)
function clear3() {
    var qty3=document.getElementById('qty3')
    var price3=document.getElementById('price3')
qty3.value=null;
price3.value=null;
    
}
var btn4=document.getElementById('btn4')
btn4.addEventListener('click',clear4)
function clear4() {
    var qty4=document.getElementById('qty4')
    var price4=document.getElementById('price4')
qty4.value=null;
price4.value=null;
    
}
//total

var maintotal=document.getElementById('maintotal')
maintotal.addEventListener('mouseenter',totals)
function totals() {
    var fulltotal=parseInt(total.value)+parseInt(total2.value)+parseInt(total3.value)+parseInt(total4.value);
    maintotal.value=fulltotal
}





//addrow
var addbtn=document.getElementById('addbtn')
addbtn.addEventListener('click',addrow)
function addrow() {
    var add='<table>'+
     '<tr>'+
      '<th><input type=text id=</th>'+
      '<th><input type=number id=Qty</th>'+
      '<th><input type=number id=Price</th>'+
      '<th><input type=number id=Total</th>'+
      '<th><button id=btnnew>x</button></th>'+
    '</tr>'+
    '</table>'
    var row=document.getElementById('table')
    var row2=row.insertRow(5)
    row2.innerHTML=add
    
}

}