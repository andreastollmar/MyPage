let bishNumber = 15;
let boshNumber = 15;
let numberRange = 45;


function createTable()
{
    document.getElementById("table").innerHTML = "";
    for(let i = 0; i < numberRange; i++)
    {
        let number = document.createElement("li");

        if(i % bishNumber == 0 && i % boshNumber == 0)
        {
            number.appendChild(document.createTextNode("Bish-Bosh"));
            number.style.color = "firebrick";
            document.getElementById("table").appendChild(number);
        }
        else if(i % bishNumber == 0)
        {
            number.appendChild(document.createTextNode("Bish"));
            number.style.color = "orange";
            document.getElementById("table").appendChild(number);
        }
        else if(i % boshNumber == 0)
        {
            number.appendChild(document.createTextNode("Bosh"));
            number.style.color = "lightblue"
            document.getElementById("table").appendChild(number);
        }
        else
        {
            number.appendChild(document.createTextNode(i));
            document.getElementById("table").appendChild(number);
        }
    }
}

function setNumber()
{
    document.getElementById("maxnumbers").innerText = numberRange;
    document.getElementById("chosenBish").innerText = bishNumber;
    document.getElementById("chosenBosh").innerText = boshNumber;
    createTable();
}
function changeBishBoshMax(value)
{
    numberRange = value;
    setNumber();
}
function changeBishNumber(value)
{
    bishNumber = value;
    setNumber()
}
function changeBoshNumber(value)
{
    boshNumber = value;
    setNumber()
}