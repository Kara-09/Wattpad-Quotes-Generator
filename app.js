//Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');
let book = document.querySelector('.book');

const quotes = [{
    quote: '"Mahal kita, kahit pa saglit."',
    person:'-Kyle Montello',
    book:'from Montello High: School of Gangsters'
}, {
    quote: '"Sometimes, love is so powerful that it makes people do things they never thought they were capable of."',
    person:'-Kenji Delos Reyes',
    book:'from Shes Dating the Gangster'
}, {
    quote: '"Pag nagmahal ka, dapat handa ka ring masaktan."',
    person:'-Cross Sandford',
    book:'from Diary ng Panget'
}, {
    quote: '"Bastat ikaw, ako, tayo, walang iwanan."',
    person:'-Candice Gonzales',
    book:'from The Four Bad Boys and Me'
}, {
    quote: '"Hindi lahat ng tao, kahit mahal mo, magiging para sayo."',
    person:'-Elle Arcache',
    book:'from Mr. Popular Meets Ms. Nobody'
}, {
    quote: '"Kapag mahal mo, hindi mo sya susukuan kahit ang hirap na."',
    person:'-Janine Lazaro',
    book:'from My Tag Boyfriend'
}, {
    quote: '"Sometimes, the love were looking for is just right in front of us, but were too blind to see it."',
    person:'-Elijah Riley Montefalco',
    book:'from Voiceless'
}, {
    quote: '"Hindi porket sorry, okay na lahat."',
    person:'-Summer',
    book:'from Teen Clash'
}, {
    quote: '"Ang pag-ibig, parang kandila. Kapag inabot mo, masakit."',
    person:'-Jamila Villanueva',
    book:'from Ang Boyfriend Kong Artista'
}, {
    quote: '"Pag may mahal ka at hindi ka mahal, sabihin mo sa kanya para mawala na ang what ifs mo."',
    person:'-Amara Dela Vega',
    book:'from Destined with the Bad Boy'
}, {
    quote: '"Mas mabuting maging mabuting tao kaysa maging magandang nilalang."',
    person:'-Samatha Perez',
    book:'from Talk Back and Youre Dead'
}, {
    quote: '"Minsan kasi, sa pag-ibig, ang sakit-sakit na nagiging tama."',
    person:'-Kylie',
    book:'from My Facebook Boyfriend for Real'
}, {
    quote: '"Minsan, kailangan natin ng kaunting pagtitiis para sa taong mahal natin."',
    person:'-Ariez',
    book:'from Three Words, Eight Letters, Say It and Im Yours'
}, {
    quote: '"Ang pag-ibig, hindi hinahanap. Hindi iniimbento. Itoy dumarating na parang bagyo."',
    person:'-Lance Mariano',
    book:'from Sadist Lover'
}, {
    quote: '"Lahat ng nangyayari, may dahilan. Walang coincidence."',
    person:'-Vince Dela Vega',
    book:'from The Despicable Guy'
}, {
    quote: '"Ang pag-ibig ay hindi lamang nararamdaman, itoy pinaniniwalaan at pinahahalagahan."',
    person:'-Katsumi Kabe',
    book:'from Ang Boyfriend Kong Gangster'
}, {
    quote: '"Ang pag-ibig, hindi parang cellphone na isang text lang, pinalitan mo na."',
    person:'-Princesa Guevarra',
    book:'from My Prince'
}, {
    quote: '"Kapag sinabi mong mahal mo ako, dapat totoo yun."',
    person:'-Allison Dela Cruz',
    book:'from Accidentally in Love with a Gangster'
}, {
    quote: '"Lahat ng tao nagkakamali. Pero wag mong idamay ang pag-ibig sa pagkakamaling yon."',
    person:'-Rosslyn Nario',
    book:'from Boyfriend Corp.'
}, {
    quote: '"Ang pag-ibig ay hindi isang laro na kapag nagsawa ka na, itatapon mo na lang."',
    person:'-Drake Swift',
    book:'from The Bet'
},];

btn.addEventListener('click', function(){
    let random=Math.floor(Math.random()*quotes.length);
    quote.innerText=quotes[random].quote;
    person.innerText=quotes[random].person;
    book.innerText=quotes[random].book;
})