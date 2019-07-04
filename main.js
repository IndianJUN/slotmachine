'use strict'；
{
    class panel{
        constructor(){
            const section = document.createElement('secttion');
            section.classList.add('panel');
        
            this.img = document.createElement('img');
            this.img.src = 'img/seven.png';

            this.stop = document.createElement('div');
            this.stop.textContent ='STOP';
            this.stop.classList.add('stop');
        }
    }
}