

//영화 객체
class Movie {
    constructor(title, thumbnail, runtime) {
        this.title = title;
        this.thumbnail = thumbnail; //image file 경로
        this.runtime = runtime; // 분 값으로 입력
    }    
}

//=====================================================
// 좌석 객체
function seatInitialize(rows, cols) {
    let arraySeat = [];
    let rowName = [0, "A", "B", "C", "D", "E", "F"];

    for(let row=1; row <= rows; row++) {
        for(let col = 1; col <= cols; col++) {
            let seat = document.createElement("div");
            seat.classList.add("seat");
            seat.innerHTML = `${rowName[row]}${col}`;
            seat.sell = false;
            arraySeat.push(seat);
        }
    }
    return arraySeat;
}
//=====================================================
// 예매 객체 : 예매 건별로 생성할 객체
class Buy {
    constructor(adults, childs) {
        this.totalCount = adults + childs;
        this.persons = {adult: adults, child: childs};
        this.seats = [];
    }
    push(aSeat) {
        this.seats.push(aSeat);
    }
}
//=====================================================
//  상영 객체
class Play {
    constructor(movie, startTime) {
        this.movie = movie;
        this.startTime = startTime;
        this.seatList = seatInitialize(5,6);
        this.buyList = [];
    }
    //--------------------------------
    addBuy(aBuy) {
        this.buyList.push(aBuy);
    }
}