document.addEventListener('DOMContentLoaded', ()=>{


    const cardsList=[
        {
            name:'1',
            image: 'images/img-1.png'
        },
        {
            name:'1',
            image: 'images/img-1.png'
        },
        {
            name:'2',
            image: 'images/img-2.png'
        },
        {
            name:'2',
            image: 'images/img-2.png'
        },
        {
            name:'3',
            image: 'images/img-3.png'
        },
        {
            name:'3',
            image: 'images/img-3.png'
        },
        {
            name:'4',
            image: 'images/img-4.png'
        },
        {
            name:'4',
            image: 'images/img-4.png'
        },
        {
            name:'5',
            image: 'images/img-5.png'
        },
        {
            name:'5',
            image: 'images/img-5.png'
        },
        {
            name:'6',
            image: 'images/img-6.png'
        },
        {
            name:'6',
            image: 'images/img-6.png'
        },
        {
            name:'7',
            image: 'images/img-7.png'
        },
        {
            name:'7',
            image: 'images/img-7.png'
        },
        {
            name:'8',
            image: 'images/img-8.png'
        },
        {
            name:'8',
            image: 'images/img-8.png'
        }];
    cardsList.sort( ()=>0.5 - Math.random());
    const grid=document.querySelector('.gameGrid');

    const attemptsHolder=document.querySelector('.attemptsHolder');
    const foundHolder=document.querySelector('.foundHolder');
    const btnEl=document.querySelector('.btn');
    const cardsInGame=16;
    attempts=0;
    foundCards=0;
    var chosenCards=[];
    var chosenCardsIds=[];
    attemptsHolder.textContent=attempts;
    foundHolder.textContent=foundCards;

    var winAudio = new Audio("sounds/magikarp-jump.mp3"); // Создаём новый элемент Audio
    var correctAudio = new Audio("sounds/tmpq91k5v_6.mp3");
    var wrongAudio = new Audio("sounds/bumpintowall_X5CNQPB.mp3");

    var isStarted=false;
    
    function Start(){
        isStarted=true;
        console.log(isStarted);
    }
    btnEl.addEventListener('click',Start);
   function initiateBoard(){
    
      for(var i =0; i<cardsList.length;i++){
        var card=document.createElement('img');
        card.setAttribute('src','images/pokeball.png');
        card.setAttribute('data-id',i);
        card.addEventListener('click',flipCard);
        grid.appendChild(card);
      
    }
    }
    function flipCard(){
        if(isStarted)
        {
        if(chosenCards.length !=2)
        {
            
            var cardId=this.getAttribute('data-id');
        
            if(this.getAttribute('src')!='images/blank.png')
            {
                chosenCards.push(cardsList[cardId].name);
                chosenCardsIds.push(cardId);
                this.setAttribute('src',cardsList[cardId].image);
                if(chosenCards.length==2){
                    setTimeout(checkForMatch,400);;
                }
            }
        }
        console.log(chosenCards);
    }
       
    }

    function checkForMatch()
    {
        
        if(chosenCardsIds[0]==chosenCardsIds[1])
        {
            chosenCards.pop();
            chosenCardsIds.pop();
        }
        else
        { 
            attempts++;
            var cards=document.querySelectorAll('img');
            var firstCard=chosenCardsIds[0];
            var secondCard=chosenCardsIds[1];
    
            if(chosenCards[0]==chosenCards[1]){
                correctAudio.play();
                foundCards++;
                cards[firstCard].setAttribute('src','images/blank.png');
                cards[secondCard].setAttribute('src','images/blank.png');
            }else{
                wrongAudio.play();
                cards[firstCard].setAttribute('src','images/pokeball.png');
                cards[secondCard].setAttribute('src','images/pokeball.png');
            }
            chosenCards=[];
            chosenCardsIds=[];
            attemptsHolder.textContent=attempts;
            foundHolder.textContent=foundCards;
            if(foundCards==cardsInGame/2)
            {
                winAudio.play();
                alert('Вы победили');
            }}
        
    }
    initiateBoard();

})