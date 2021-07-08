canvas = document.getElementById("Canvas");
canva = canvas.getContext("2d");
canva.beginPath();

canva.strokeStyle = "blue";
canva.lineWidth = 5;
canva.arc(250, 200, 75, 0, 2 * Math.PI);
canva.stroke();


canva.strokeStyle = "black";
canva.lineWidth = 5;
canva.arc(410,200, 75, 0, 2 * Math.PI);
canva.stroke();

canva.strokeStyle = "red";
canva.lineWidth = 5;
canva.arc(570,200, 75, 0, 2 * Math.PI);
canva.stroke();

canva.strokeStyle = "yellow";
canva.lineWidth = 5;
canva.arc(340,278, 75, 0, 2 * Math.PI);
canva.stroke();

canva.strokeStyle = "green";
canva.lineWidth = 5;
canva.arc(505,278, 75, 0, 2 * Math.PI);
canva.stroke();



