$(document).ready(function () {
    // .poster 이미지 클릭 시
    $(".poster").click(function () {
        // 숨기기와 보이기
        $(".movieList").hide();
        $(".Ticket").show();

        // 선택한 .poster 이미지의 속성 가져오기
        let selectedImgSrc = $(this).attr("src");

        // 선택한 .poster 이미지의 movieName 가져오기
        let movieName = $(this).siblings(".movieInfo").find(".movieName").text();

        // 선택한 .poster 이미지의 showTime 가져오기
        let showTime = $(this).siblings(".movieInfo").find(".showTime").text();

        // .ticketInfo 업데이트
        $(".ticketInfo .ticketImg").attr("src", selectedImgSrc);
        $(".ticketInfo .ticketInfoText p:first-child").text(movieName);
        $(".ticketInfo .ticketInfoText p:last-child").text(showTime);
    });

    // Home Button
    $(".Ticket .homeicon").click(function () {
        resetNumberButtons();
        $(".Ticket").hide();
        $(".movieList").show();
    });

    $(".Seat .homeicon").click(function () {
        resetNumberButtons();
        resetSeatSelection();
        $(".Seat").hide();
        $(".movieList").show();
    });

    $(".Payment .homeicon").click(function () {
        resetNumberButtons();
        resetSeatSelection();
        $(".Payment").hide();
        $(".movieList").show();
        $(".headerVideo").show();
    });

    // Back Button
    $(".Seat .backicon").click(function () {
        resetSeatSelection();
        $(".Seat").hide();
        $(".Ticket").show();
    });

    // Ticket에서 backicon을 클릭하면 movieList가 나오고
    // 인원수 선택을 초기화 한다.
    $(".Ticket .backicon").click(function () {
        resetNumberButtons();
        $(".Ticket").hide();
        $(".movieList").show();
    });
    $(".Payment .backicon").click(function () {
        $(".Payment").hide();
        $(".Seat").show();
        $(".headerVideo").show();
    });

    //Next Button
    $(".Ticket .nextbtn").click(function () {
        $(".Ticket").hide();
        $(".Seat").show();
    });

    $(".Seat .nextbtn2").click(function () {
        $(".Seat").hide();
        $(".headerVideo").hide();
        $(".Payment").show();
    });

    // Number
    let selectedAdultNumber = null; // 성인 관람 인원을 추적하기 위한 변수
    let selectedTeenagerNumber = null; // 청소년 관람 인원을 추적하기 위한 변수

    // 일반(adult) 버튼 클릭 시
    $(".adult .number").click(function () {
        // 다른 숫자 버튼의 스타일 초기화
        $(".adult .number").not(this).removeClass("selectedANumber").css({
            "background-color": "#eeeeee",
            "color": "#777777"
        });

        // 현재 클릭된 숫자 버튼에 스타일 설정
        $(this).addClass("selectedANumber").css({
            "background-color": "rgb(250, 130, 115)",
            "color": "white"
        });

        // 현재 클릭된 adult의 숫자를 추적
        selectedAdultNumber = parseInt($(this).text());

        if (selectedAdultNumber >= 1 || selectedTeenagerNumber >= 1) {
            $(".nextbtn").css("visibility", "visible");
        } else {
            $(".nextbtn").css("visibility", "hidden");
        }
    });

    // 청소년(teenager) 버튼 클릭 시
    $(".teenager .number").click(function () {
        // 다른 숫자 버튼의 스타일 초기화
        $(".teenager .number").not(this).removeClass("selectedTNumber").css({
            "background-color": "#eeeeee",
            "color": "#777777"
        });

        // 현재 클릭된 숫자 버튼에 스타일 설정
        $(this).addClass("selectedTNumber").css({
            "background-color": "rgb(250, 130, 115)",
            "color": "white"
        });

        // 현재 클릭된 Teenager의 숫자를 추적
        selectedTeenagerNumber = parseInt($(this).text()); 

        if (selectedTeenagerNumber >= 1 || selectedAdultNumber >= 1) {
            $(".nextbtn").css("visibility", "visible");
        } else {
            $(".nextbtn").css("visibility", "hidden");
        }
    });
    
    
        $(document).ready(function () {

        let selectedSeatsCounter = 0; 

        $(".seat").click(function () {
            let selectedANumber = parseInt($(".selectedANumber").text());
            let selectedTNumber = parseInt($(".selectedTNumber").text());
        
            let totalPeople;
        
            if (isNaN(selectedANumber)) {
                totalPeople = selectedTNumber;
            } else if (isNaN(selectedTNumber)) {
                totalPeople = selectedANumber;
            } else {
                totalPeople = selectedANumber + selectedTNumber;
            }
        
            console.log("---------------------------------");
            console.log("selectedANumber:", selectedANumber);
            console.log("selectedTNumber:", selectedTNumber);
            console.log("totalPeople :", totalPeople);
            console.log("---------------------------------");
        
            if (totalPeople > 0) {
                if ($(this).hasClass("selected")) {
                    $(this).removeClass("selected").css({
                        "background-color": "white",
                        "color": "black"
                    });
                    --selectedSeatsCounter;
                } else {
                    $(this).addClass("selected").css({
                        "background-color": "rgb(250, 130, 115)",
                        "color": "white"
                    });
                    ++selectedSeatsCounter;
                }
        
                console.log("Clicked seat");
                console.log("totalPeople :", totalPeople);
                console.log("Selected seats counter:", selectedSeatsCounter);
                console.log("---------------------------------");
        
                if (selectedSeatsCounter >= totalPeople) {
                    $(".seat").off('click');
                    $(".nextbtn2").css("visibility", "visible");
                    console.log("인원에 맞는 모든 좌석을 선택했습니다.");
                }
            }
            $(".backicon").click(function () {
                $(".seat").on('click');
                $(".seat").removeClass("selected");
    
                totalPeople = 0;
                selectedSeatsCounter = 0;
    
                console.log("좌석을 초기화 했습니다.");
                
                $(".nextbtn2").css("visibility", "hidden");
            })
        });
    }); 
});


function resetNumberButtons() {
    $(".adult .number, .teenager .number").css({
        "background-color": "#eeeeee",
        "color": "#777777"
    });

    $(".zero").css({
        "background-color": "rgb(250, 130, 115)",
        "color": "white"
    });

    $(".nextbtn").css("visibility", "hidden");
}

function resetSeatSelection() {
    $(".seat").css({
        "background-color": "white",
        "color": "black"
    });

    $(".nextbtn2").css("visibility", "hidden");
}

//.Seat에서 backicon, homeicon을 클릭하면 모든 좌석 초기화 후 다시 선택할 수 있게 하기.