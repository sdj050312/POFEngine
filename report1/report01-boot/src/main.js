var links = document.querySelectorAll('.check a');

links.forEach(function(link) {
    link.addEventListener('click', function() {
        
        links.forEach(function(l) {
            l.classList.remove('plusColor');
        });
  
        link.classList.add('plusColor');
    });
  
});

const icon = document.querySelector('#ch'); // Select all <span> elements

icon.addEventListener('click',function(){
    
    icon(function(j){
        j.classList.remove('active');
    });
    icon.classList.add('active');
    
});

const firstIcon = document.querySelectorAll('.check a');

firstIcon.forEach(function(first){
    console.log();
    first.length[0].style('bac')
})