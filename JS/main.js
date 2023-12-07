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

    $(".backicon").click(function() {
        $(".movieList").show();
        $(".Ticket").hide();
    });
});