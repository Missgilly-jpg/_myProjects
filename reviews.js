const reviews=[{
id:1,
name: "suzzy",
job: "fashion designer",
img: "young-asian-female-with-clasped-hands.webp",
text:"I believe in beauty, style and nature ..be my guest in this tour.",

},
{
    id:2,
    name: "Mr. Ojo",
    job: "web developer",
    img: "IMG_2514.jpg"  ,
    text:"We develop anything and everything.",

},
{
    id:3,
    name: "spongebob",
    job: "chef",
    img: "spongebob.jpg"   ,
    text:"We cook anything and everything.",



},

{
    id:4,
    name: "bella ray",
    job: "fashion designer",
    img: "beautiful-girl-with-curly-hairstyle.jpg",
    text:"We sew anything and everything.",


},
{

    id:5,
    name: " Trey Asa",
    job: "   ECONOMIST  ",
    img: "  FotoGrid_20230912_110402602.jpg  ",
    text:"  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, eaque. Tenetur, unde sunt. Delectus unde tenetur cupiditate dolorum deserunt <br>fugiat ab et dolore recusandae, velit illum harum reprehenderit cumque? ",


},




];
const img=document.getElementById("image");
const author=document.getElementById("author");
const job=document.getElementById("job");
const info=document.getElementById("info");

const prevBtn= document.querySelector('.prev-btn');
const nextBtn= document.querySelector('.next-btn');
const randomBtn= document.querySelector('.random-btn');


let currentItem = 0;

window.addEventListener('DOMContentLoaded',function(){
 showPerson();
});

function showPerson(){

    const item=reviews[currentItem];
    img.src=item.img ;
    author.textContent =item.name;
    job.textContent=item.job;
    info.textContent=item.text;

}
nextBtn.addEventListener("click" ,function(){
currentItem++;
if (currentItem > reviews.length-1){currentItem=0 ;}
showPerson();
});

prevBtn.addEventListener("click" ,function(){
    currentItem--;
    if (currentItem <0){currentItem=reviews.length-1;}
    showPerson();
    });

    randomBtn.addEventListener("click" ,function(){
        currentItem=Math.floor(Math.random() * reviews.length);
      console.log
      showPerson();

        });