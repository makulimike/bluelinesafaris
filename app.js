function showmenulist(){
    const showmenulist = document.querySelector('.menu-linkforfons')
    showmenulist.style.display = 'flex';
    showmenulist.style.transition=  '3s';

}
function closemenulist(){
    const closemenulist = document.querySelector('.menu-linkforfons')
    closemenulist.style.display = 'none';
    showmenulist.style.transition= 'all 2s';

}

window.addEventListener('scroll',reveal);
    function reveal(){
        // alert('welcome home');
        var reveals= document.querySelector('section');
        for(var i = 0 ; i< reveals.length ; i++){
            var windowheight= window.innerHeight;
            var revealtop= reveals[i].getBoundingClientsRect().top;
            var revealpoint = 150;
            if(revealpoint < windowheight - revealpoint){
                reveals[i].classlist.add('activetab');
            
        }else{
            reveals[i].classlist.remove('activetab');
        }
    } 
}
    