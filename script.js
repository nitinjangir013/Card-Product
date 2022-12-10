let img= document.getElementsByClassName('img');
let deatils = document.getElementsByClassName('deatils_container');
// Hover Effect Functions

function openCard()
{
  deatils[0].style.height = "auto";
  img[0].style.width ="40%";
  setTimeout(function(){
  deatils[0].style.transition = "all 1s";},500)
  img[0].style.transition = "all 0.3s";
}

function closeCard()
{
	deatils[0].style.height = "0px";
  img[0].style.width ="80%";
  setTimeout(function(){
  deatils[0].style.transition = "all 1s";},500)
  img[0].style.transition = "all 0.3s";
}

function openCard1()
{
  deatils[1].style.height = "auto";
  img[1].style.width ="40%";
  setTimeout(function(){
  deatils[1].style.transition = "all 1s";},500)
  img[1].style.transition = "all 0.3s";
}

function closeCard1()
{
	deatils[1].style.height = "0px";
  img[1].style.width ="80%";
  setTimeout(function(){
  deatils[1].style.transition = "all 1s";},500)
  img[1].style.transition = "all 0.3s";
}

function openCard2()
{
  deatils[2].style.height = "auto";
  img[2].style.width ="40%";
  setTimeout(function(){
  deatils[2].style.transition = "all 1s";},500)
  img[2].style.transition = "all 0.3s";
}

function closeCard2()
{
	deatils[2].style.height = "0px";
  img[2].style.width ="80%";
  setTimeout(function(){
  deatils[2].style.transition = "all 1s";},500)
  img[2].style.transition = "all 0.3s";
}