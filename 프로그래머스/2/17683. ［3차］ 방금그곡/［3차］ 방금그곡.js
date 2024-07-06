function solution(m, musicinfos) {
    let result = "(None)";
    m = m.replaceAll("C#", '1').replaceAll("D#", '2').replaceAll("F#", '3').replaceAll("G#", '4').replaceAll("A#", '5').replaceAll("B#", '6');
    
    for (const music of musicinfos) {
        let [start, end, title, info] = music.split(",");
        let [hour, minute] = start.split(":");
        start = Number(hour)*60+Number(minute);
        [hour, minute] = end.split(":");
        end = Number(hour)*60+Number(minute);
        const play_time = end-start;
        info = info.replaceAll("C#", '1').replaceAll("D#", '2').replaceAll("F#", '3').replaceAll("G#", '4').replaceAll("A#", '5').replaceAll("B#", '6');
        
        let play = "";
        for (let i = 0; i < play_time; i++) {
            play += info[i%info.length];
        }
        
        for (let i = 0; i < play.length-m.length+1; i++) {
            if (m === play.slice(i, i+m.length)) {
                if (result !== "(None)") {
                    result = result[0] >= play_time ? result : [play_time, title];
                } else {
                    result = [play_time, title];
                }
                break
            }
        }
    }
    return result === "(None)" ? result : result[1];
}