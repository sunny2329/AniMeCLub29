const navbar = document.querySelector('header');

        window.onscroll = () => {
            if(window.scrollY > 800) {
                navbar.classList.add('bg-[purple]');
                navbar.classList.add('border-b');
                navbar.classList.add('border-orange-400');
            } else {
                navbar.classList.remove('bg-[purple]');
                navbar.classList.remove('border-b');
                navbar.classList.add('border-orange-400');
            }
        }

        // Mobile menu
        const hamburger = document.querySelector('#hamburger');
        const menu = document.querySelector('#menu');
        const hLink = document.querySelectorAll('#hLink');
        const faSolid = document.querySelector(".fa-bars");

        hamburger.addEventListener("click", () => {
            menu.classList.toggle('hidden');
            faSolid.classList.toggle('fa-xmark');
        })

        hLink.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.toggle('hidden');
                faSolid.classList.toggle('fa-xmark');
            })
        })

        // quotes
        const userTexts = document.getElementsByClassName('user-text');
        const userPics = document.getElementsByClassName('user-pic');

        function showReview() {
            for(userPic of userPics) {
                userPic.classList.remove("active-pic");
            }
            for(userText of userTexts) {
                userText.classList.remove("active-text");
            }

            let i = Array.from(userPics).indexOf(event.target);

            userPics[i].classList.add('active-pic');
            userTexts[i].classList.add('active-text');
        }

        const toggleBtn = document.getElementById('toggleBtn');

        const card_1_front = document.querySelector("#card_1_front");
        const card_1_back = document.querySelector("#card_1_back");

        const card_2_front = document.querySelector("#card_2_front");
        const card_2_back = document.querySelector("#card_2_back");

        const card_3_front = document.querySelector("#card_3_front");
        const card_3_back = document.querySelector("#card_3_back");

        toggleBtn.addEventListener('change', () => {
            card_1_front.classList.toggle('-rotate-y-180');
            card_1_back.classList.toggle('rotate-y-180');

            card_2_front.classList.toggle('-rotate-y-180');
            card_2_back.classList.toggle('rotate-y-180');

            card_3_front.classList.toggle('-rotate-y-180');
            card_3_back.classList.toggle('rotate-y-180');
            
        })


        //dark mode

        const dark = document.querySelectorAll('.fa-circle-half-stroke');

        

        dark.forEach(p=>{
            p.addEventListener('click',function(){

                

                const title = document.querySelectorAll('.titlelm');
        
                const btn = document.querySelectorAll('.btnlm');
        
                const p  = document.querySelectorAll('.plm')
        
                const bg = document.querySelectorAll('.bglight');
        
                const div = document.querySelectorAll('.divlm');
        
                const lism = document.querySelectorAll('.lismlm');
        
                const title1 = document.querySelector('.title1');
        
                const lilg = document.querySelectorAll('.lilglm');
        
                const title2 = document.querySelector('.title2');
                const fealm = document.querySelectorAll('.fealm');
                const ho = document.querySelectorAll('.hoverlm');
                const qu = document.querySelectorAll('.qulm');
                const prilm = document.querySelectorAll('.prilm');
                const dolm = document.querySelectorAll('.dolm');
                const folm = document.querySelectorAll('.folm');
                const prdm = document.querySelectorAll('.only');

                title.forEach(ti =>{
                    ti.classList.toggle('titledm');
                })
    
                btn.forEach(btn =>{
                    btn.classList.toggle('btndm');
                })
    
    
                bg.forEach(bg =>{
                    bg.classList.toggle('bgdark');
                })
    
    
                p.forEach(p =>{
                    p.classList.toggle('pdm');
                })
    
                div.forEach(p =>{
                    p.classList.toggle('divdm');
                })
    
                lism.forEach(p =>{
                    p.classList.toggle('lismdm');
                })
    
                lilg.forEach(p =>{
                    p.classList.toggle('lilgdm');
                })
    
                title1.classList.toggle('colordark2');
                title2.classList.toggle('colordark');
    
    
                fealm.forEach(p =>{
                    p.classList.toggle('feadm');
                })
    
                ho.forEach(p =>{
                    p.classList.toggle('hoverdm');
                })
    
    
                qu.forEach(p =>{
                    p.classList.toggle('qudm');
                })
    
    
                prilm.forEach(p =>{
                    p.classList.toggle('pridm');
                })
    
                dolm.forEach(p =>{
                    p.classList.toggle('dodm');
                })
    
                folm.forEach(p =>{
                    p.classList.toggle('fodm');
                })
    
    
                prdm.forEach(p =>{
                    p.classList.toggle('prdm');
                })
            })
        })
