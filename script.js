number = 0

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn')

btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')){
            number --;
        }
        else if (styles.contains('increase')) {
            number ++;
        } 
        else {
            number = 0
        }
        value.textContent = number;
        color()
    })
})


function color() {
    if (number >0) {
        value.style.color = 'green'
    }
    else if(number<0){
        value.style.color = 'red'
    }
    else{
        value.style.color = 'black'
    }
}


