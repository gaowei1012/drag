import React, { useEffect, useState } from "react"
import { Button } from "antd"

const configUrl  = 'http://m7.music.126.net/20210212214243/eeb1e5c397b4f5e7d8e01366da961f21/ymusic/0fd6/4f65/43ed/a8772889f38dfcb91c04da915b301617.mp3'

// 将获取的到audio转为分钟
function transTime(time) {
    var duration = parseInt(time);
    var minute = parseInt(duration/60);
    var sec = duration%60+'';
    var isM0 = ':';
    if(minute === 0){
        minute = '00';
    }else if(minute < 10 ){
        minute = '0'+minute;
    }
    if(sec.length === 1){
        sec = '0'+sec;
    }
    return minute+isM0+sec
}

const DefaultLayout = (props) => {
    const [duration, setDuration] = useState(0)
    useEffect(() => {
        const auth = localStorage.getItem('user')
        if (auth) {
            props.history.push('/')
            return
        }
    }, [])
    // 获取原始audio时长
    useEffect(() => {
        let audioE = document.createElement("audio"); // 获取时长
        audioE.src = configUrl;
        audioE.load();
        audioE.oncanplay = function() {
            setTimeout(() => {
                setDuration(audioE.duration)
            }, 1500)
        }
    }, [])
    return (
        <div>
            <Button onClick={() => {
                props.history.push('/')
            }}>返回</Button>
            <span>时长: {transTime(duration)}</span>
        </div>
    )
}

export default DefaultLayout
