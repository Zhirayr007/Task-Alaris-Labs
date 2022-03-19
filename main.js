//попробовать сделать как объект


let wrapper = document.querySelector('div');

let blockBUTTON = document.createElement('div');
blockBUTTON.className = "blockforbutton";
wrapper.append(blockBUTTON);//дабавляем div в блок wrapper

let buttonUP = document.createElement('button');
buttonUP.className = "buttonUP";
let imegUP =document.createElement('img');
imegUP.src='./img/up.png';
buttonUP.append(imegUP);
blockBUTTON.append(buttonUP);//дабавляем button в блок wrapper

let buttonTwoUP = document.createElement('button');
buttonTwoUP.className = "buttonTwoUP";
let imegTwoUP =document.createElement('img');
imegTwoUP.src='./img/2up.png';
buttonTwoUP.append(imegTwoUP);
blockBUTTON.append(buttonTwoUP);//дабавляем button в блок wrapper

let buttonDOWN = document.createElement('button');
buttonDOWN.className = "buttonDOWN";
let imegDOWN =document.createElement('img');
imegDOWN.src='./img/down.png';
buttonDOWN.append(imegDOWN);
blockBUTTON.append(buttonDOWN);//дабавляем button в блок wrapper

let buttonTwoDOWN = document.createElement('button');
buttonTwoDOWN.className = "buttonTwoDOWN";
let imegTwoDOWN =document.createElement('img');
imegTwoDOWN.src='./img/2down.png';
buttonTwoDOWN.append(imegTwoDOWN);
blockBUTTON.append(buttonTwoDOWN);//дабавляем button в блок wrapper



//Это все для первого столбика==========================================================================================
let block1 = document.createElement('div');
block1.className = "block";
wrapper.append(block1);//дабавляем div в блок wrapper

let title1 = document.createElement('div');
title1.className = "title";
title1.innerHTML = "Available";
block1.append(title1);//дабавляем div в блок block

let content1 = document.createElement('div');
content1.className = "content";
block1.append(content1);//дабавляем div в блок block
//list.before('before');

let list1 = document.createElement('ul');
list1.className = "list";
content1.append(list1);//дабавляем ul в блок content

//Массив дл элементов
let element1 = [];

for (let i = 0; i < 5; i++) {
	//element[i] = "Watch " + 1;
	element1[i] = document.createElement('li');
	element1[i].className = "element";
	element1[i].innerHTML = "Watch " + (i+1);
	element1[i].addEventListener("click", function() {
		element1[i].style.backgroundColor="white";
		for(let j = 0; j < 5; j++){
			if(i!=j)
			element1[j].style.backgroundColor="blue";
		}
		console.log("a");
	 });
	list1.append(element1[i]);//дабавляем li в блок list
}
//============================================================================

//Второй столбик==================================================================
let block2 = document.createElement('div');
block2.className = "block";
wrapper.append(block2);//дабавляем div в блок wrapper

let title2 = document.createElement('div');
title2.className = "title";
title2.innerHTML = "Selected";
block2.append(title2);//дабавляем div в блок block

let content2 = document.createElement('div');
content2.className = "content";
block2.append(content2);//дабавляем div в блок block
//list.before('before');

let list2 = document.createElement('ul');
list2.className = "list";
content2.append(list2);//дабавляем ul в блок content




//==========================================================================

//Кнопки==========================================================================
let blockBUTTON2 = document.createElement('div');
blockBUTTON2.className = "blockforbutton";
wrapper.append(blockBUTTON2);//дабавляем div в блок wrapper

let buttonUP2 = document.createElement('button');
buttonUP2.className = "buttonUP";
let imegUP2 =document.createElement('img');
imegUP2.src='./img/up.png';
buttonUP2.append(imegUP2);
blockBUTTON2.append(buttonUP2);//дабавляем button в блок wrapper

let buttonTwoUP2 = document.createElement('button');
buttonTwoUP2.className = "buttonTwoUP";
let imegTwoUP2 =document.createElement('img');
imegTwoUP2.src='./img/2up.png';
buttonTwoUP2.append(imegTwoUP2);
blockBUTTON2.append(buttonTwoUP2);//дабавляем button в блок wrapper

let buttonDOWN2 = document.createElement('button');
buttonDOWN2.className = "buttonDOWN";
let imegDOWN2 =document.createElement('img');
imegDOWN2.src='./img/down.png';
buttonDOWN2.append(imegDOWN2);
blockBUTTON2.append(buttonDOWN2);//дабавляем button в блок wrapper

let buttonTwoDOWN2 = document.createElement('button');
buttonTwoDOWN2.className = "buttonTwoDOWN";
let imegTwoDOWN2 =document.createElement('img');
imegTwoDOWN2.src='./img/2down.png';
buttonTwoDOWN2.append(imegTwoDOWN2);
blockBUTTON2.append(buttonTwoDOWN2);//дабавляем button в блок wrapper

// //Массив дл элементов
// let element2 = [];

// for (let i = 0; i < 5; i++) {
// 	//element[i] = "Watch " + 1;
// 	element2[i] = document.createElement('li');
// 	element2[i].className = "element";
// 	element2[i].innerHTML = "Watch " + 1;
// 	list2.append(element2[i]);//дабавляем li в блок list
// }
