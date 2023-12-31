$(document).ready(function () {
    let videoList = [
        'Video/elemental.mp4', //? 1분 27초
        'Video/aladin.mp4', //? 2분 14초
        'Video/soheeAD.mp4', //? 30초
        'Video/Seoulspring.mp4', //? 45초
        'Video/oppenheimer.mp4', //? 1분 57초
        'Video/napoleon.mp4', //? 1분 49초
        'Video/jujutsukaisen0.mp4' //? 30초
        //약 9분?
    ];
    let currentVideoIndex = 0;
    
    // 다음 비디오를 재생하는 함수
    function playNextVideo() {
        // 비디오의 소스를 목록에서 다음 비디오로 설정합니다.
        $(".headerVideo").attr("src", videoList[currentVideoIndex]);

        // 다음 반복을 위해 인덱스를 증가시킵니다.
        currentVideoIndex = (currentVideoIndex + 1) % videoList.length;

        $(".headerVideo")[0].volume = 0.1;
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
