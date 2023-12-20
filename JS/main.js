
//-------------------------------------
let movieKey;
//-------------------------------------
function gid(id) { return document.getElementById(id);}
function getSoldSeats() {
    let soldSeats = document.querySelectorAll(".Sold");
    let soldSeatsNo = [];
    for(let seat of soldSeats) {
        soldSeatsNo.push(seat.innerHTML.trim());
    }
    return soldSeatsNo.toString();
}
//-------------------------------------
    $(document).ready(function () {
    $(".credit-card").hide();
    $(".card-reader").hide();
    $(".selectMenu").hide();
    $(".Receipt").hide();
    // .poster 이미지 클릭 시
    $(".poster").click(function () {
        // 숨기기와 보이기
        $(".movieList").hide();
        $(".Ticket").show();
        
        // 선택한 .poster 이미지의 속성 가져오기
        let selectedImgSrc = $(this).attr("src");
        
        // 선택한 .poster 이미지의 movieName 가져오기
        let movieName = $(this).siblings(".movieInfo").find(".movieName").text();
        movieKey = movieName;
        
        // 선택한 .poster 이미지의 showTime 가져오기
        let showTime = $(this).siblings(".movieInfo").find(".showTime").text();
        
        // 선택한 .poster 이미지의 age rating 가져오기
        let ageRatingSrc = $(this).siblings(".movieInfo").find(".age").attr("src");
        
        // .ticketInfo 업데이트
        $(".ticketInfo .ticketImg").attr("src", selectedImgSrc);
        $(".ticketInfo .ageRatingImg").attr("src", ageRatingSrc);
        $(".ticketInfo .ticketInfoText p:nth-child(1)").text(movieName);
        $(".ticketInfo .ticketInfoText p:nth-child(2)").text(showTime);
        
        showSeatsForMovie();
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
    });

    // Back Button
    $(".Seat .backicon").click(function () {
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
    });

    //Next Button
    $(".Ticket .nextbtn").click(function () {
        $(".Ticket").hide();
        //--------------------------------------------
        // 모든 시트를 초기화 하고
        // 로컬스토리지에서 영화 키로 판매좌석 목록을 가져와서
        // 필요한 처리를 한다.
        $(".Seat").show();
        showSeatsForMovie();
    });

    $(".Seat .nextbtn2").click(function () {
        $(".Seat").hide();
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
    
    let selectedSeatsCounter = 0;
    
    function updateSeatSelection() {
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

        if (totalPeople > 0) {
            if ($(this).hasClass("selected")) {
                $(this).removeClass("selected");
                --selectedSeatsCounter;
                console.log(`현재 ${selectedSeatsCounter}명 선택`);
            } else {
                $(this).addClass("selected");
                ++selectedSeatsCounter;
                console.log(`현재 ${selectedSeatsCounter}명 선택`);
            }

            if (selectedSeatsCounter >= totalPeople) {
                $(".seat").off('click');
                $(".nextbtn2").css("visibility", "visible");
                console.log("인원에 맞는 모든 좌석을 선택했습니다.");
            }
        }
        let selectedSeats = $(".seat.selected");

        // .map() 함수를 사용하여 각 좌석의 텍스트를 배열로 추출
        let seatTextArray = selectedSeats.map(function () {
            return $(this).text();
        }).get();

        // 배열을 쉼표로 연결하여 문자열로 만듭니다.
        let seatStatus = seatTextArray.join(', ');

        $(".ticketInfo .ticketInfoText p:nth-child(7)").text(`좌석 │ ${seatStatus}`);
        $(".ticketInfo .ticketInfoText p:nth-child(4)").text(`일반 │ ${selectedANumber}명`);
        $(".ticketInfo .ticketInfoText p:nth-child(5)").text(`청소년 │ ${selectedTNumber}명`);
    }

    $(".seat").click(updateSeatSelection);

    $(".backicon, .homeicon").click(function () {
        $(".seat:not(.Sold)").removeClass("selected");
        selectedSeatsCounter = 0;
        $(".seat").click(updateSeatSelection);
        console.log(`${selectedSeatsCounter} 좌석 초기화`);

        $(".nextbtn2").css("visibility", "hidden");
    });


    $(".nextbtn2").click(function () {
        // 성인 가격 텍스트에서 숫자만 추출
        let adultPrice = parseInt($(".ticketInfo .ticketInfoText p:nth-child(4)").text().replace(/[^0-9]/g, ''), 10);

        // 청소년 가격 텍스트에서 숫자만 추출
        let teenagerPrice = parseInt($(".ticketInfo .ticketInfoText p:nth-child(5)").text().replace(/[^0-9]/g, ''), 10);

        // 계산된 가격을 변수에 저장
        let calculatedAdultPrice = 13000 * adultPrice;
        let calculatedTeenagerPrice = 10000 * teenagerPrice;

        // 화면에 가격 출력
        $(".adultPrice p:nth-child(2)").text(`${calculatedAdultPrice} 원`);
        $(".teenagerPrice p:nth-child(2)").text(`${calculatedTeenagerPrice} 원`);

        // 총 가격 계산 및 출력
        let totalPrice = calculatedAdultPrice + calculatedTeenagerPrice;
        $(".totalPrice p:nth-child(2)").text(`${totalPrice} 원`).css("color", "rgb(233, 82, 68)");
    });

    $(".payToCard").click(function () {
        $("header").hide();
        $(".headerVideo").get(0).pause();
        $(".movieList").hide();
        $(".Ticket").hide();
        $(".Payment").hide();
        $(".credit-card").show();
        $(".card-reader").show();
    })

    $(".card-reader").droppable(); 
    $(".credit-card").draggable({ 
        opacity: 1
    });  
    $(".card-reader").droppable({ 
        drop: function () {
            alert("결제 완료"); 
            $(".credit-card").hide();
            $(".card-reader").hide();
            $(".Receipt").show();
            $(".selectMenu").show();
            
            let selectedMovieTitle = $(".Payment .ticketInfo .ticketInfoText p:nth-child(1)").text();
            let selectedShowTime = $(".Payment .ticketInfo .ticketInfoText p:nth-child(2)").text();
            let selectedSeatsText = $(".Payment .ticketInfo .ticketInfoText p:nth-child(7)").text();
            let adult = parseInt($(".ticketInfo .ticketInfoText p:nth-child(4)").text().replace(/[^0-9]/g, ''), 10);
            let teenager = parseInt($(".ticketInfo .ticketInfoText p:nth-child(5)").text().replace(/[^0-9]/g, ''), 10);
            let totalPeopleInfo = adult + teenager;
            
            $(".details p:nth-child(1)").text(selectedMovieTitle);
            $(".details p:nth-child(2)").text(selectedShowTime);
            $(".details p:nth-child(3)").text(`${selectedSeatsText}`);
            $(".details p:nth-child(4)").text(`총인원 ${totalPeopleInfo}명 (일반 ${adult}명) (청소년 ${teenager}명)`);
            
            resetNumberButtons();
            
            // 좌석 정보에서 "좌석"과 "|"를 제거하고 저장
            let selectedSeats = selectedSeatsText.replace('좌석 │ ', '').split(', ');

            // 해당 영화의 키를 생성 (영화 제목을 소문자로 변환하여 사용)
            movieKey = selectedMovieTitle.toLowerCase();

            // 기존에 저장된 해당 영화의 좌석 정보를 불러오기
            let existingSeats = localStorage.getItem(movieKey);
            existingSeats = existingSeats ? new Set(existingSeats.split(', ')) : new Set();

            // 새로 선택된 좌석을 기존 좌석 정보에 추가
            selectedSeats.forEach(seat => existingSeats.add(seat));

            // 로컬스토리지에 업데이트된 좌석 정보 저장
            //localStorage.setItem(movieKey, [...existingSeats].join(', '));
            
            selectedSeatsCounter = 0;
            $(".seat").click(updateSeatSelection);
            $(".selected").addClass("Sold");
            $(".selected").removeClass("selected");
            $(".Sold").off("click");
            $(".nextbtn2").css("visibility", "hidden");
            $(".credit-card").css({
                top: '50px',
                left: '50px'
            });
            // added by prof.
            localStorage.setItem(movieKey, getSoldSeats());
        }
    });

    $(".gotoMain").click(function () {
        $(".selectMenu").hide();
        $(".Receipt").hide();
        $("header").show();
        $(".headerVideo").get(0).play();
        $(".movieList").show();
    })
    $(".print").click(function() {
        
    });
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

function generateRandomNumber() {
    let randomNumber = '';
    for (let i = 0; i < 16; i++) {
        randomNumber += Math.floor(Math.random() * 10); // 0부터 9까지의 난수
        if ((i + 1) % 4 === 0 && (i + 1) !== 16) {
            randomNumber += '-';
        }
    }
    return randomNumber;
}

// DOM에서 특정 요소의 텍스트를 랜덤한 숫자로 설정
let ticketNumberElement = document.querySelector('.ticket-number');
ticketNumberElement.innerText = generateRandomNumber();

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
    $(".nextbtn2").css("visibility", "hidden");
}
function showSeatsForMovie() {
    $(".seat").removeClass("Sold");
    $(".seat").removeClass("selected");
    //-----------------------
    //선택한 영화의 좌석 목록 표시하기
    let soldSeats = localStorage.getItem(movieKey).split(",");
    for(let seat of soldSeats) {
        $(`#${seat}`).addClass("Sold");
    }

    //----------------------------------
    $(".nextbtn2").css("visibility", "hidden");
}