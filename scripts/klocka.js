setInterval('showTime()', 1000);

function showTime()
{
    var d = new Date();
    let timme = d.getHours().toString();
    let min = d.getMinutes().toString();
    let sek = d.getSeconds().toString();

    
    document.getElementById("klocka").innerHTML = "";
    for(let i = 0; i < 3; i++)
    {
        if(i === 0)
        {
            let h = document.createElement("li");
            h.appendChild(document.createTextNode(timme));
            document.getElementById("klocka").appendChild(h);
        }
        if(i === 1)
        {
            let m = document.createElement("li");
            m.appendChild(document.createTextNode(min));
            document.getElementById("klocka").appendChild(m);
        }
        if(i === 2)
        {
            let s = document.createElement("li");
            s.appendChild(document.createTextNode(sek));
            document.getElementById("klocka").appendChild(s);
        }
    }    
    
    
    
}




