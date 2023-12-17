$(document).ready(function () {
    $(".Receipt").hide();
    $(function () { 
        $(".card-reader").droppable(); 
        $(".credit-card").draggable({ 
            opacity: 1
        });  
        $(".card-reader").droppable({ 
            drop: function () {
                alert("결제완료");
            } 
        }); 
        $("credit-card").hide();
        $("card-reader").hide();
        $(".Receipt").show();
    });
    
    function getClock() {
        const date = new Date();
        const year = String(date.getFullYear()).padStart(4, "0");
        const month = String(date.getMonth()+1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        clock.innerText = (`${year}-${month}-${day} ${hours}:${minutes}`);
    }
    
    getClock();
})
