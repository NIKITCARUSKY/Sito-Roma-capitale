let audio = new Audio();
var request = new XMLHttpRequest();
var count = 0;
console.log("ciao");
function = request
function Main(){
    return{
        DiscordGuildId: '1394320024822612048', // Also know as Discord server ID [ENABLE DISCORD WIDGET ON YOUR DISCORD SERVER!]
        DiscordInviteLink: 'https://discord.gg/2xEw2eQtRU', // Insert your Discord invite link here.
        FacebookLink: 'https://discord.com/invite/XdNwNF4AsK', // Insert your Facebook page link here.
        InstagramLink: 'https://discord.com/invite/XdNwNF4AsK', // Insert your Instagram page link here.
        TikTokLink: 'https://www.tiktok.com/@nikitasmoke__?lang=it-IT', // Insert your TikTok page link here.
        memberCount: 0,
        musicAutoplay: true, // Set this to true if you want the music to autoplay
        musicVolume: 0.1, // Set the volume that you like (0 = 0% ; 0.5 = 50% ; 1 = 100%)
        buttons:[
            {label: 'Home', selected: true},
            {label: 'News', selected: false},
            {label: 'Team', selected: false},
            {label: 'Rules', selected: false},
        ],
        musicList: [
            {label: 'Roma Capitale Roleplay', author: 'Shouse', src: 'audio/romacapitaleroleplay.mp3'},
            {label: 'Yeah, Roma Capitale, fratè, WL chiusa', author: 'Deanz feat. Revel Day', src: 'audio/Yeah, Roma Capitale, fratè, WL chiusa, s (1).mp3'},
        ],
        team:[
            {discord: 'Francescoyt65_', role: 'Designer & Founder & Mapper', img: 'img/member.png'},
            {discord: 'Nikita_Russi', role: 'Founder & Developer', img: 'img/member3.png'},
            {discord: 'Tony', role: 'Developer & Ceo', img: 'img/member2.png'},
            {discord: 'X_VEXS', role: 'Developer & Owner', img: 'img/member1.png'},
        ],
        feed:[
            {
                date: '2023-10-22 18:00',  
                img: 'img/francesco.png',
                author: '@Francescoyt65_', 
            },
            {
                date: '2023-10-22 18:00', 
                img: 'img/news.png',
                author: '@Nikita_Russi', 
            },
            {
                date: '2023-10-22 18:00', 
                img: 'img/news.png',
                author: '@Tony', 
            },
            {
                date: '2023-10-22 18:00', 
                img: 'img/news.png',
                author: '@X_VEXS', 
            },
        ],
        "list": [
            {
              "number": "1.",
              "desc": "Rispetta tutti i giocatori e i membri dello staff. Tratta gli altri come vorresti essere trattato e mantieni un'atmosfera amichevole e accogliente."
            },
            {
              "number": "2.",
              "desc": "Vietato il metagaming. Non usare informazioni o conoscenze esterne al personaggio per influenzare le tue azioni o decisioni all'interno del personaggio."
            },
            {
              "number": "3.",
              "desc": "Il gioco di ruolo è essenziale. Rimani sempre nel personaggio e dai priorità a interazioni immersive e realistiche con gli altri giocatori."
            },
            {
              "number": "4.",
              "desc": "Non impegnarti nel powergaming. Il tuo personaggio non dovrebbe essere invincibile e tutte le interazioni dovrebbero essere leali ed equilibrate."
            },
            {
              "number": "5.",
              "desc": "Usa nomi e storie dei personaggi appropriati. Il nome e il background del tuo personaggio devono essere coerenti con l'ambientazione e la storia del server."
            },
            {
              "number": "6.",
              "desc": "Segui le regole e le linee guida specifiche del server. Ogni server può avere regole e meccaniche uniche, quindi assicurati di comprenderle e rispettarle."
            },
            {
              "number": "7.",
              "desc": "Segui le regole e le linee guida specifiche del server. Ogni server può avere regole e meccaniche uniche, quindi assicurati di comprenderle e rispettarle."
            },
            {
              "number": "8.",
              "desc": "Nessuna molestia o discriminazione. Tratta tutti i giocatori con rispetto e non porre in essere alcuna forma di discriminazione, incitamento all'odio o bullismo."
            }
          ],
        // No touching here!!!!
        isMusicPlaying: false,
        musicOpen: false,
        currentSong: 0,
        listen(){
            if(this.musicAutoplay){
                setTimeout(() => { this.play();}, 100);
            }
            request.open('GET', 'https://discordapp.com/api/guilds/'+this.DiscordGuildId+'/widget.json', true);
            request.onload = function() {
            if (request.status >= 200 && request.status < 400) {
                var data = JSON.parse(request.responseText);
                count = data.presence_count;
            }
            };    
            request.onerror = function() {
            };
            request.send();   
            setTimeout(() => { this.memberCount = count; }, 1000);
        },
        selectBtn(select){
            this.buttons.forEach(function(button){
                button.selected = false;
            });
            return true;
        },
        play(){
           audio.src = this.musicList[this.currentSong].src;
            audio.load();
            audio.play();
            audio.volume = this.musicVolume;
            this.isMusicPlaying = true; 
        },
        pause(){
            audio.pause()
            this.isMusicPlaying = false;
        },
        next(){
            if(this.isMusicPlaying){
                audio.pause()
            }
            if(this.currentSong < this.musicList.length-1){
                this.currentSong++;
            }else{
                this.currentSong = 0;
            }
            audio.src = this.musicList[this.currentSong].src;
            audio.load();
            audio.play();
            this.isMusicPlaying = true;
        },
        prev(){
            if(this.isMusicPlaying){
                audio.pause()
            }
            if(this.currentSong != 0){
                this.currentSong = this.currentSong-1;
            }else{
                this.currentSong = this.musicList.length-1;
            }
            audio.src = this.musicList[this.currentSong].src;
            audio.load();
            audio.play();
            this.isMusicPlaying = true;
        },
    }
}

function copyToClipboard(text) {
    const input = document.createElement('input');
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
  
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.textContent = `Discord ${text} was copied to clipboard`;
    document.body.appendChild(notification);
    notification.style.opacity = 1;
    setTimeout(() => {
      notification.style.opacity = 0;
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 3000);
}
  

$(document).ready(function() {
    var movementStrength = 25;
    var height = movementStrength / $(window).height();
    var width = movementStrength / $(window).width();
    $(document).mousemove(function(e){
        var pageX = e.pageX - ($(window).width() / 2);
        var pageY = e.pageY - ($(window).height() / 2);
        var newvalueX = width * pageX * -1 - 25;
        var newvalueY = height * pageY * -1 - 50;
        $('.bg1').css("background-position", newvalueX+"px     "+newvalueY+"px");
    });

    const moveCursor = (e)=> {
        const mouseY = e.pageY;
        const mouseX = e.pageX;
         
        $('#cursor').css('transform', `translate3d(${mouseX}px, ${mouseY}px, 0)`)
       
    }
    window.addEventListener('mousemove', moveCursor)
});