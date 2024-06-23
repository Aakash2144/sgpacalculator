var count = 0;

function add() {
    var subject = document.getElementById("subject");
    var row = document.createElement("DIV");
    row.className = "subject-row"; 
    var label1 = document.createElement("LABEL");
    label1.setAttribute("for", "credit" + count); 
    label1.textContent = "Credit:";
    row.appendChild(label1);

    var credit = document.createElement("INPUT");
    credit.setAttribute("type", "text");
    credit.setAttribute("id", "credit" + count);
    credit.setAttribute("class", "textfield");
    row.appendChild(credit);

    var label2 = document.createElement("LABEL");
    label2.setAttribute("for", "grade" + count); 
    label2.textContent = "Grade:";
    row.appendChild(label2);
    var grade = document.createElement("INPUT");
    grade.setAttribute("type", "text");
    grade.setAttribute("id", "grade" + count); 
    credit.setAttribute("class", "textfield");
    row.appendChild(grade);
    var br = document.createElement("BR");
    row.appendChild(br);

    subject.appendChild(row);
    count++;
} 
function cal()
{
    
    var credit=0,tcredit=0;
    var grade=0,tgrade=0;
    var i=0;
    var sgpa;
    
    while(i<count)
        {
            credit=parseDouble(document.getElementById("credit"+i).value);
            tcredit=tcredit+credit;
            grade=parseDouble(document.getElementById("grade"+i).value);
            
            tgrade=tgrade+(credit*grade);
           
            i=i+1;
           
        }
        sgpa=tgrade/tcredit;
        
        document.getElementById("sgpa").innerHTML = "SGPA = " + sgpa.toFixed(2);
}