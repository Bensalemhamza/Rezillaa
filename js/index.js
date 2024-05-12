// menubar mobile
const hamburger = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');
const closed = document.querySelector('.close')
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('hide');
});
closed.addEventListener('click', () => {
    navMenu.classList.toggle('hide');
});

//switch images
const currentImage = document.getElementById('currentImage');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const line = document.querySelectorAll('.line')

const images = [
    "a.png",
    "b.png",
    "c.png",
    "d.png",
];

let currentIndex = 0; // Index of the currently displayed image

prevButton.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    currentImage.src = './images/'+images[currentIndex];
    
});

nextButton.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    currentImage.src = './images/'+images[currentIndex];
});

// form 
const forrent = document.getElementById('forrent')
const forsale = document.getElementById('forsale')
const linerent = document.getElementById('linerent')
const linesale = document.getElementById('linesale')
forrent.addEventListener('click', () => {
        linerent.classList.replace('hide', 'block');
        linesale.classList.replace('block', 'hide');
});
forsale.addEventListener('click', () => {
        linerent.classList.replace('block', 'hide');
        linesale.classList.replace('hide', 'block');
});

// more and less 
const divshow = document.querySelectorAll('#div-more');
const bshow = document.querySelectorAll('#more');
const bless = document.querySelectorAll('#less')
for (let i=0 ; i < bshow.length; i++){
    bshow[i].addEventListener('click', function(){
        divshow[i].classList.toggle("hidden");
        bless[i].classList.toggle("hidden")
        bshow[i].classList.toggle("hidden")
    });
};
for( let i = 0 ;i < bless.length ; i++){
    bless[i].addEventListener('click', function(){
        divshow[i].classList.toggle("hidden");
        bless[i].classList.toggle("hidden")
        bshow[i].classList.toggle("hidden")
    });
};

// all rent sell
const group = document.getElementById('group')
const all = document.getElementById('all')
const sell = document.getElementById('sell')
const rent = document.getElementById('rent')
const divall = document.getElementById('divall')
const divrent = document.getElementById('divrent')
const divsell = document.getElementById('divsell')
all.addEventListener('click', () => {
    all.classList.replace('lestedinavtive', 'lestedactive');
    sell.classList.replace('lestedactive', 'lestedinavtive');
    rent.classList.replace('lestedactive', 'lestedinavtive');
    divall.classList.replace('hide', 'block');
    divrent.classList.replace('block', 'hide');
    divsell.classList.replace('block', 'hide');
});
sell.addEventListener('click', () => {
    sell.classList.replace('lestedinavtive', 'lestedactive');
    all.classList.replace('lestedactive', 'lestedinavtive');
    rent.classList.replace('lestedactive', 'lestedinavtive');
    divsell.classList.replace('hide', 'block');
    divrent.classList.replace('block', 'hide');
    divall.classList.replace('block', 'hide');
});
rent.addEventListener('click', () => {
    rent.classList.replace('lestedinavtive', 'lestedactive');
    sell.classList.replace('lestedactive', 'lestedinavtive');
    all.classList.replace('lestedactive', 'lestedinavtive');
    divrent.classList.replace('hide', 'block');
    divall.classList.replace('block', 'hide');
    divsell.classList.replace('block', 'hide');
});

//
const boxport = document.getElementById('boxport')
const nextbtn = document.getElementById('nextbtn')
const prevbtn = document.getElementById('prevbtn')
const port =document.querySelectorAll('#port')
let i = 0 ;
nextbtn.addEventListener('click', () => {
    i++;
    if (i >= boxport.length) {
        i = 0;
    };
    port[i--].classList.toggle("hidden");
    port[i].classList.toggle("hidden");
    i++;
})
prevbtn.addEventListener('click', () => {
    i--;
    if (currentIndex < 0) {
        currentIndex = boxport.length - 1;
    };
    port[i++].classList.toggle("hidden");
    port[i].classList.toggle("hidden");
    i-- ;
})


// Footer Subscribe to our Newsletter!
const inp_email = document.getElementById('input-email')
const send_email = document.getElementById('email-send')
const error_Message = document.getElementById('errorMessage');
const valid_Message = document.getElementById('validemessage');
send_email.addEventListener('click',function(event){
    event.preventDefault();
    const emailValue = inp_email.value.trim();
    if (!validateEmail(emailValue)) {
        error_Message.textContent = "Invalid email format. Please enter a valid email address.";
        inp_email.classList.add('invalid');
    } else {
        error_Message.textContent = "";
        inp_email.classList.remove('invalid');
        valid_Message.textContent = "Sent sucesfully.";
        function myGreeting (){
            valid_Message.textContent = '';
        }
        const myTimeout = setTimeout(myGreeting, 1000);
        // Simulate form submission (replace with your actual submission logic)
        console.log("Email submitted:", emailValue);
        inp_email.value = ''
    }
    
})

function validateEmail(email) {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
}

