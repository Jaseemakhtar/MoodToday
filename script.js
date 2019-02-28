console.log("connected");
const scr = document.querySelector("#display");
const arr = "import java.io.*; \npublic class MyCode { \n\n\tpublic static void main(String[] args){ \n\t\tprintln(\"Hello friends, UpVote my code please!\");\n\t}\n}";
var count = 0;
var x = setInterval(loop, 140);
var str;
console.log(arr.length);
function loop(){
    
    str = scr.value + arr[count];
    scr.value = str;
    count++;
    if(count > 10 && count < 18){
        clearInterval(x);
        x = setInterval(loop, 80);
    }

    if(count > 17 && count < 25){
        clearInterval(x);
        x = setInterval(loop, 200);
    }

    if(count > 25 && count < 60){
        clearInterval(x);
        x = setInterval(loop, 60);
    }

    if(count > 130 && count < 141){
        clearInterval(x);
        x = setInterval(loop, 120);
    }


    if( count == arr.length){
        count = 0;
        str = "";
        //scr.value = "";
        clearInterval(x);
    }
}