function vowel(text){
    var t =""
    for ( var c in text){
        for var i in "ieaouIEAOU"{
            if (c==i){
                c=""
            }
            else{
                c=c
            }
        } 
        t=t+c
    }
    return = t
}
var tes = "hello";
var hasil_akhir =  vowel(tes);
console.log = (tes.length - hasil_akhir.length);