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

    //! Home Button
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
        $(".Payment").hide();
        $(".movieList").show();
    });

    //! Back Button
    //? Seat에서 backicon을 클릭하면 Ticket이 나옴
    $(".Seat .backicon").click(function () {
        resetSeatSelection();
        $(".Seat").hide();
        $(".Ticket").show();
    });

    //? Ticket에서 backicon을 클릭하면 movieList가 나오고
    //? 인원수 선택을 초기화 한다.
    $(".Ticket .backicon").click(function () {
        resetNumberButtons();
        $(".Ticket").hide();
        $(".movieList").show();
    });
    $(".Payment .backicon").click(function () {
        $(".Payment").hide();
        $(".Seat").show();
    });

    //? seat를 클릭하면 nextbtn2가 나옴
    $(".seat").click(function () {
        $(".nextbtn2").css("visibility", "visible");
    });

    //! Next Button
    //? Ticket에서 nextbtn을 클릭하면 seat이 나옴
    $(".Ticket .nextbtn").click(function () {
        $(".Ticket").hide();
        $(".Seat").show();
    });

    $(".Seat .nextbtn2").click(function () {
        $(".Seat").hide();
        $(".headerVideo").hide();
        $(".Payment").show();
    });

    //! Number Button
    let selectedAdultNumber = null; // 성인 관람 인원을 추적하기 위한 변수
    let selectedTeenagerNumber = null; // 청소년 관람 인원을 추적하기 위한 변수

    // 일반(adult) 버튼 클릭 시
    $(".adult .number").click(function () {
        // 다른 숫자 버튼의 스타일 초기화
        $(".adult .number").not(this).css({
            "background-color": "#eeeeee",
            "color": "#777777"
        });

        // 현재 클릭된 숫자 버튼에 스타일 설정
        $(this).css({
            "background-color": "rgb(250, 130, 115)",
            "color": "white"
        });

        // 현재 클릭된 숫자를 추적
        selectedAdultNumber = $(this).text();

        if (selectedAdultNumber >= 1 || selectedTeenagerNumber >= 1) {
            $(".nextbtn").css("visibility", "visible");
        } else {
            $(".nextbtn").css("visibility", "hidden");
        }
    });

    // 청소년(teenager) 버튼 클릭 시
    $(".teenager .number").click(function () {
        // 다른 숫자 버튼의 스타일 초기화
        $(".teenager .number").not(this).css({
            "background-color": "#eeeeee",
            "color": "#777777"
        });

        // 현재 클릭된 숫자 버튼에 스타일 설정
        $(this).css({
            "background-color": "rgb(250, 130, 115)",
            "color": "white"
        });

        // 현재 클릭된 숫자를 추적
        selectedTeenagerNumber = $(this).text();

        if (selectedTeenagerNumber >= 1 || selectedAdultNumber >= 1) {
            $(".nextbtn").css("visibility", "visible");
        } else {
            $(".nextbtn").css("visibility", "hidden");
        }
    });

    //! Seat Button
    // 좌석 선택 시
    $(".seat").click(function () {
        // 다른 좌석의 스타일 초기화
        $(".seat").not(this).css({
            "background-color": "white",
            "color": "black"
        });

        // 현재 클릭된 숫자 버튼에 스타일 설정
        $(this).css({
            "background-color": "rgb(250, 130, 115)",
            "color": "white"
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