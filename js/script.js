var numOfItems=0;

function runCode() {
    alert("Hello Wolrld");
}

function addToList() {
    var item = document.getElementById('Input').value
    if(item != ""){
	var text = document.createTextNode(item)
    var newItem = document.createElement('li')
    newItem.id=numOfItems++
    newItem.onclick=function(){
        document.getElementById('ShopingList').removeChild(this)   
        numOfItems--
        document.getElementById('total').textContent=numOfItems

        };
	newItem.appendChild(text)
    document.getElementById('ShopingList').appendChild(newItem)

    document.getElementById('total').textContent=numOfItems

    }
}

