function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = (`${hours}:${minutes}:${seconds}`);
}

getClock();

setInterval(getClock, 1000);


$(document).ready(function () {
    let videoList = [
        'Video/Seoulspring.mp4', //? 45초
        'Video/oppenheimer.mp4', //? 1분 57초
        'Video/napoleon.mp4', //? 1분 49초
        'Video/soheeAD.mp4', //? 30초
        'Video/suicidesquad.mp4', //? 2분 23초
        'Video/johnwick3.mp4', //? 30초
        'Video/jujutsukaisen0.mp4' //? 30초
    ];
    let currentVideoIndex = 0;

    // 다음 비디오를 재생하는 함수
    function playNextVideo() {
        // 비디오의 소스를 목록에서 다음 비디오로 설정합니다.
        $(".headerVideo").attr("src", videoList[currentVideoIndex]);

        // 다음 반복을 위해 인덱스를 증가시킵니다.
        currentVideoIndex = (currentVideoIndex + 1) % videoList.length;

        // 비디오를 재생합니다.
        $(".headerVideo")[0].play();
    }

    // 비디오의 'ended' 이벤트에 대한 이벤트 리스너
    $(".headerVideo").on("ended", function () {
        // 다음 비디오를 재생합니다.
        playNextVideo();
    });

    // 초기 비디오를 재생합니다.
    playNextVideo();
});
